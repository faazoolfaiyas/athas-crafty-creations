import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const imageUrl =
    Array.isArray(product.images) && product.images.length
      ? product.images[0]
      : "https://via.placeholder.com/300x240?text=No+Image";
  return (
    <div className="rounded-2xl shadow-xl bg-white hover:shadow-2xl transition overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </Link>
      <div className="p-5">
        <Link to={`/product/${product.id}`} className="block text-xl font-semibold text-emerald-700 mb-1 hover:underline">
          {product.title}
        </Link>
        <div className="text-gray-500 mb-2 min-h-[36px]">{product.description}</div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-amber-700">LKR {product.price}</span>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-emerald btn-sm rounded-xl font-semibold shadow hover:-translate-y-1 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
