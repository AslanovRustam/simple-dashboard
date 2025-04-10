import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import OrdersTable from "../components/OrdersTable";
import ProductionChart from "../components/ProductionChart";

export default function DashboardMain() {
  return (
    <div className="p-4 space-y-4">
      <Header />
      <DashboardCards />
      <OrdersTable />
      <ProductionChart />
    </div>
  );
}
