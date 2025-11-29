"use client";

import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Boutique NV</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
