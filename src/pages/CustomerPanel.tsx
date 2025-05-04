import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Search,
  Filter,
  ShoppingCart,
  MapPin,
  Check,
  ChevronDown,
  Package,
  Truck
} from "lucide-react";

// Mock data for vegetables
const mockVegetables = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 2.99,
    quantity: "1 kg",
    farmer: "Green Fields Farm",
    distance: "2.5 km",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Fresh Spinach",
    price: 1.99,
    quantity: "250 g",
    farmer: "Riverside Organics",
    distance: "3.7 km",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Sweet Potatoes",
    price: 3.49,
    quantity: "1 kg",
    farmer: "Sunny Hill Farm",
    distance: "1.5 km",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1596095640647-7b28d8677d28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Fresh Carrots",
    price: 1.79,
    quantity: "500 g",
    farmer: "Valley Greens",
    distance: "4.2 km",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    name: "Organic Bell Peppers",
    price: 4.29,
    quantity: "3 pieces",
    farmer: "Meadow Farms",
    distance: "3.1 km",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "Fresh Broccoli",
    price: 2.49,
    quantity: "500 g",
    farmer: "Green Acres",
    distance: "5.0 km",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

// Mock data for orders
const mockOrders = [
  {
    id: "ORD-123456",
    date: "2023-05-10",
    farmer: "Green Fields Farm",
    items: [
      { name: "Organic Tomatoes", quantity: "2 kg", price: 5.98 },
      { name: "Fresh Spinach", quantity: "500 g", price: 3.98 }
    ],
    total: 9.96,
    status: "delivered"
  },
  {
    id: "ORD-123457",
    date: "2023-05-14",
    farmer: "Riverside Organics",
    items: [
      { name: "Sweet Potatoes", quantity: "1.5 kg", price: 5.24 },
      { name: "Organic Bell Peppers", quantity: "6 pieces", price: 8.58 }
    ],
    total: 13.82,
    status: "in transit"
  },
  {
    id: "ORD-123458",
    date: "2023-05-15",
    farmer: "Valley Greens",
    items: [
      { name: "Fresh Carrots", quantity: "1 kg", price: 3.58 },
      { name: "Fresh Broccoli", quantity: "500 g", price: 2.49 }
    ],
    total: 6.07,
    status: "processing"
  }
];

const vegetableTypes = ["All", "Leafy Greens", "Root Vegetables", "Tomatoes", "Peppers", "Squash", "Organic"];

const CustomerPanel = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState<{ id: number, name: string, price: number, quantity: string, count: number }[]>([]);
  
  const handleAddToCart = (vegetable: typeof mockVegetables[0]) => {
    const existingItem = cart.find(item => item.id === vegetable.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === vegetable.id 
          ? { ...item, count: item.count + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { 
        id: vegetable.id, 
        name: vegetable.name, 
        price: vegetable.price,
        quantity: vegetable.quantity,
        count: 1 
      }]);
    }
  };

  // Filter vegetables based on search query, type, and price
  const filteredVegetables = mockVegetables.filter(veg => {
    const matchesSearch = veg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        veg.farmer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || 
                      (selectedType === "Organic" && veg.name.toLowerCase().includes("organic"));
    const matchesPrice = (!priceRange.min || veg.price >= parseFloat(priceRange.min)) &&
                       (!priceRange.max || veg.price <= parseFloat(priceRange.max));
                       
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-farm-gradient py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Find Fresh Vegetables</h1>
          <p className="text-white/80">Browse farm-fresh produce from local farmers</p>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tabs */}
          <div className="border-b border-muted mb-6">
            <div className="flex space-x-8">
              <button
                className={`pb-4 px-1 ${
                  activeTab === "browse"
                    ? "border-b-2 border-farm-green font-medium text-farm-green"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("browse")}
              >
                Browse Vegetables
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === "cart"
                    ? "border-b-2 border-farm-green font-medium text-farm-green"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("cart")}
              >
                My Cart {cart.length > 0 && <span className="ml-2 bg-farm-orange text-white rounded-full px-2 py-1 text-xs">{cart.reduce((sum, item) => sum + item.count, 0)}</span>}
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === "orders"
                    ? "border-b-2 border-farm-green font-medium text-farm-green"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("orders")}
              >
                My Orders
              </button>
            </div>
          </div>
          
          {/* Tab content */}
          {activeTab === "browse" && (
            <div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Search vegetables or farmers..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} />
                  </Button>
                </div>
                
                {showFilters && (
                  <div className="mt-4 p-4 bg-muted rounded-lg animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-medium mb-2">Vegetable Type</h3>
                        <div className="flex flex-wrap gap-2">
                          {vegetableTypes.map((type) => (
                            <button
                              key={type}
                              className={`px-3 py-1 rounded-full text-sm ${
                                selectedType === type 
                                  ? 'bg-farm-green text-white' 
                                  : 'bg-muted border border-muted-foreground/30 text-muted-foreground hover:border-farm-green'
                              }`}
                              onClick={() => setSelectedType(type)}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Price Range</h3>
                        <div className="flex items-center space-x-2">
                          <Input 
                            type="number" 
                            placeholder="Min" 
                            className="w-20"
                            value={priceRange.min}
                            onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                          />
                          <span className="text-muted-foreground">to</span>
                          <Input 
                            type="number" 
                            placeholder="Max" 
                            className="w-20"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-end">
                        <Button 
                          variant="outline" 
                          className="text-farm-green border-farm-green hover:bg-farm-green hover:text-white"
                          onClick={() => {
                            setSelectedType("All");
                            setPriceRange({ min: "", max: "" });
                          }}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVegetables.length > 0 ? (
                  filteredVegetables.map((veg) => (
                    <div key={veg.id} className="farm-card overflow-hidden">
                      <div 
                        className="h-48 bg-cover bg-center" 
                        style={{ backgroundImage: `url(${veg.image})` }}
                      />
                      <div className="p-4">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-bold text-farm-green">{veg.name}</h3>
                          <span className="font-bold">₹{veg.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Per {veg.quantity}</p>
                        
                        <div className="mt-3 flex items-center">
                          <MapPin className="h-4 w-4 text-farm-orange mr-1" />
                          <span className="text-sm">{veg.distance} away • {veg.farmer}</span>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button 
                            className="bg-farm-green hover:bg-farm-green/90"
                            onClick={() => handleAddToCart(veg)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 py-8 text-center">
                    <p className="text-muted-foreground">No vegetables match your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {activeTab === "cart" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">My Cart</h2>
              
              {cart.length > 0 ? (
                <div className="bg-white rounded-lg overflow-hidden shadow">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-farm-light-green text-farm-green">
                        <tr>
                          <th className="py-3 px-4 text-left">Item</th>
                          <th className="py-3 px-4 text-left">Price</th>
                          <th className="py-3 px-4 text-left">Quantity</th>
                          <th className="py-3 px-4 text-left">Total</th>
                          <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id} className="border-b border-muted">
                            <td className="py-4 px-4">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">Unit: {item.quantity}</div>
                            </td>
                            <td className="py-4 px-4">₹{item.price.toFixed(2)}</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-2">
                                <button 
                                  className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20"
                                  onClick={() => {
                                    if (item.count > 1) {
                                      setCart(cart.map(cartItem => 
                                        cartItem.id === item.id 
                                          ? { ...cartItem, count: cartItem.count - 1 } 
                                          : cartItem
                                      ));
                                    } else {
                                      setCart(cart.filter(cartItem => cartItem.id !== item.id));
                                    }
                                  }}
                                >
                                  -
                                </button>
                                <span>{item.count}</span>
                                <button 
                                  className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20"
                                  onClick={() => {
                                    setCart(cart.map(cartItem => 
                                      cartItem.id === item.id 
                                        ? { ...cartItem, count: cartItem.count + 1 } 
                                        : cartItem
                                    ));
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4 px-4 font-medium">₹{(item.price * item.count).toFixed(2)}</td>
                            <td className="py-4 px-4">
                              <button 
                                className="text-red-500 hover:text-red-700"
                                onClick={() => setCart(cart.filter(cartItem => cartItem.id !== item.id))}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-muted/30">
                          <td colSpan={3} className="py-3 px-4 text-right font-semibold">Total:</td>
                          <td colSpan={2} className="py-3 px-4 font-bold">
                            ₹{cart.reduce((sum, item) => sum + (item.price * item.count), 0).toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="p-6 bg-white flex justify-between items-center">
                    <Button variant="outline" onClick={() => setActiveTab("browse")}>
                      Continue Shopping
                    </Button>
                    <Button className="bg-farm-green hover:bg-farm-green/90">
                      <Check className="h-4 w-4 mr-2" />
                      Checkout
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-6">Start adding fresh vegetables to your cart!</p>
                  <Button 
                    className="bg-farm-green hover:bg-farm-green/90"
                    onClick={() => setActiveTab("browse")}
                  >
                    Browse Vegetables
                  </Button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "orders" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">My Orders</h2>
              
              {mockOrders.map((order) => (
                <div key={order.id} className="farm-card mb-6 overflow-hidden">
                  <div className="bg-muted/30 p-4 flex justify-between items-center">
                    <div>
                      <span className="font-semibold">Order {order.id}</span>
                      <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "delivered" ? "bg-green-100 text-green-800" :
                        order.status === "in transit" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {order.status === "in transit" ? "In Transit" : 
                         order.status === "delivered" ? "Delivered" : "Processing"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <Truck className="h-4 w-4 mr-2 text-farm-green" />
                      <span>{order.farmer}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>
                            {item.name} ({item.quantity})
                          </span>
                          <span className="font-medium">₹{item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-muted pt-3 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">₹{order.total.toFixed(2)}</span>
                    </div>
                    
                    {order.status === "delivered" && (
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline">
                          <Package className="h-4 w-4 mr-2" />
                          Order Again
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {mockOrders.length === 0 && (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
                  <p className="text-muted-foreground mb-6">Start browsing fresh vegetables to place your first order!</p>
                  <Button 
                    className="bg-farm-green hover:bg-farm-green/90"
                    onClick={() => setActiveTab("browse")}
                  >
                    Browse Vegetables
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerPanel;
