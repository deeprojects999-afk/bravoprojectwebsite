"use client"

import * as React from "react"
import { ChevronsUpDown, type LucideIcon } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: LucideIcon
    plan: string
  }[]
}) {
  const [activeTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="justify-between"
        >
          <div className="flex items-center gap-2">
            <activeTeam.logo className="h-4 w-4" />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">
                {activeTeam.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {activeTeam.plan}
              </span>
            </div>
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
