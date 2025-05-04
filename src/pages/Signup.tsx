
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, User, Mail, Lock, Phone, MapPin } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    userType: "customer", // default to customer
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sign up logic will be implemented later
    console.log("Signup attempt with:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-farm-cream to-white">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - image */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1920&auto=format&fit=crop')" }}>
          <div className="h-full w-full flex items-center justify-center bg-black/20 p-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl max-w-md text-center">
              <h2 className="text-2xl font-bold text-farm-green mb-4">Join Our Community</h2>
              <p className="text-muted-foreground">Connect with local farmers or find fresh vegetables for your needs.</p>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
                <span className="h-10 w-10 bg-farm-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FM</span>
                </span>
                <span className="font-bold text-2xl text-farm-green">FarmMarket</span>
              </Link>
              <h1 className="text-3xl font-bold text-farm-green">Create an Account</h1>
              <p className="text-muted-foreground mt-2">Sign up to start using our services</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="pl-10"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    className="pl-10"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>I am a:</Label>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="customer"
                      name="userType"
                      value="customer"
                      checked={formData.userType === "customer"}
                      onChange={handleChange}
                      className="h-4 w-4 text-farm-green focus:ring-farm-green"
                    />
                    <label htmlFor="customer" className="ml-2 text-sm text-gray-700">
                      Customer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="farmer"
                      name="userType"
                      value="farmer"
                      checked={formData.userType === "farmer"}
                      onChange={handleChange}
                      className="h-4 w-4 text-farm-green focus:ring-farm-green"
                    />
                    <label htmlFor="farmer" className="ml-2 text-sm text-gray-700">
                      Farmer
                    </label>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-farm-green hover:bg-farm-green/90 mt-6">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-farm-orange hover:underline font-medium">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
