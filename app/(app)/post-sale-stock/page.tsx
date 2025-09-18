import { InventoryTable } from "@/components/tables/inventory-table"

export default function PostSaleStockPage() {
  return (
    <div className="grid gap-6">
      <InventoryTable title="Post-Sale Stock (After Sales Updates)" softAlert />
    </div>
  )
}
