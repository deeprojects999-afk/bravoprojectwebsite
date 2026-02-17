"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-svh">
        <AppSidebar />

        <SidebarInset>
          {/* Header */}
          {/* Page content */}
          {children}
          {/* Footer */}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
