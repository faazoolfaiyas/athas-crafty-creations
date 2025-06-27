import React from "react";

export default function LedgerPage() {
  // Replace with ledger data from Firestore
  const ledger = [
    {
      id: "P01",
      change: "+",
      description: "Added new product: Modern Beaded Necklace",
      date: "2025-06-27"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Ledger</h2>
      <table className="w-full border text-left">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {ledger.map(log => (
            <tr key={log.id} className="border-t">
              <td>{log.date}</td>
              <td>{log.description}</td>
              <td>{log.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
