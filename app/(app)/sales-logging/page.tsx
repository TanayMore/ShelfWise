"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SalesLoggingPage() {
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Recorded sale (demo). Inventory would be decremented and Post-Sale updated.")
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Sales Logging (POS)</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-3" onSubmit={submit}>
            <div className="grid gap-2">
              <Label>Product Name</Label>
              <Input placeholder="Soap 250ml" />
            </div>
            <div className="grid gap-2">
              <Label>Quantity Sold</Label>
              <Input type="number" min="1" placeholder="1" />
            </div>
            <div className="grid gap-2">
              <Label>Date</Label>
              <Input type="date" />
            </div>
            <div className="md:col-span-3">
              <Button type="submit">Record Sale</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
