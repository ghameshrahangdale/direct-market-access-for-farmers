
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ChevronRight } from "lucide-react";

type Farmer = {
  id: number;
  name: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  image: string;
  specialty: string;
  verified: boolean;
};

const farmers: Farmer[] = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: "Portland, OR",
    distance: "2.4 miles away",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=300&h=300",
    specialty: "Organic Vegetables",
    verified: true
  },
  {
    id: 2,
    name: "Sunset Orchards",
    location: "Vancouver, WA",
    distance: "5.1 miles away",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1610447847416-40bac442fad4?auto=format&fit=crop&q=80&w=300&h=300",
    specialty: "Fruit & Berries",
    verified: true
  },
  {
    id: 3,
    name: "Hillside Farms",
    location: "Beaverton, OR",
    distance: "3.7 miles away",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?auto=format&fit=crop&q=80&w=300&h=300",
    specialty: "Heirloom Vegetables",
    verified: true
  },
  {
    id: 4,
    name: "Morning Harvest",
    location: "Gresham, OR",
    distance: "6.2 miles away",
    rating: 4.7,
    reviews: 102,
    image: "https://images.unsplash.com/photo-1590438628088-83e066261018?auto=format&fit=crop&q=80&w=300&h=300",
    specialty: "Mixed Produce",
    verified: false
  }
];

const FeaturedFarmers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-farm-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Farmers</h2>
          <p className="section-subtitle">
            Connect with trusted local farmers who deliver the freshest produce right to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {farmers.map((farmer, index) => (
            <div 
              key={farmer.id} 
              className={`farm-card group ${activeIndex === index ? 'ring-2 ring-farm-green' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative">
                <img 
                  src={farmer.image} 
                  alt={farmer.name} 
                  className="w-full h-48 object-cover"
                />
                {farmer.verified && (
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <div className="h-2 w-2 bg-farm-green rounded-full mr-1"></div>
                    <span className="text-xs font-medium text-farm-green">Verified</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-farm-green">{farmer.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{farmer.location} · {farmer.distance}</span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-farm-orange text-farm-orange" />
                    <span className="ml-1 font-medium">{farmer.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">({farmer.reviews} reviews)</span>
                </div>
                <div className="mt-3 bg-farm-lime/20 rounded-full inline-block px-3 py-1">
                  <span className="text-xs font-medium text-farm-green">{farmer.specialty}</span>
                </div>
                <div className="mt-4 pt-3 border-t flex items-center justify-between">
                  <Button variant="ghost" className="text-farm-green p-0 h-auto font-medium">
                    View Profile
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
                    Shop
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
            View All Farmers
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarmers;
