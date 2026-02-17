import * as React from "react"
import { Toaster as Sonner } from "sonner"

export interface ToasterProps
  extends React.ComponentPropsWithoutRef<typeof Sonner> {
  /** Theme for the toast UI */
  theme?: "light" | "dark" | "system"
}

/**
 * App-wide toast container for Sonner (Vite compatible).
 * Place once near the root (e.g., in Layout or App).
 */
const Toaster: React.FC<ToasterProps> = ({ theme = "system", ...props }) => {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
