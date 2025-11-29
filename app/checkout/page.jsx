"use client";

import { getCart, clearCart } from "@/lib/cart";
import { addAdminOrder } from "@/lib/admin-db";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const totalProducts = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = 3.5;
  const total = totalProducts + shippingFee;

  const handleConfirm = async () => {
    await addAdminOrder({
      items: cart,
      total,
      date: Date.now(),
      customer: "Client invité"
    });

    clearCart();
    router.push("/"); // redirection après paiement
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Paiement</h1>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity} — {item.price * item.quantity}€
        </p>
      ))}

      <p className="mt-6">Frais de port : {shippingFee}€</p>

      <h2 className="text-2xl font-bold mt-4">Total : {total}€</h2>

      <button
        onClick={handleConfirm}
        className="mt-8 px-6 py-3 bg-white text-black rounded-lg"
      >
        Confirmer la commande
      </button>
    </div>
  );
}
