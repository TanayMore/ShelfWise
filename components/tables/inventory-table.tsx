"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type Item = {
  brand: string
  product: string
  category: string
  qty: number
  unitPrice: number
}

const MOCK: Item[] = [
  { brand: "Acme", product: "Soap 250ml", category: "Personal Care", qty: 12, unitPrice: 3.5 },
  { brand: "Acme", product: "Detergent 1L", category: "Household", qty: 3, unitPrice: 6.9 },
  { brand: "DairyCo", product: "Yogurt 150g", category: "Dairy", qty: 40, unitPrice: 1.2 },
  { brand: "CleanMax", product: "Dish Tabs 20ct", category: "Household", qty: 6, unitPrice: 8.4 },
]

export function InventoryTable({ title, softAlert = false }: { title: string; softAlert?: boolean }) {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const s = q.toLowerCase()
    return MOCK.filter(
      (i) =>
        i.brand.toLowerCase().includes(s) ||
        i.product.toLowerCase().includes(s) ||
        i.category.toLowerCase().includes(s),
    )
  }, [q])

  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium">{title}</div>
        <Input
          placeholder="Search by product, brand, or category"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="max-w-xs"
          aria-label="Search inventory"
        />
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((i, idx) => {
              const low = i.qty <= 5
              return (
                <TableRow key={idx} className={softAlert && low ? "bg-yellow-50 dark:bg-yellow-900/10" : undefined}>
                  <TableCell className="font-medium">{i.brand}</TableCell>
                  <TableCell>{i.product}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {i.category}
                      {low && (
                        <Badge
                          variant="secondary"
                          className="bg-red-100 text-red-700 dark:bg-red-700/20 dark:text-red-400"
                        >
                          Low
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{i.qty}</TableCell>
                  <TableCell className="text-right">${i.unitPrice.toFixed(2)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
