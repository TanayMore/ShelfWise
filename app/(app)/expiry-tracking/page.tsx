"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const items = [
  { product: "Yogurt 150g", days: 5 },
  { product: "Milk 1L", days: 9 },
  { product: "Cheese 200g", days: 15 },
]

export default function ExpiryTrackingPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Expiry Tracking</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {items.map((i, idx) => (
            <div key={idx} className="flex items-center justify-between rounded-md border p-3 text-sm">
              <div className="font-medium">{i.product}</div>
              <div className="flex items-center gap-2">
                <div className="text-muted-foreground">In {i.days} days</div>
                <Badge
                  variant="secondary"
                  className={
                    i.days <= 7 ? "bg-orange-100 text-orange-800 dark:bg-orange-700/20 dark:text-orange-300" : ""
                  }
                >
                  {i.days <= 7 ? "Soon" : "Monitor"}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
