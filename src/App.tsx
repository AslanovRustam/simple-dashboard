import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Orders from "./pages/Orders";
import Equipment from "./pages/Equipment";
import Analitics from "./pages/Analitics";
import DashboardMain from "./components/DashboardMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardMain />} />
          <Route path="orders" element={<Orders />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="analytics" element={<Analitics />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
