
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      name: 'Classic Dal Rice Combo',
      description: 'Traditional dal, steamed rice, sabzi, pickle, and papad',
      price: 99,
      category: 'veg',
      calories: 450,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Chicken Curry Meal',
      description: 'Homestyle chicken curry with rice, roti, and salad',
      price: 149,
      category: 'non-veg',
      calories: 580,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'South Indian Special',
      description: 'Sambar rice, rasam, vegetable curry, and curd',
      price: 109,
      category: 'veg',
      calories: 420,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Rajma Chawal',
      description: 'Kidney bean curry with basmati rice and pickle',
      price: 119,
      category: 'veg',
      calories: 480,
      image: '/placeholder.svg'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleOrderNow = (item: any) => {
    navigate('/subscription', { state: { selectedItem: item } });
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-woodland mb-4">Our Menu</h1>
          <p className="text-lg text-kelp max-w-2xl mx-auto">
            Freshly prepared homestyle meals delivered to your doorstep
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="veg">Vegetarian</TabsTrigger>
            <TabsTrigger value="non-veg">Non-Veg</TabsTrigger>
          </TabsList>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="border-woodland/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-confetti/20 rounded-lg mb-4 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-woodland">{item.name}</CardTitle>
                    <Badge variant={item.category === 'veg' ? 'default' : 'destructive'}>
                      {item.category === 'veg' ? '🌱 Veg' : '🍗 Non-Veg'}
                    </Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-woodland">₹{item.price}</span>
                    <span className="text-sm text-kelp">{item.calories} calories</span>
                  </div>
                  <Button 
                    onClick={() => handleOrderNow(item)}
                    className="w-full bg-woodland hover:bg-kelp text-stark-white"
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
