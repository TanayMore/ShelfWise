"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function downloadCSV() {
  const rows = [
    ["Product", "Qty", "Revenue"],
    ["Soap 250ml", "120", "420.00"],
    ["Detergent 1L", "80", "552.00"],
  ]
  const csv = rows.map((r) => r.join(",")).join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "shelfwise-report.csv"
  a.click()
  URL.revokeObjectURL(url)
}

export default function ReportsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Analytics & Reports</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <Button onClick={downloadCSV}>Download CSV</Button>
          <Button variant="secondary" onClick={() => alert("PDF export in real app")}>
            Download PDF
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
