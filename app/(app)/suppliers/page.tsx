"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const rows = [
  { name: "Acme Supplies", contact: "acme@supply.com", products: 24, pending: 2, fulfilled: 18 },
  { name: "DairyCo", contact: "hello@dairyco.com", products: 8, pending: 1, fulfilled: 6 },
]

export default function SuppliersPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Suppliers</CardTitle>
        </CardHeader>
        <CardContent className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead className="text-right">Linked Products</TableHead>
                <TableHead className="text-right">Pending</TableHead>
                <TableHead className="text-right">Fulfilled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.contact}</TableCell>
                  <TableCell className="text-right">{r.products}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800 dark:bg-yellow-700/20 dark:text-yellow-300"
                    >
                      {r.pending}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-300"
                    >
                      {r.fulfilled}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
