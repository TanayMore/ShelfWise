"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SalesSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Sales Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-md bg-muted p-3">
          <div className="text-muted-foreground">Today</div>
          <div className="text-xl font-semibold">$1,820</div>
        </div>
        <div className="rounded-md bg-muted p-3">
          <div className="text-muted-foreground">This Week</div>
          <div className="text-xl font-semibold">$11,240</div>
        </div>
      </CardContent>
    </Card>
  )
}
