"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { CircleUserRound, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Topbar() {
  const router = useRouter()
  const logout = () => {
    localStorage.removeItem("shelfwise:role")
    router.push("/login")
  }

  return (
    <header className="h-14 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20">
      <div className="h-full flex items-center justify-between gap-3 px-3 md:px-6">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <Input placeholder="Search products, suppliers..." className="max-w-sm" aria-label="Search" />
        </div>
        <div className="flex items-center gap-1">
          <ModeToggle />
          <Button variant="ghost" size="icon" aria-label="Account" className="rounded-full">
            <CircleUserRound className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Sign out" onClick={logout} className="rounded-full">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
