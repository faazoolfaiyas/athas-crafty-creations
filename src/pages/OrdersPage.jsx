import React from "react";

export default function OrdersPage() {
  // Replace with actual order data from Firestore
  const orders = [
    {
      id: "A001",
      customer: "Jane Doe",
      items: 2,
      total: 5500,
      status: "Pending"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <div className="text-gray-500 py-16 text-lg">No orders yet.</div>
      ) : (
        <table className="w-full border text-left">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.items}</td>
                <td>LKR {order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
