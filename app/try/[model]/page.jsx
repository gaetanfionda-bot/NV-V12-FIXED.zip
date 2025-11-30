import { products } from "@/lib/products";
import TryOnViewer from "@/components/TryOnViewer";

export default function TryPage({ params }) {
  const product = products.find(
    (p) => p.id.toLowerCase() === params.model.toLowerCase()
  );

  if (!product) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-3xl font-bold">Modèle introuvable</h1>
        <p>Ce modèle n'existe pas ou n'est pas encore disponible.</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <TryOnViewer model={product.modelPath} />

      <div className="text-center text-white mt-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="opacity-80 mt-2">{product.description}</p>
        <p className="text-xl mt-4 font-bold">{product.price}€</p>
      </div>
    </div>
  );
}
