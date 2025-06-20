
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, MapPin, Truck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const OrderTiffin = () => {
  const navigate = useNavigate();

  const todaysSpecial = [
    {
      id: 1,
      name: "Dal Tadka with Rice & Roti",
      kitchen: "Sharma's Kitchen",
      rating: 4.5,
      time: "25-30 mins",
      price: 89,
      image: "/placeholder.svg",
      distance: "1.2 km"
    },
    {
      id: 2,
      name: "Rajma Chawal with Pickle",
      kitchen: "Home Kitchen",
      rating: 4.3,
      time: "30-35 mins",
      price: 95,
      image: "/placeholder.svg",
      distance: "0.8 km"
    },
    {
      id: 3,
      name: "Chicken Curry with Rice",
      kitchen: "Punjabi Rasoi",
      rating: 4.7,
      time: "20-25 mins",
      price: 135,
      image: "/placeholder.svg",
      distance: "1.5 km"
    }
  ];

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-2">
              Order Your Tiffin
            </h1>
            <p className="text-kelp text-lg">
              Fresh, homemade meals delivered to your doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todaysSpecial.map((meal) => (
              <Card key={meal.id} className="border-woodland/20 hover:border-woodland/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={meal.image} 
                      alt={meal.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-woodland text-stark-white">
                      Today's Special
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-woodland text-lg">{meal.name}</h3>
                      <p className="text-kelp text-sm">{meal.kitchen}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-kelp">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{meal.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{meal.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{meal.distance}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-woodland">
                        ₹{meal.price}
                      </div>
                      <Button 
                        className="bg-woodland hover:bg-kelp text-stark-white"
                        onClick={() => navigate('/food-checkout')}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-confetti/10 rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <Truck className="h-12 w-12 text-woodland" />
              <div>
                <h3 className="text-xl font-semibold text-woodland">Free Delivery</h3>
                <p className="text-kelp">On orders above ₹149. Fast delivery in 30 minutes or less!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderTiffin;
