"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const features = ["Stock Logging", "Sales Logging", "Refill", "Analysis", "Reports", "Suppliers", "Settings"] as const
const roles = ["Owner", "Admin", "Staff"] as const

export default function RolesPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>User Roles & Permissions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {features.map((f) => (
            <div key={f} className="grid gap-2 rounded-md border p-3">
              <div className="text-sm font-medium">{f}</div>
              <div className="grid grid-cols-3 gap-4">
                {roles.map((r) => (
                  <label key={r} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-muted-foreground">{r}</span>
                    <Switch aria-label={`${r} can access ${f}`} defaultChecked={r !== "Staff"} />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
