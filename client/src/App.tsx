import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Customers from "./pages/client-facing/customers";
import Products from "./pages/client-facing/products";
import Transactions from "./pages/client-facing/transactions";
import Dashboard from "./pages/dashboard";
import Overview from "./pages/sales/overview";
import Daily from "./pages/sales/daily";
import Monthly from "./pages/sales/monthly";
import Breakdown from "./pages/sales/breakdown";
import Management from "./pages/management/stocks";
import QrGenerator from "./pages/management/QrGenerator";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="dashboard" element={<Dashboard />} />

      <Route path="client">
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>

      <Route path="sales">
        <Route path="overview" element={<Overview />} />
        <Route path="daily" element={<Daily />} />
        <Route path="monthly" element={<Monthly />} />
        <Route path="breakdown" element={<Breakdown />} />
      </Route>

      <Route path="management">
        <Route path="stocks" element={<Management />} />
        <Route path="qr" element={<QrGenerator />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
