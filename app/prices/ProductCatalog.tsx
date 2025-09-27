// app/precios/ProductCatalog.tsx
"use client"; // 👈 Fundamental: convierte este en un Componente de Cliente

import { Fragment, useState } from "react";
import type { Product, PriceVariant } from "./page"; // Importamos los tipos

// Definimos el tipo para un item en el carrito
type CartItem = {
  id: string; // Usamos el id de la variante de precio como único
  name: string;
  presentation: string;
  price: number;
  quantityInCart: number;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);

// --- Componente: El nuevo Botón Flotante del Carrito ---
function CartButton({
  itemCount,
  onClick,
}: {
  itemCount: number;
  onClick: () => void;
}) {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-sembrarte-green text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-fade-in-up"
      aria-label={`Ver carrito con ${itemCount} productos`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span className="absolute -top-1 -right-1 bg-sembrarte-brown text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-sembrarte-green">
        {itemCount}
      </span>
    </button>
  );
}

// --- Componente: El Carrito ahora es un Modal ---
function CartModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onSend,
}: {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, q: number) => void;
  onSend: () => void;
}) {
  if (!isOpen) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantityInCart,
    0
  );

  return (
    // Fragment se usa para agrupar elementos sin añadir un nodo extra al DOM
    <Fragment>
      {/* 1. Fondo Oscuro (Backdrop) */}
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in-up"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* 2. Contenido del Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 flex flex-col animate-fade-in-up max-h-[90vh]"
          // Evita que el clic dentro del modal lo cierre
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-sembrarte-brown">
              Resumen de tu Pedido
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 space-y-3">
            {/* ... (El contenido del carrito es el mismo de antes) ... */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center text-sm border-b border-gray-100 pb-2 last:border-b-0"
              >
                <div className="flex-grow">
                  <p className="font-semibold text-sembrarte-brown">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs">{item.presentation}</p>
                </div>
                <div className="flex items-center gap-2 mx-2">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantityInCart - 1)
                    }
                    className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-medium w-4 text-center">
                    {item.quantityInCart}
                  </span>
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantityInCart + 1)
                    }
                    className="w-6 h-6 rounded-full bg-sembrarte-light-green text-white hover:bg-sembrarte-green"
                  >
                    +
                  </button>
                </div>
                <p className="font-bold text-sembrarte-green w-20 text-right">
                  {formatPrice(item.price * item.quantityInCart)}
                </p>
              </div>
            ))}
          </div>

          <hr className="my-4" />
          <div className="flex justify-between font-bold text-xl text-sembrarte-brown">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button
            onClick={onSend}
            className="w-full mt-4 bg-sembrarte-green text-white font-bold py-3 rounded-full hover:bg-sembrarte-brown transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            {/* ... (SVG y texto del botón se mantienen) ... */}
            Completar Pedido por WhatsApp
          </button>
        </div>
      </div>
    </Fragment>
  );
}

function CompactPriceTable({ products }: { products: Product[] }) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg mb-12 border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4 text-sembrarte-brown">
        Resumen de Precios
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b-2 border-sembrarte-green">
              <th className="text-left font-bold p-3">Producto</th>
              <th className="text-left font-bold p-3">Presentación</th>
              <th className="text-right font-bold p-3">Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.flatMap((p) =>
              p.product_price.map((pp) => (
                <tr
                  key={pp.id}
                  className="border-b border-gray-200 last:border-0 hover:bg-sembrarte-green/10"
                >
                  <td className="p-3 font-semibold">{p.name}</td>
                  <td className="p-3 text-gray-600">
                    {pp.quantity} {pp.unit}
                  </td>
                  <td className="p-3 text-right font-bold text-sembrarte-green">
                    {formatPrice(pp.price)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL DEL CATÁLOGO DE PRODUCTOS (Cliente) ---
export default function ProductCatalog({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- NUEVO ESTADO para el modal

  // (Las funciones handleAddToCart, handleUpdateQuantity, handleSendToWhatsApp no cambian)

  const handleAddToCart = (product: Product, priceVariant: PriceVariant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === priceVariant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === priceVariant.id
            ? { ...item, quantityInCart: item.quantityInCart + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: priceVariant.id,
            name: product.name,
            presentation: `${priceVariant.quantity} ${priceVariant.unit}`,
            price: priceVariant.price,
            quantityInCart: 1,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantityInCart: newQuantity } : item
        )
      );
    }
  };

  const handleSendToWhatsApp = () => {
    const phoneNumber = "573002675188"; // 👈 ¡IMPORTANTE! Reemplaza con tu número
    let message =
      "¡Hola Sembrarté! 🌿 Me gustaría hacer el siguiente pedido:\n\n";
    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantityInCart;
      message += `*${item.name}* (${item.presentation})\n`;
      message += `   ${item.quantityInCart} x ${formatPrice(
        item.price
      )} = *${formatPrice(itemTotal)}*\n\n`;
      total += itemTotal;
    });

    message += `*Total estimado: ${formatPrice(
      total
    )}*\n\n¡Quedo atento, gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantityInCart,
    0
  );

  return (
    <div className="bg-sembrarte-cream min-h-screen text-sembrarte-brown pb-32">
      {/* ... (El header y el main no cambian) ... */}
      <header className="bg-white p-4 sticky top-0 z-40 flex items-center justify-center">
        <img
          src="/images/sembrarte-logo.png"
          alt="Sembrarte Logo"
          className="h-12 w-auto"
        />
      </header>

      <main className="p-4 md:p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-sembrarte-dark-green ">
          Nuestros Productos
        </h1>

        <p className="text-center text-lg text-gray-600 mb-12">
          Explora nuestra selección de productos germinados con cuidado y amor.
        </p>

        {/* 2. Catálogo Visual de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-shadow duration-300 hover:shadow-2xl border border-transparent hover:border-sembrarte-green"
            >
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl border border-transparent hover:border-sembrarte-green"
              >
                <img
                  src={`/products/${product.id}.png`}
                  alt={product.name}
                  className="w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-sembrarte-brown">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-3 mt-auto pt-4 border-t border-gray-200">
                    {product.product_price.map((pp) => (
                      <div
                        key={pp.id}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <span className="font-semibold text-lg text-gray-800">
                            {pp.quantity} {pp.unit}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-xl text-sembrarte-green">
                            {formatPrice(pp.price)}
                          </span>
                          <button
                            onClick={() => handleAddToCart(product, pp)}
                            className="bg-sembrarte-light-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-2xl hover:bg-sembrarte-green transition-transform duration-200 hover:scale-110 shadow"
                            aria-label={`Añadir ${product.name} ${pp.quantity} ${pp.unit} al carrito`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- CAMBIOS IMPORTANTES AQUÍ --- */}
      {/* 1. Renderizamos el nuevo Botón Flotante */}
      <CartButton
        itemCount={totalItemsInCart}
        onClick={() => setIsModalOpen(true)}
      />

      {/* 2. Renderizamos el nuevo Modal */}
      <CartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onSend={handleSendToWhatsApp}
      />
    </div>
  );
}
