
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  unit: string;
  farmerName: string;
  location: string;
  image: string;
  tag?: string;
  tagColor?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Spinach",
    price: 3.99,
    unit: "bunch",
    farmerName: "Green Valley Farm",
    location: "2.4 miles away",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300&h=300",
    tag: "Organic",
    tagColor: "bg-farm-light-green text-white"
  },
  {
    id: 2,
    name: "Heirloom Tomatoes",
    price: 4.50,
    unit: "lb",
    farmerName: "Sunset Orchards",
    location: "5.1 miles away",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=300&h=300",
    tag: "Non-GMO",
    tagColor: "bg-farm-orange/80 text-white"
  },
  {
    id: 3,
    name: "Fresh Carrots",
    price: 2.99,
    unit: "bunch",
    farmerName: "Hillside Farms",
    location: "3.7 miles away",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 4,
    name: "Red Bell Peppers",
    price: 1.99,
    unit: "each",
    farmerName: "Morning Harvest",
    location: "6.2 miles away",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 5,
    name: "Fresh Basil",
    price: 2.50,
    unit: "bunch",
    farmerName: "Green Valley Farm",
    location: "2.4 miles away",
    image: "https://images.unsplash.com/photo-1588692390148-cddc402353e6?auto=format&fit=crop&q=80&w=300&h=300",
    tag: "Fresh Cut",
    tagColor: "bg-farm-lime text-farm-green"
  },
  {
    id: 6,
    name: "Sweet Corn",
    price: 0.99,
    unit: "ear",
    farmerName: "Sunset Orchards",
    location: "5.1 miles away",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-farm-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="section-title">Fresh This Week</h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked fresh vegetables available for delivery
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button 
              onClick={() => scroll('left')}
              variant="outline" 
              size="icon" 
              className="h-9 w-9 rounded-full border-farm-green text-farm-green"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scroll('right')}
              variant="outline" 
              size="icon" 
              className="h-9 w-9 rounded-full border-farm-green text-farm-green"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div 
          className="flex overflow-x-auto scrollbar-none gap-4 pb-4 -mx-4 px-4"
          ref={scrollRef}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="farm-card min-w-[280px] flex-shrink-0 group"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                {product.tag && (
                  <div className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium ${product.tagColor}`}>
                    {product.tag}
                  </div>
                )}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Heart className="h-4 w-4 text-farm-green" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-farm-green">{product.name}</h3>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span>{product.farmerName} · {product.location}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="font-bold text-lg text-farm-green">₹{product.price.toFixed(2)}</span>
                    <span className="text-xs text-muted-foreground ml-1">/ {product.unit}</span>
                  </div>
                  <Button size="sm" className="bg-farm-green text-white hover:bg-farm-green/90 h-9 w-9 p-0">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
            View All Products
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
