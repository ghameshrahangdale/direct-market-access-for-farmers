
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "I've been using FarmMarket for 3 months now and I'm impressed by the quality and freshness. The vegetables are always so much better than what I find in supermarkets and I love supporting local farmers directly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chang",
    role: "Restaurant Owner",
    content: "As a restaurant owner, quality is everything. FarmMarket has transformed how we source our ingredients. The bulk ordering feature is perfect for our needs and the farmers are reliable and professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Shopper",
    content: "Finding fresh, locally grown produce used to be a challenge until I discovered FarmMarket. My kids now enjoy vegetables more because they actually taste good! The delivery service is prompt and convenient.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&q=80&w=100&h=100",
    date: "3 weeks ago"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-farm-orange text-farm-orange' : 'text-muted'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-farm-lime/20 to-farm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Hear from people who have experienced the farm-fresh difference
          </p>
        </div>

        <div className="relative">
          {!isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`farm-card p-6 ${activeIndex === index ? 'ring-2 ring-farm-green scale-105' : ''} transition-all duration-300`}
                >
                  <div className="flex items-start mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-farm-green">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="farm-card p-6">
              <div className="flex items-start mb-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-farm-green">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              <p className="text-muted-foreground mb-4">{testimonials[activeIndex].content}</p>
              <p className="text-xs text-muted-foreground">{testimonials[activeIndex].date}</p>
              
              <div className="flex justify-between items-center mt-6">
                <Button 
                  onClick={prevTestimonial}
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full border-farm-green text-farm-green"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  {activeIndex + 1} of {testimonials.length}
                </div>
                <Button 
                  onClick={nextTestimonial}
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full border-farm-green text-farm-green"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
