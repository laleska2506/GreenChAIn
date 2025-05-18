
import { FC, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart as CartIcon, X, Plus, Minus } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
  };
};

const ShoppingCart: FC<ShoppingCartProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <CartIcon className="h-5 w-5" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Your cart is empty
            </p>
          ) : (
            <>
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        ${item.price} / {item.unit}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          className={cn(
                            "h-7 w-7 rounded-full border flex items-center justify-center",
                            item.quantity === 1
                              ? "text-muted-foreground"
                              : "text-foreground"
                          )}
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="mx-3 text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="h-7 w-7 rounded-full border flex items-center justify-center"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full">Checkout</Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
