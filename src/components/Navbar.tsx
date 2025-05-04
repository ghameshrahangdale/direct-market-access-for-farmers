
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  MapPin,
  Search
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('Select Location');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 bg-farm-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">FM</span>
              </span>
              <span className="font-bold text-xl text-farm-green">FarmMarket</span>
            </Link>
          </div>

          {/* Location Selector */}
          <div className="hidden md:flex items-center bg-muted px-3 py-1.5 rounded-full text-sm">
            <MapPin className="h-4 w-4 text-farm-green mr-1.5" />
            <span>{location}</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center relative flex-grow max-w-md mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search for vegetables, farmers..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-farm-green"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-farm-green">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="text-farm-green">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button variant="outline" size="sm" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-farm-green text-white hover:bg-farm-green/90">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? (
                <X className="h-5 w-5 text-farm-green" />
              ) : (
                <Menu className="h-5 w-5 text-farm-green" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg animate-fade-in">
          <div className="flex items-center bg-muted px-3 py-2 rounded-full text-sm mb-4">
            <MapPin className="h-4 w-4 text-farm-green mr-1.5" />
            <span>{location}</span>
          </div>
          
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search for vegetables, farmers..."
              className="w-full pl-10 pr-4 py-2 border border-input rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-farm-green"
            />
          </div>
          
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="text-farm-green w-full justify-start">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="text-farm-green w-full justify-start">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
            <Button variant="outline" size="sm" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-farm-green text-white hover:bg-farm-green/90 w-full">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
