
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-farm-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="h-8 w-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-farm-green font-bold">DM</span>
              </span>
              <span className="font-bold text-xl">DMAF</span>
            </div>
            <p className="text-farm-lime mb-6">
              Connecting local farmers with customers for fresher, healthier produce and stronger communities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-farm-lime" />
                <span className="text-sm">123 Market St, Portland, OR 97201</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-farm-lime" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-farm-lime" />
                <span className="text-sm">contact@dmaf.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-farm-lime transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-farm-lime transition-colors">About Us</Link></li>
              <li><Link to="/farmers" className="hover:text-farm-lime transition-colors">Find Farmers</Link></li>
              <li><Link to="/shop" className="hover:text-farm-lime transition-colors">Shop</Link></li>
              <li><Link to="/bulk-orders" className="hover:text-farm-lime transition-colors">Bulk Orders</Link></li>
              <li><Link to="/contact" className="hover:text-farm-lime transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* For Farmers/Customers */}
          <div>
            <h3 className="font-bold text-xl mb-4">For You</h3>
            <ul className="space-y-2">
              <li><Link to="/become-seller" className="hover:text-farm-lime transition-colors">Become a Seller</Link></li>
              <li><Link to="/farm-guide" className="hover:text-farm-lime transition-colors">Farm Guide</Link></li>
              <li><Link to="/delivery" className="hover:text-farm-lime transition-colors">Delivery Areas</Link></li>
              <li><Link to="/faqs" className="hover:text-farm-lime transition-colors">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-farm-lime transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-farm-lime transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates on new farmers, seasonal produce, and special offers.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-farm-green/40 border-farm-lime/30 text-white placeholder:text-farm-lime/70 focus:border-farm-lime"
              />
              <Button 
                className="bg-farm-orange hover:bg-farm-light-orange text-white w-full"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-farm-lime transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-farm-lime transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-farm-lime transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-farm-lime transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-farm-lime/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-farm-lime/80 mb-4 md:mb-0">© 2025 DMAF. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-farm-lime/80 hover:text-farm-lime transition-colors">Privacy</a>
            <a href="#" className="text-sm text-farm-lime/80 hover:text-farm-lime transition-colors">Terms</a>
            <a href="#" className="text-sm text-farm-lime/80 hover:text-farm-lime transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
