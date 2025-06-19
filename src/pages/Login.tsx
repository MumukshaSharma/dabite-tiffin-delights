
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone, User, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from '@/components/LoginNavbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', phone: '' });
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
    navigate('/home');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', signupData);
    navigate('/onboarding');
  };

  const handleLocationSubmit = () => {
    if (location) {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-woodland via-kelp to-woodland">
      <LoginNavbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-stark-white leading-tight">
                Order homemade food.
                <br />
                <span className="text-confetti">Discover best tiffins.</span>
                <br />
                <span className="text-stark-white">Dabite it!</span>
              </h1>
              <p className="text-stark-white/80 text-lg sm:text-xl lg:text-2xl font-medium">
                Fresh, homestyle meals delivered to your doorstep
              </p>
            </div>

            {/* Location Input */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="bg-stark-white rounded-lg p-2 flex items-center shadow-lg">
                <div className="flex items-center px-3 py-2 border-r border-kelp/20">
                  <MapPin className="h-5 w-5 text-woodland mr-2" />
                </div>
                <Input
                  placeholder="Enter your delivery location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 focus-visible:ring-0 text-kelp placeholder:text-kelp/60 text-base"
                />
                <Button 
                  onClick={handleLocationSubmit}
                  className="bg-woodland hover:bg-kelp text-stark-white px-6"
                  disabled={!location}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8">
              <div className="bg-stark-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl mb-2">🍽️</div>
                <h3 className="text-stark-white font-semibold text-sm lg:text-base">TIFFIN DELIVERY</h3>
                <p className="text-confetti text-xs lg:text-sm">FROM HOME KITCHENS</p>
                <p className="text-stark-white/80 text-xs lg:text-sm mt-1">UPTO 40% OFF</p>
              </div>
              <div className="bg-stark-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl mb-2">📦</div>
                <h3 className="text-stark-white font-semibold text-sm lg:text-base">SUBSCRIPTION</h3>
                <p className="text-confetti text-xs lg:text-sm">MONTHLY PLANS</p>
                <p className="text-stark-white/80 text-xs lg:text-sm mt-1">UPTO 60% OFF</p>
              </div>
              <div className="bg-stark-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl mb-2">🏠</div>
                <h3 className="text-stark-white font-semibold text-sm lg:text-base">HOME STYLE</h3>
                <p className="text-confetti text-xs lg:text-sm">FRESH & HEALTHY</p>
                <p className="text-stark-white/80 text-xs lg:text-sm mt-1">UPTO 50% OFF</p>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <Card className="border-woodland/20 bg-stark-white/95 backdrop-blur-sm shadow-2xl">
                <CardHeader className="space-y-1 pb-4">
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-confetti/20">
                      <TabsTrigger 
                        value="login" 
                        className="data-[state=active]:bg-woodland data-[state=active]:text-stark-white text-sm"
                      >
                        Login
                      </TabsTrigger>
                      <TabsTrigger 
                        value="signup" 
                        className="data-[state=active]:bg-woodland data-[state=active]:text-stark-white text-sm"
                      >
                        Sign Up
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="login" className="space-y-4 mt-6">
                      <div className="text-center space-y-2">
                        <CardTitle className="text-xl text-woodland">Welcome Back!</CardTitle>
                        <CardDescription className="text-kelp/80">Sign in to continue ordering</CardDescription>
                      </div>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-kelp text-sm">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10 border-woodland/30 focus:border-woodland h-11"
                              value={loginData.email}
                              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-kelp text-sm">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                            <Input
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              className="pl-10 border-woodland/30 focus:border-woodland h-11"
                              value={loginData.password}
                              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-woodland hover:bg-kelp text-stark-white h-11 text-base font-medium"
                        >
                          Sign In
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4 mt-6">
                      <div className="text-center space-y-2">
                        <CardTitle className="text-xl text-woodland">Create Account</CardTitle>
                        <CardDescription className="text-kelp/80">Join Dabite and start your healthy eating journey</CardDescription>
                      </div>
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signup-name" className="text-kelp text-sm">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                            <Input
                              id="signup-name"
                              type="text"
                              placeholder="Your Name"
                              className="pl-10 border-woodland/30 focus:border-woodland h-11"
                              value={signupData.name}
                              onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-phone" className="text-kelp text-sm">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                            <Input
                              id="signup-phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="pl-10 border-woodland/30 focus:border-woodland h-11"
                              value={signupData.phone}
                              onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-email" className="text-kelp text-sm">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10 border-woodland/30 focus:border-woodland h-11"
                              value={signupData.email}
                              onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signup-password" className="text-kelp text-sm">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                            <Input
                              id="signup-password"
                              type="password"
                              placeholder="••••••••"
                              className="pl-10 border-woodland/30 focus:border-woodland h-11"
                              value={signupData.password}
                              onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-woodland hover:bg-kelp text-stark-white h-11 text-base font-medium"
                        >
                          Create Account
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
