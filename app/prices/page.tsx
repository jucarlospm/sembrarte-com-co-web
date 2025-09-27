// app/precios/page.tsx
import { createClient } from "@/utils/supabase/client"; // Asegúrate que la ruta sea correcta
import ProductCatalog from "./ProductCatalog";

// Definimos los tipos para nuestros datos
export type PriceVariant = {
  id: string;
  unit: string;
  quantity: number;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  product_price: PriceVariant[];
};

async function getProducts(): Promise<Product[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from("product").select(`
    id,
    name,
    description,
    product_price (
      id,
      unit,
      quantity,
      price
    )
  `);

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  return data as Product[];
}

export default async function PricesPage() {
  const products = await getProducts();

  return <ProductCatalog products={products} />;
}
