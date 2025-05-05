
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Truck, Map, Store } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Local Farmers",
    description: "Enter your location to discover farmers in your area with fresh produce available."
  },
  {
    icon: Store,
    title: "Browse & Shop",
    description: "Select from a variety of fresh vegetables and fruits directly from the source."
  },
  {
    icon: Map,
    title: "Choose Delivery or Pickup",
    description: "Get your order delivered to your door or arrange for pickup at a convenient location."
  },
  {
    icon: Truck,
    title: "Enjoy Farm Fresh",
    description: "Receive your farm-fresh produce and enjoy the taste of locally grown vegetables."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-farm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farm-green mb-3">How DMAF Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple process connecting you with local farmers for the freshest produce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-farm-lime flex items-center justify-center mb-6 relative">
                  <step.icon className="h-7 w-7 text-farm-green" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-farm-green text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-farm-green mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-farm-light-green rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-farm-green mb-3">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join thousands of happy customers and farmers on our platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-farm-green hover:bg-farm-green/90 text-white">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-farm-orange text-farm-orange hover:bg-farm-orange hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
