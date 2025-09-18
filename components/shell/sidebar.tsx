"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { appNav } from "@/lib/nav"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex md:flex-col w-60 shrink-0 border-r bg-card/30">
      <div className="h-14 px-4 border-b flex items-center font-medium">Shelfwise</div>
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="grid gap-1 px-2">
          {appNav.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="p-3 text-xs text-muted-foreground">v0</div>
    </aside>
  )
}
