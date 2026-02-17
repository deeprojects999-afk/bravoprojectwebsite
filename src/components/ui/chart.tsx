
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

/** Format: { THEME_NAME: CSS_SELECTOR } */
const THEMES = {
  light: "",
  dark: ".dark",
} as const

// ----- Types -----

type ChartThemeMap = Partial<Record<keyof typeof THEMES, string>>

export interface ChartConfigItem {
  /** Display label for this series/key. */
  label?: string
  /** Explicit color for this series/key (e.g., "#4f46e5" or "hsl(var(--primary))"). */
  color?: string
  /** Optional per-theme color mapping. */
  theme?: ChartThemeMap
  /** Optional icon to render in tooltips/legends. */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type ChartConfig = Record<string, ChartConfigItem>

interface ChartContextValue {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue | null>(null)

function useChart(): ChartContextValue {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

// ----- Container -----

interface ChartContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  /** Configuration mapping for series/labels/colors/icons. */
  config: ChartConfig
  children: React.ReactNode
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId()
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          data-chart={chartId}
          ref={ref}
          className={cn(
            "flex aspect-video justify-center text-xs " +
              // Tailwind variant selectors to restyle Recharts internals:
              "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground " +
              "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 " +
              "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border " +
              "[&_.recharts-dot[stroke='#fff']]:stroke-transparent " +
              "[&_.recharts-layer]:outline-none " +
              "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border " +
              "[&_.recharts-radial-bar-background-sector]:fill-muted " +
              "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted " +
              "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border " +
              "[&_.recharts-sector[stroke='#fff']]:stroke-transparent " +
              "[&_.recharts-sector]:outline-none " +
              "[&_.recharts-surface]:outline-none",
            className
          )}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          <RechartsPrimitive.ResponsiveContainer>
            {children}
          </RechartsPrimitive.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

// ----- Dynamic CSS Variables per theme -----

function ChartStyle({
  id,
  config,
}: {
  id: string
  config: ChartConfig
}) {
  const colorConfig = Object.entries(config).filter(
    ([, cfg]) => cfg.theme || cfg.color
  )

  if (!colorConfig.length) return null

  // Build CSS that sets --color-<key> per theme for the specific chart container
  const css = Object.entries(THEMES)
    .map(([themeName, prefix]) => {
      const lines = colorConfig
        .map(([key, itemConfig]) => {
          const color = itemConfig.theme?.[themeName as keyof typeof THEMES] ?? itemConfig.color
          return color ? `  --color-${key}: ${color};` : null
        })
        .filter(Boolean)
        .join("\n")

      return `${prefix} [data-chart=${id}] {\n${lines}\n}`
    })
    .join("\n")

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

// ----- Tooltip -----

// Recharts Tooltip passthrough
const ChartTooltip = RechartsPrimitive.Tooltip

type Indicator = "dot" | "line" | "dashed"

interface ChartTooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Provided by Recharts when using content prop. */
  active?: boolean
  /** Provided by Recharts when using content prop. */
  payload?: any[] // You can replace with Recharts types if you prefer
  /** For nested label layout/indicator style. */
  indicator?: Indicator
  hideLabel?: boolean
  hideIndicator?: boolean
  /** Provided by Recharts; label of the hovered item(s). */
  label?: any
  labelFormatter?: (label: any, payload?: any[]) => React.ReactNode
  labelClassName?: string
  /** Custom value formatter for each payload item row */
  formatter?: (
    value: any,
    name: any,
    item: any,
    index: number,
    rawPayload: any
  ) => React.ReactNode
  /** Force indicator color (otherwise taken from item payload). */
  color?: string
  /** Key to resolve item label name from payload/config. */
  nameKey?: string
  /** Key to resolve label text from payload/config. */
  labelKey?: string
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
      ...divProps
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) return null

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)

      const value =
        !labelKey && typeof label === "string"
          ? config[label]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) return null

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) return null

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
        {...divProps}
      >
        {!nestLabel ? tooltipLabel : null}

        <div className="grid gap-1.5">
          {payload.map((item: any, index: number) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item?.payload?.fill || item?.color

            return (
              <div
                key={item.dataKey ?? index}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              
                              "--color-bg": indicatorColor,
                              
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}

                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>

                      {item.value !== undefined && item.value !== null && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {Number(item.value).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

// ----- Legend -----

const ChartLegend = RechartsPrimitive.Legend

interface ChartLegendContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  payload?: any[] // Recharts Legend payload
  verticalAlign?: "top" | "bottom"
  hideIcon?: boolean
  nameKey?: string
}

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey, ...divProps }, ref) => {
  const { config } = useChart()

  if (!payload?.length) return null

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
      {...divProps}
    >
      {payload.map((item: any, index: number) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value ?? index}
            className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
})
ChartLegendContent.displayName = "ChartLegendContent"

// ----- Helpers -----

// Extract the config item for a given payload row.
// Tries to resolve `key` from either the row object or row.payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: any,
  key: string
): ChartConfigItem | undefined {
  if (typeof payload !== "object" || payload === null) return undefined

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? (payload.payload as Record<string, unknown>)
      : undefined

  let configLabelKey = key

  if (key in payload && typeof (payload as any)[key] === "string") {
    configLabelKey = (payload as any)[key]
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
