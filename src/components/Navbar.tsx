import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ShoppingCart, User, Menu, X, Search } from "lucide-react";
import LocationSelector from "./LocationSelector";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, items } = useCart();
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const navigate = useNavigate(); // ✅ initialize navigate
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        setUser(null); // fallback if parsing fails
      }
    };

    loadUser(); // Initial check

    // Listen to storage changes (across tabs or components)
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  // logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 bg-farm-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DM</span>
              </span>
              <span className="font-bold text-xl text-farm-green">DMAF</span>
            </Link>
          </div>

          {/* Location Selector */}
          <div className="hidden md:flex items-center bg-muted px-3 py-1.5 rounded-full text-sm">
            <LocationSelector />
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
            <Button
              variant="ghost"
              size="sm"
              className="text-farm-green"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-farm-green"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {itemCount > 0 && (
                <span className="ml-1 bg-farm-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
            {user ? (
              <>
                <span className="text-sm font-medium text-farm-green">
                  Welcome, {user.name || user.email}
                </span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  variant="outline"
                  size="sm"
                  className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  size="sm"
                  className="bg-farm-green text-white hover:bg-farm-green/90"
                >
                  Register
                </Button>
              </>
            )}
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
            <LocationSelector />
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
            <Button
              variant="ghost"
              size="sm"
              className="text-farm-green w-full justify-start"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-farm-green w-full justify-between"
              onClick={toggleCart}
            >
              <div className="flex items-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </div>
              {itemCount > 0 && (
                <span className="bg-farm-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
            {user ? (
              <img
                src={user.profileImage || "/default-avatar.png"}
                alt="Profile"
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            ) : (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  variant="outline"
                  size="sm"
                  className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  size="sm"
                  className="bg-farm-green text-white hover:bg-farm-green/90"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
