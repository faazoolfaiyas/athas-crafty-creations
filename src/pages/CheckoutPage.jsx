import React, { useState } from "react";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {confirm ? (
        <div className="text-green-700 font-semibold text-lg">
          Order confirmed! Your order will be sent to WhatsApp for admin confirmation.
        </div>
      ) : (
        <form className="space-y-6 max-w-md" onSubmit={handleSubmit}>
          <input className="input input-bordered w-full" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
          <input className="input input-bordered w-full" placeholder="Address" required value={address} onChange={e => setAddress(e.target.value)} />
          <input className="input input-bordered w-full" placeholder="Mobile (10 digits)" required pattern="\\d{10}" value={mobile} onChange={e => setMobile(e.target.value)} />
          <button type="submit" className="btn btn-emerald px-8 py-3 rounded-xl font-semibold text-white shadow">
            Confirm Order &amp; Send to WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
