"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { name: "Mon", stock: 320 },
  { name: "Tue", stock: 290 },
  { name: "Wed", stock: 340 },
  { name: "Thu", stock: 300 },
  { name: "Fri", stock: 360 },
  { name: "Sat", stock: 380 },
  { name: "Sun", stock: 350 },
]

export function StockOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Current Stock Overview</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">SKUs</div>
            <div className="text-xl font-semibold">1,248</div>
          </div>
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">In Stock</div>
            <div className="text-xl font-semibold">18,940</div>
          </div>
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">Low Stock</div>
            <div className="text-xl font-semibold">34</div>
          </div>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="hsl(var(--primary))" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
