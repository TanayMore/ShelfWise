"use client"

import { AlertTriangle, Clock3, ArrowDownCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const alerts = [
  { type: "Low Stock", item: "Brand A - Soap 250ml", severity: "High" as const },
  { type: "Expiry", item: "Yogurt 150g", severity: "Medium" as const },
  { type: "Refill", item: "Dish Tabs 20ct", severity: "Low" as const },
]

function SeverityBadge({ s }: { s: "High" | "Medium" | "Low" }) {
  const map = {
    High: "bg-red-100 text-red-700 dark:bg-red-700/20 dark:text-red-400",
    Medium: "bg-orange-100 text-orange-700 dark:bg-orange-700/20 dark:text-orange-300",
    Low: "bg-yellow-100 text-yellow-800 dark:bg-yellow-700/20 dark:text-yellow-300",
  }
  return (
    <Badge className={map[s]} variant="secondary">
      {s}
    </Badge>
  )
}

export function AlertsCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between gap-2">
        <CardTitle className="text-balance">Alerts</CardTitle>
        <SeverityBadge s="High" />
      </CardHeader>
      <CardContent className="grid gap-3">
        {alerts.map((a, i) => (
          <div key={i} className="flex items-center justify-between text-sm rounded-md border p-3">
            <div className="flex items-center gap-2">
              {a.type === "Low Stock" && <ArrowDownCircle className="h-4 w-4 text-red-500" />}
              {a.type === "Expiry" && <Clock3 className="h-4 w-4 text-orange-500" />}
              {a.type === "Refill" && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
              <div className="font-medium">{a.type}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{a.item}</span>
              <SeverityBadge s={a.severity} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
