import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { notification } from "antd"; // Import Ant Design notification

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("user", JSON.stringify(data.user));

      notification.success({
        message: "Login Successful",
        description:
          "You have successfully Logged in. Redirecting to Home page...",
        duration: 1, // duration in seconds
        onClose: () => {
          if (data.userType === "customer") {
            navigate("/customer");
          } else if (data.userType === "farmer") {
            navigate("/farmer");
          } else {
            navigate("/"); // default or error case
          }
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-farm-cream to-white">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 mb-6"
              >
                <span className="h-10 w-10 bg-farm-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FM</span>
                </span>
                <span className="font-bold text-2xl text-farm-green">
                  FarmMarket
                </span>
              </Link>
              <h1 className="text-3xl font-bold text-farm-green">
                Welcome Back
              </h1>
              <p className="text-muted-foreground mt-2">
                Sign in to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-farm-orange hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-farm-green hover:bg-farm-green/90"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-farm-orange hover:underline font-medium"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right side - image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585500561845-5dd562c86664?q=80&w=1920&auto=format&fit=crop')",
          }}
        >
          <div className="h-full w-full flex items-center justify-center bg-black/20 p-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl max-w-md text-center">
              <h2 className="text-2xl font-bold text-farm-green mb-4">
                Farm Fresh Vegetables
              </h2>
              <p className="text-muted-foreground">
                Connect directly with local farmers and get the freshest produce
                delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
