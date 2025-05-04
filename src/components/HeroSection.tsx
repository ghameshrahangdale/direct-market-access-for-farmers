
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, User, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-farm-green leading-tight">
            Farm Fresh Vegetables <span className="text-farm-orange">Direct to You</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect directly with local farmers to get the freshest produce while supporting sustainable agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button className="bg-farm-green hover:bg-farm-green/90 text-white" asChild>
              <Link to="/signup">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Browse Vegetables
              </Link>
            </Button>
            <Button variant="outline" className="border-farm-orange text-farm-orange hover:bg-farm-orange hover:text-white" asChild>
              <Link to="/signup">
                <User className="mr-2 h-5 w-5" />
                I'm a Farmer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center pt-3 text-sm">
            <span className="text-muted-foreground mr-2">Already have an account?</span>
            <Link to="/login" className="text-farm-green hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                alt="Fresh vegetables" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg max-w-[200px] hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="bg-farm-gradient rounded-full p-2">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-farm-green">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">From local farms</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg max-w-[200px] hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="bg-earth-gradient rounded-full p-2">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-farm-earth">Local Farms</p>
                  <p className="text-xs text-muted-foreground">Nearby your location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
