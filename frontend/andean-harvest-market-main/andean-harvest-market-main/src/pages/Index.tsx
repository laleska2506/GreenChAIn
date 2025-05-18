
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { useShoppingCart } from "@/components/ShoppingCart";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useShoppingCart();
  
  const filteredProducts = selectedCategory
    ? products.filter(product => product.categories.includes(selectedCategory))
    : products;

  // Featured products for the hero section
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Productos Orgánicos Frescos <br /> Directamente de Perú
              </h1>
              <p className="text-lg text-muted-foreground">
                Apoyando a aspres locales mientras llevamos los mejores productos 
                orgánicos peruanos directamente a tu mesa
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-6">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <div key={product.id} className="relative h-64 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <p className="text-sm opacity-80 mb-4">{product.description}</p>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-white text-foreground rounded-md text-sm font-medium hover:bg-secondary transition-colors w-max"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                {selectedCategory ? selectedCategory : "Todos los Productos"}
              </h2>
              {selectedCategory && (
                <button 
                  className="text-sm text-primary hover:underline"
                  onClick={() => setSelectedCategory(null)}
                >
                  Ver todos los productos
                </button>
              )}
            </div>
            <ProductGrid 
              products={filteredProducts} 
              onAddToCart={addToCart}
            />
          </div>
        </section>

        {/* Farmer Story */}
        <section className="py-12">
          <div className="container">
            <div className="bg-secondary/50 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden bg-accent/20">
                  <img 
                    src="https://images.unsplash.com/photo-1545830790-68595959c491?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  "
                    alt="Agricultor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-medium mb-4">Conoce a Nuestros Agricultores</h3>
                <p className="text-muted-foreground mb-4">
                  Nuestros agricultores utilizan métodos tradicionales y sostenibles que se han transmitido 
                  de generación en generación. Al comprar sus productos, estás apoyando a estas familias 
                  y ayudando a preservar el rico patrimonio agrícola de Perú.
                </p>
                <a href="#" className="text-primary hover:underline font-medium">
                  Conoce más sobre nuestra comunidad de agricultores →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-secondary py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">GreenChAIn</h3>
              <p className="text-sm text-muted-foreground">
                Llevando los mejores productos orgánicos peruanos directamente desde las granjas a tu mesa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Inicio</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Sobre Nosotros</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Nuestros Agricultores</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contacto</h3>
              <address className="text-sm text-muted-foreground not-italic">
                <p>Lima, Perú</p>
                <p>contacto@greenchain.com</p>
                <p>+51 123 456 789</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-sm text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} GreenChAIn. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;
