import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./components/Dashboard";
import Customers from "./components/personal/Customers";
import AllProducts from "./components/product/AllProduct";
import AllVendor from "./components/vendor/AllVendor";
import AddProducts from "./components/product/AddProduct";
import AllOrder from "./components/orders/AllOrder";
// import Transaction from "./components/orders/Transactions";
import Refund from "./components/orders/Refund";
import OrderTracking from "./components/orders/OrderTracking";
import LoginActivities from "./components/personal/LoginActivities";
import AllUsers from "./components/personal/AllUsers";
import Reviews from "./components/product/Reviews";
import PendingProducts from "./components/product/PendingProducts";
import Attributes from "./components/product/Attributes";
import Categories from "./components/product/Categories";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/add-product" element={<AddProducts />} />
          <Route path="/personnel/all-users" element={<AllUsers />} />
          <Route path="/personnel/customers" element={<Customers />} />{" "}
          <Route
            path="/personnel/login-activities"
            element={<LoginActivities />}
          />
          <Route path="/products/reviews" element={<Reviews />} />
          <Route path="/products/all-products" element={<AllProducts />} />
          <Route
            path="/products/pending-products"
            element={<PendingProducts />}
          />
          <Route path="/products/attributes" element={ <Attributes /> } />
          <Route path="/products/categories" element={<Categories />} />
          <Route path="/vendors/all" element={<AllVendor />} />
          <Route path="/orders/all" element={<AllOrder />} />
          {/* <Route path="/orders/transactions" element={<Transaction />} /> */}
          <Route path="/orders/refunds" element={<Refund />} />
          <Route path="orders/order-tracking" element={<OrderTracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
