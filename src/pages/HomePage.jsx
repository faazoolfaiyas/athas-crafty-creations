import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const demoProducts = [
  {
    id: "1",
    title: "Modern Beaded Necklace",
    price: 3500,
    description: "Handmade necklace with premium glass beads and modern design.",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    ],
    category: "Necklaces"
  },
  {
    id: "2",
    title: "Vibrant Bead Bracelet",
    price: 2000,
    description: "Colorful bracelet crafted with glass and wood beads.",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b"
    ],
    category: "Bracelets"
  },
  {
    id: "3",
    title: "Elegant Drop Earrings",
    price: 1800,
    description: "Sleek earrings with sparkling crystal beads for a modern look.",
    images: [
      "https://images.unsplash.com/photo-1512418490979-92798cec149b"
    ],
    category: "Earrings"
  }
];

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(demoProducts); // Swap with Firebase logic in production
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-2 tracking-tight">
        Shop Bead Jewelry
      </h1>
      <p className="text-gray-500 max-w-xl mb-8">
        Unique, handmade, and modern designs. Each piece tells a story. Browse our bestsellers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.length === 0 ? (
          <div className="col-span-3 text-center text-gray-400 py-16 text-lg">No products found.</div>
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
}
