import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/admin/orders" className="btn btn-emerald w-full">Manage Orders</Link>
        </li>
        <li>
          <Link to="/admin/ledger" className="btn btn-emerald w-full">Ledger</Link>
        </li>
        <li>
          <Link to="/admin/reports" className="btn btn-emerald w-full">Reports</Link>
        </li>
        <li>
          <Link to="/admin/products" className="btn btn-emerald w-full">Manage Products</Link>
        </li>
      </ul>
    </div>
  );
}
