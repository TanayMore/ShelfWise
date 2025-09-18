"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function StockLogForm() {
  const [fileInfo, setFileInfo] = useState<string | null>(null)

  const onCSV = async (file: File | null) => {
    if (!file) return
    const text = await file.text()
    const lines = text.split(/\r?\n/).filter(Boolean).length
    setFileInfo(`${file.name} • ${lines} rows`)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Saved manual log (demo). Will be appended to Pre-Sale Stock CSV.")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Manual Stock Logging</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label>Brand Name</Label>
            <Input placeholder="Acme" />
          </div>
          <div className="grid gap-2">
            <Label>Product Name</Label>
            <Input placeholder="Detergent 1L" />
          </div>
          <div className="grid gap-2">
            <Label>Unit Price</Label>
            <Input type="number" min="0" step="0.01" placeholder="5.99" />
          </div>
          <div className="grid gap-2">
            <Label>Quantity</Label>
            <Input type="number" min="0" placeholder="100" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label>Date</Label>
            <Input type="date" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit">Save Log</Button>
          </div>
        </form>

        <Separator />

        <div className="grid gap-3">
          <div className="text-sm font-medium">Bulk Upload (CSV)</div>
          <Input
            type="file"
            accept=".csv"
            onChange={(e) => onCSV(e.target.files?.[0] ?? null)}
            aria-label="Upload CSV"
          />
          {fileInfo && <div className="text-xs text-muted-foreground">{fileInfo}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
