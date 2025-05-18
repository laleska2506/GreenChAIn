import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Product, products } from "@/data/products";
import FarmerBadge from "@/components/FarmerBadge";
import { useShoppingCart } from "@/components/ShoppingCart";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import * as LucideIcons from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useShoppingCart();
  const { toast } = useToast();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      setIsAddingToCart(true);
      setTimeout(() => {
        addToCart(product);
        toast({
          title: "Añadido al carrito",
          description: `${product.name} ha sido añadido a tu carrito.`
        });
        setIsAddingToCart(false);
      }, 600);
    }
  };

  if (!product) {
    return <div className="container py-12 text-center">Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCategorySelect={() => {}} selectedCategory={null} />
      
      <main className="flex-grow container py-8">
        <Link to="/" className="flex items-center text-sm mb-6 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver a productos
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
            {product.organic && (
              <span className="badge-organic absolute top-4 left-4">
                Orgánico
              </span>
            )}
          </div>
          
          <div className="space-y-6">
            <FarmerBadge 
              name={product.farmer.name} 
              farm={product.farmer.farm}
              avatar={product.farmer.avatar}
              certifications={product.farmer.certifications}
              showCertifications={true}
              className="mb-2"
            />
            
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.description}</p>
            
            <div className="pt-4">
              <div className="flex gap-2 flex-wrap mb-4">
                {product.categories.map(category => (
                  <span key={category} className="badge bg-accent/10 text-accent hover:bg-accent/20">
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Precio</p>
                  <p className="text-3xl font-bold text-primary">
                    ${product.price} <span className="text-sm font-normal">/ {product.unit}</span>
                  </p>
                </div>
                
                <div className="relative">
                  <Button 
                    size="lg"
                    onClick={handleAddToCart}
                    className="gap-2"
                    disabled={isAddingToCart}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {isAddingToCart ? 'Añadiendo...' : 'Añadir al carrito'}
                  </Button>
                  
                  {isAddingToCart && (
                    <div className="product-animation absolute z-10">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Conoce al agricultor</h2>
          <div className="bg-secondary/50 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                {product.farmer.avatar || product.farmer.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-medium text-lg">{product.farmer.name}</h3>
                <p className="text-muted-foreground">{product.farmer.farm}, {product.farmer.location}</p>
                {product.farmer.certifications && product.farmer.certifications.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.farmer.certifications.map((cert, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs px-2 py-0.5 flex items-center" 
                        style={{ borderColor: cert.color, color: cert.color }}
                      >
                        {/* @ts-ignore */}
                        {LucideIcons[cert.icon] && React.createElement(LucideIcons[cert.icon], { className: "h-3.5 w-3.5 mr-1" })}
                        {cert.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className="mt-4">
              Nuestros agricultores utilizan métodos tradicionales y sostenibles que se han transmitido
              de generación en generación. Al comprar sus productos, estás apoyando a estas familias
              y ayudando a preservar el rico patrimonio agrícola de Perú.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
