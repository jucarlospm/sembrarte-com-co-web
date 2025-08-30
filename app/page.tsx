"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Leaf,
  Heart,
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      name: "Té Verde Orgánico",
      price: "$24.99",
      image: "/organic-green-tea.png",
      description: "Hojas frescas de té verde cultivadas sin pesticidas",
      badge: "Bestseller",
    },
    {
      name: "Manzanilla Relajante",
      price: "$18.99",
      image: "/placeholder-915g1.png",
      description: "Flores de manzanilla para momentos de tranquilidad",
      badge: "Natural",
    },
    {
      name: "Mezcla Energizante",
      price: "$29.99",
      image: "/energizing-herbal-tea.png",
      description: "Combinación perfecta de hierbas revitalizantes",
      badge: "Nuevo",
    },
    {
      name: "Té de Jengibre",
      price: "$22.99",
      image: "/artisanal-ginger-tea.png",
      description: "Raíz de jengibre fresco para digestión saludable",
      badge: "Digestivo",
    },
    {
      name: "Rooibos Premium",
      price: "$26.99",
      image: "/luxury-rooibos-tea.png",
      description: "Té rojo sudafricano libre de cafeína",
      badge: "Sin Cafeína",
    },
    {
      name: "Hierbas Medicinales",
      price: "$32.99",
      image: "/placeholder-8g0o9.png",
      description: "Selección de hierbas con propiedades curativas",
      badge: "Medicinal",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "navbar-fixed"
            : "bg-gradient-to-b from-muted to-background border-b border-border"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/sembrarte-logo.png"
                alt="Sembrarte Logo"
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Productos
              </a>
              <a
                href="#nosotros"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </a>
              <a
                href="#testimonios"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contacto
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hidden sm:flex"
                onClick={() =>
                  window.open(
                    "https://wa.me/573002675188?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20té%20natural",
                    "_blank"
                  )
                }
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Tienda
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#inicio"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#productos"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Productos
                </a>
                <a
                  href="#nosotros"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a
                  href="#testimonios"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonios
                </a>
                <a
                  href="#contacto"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacto
                </a>
                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-fit"
                  onClick={() =>
                    window.open(
                      "https://wa.me/573002675188?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20té%20natural",
                      "_blank"
                    )
                  }
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Tienda
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <a
        href="https://wa.me/573002675188?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20té%20natural"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* Hero Section */}
      <section
        id="inicio"
        className={`relative py-20 lg:py-32 overflow-hidden ${
          isScrolled ? "content-with-fixed-navbar" : ""
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(75, 60, 49, 0.4), rgba(75, 60, 49, 0.4)), url('/serene-tea-garden.png')`,
          }}
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cultivando Bienestar
            <br />
            <span className="text-secondary">en Cada Taza</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Descubre nuestra selección de tés naturales y productos orgánicos,
            cuidadosamente seleccionados para nutrir tu cuerpo y alma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Descubre Nuestros Productos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
            >
              Conoce Nuestra Historia
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="productos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Productos Destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada producto es seleccionado con amor y cuidado, garantizando la
              máxima calidad y frescura natural.
            </p>
          </div>

          <div className="products-carousel gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="product-card group hover:shadow-lg transition-all duration-300 border-border"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-primary">
                      {product.price}
                    </span>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
              onClick={() =>
                window.open("https://tienda.sembrarte.com", "_blank")
              }
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver nuestra Tienda
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Descubre nuestra colección completa y realiza tu pedido
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                Nuestra Pasión por lo Natural
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                En Sembrarte, creemos que la naturaleza nos brinda todo lo que
                necesitamos para vivir una vida plena y saludable. Desde
                nuestros inicios, nos hemos dedicado a seleccionar los mejores
                productos orgánicos y naturales.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Trabajamos directamente con productores locales que comparten
                nuestra visión de sostenibilidad y respeto por la tierra,
                garantizando que cada producto llegue a tu hogar con la máxima
                frescura y calidad.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">Orgánico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    1000+
                  </div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/tea-harvest-sunrise.png"
                alt="Proceso de cultivo de té"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
                <Heart className="w-8 h-8 mb-2" />
                <div className="font-semibold">Con Amor</div>
                <div className="text-sm opacity-90">En cada producto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                text: "Los tés de Sembrarte han transformado mi rutina matutina. La calidad es excepcional y se nota el cuidado en cada detalle.",
                rating: 5,
                location: "Ciudad de México",
              },
              {
                name: "Carlos Rodríguez",
                text: "Como chef, valoro mucho la calidad de los ingredientes. Las hierbas de Sembrarte son las mejores que he probado.",
                rating: 5,
                location: "Guadalajara",
              },
              {
                name: "Ana Martínez",
                text: "El té de manzanilla me ayuda a relajarme después de días intensos. Es puro, natural y delicioso.",
                rating: 5,
                location: "Monterrey",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacto"
        className="bg-primary text-primary-foreground py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="/images/sembrarte-logo.png"
                alt="Sembrarte Logo"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Cultivando bienestar en cada taza. Productos naturales y
                orgánicos para una vida más saludable y consciente.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Productos
              </h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Tés Verdes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Tés Herbales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Hierbas Medicinales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Accesorios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Contacto
              </h3>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hola@sembrarte.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+52 55 1234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ciudad de México</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Sembrarte. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
