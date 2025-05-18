
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "./ShoppingCart";
import { Product, categories } from "@/data/products";
import { Search, User } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

const Navbar = ({ onCategorySelect, selectedCategory }: NavbarProps) => {
  const { 
    cartItems, 
    addToCart, 
    updateQuantity, 
    removeFromCart 
  } = useShoppingCart();
  
  return (
    <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold text-primary">
              Green<span className="text-accent">ChAIn</span>
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-2">
                      <li>
                        <Button 
                          variant="ghost" 
                          className={`w-full justify-start ${selectedCategory === null ? 'bg-secondary' : ''}`}
                          onClick={() => onCategorySelect(null)}
                        >
                          Todos los Productos
                        </Button>
                      </li>
                      {categories.map((category) => (
                        <li key={category}>
                          <Button 
                            variant="ghost" 
                            className={`w-full justify-start ${selectedCategory === category ? 'bg-secondary' : ''}`}
                            onClick={() => onCategorySelect(category)}
                          >
                            {category}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#" className="block px-4 py-2">Sobre Nosotros</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#" className="block px-4 py-2">Nuestros Agricultores</a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="w-64 pl-8"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <ShoppingCart 
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
