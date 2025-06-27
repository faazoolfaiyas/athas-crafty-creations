import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  // Fetch product by id here or use props/context

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Product Details: {id}</h2>
      {/* Add detailed info, images, add to cart, WhatsApp button, etc */}
      <div className="text-gray-500">[Product details and gallery here]</div>
    </div>
  );
}
