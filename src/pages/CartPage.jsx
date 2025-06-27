import React from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
  // You’d use context or props for real cart data
  const cart = [
    {
      id: "1",
      title: "Modern Beaded Necklace",
      price: 3500,
      qty: 1,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    }
  ];
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-gray-500 py-16 text-lg">Your cart is empty.</div>
      ) : (
        <div>
          <ul className="mb-8">
            {cart.map(item => (
              <li key={item.id} className="flex items-center gap-4 py-3 border-b">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl" />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-gray-400">Qty: {item.qty}</div>
                </div>
                <span className="ml-auto font-bold text-lg">LKR {item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <div className="text-right mb-6 font-bold text-xl">Total: LKR {total}</div>
          <Link to="/checkout" className="btn btn-emerald px-8 py-3 rounded-xl font-semibold text-white shadow">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
