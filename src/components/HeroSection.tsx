
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Building } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pb-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-farm-cream via-farm-lime/20 to-farm-light-green/30 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-farm-lime rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-farm-light-green rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-farm-green leading-tight mb-6">
              Fresh Produce <br/>
              <span className="text-farm-orange">Farm to Table</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Connect directly with local farmers and get the freshest vegetables delivered to your doorstep. Support local agriculture and enjoy farm-fresh quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-farm-green hover:bg-farm-green/90 text-white px-6 py-6 rounded-full text-lg">
                Browse Vegetables
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-farm-orange text-farm-orange hover:bg-farm-orange hover:text-white px-6 py-6 rounded-full text-lg">
                I'm a Farmer
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-farm-light-green/20 flex items-center justify-center mr-3">
                  <Leaf className="h-5 w-5 text-farm-green" />
                </div>
                <div>
                  <p className="font-medium text-farm-green">Fresh Produce</p>
                  <p className="text-sm text-muted-foreground">Harvested Daily</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-farm-light-green/20 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-farm-green" />
                </div>
                <div>
                  <p className="font-medium text-farm-green">Local Farmers</p>
                  <p className="text-sm text-muted-foreground">Support Community</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-farm-light-green/20 flex items-center justify-center mr-3">
                  <Building className="h-5 w-5 text-farm-green" />
                </div>
                <div>
                  <p className="font-medium text-farm-green">Bulk Orders</p>
                  <p className="text-sm text-muted-foreground">For Businesses</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-farm-gradient opacity-10 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80"
                alt="Fresh vegetables from local farms" 
                className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px] w-full"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20 border border-muted max-w-[260px] hidden md:block">
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Farmer" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-farm-lime"
                />
                <div className="ml-3">
                  <p className="font-medium text-farm-green">Michael's Farm</p>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                    <span className="text-xs text-muted-foreground">4.2 miles away</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1557555187-23d685287bc3?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=100&h=100" alt="" />
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-farm-cream ring-2 ring-white">
                  <span className="text-xs font-medium text-farm-green">+5</span>
                </span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Serving 35+ happy customers in your area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
