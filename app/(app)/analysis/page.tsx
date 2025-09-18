"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts"

const trend = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1500 },
  { month: "Mar", sales: 1300 },
  { month: "Apr", sales: 1800 },
  { month: "May", sales: 2100 },
  { month: "Jun", sales: 1900 },
]

const speed = [
  { name: "Fast", count: 42 },
  { name: "Slow", count: 18 },
]

export default function AnalysisPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fast vs Slow Moving</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={speed}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Health Check</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">In-Stock %</div>
            <div className="text-xl font-semibold">92%</div>
          </div>
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">Low Stock Items</div>
            <div className="text-xl font-semibold">34</div>
          </div>
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">Near Expiry</div>
            <div className="text-xl font-semibold">12</div>
          </div>
          <div className="rounded-md bg-muted p-3">
            <div className="text-muted-foreground">Revenue (30d)</div>
            <div className="text-xl font-semibold">$52k</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
