"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const suggestions = [
  { product: "Acme Soap 250ml", urgency: "High" as const, qty: 120 },
  { product: "Dish Tabs 20ct", urgency: "Medium" as const, qty: 60 },
  { product: "Yogurt 150g", urgency: "Low" as const, qty: 30 },
]

function Urgency({ u }: { u: "High" | "Medium" | "Low" }) {
  const map = {
    High: "bg-red-100 text-red-700 dark:bg-red-700/20 dark:text-red-400",
    Medium: "bg-orange-100 text-orange-700 dark:bg-orange-700/20 dark:text-orange-300",
    Low: "bg-yellow-100 text-yellow-800 dark:bg-yellow-700/20 dark:text-yellow-300",
  }
  return (
    <Badge className={map[u]} variant="secondary">
      {u}
    </Badge>
  )
}

export default function RefillPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Refill Suggestions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {suggestions.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between rounded-md border p-3 text-sm">
              <div className="font-medium">{s.product}</div>
              <div className="flex items-center gap-3">
                <Urgency u={s.urgency} />
                <div className="text-muted-foreground">
                  Suggested Qty: <span className="font-medium text-foreground">{s.qty}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
