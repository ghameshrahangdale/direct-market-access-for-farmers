
import { X, MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/utils';

const CartDrawer = () => {
  const { items, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={toggleCart}>
      <div 
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-farm-green flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your Cart
          </h2>
          <Button variant="ghost" size="icon" onClick={toggleCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Add items to your cart to see them here.</p>
            <Button 
              className="bg-farm-green hover:bg-farm-green/90 text-white"
              onClick={toggleCart}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div key={item.id} className="flex border-b border-muted pb-4">
                  <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.farmerName}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{formatCurrency(item.price * item.quantity)}</div>
                        <div className="text-xs text-muted-foreground">
                          {formatCurrency(item.price)} / {item.unit}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-muted pt-4 space-y-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <Button className="w-full bg-farm-green hover:bg-farm-green/90 text-white">
                Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={toggleCart}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
