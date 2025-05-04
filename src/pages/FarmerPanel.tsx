
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Upload, 
  Plus, 
  Check, 
  Truck, 
  ShoppingCart, 
  Package, 
  Search, 
  Filter,
  Image as ImageIcon
} from "lucide-react";

// Mock data for vegetables
const mockVegetables = [
  { 
    id: 1, 
    name: "Organic Tomatoes", 
    price: 2.99, 
    quantity: "1 kg", 
    available: true, 
    image: "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: 2, 
    name: "Fresh Spinach", 
    price: 1.99, 
    quantity: "250 g", 
    available: true, 
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: 3, 
    name: "Carrots", 
    price: 1.49, 
    quantity: "500 g", 
    available: false, 
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
];

// Mock data for orders
const mockOrders = [
  {
    id: "ORD-2023-001",
    customer: "John Smith",
    items: ["Organic Tomatoes", "Fresh Spinach"],
    total: 14.97,
    status: "pending",
    date: "2023-05-12"
  },
  {
    id: "ORD-2023-002",
    customer: "Hotel Greenview",
    items: ["Carrots", "Potatoes", "Onions"],
    total: 45.50,
    status: "confirmed",
    date: "2023-05-11"
  },
  {
    id: "ORD-2023-003",
    customer: "Sarah Johnson",
    items: ["Fresh Spinach"],
    total: 3.98,
    status: "delivered",
    date: "2023-05-10"
  }
];

// Mock data for customer requests
const mockRequests = [
  {
    id: "REQ-2023-001",
    customer: "Grand Hotel",
    items: ["Tomatoes", "Lettuce", "Cucumbers"],
    quantity: "10 kg each",
    date: "2023-05-15",
    distance: "3.2 km"
  },
  {
    id: "REQ-2023-002",
    customer: "Local Restaurant",
    items: ["Organic Vegetables", "Herbs"],
    quantity: "Various",
    date: "2023-05-16",
    distance: "1.5 km"
  }
];

const FarmerPanel = () => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [newVegetable, setNewVegetable] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    available: true,
    image: null as File | null
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewVegetable(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };
  
  const handleNewVegetableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding new vegetable:", newVegetable);
    // Reset form after submission
    setNewVegetable({
      name: "",
      price: "",
      quantity: "",
      description: "",
      available: true,
      image: null
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-farm-gradient py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Farmer Dashboard</h1>
          <p className="text-white/80">Manage your produce and orders</p>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tabs */}
          <div className="border-b border-muted mb-6">
            <div className="flex space-x-8">
              <button
                className={`pb-4 px-1 ${
                  activeTab === "inventory"
                    ? "border-b-2 border-farm-green font-medium text-farm-green"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("inventory")}
              >
                Inventory
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === "orders"
                    ? "border-b-2 border-farm-green font-medium text-farm-green"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("orders")}
              >
                Orders
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === "requests"
                    ? "border-b-2 border-farm-green font-medium text-farm-green"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab("requests")}
              >
                Customer Requests
              </button>
            </div>
          </div>
          
          {/* Tab content */}
          {activeTab === "inventory" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Vegetables</h2>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="bg-farm-green hover:bg-farm-green/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Vegetable
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Add New Vegetable</SheetTitle>
                      <SheetDescription>
                        Fill in the details to add a new vegetable to your inventory.
                      </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleNewVegetableSubmit} className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Vegetable Name</Label>
                        <Input
                          id="name"
                          value={newVegetable.name}
                          onChange={(e) => setNewVegetable({...newVegetable, name: e.target.value})}
                          placeholder="e.g., Organic Tomatoes"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="price">Price (per unit)</Label>
                          <Input
                            id="price"
                            value={newVegetable.price}
                            onChange={(e) => setNewVegetable({...newVegetable, price: e.target.value})}
                            placeholder="e.g., 2.99"
                            type="number"
                            step="0.01"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity/Unit</Label>
                          <Input
                            id="quantity"
                            value={newVegetable.quantity}
                            onChange={(e) => setNewVegetable({...newVegetable, quantity: e.target.value})}
                            placeholder="e.g., 500 g, 1 kg"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newVegetable.description}
                          onChange={(e) => setNewVegetable({...newVegetable, description: e.target.value})}
                          placeholder="Describe your vegetable, including growing methods, freshness, etc."
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="image">Upload Image</Label>
                        <div className="border-2 border-dashed border-muted rounded-md p-6 text-center cursor-pointer hover:bg-muted/20 transition-colors">
                          <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          <label htmlFor="image" className="cursor-pointer w-full h-full block">
                            {newVegetable.image ? (
                              <div className="text-center">
                                <Check className="h-8 w-8 mx-auto mb-2 text-farm-green" />
                                <p className="text-sm font-medium">
                                  {newVegetable.image.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Click to change
                                </p>
                              </div>
                            ) : (
                              <div className="text-center">
                                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                <p className="text-sm font-medium">
                                  Click to upload image
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  SVG, PNG, JPG or GIF (max. 5MB)
                                </p>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="available"
                          checked={newVegetable.available}
                          onChange={(e) => setNewVegetable({...newVegetable, available: e.target.checked})}
                          className="h-4 w-4 text-farm-green focus:ring-farm-green"
                        />
                        <Label htmlFor="available" className="text-sm">
                          Available for purchase
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-farm-green hover:bg-farm-green/90">
                        Add Vegetable
                      </Button>
                    </form>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockVegetables.map((veg) => (
                  <div key={veg.id} className="farm-card">
                    <div 
                      className="h-48 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${veg.image})` }}
                    >
                      <div className="flex justify-end p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${veg.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {veg.available ? 'Available' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-farm-green">{veg.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-lg font-semibold">${veg.price}</span>
                          <span className="text-sm text-muted-foreground ml-1">/ {veg.quantity}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <ImageIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "orders" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Manage Orders</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-farm-light-green text-farm-green">
                    <tr>
                      <th className="py-3 px-4 text-left">Order ID</th>
                      <th className="py-3 px-4 text-left">Customer</th>
                      <th className="py-3 px-4 text-left">Items</th>
                      <th className="py-3 px-4 text-left">Total</th>
                      <th className="py-3 px-4 text-left">Status</th>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-muted/20">
                        <td className="py-3 px-4">{order.id}</td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4">{order.items.join(", ")}</td>
                        <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            order.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                            order.status === "confirmed" ? "bg-blue-100 text-blue-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">
                            <Truck className="h-4 w-4 mr-1" />
                            Update
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === "requests" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Nearby Customer Requests</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockRequests.map((req) => (
                  <div key={req.id} className="farm-card p-5">
                    <div className="flex justify-between mb-3">
                      <h3 className="font-semibold">{req.customer}</h3>
                      <span className="text-sm text-muted-foreground">{req.date}</span>
                    </div>
                    <div className="mb-3">
                      <h4 className="text-sm text-muted-foreground mb-1">Requested Items:</h4>
                      <p className="font-medium">{req.items.join(", ")}</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="text-sm text-muted-foreground mb-1">Quantity:</h4>
                      <p>{req.quantity}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center text-farm-green">
                        <MapPin className="h-4 w-4 mr-1" />
                        {req.distance} away
                      </span>
                      <Button className="bg-farm-green hover:bg-farm-green/90">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Respond
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FarmerPanel;
