
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Category = {
  id: number;
  name: string;
  count: number;
  image: string;
  color: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Leafy Greens",
    count: 24,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300&h=300",
    color: "bg-[#ACE1AF]/10"
  },
  {
    id: 2,
    name: "Root Vegetables",
    count: 18,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=300&h=300",
    color: "bg-[#F5B895]/10"
  },
  {
    id: 3,
    name: "Fruit Vegetables",
    count: 32,
    image: "https://images.unsplash.com/photo-1566843972192-a2246d6c56cc?auto=format&fit=crop&q=80&w=300&h=300",
    color: "bg-[#F7A072]/10"
  },
  {
    id: 4,
    name: "Herbs & Aromatics",
    count: 15,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300&h=300",
    color: "bg-[#89B1CD]/10"
  },
  {
    id: 5,
    name: "Exotic Vegetables",
    count: 9,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300&h=300",
    color: "bg-[#DDA15E]/10"
  },
  {
    id: 6,
    name: "Seasonal Specials",
    count: 12,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=300&h=300",
    color: "bg-[#B5CA8D]/10"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-subtitle">
            Discover a wide variety of farm-fresh vegetables sorted by type
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className={`farm-card group transition-all duration-300 ${category.color}`}>
              <div className="flex p-6">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-bold text-xl text-farm-green">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{category.count} items</p>
                  <Button variant="ghost" className="text-farm-green p-0 h-auto mt-3 group-hover:translate-x-1 transition-transform">
                    Browse
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
