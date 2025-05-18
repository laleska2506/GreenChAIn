
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import FarmerBadge from "./FarmerBadge";
import { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the add to cart button
    onAddToCart(product);
    toast({
      title: "Añadido al carrito",
      description: `${product.name} ha sido añadido a tu carrito.`
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <Card className="product-card h-full flex flex-col hover:shadow-md transition-all duration-300">
        <div className="relative overflow-hidden group">
          <img
            src={product.image}
            alt={product.name}
            className="product-image group-hover:scale-105"
          />
          {product.organic && (
            <span className="badge-organic absolute top-2 left-2">
              Orgánico
            </span>
          )}
          <div className="absolute top-2 right-2 flex space-x-1">
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Añadir a favoritos</span>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only">Ver detalles</span>
              <Link to={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
                <span className="sr-only">Ver detalles</span>
              </Link>
            </Button>
          </div>
        </div>
        <CardContent className="flex flex-col flex-grow p-4">
          <div className="mb-1">
            <FarmerBadge 
              name={product.farmer.name} 
              farm={product.farmer.farm}
              avatar={product.farmer.avatar} 
              certifications={product.farmer.certifications}
              showCertifications={false}
            />
          </div>
          <h3 className="font-medium text-lg mt-1 hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="price-tag">${product.price} / {product.unit}</span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="gap-1"
            >
              <ShoppingCart className="h-4 w-4" />
              Añadir
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
