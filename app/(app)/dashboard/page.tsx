import { StockOverview } from "@/components/widgets/stock-overview";
import { SalesSummary } from "@/components/widgets/sales-summary";
import { AlertsCard } from "@/components/widgets/alerts-card";
import UploadCSV from "@/components/UploadCSV";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      {/* Top Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <StockOverview />
        </div>
        <SalesSummary />
      </div>

      {/* Alerts */}
      <AlertsCard />

      {/* CSV Upload Section */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Upload CSV Data</h2>
        <UploadCSV />
      </div>
    </div>
  );
}
