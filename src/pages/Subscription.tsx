
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('dabba-max');
  const navigate = useNavigate();

  const plans = [
    {
      id: 'dabba-lite',
      name: 'Dabba Lite',
      subtitle: 'Perfect for Light Eaters',
      duration: '1 Month',
      price: 1999,
      originalPrice: 2499,
      discount: '20% OFF',
      pricePerMeal: 67,
      meals: 30,
      icon: <Star className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      features: [
        '30 Fresh meals per month',
        'Basic variety menu',
        'Standard delivery',
        'Customer support',
        'Flexible cancellation'
      ]
    },
    {
      id: 'dabba-max',
      name: 'Dabba Max',
      subtitle: 'Most Popular Choice',
      duration: '1 Month',
      price: 2499,
      originalPrice: 2999,
      discount: '17% OFF',
      pricePerMeal: 83,
      meals: 30,
      icon: <Crown className="h-6 w-6" />,
      color: 'from-woodland to-kelp',
      features: [
        '30 Premium meals per month',
        'Extended variety menu',
        'Priority delivery',
        'Weekend specials',
        'Premium customer support',
        'Meal customization options'
      ],
      popular: true
    },
    {
      id: 'protein-pack',
      name: 'Protein Pack',
      subtitle: 'For Fitness Enthusiasts',
      duration: '1 Month',
      price: 3499,
      originalPrice: 3999,
      discount: '13% OFF',
      pricePerMeal: 117,
      meals: 30,
      icon: <Zap className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500',
      features: [
        '30 High-protein meals',
        'Gym-focused nutrition',
        'Protein tracking dashboard',
        'Nutrition consultation',
        'Pre/post workout meals',
        'Custom macro balancing'
      ]
    }
  ];

  const handleSubscribe = (plan: any) => {
    navigate('/subscription-checkout', { state: { selectedPlan: plan } });
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-4">
              Choose Your Subscription
            </h1>
            <p className="text-lg text-kelp max-w-2xl mx-auto">
              Select the perfect plan for your lifestyle. Fresh homestyle meals delivered daily to your doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${
                  plan.popular 
                    ? 'border-woodland bg-woodland/5 scale-105' 
                    : 'border-woodland/20 hover:border-woodland/40'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-woodland text-stark-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-woodland">{plan.name}</CardTitle>
                  <CardDescription className="text-kelp">{plan.subtitle}</CardDescription>
                  
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-woodland">₹{plan.price}</span>
                      <span className="text-lg text-kelp line-through">₹{plan.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="bg-confetti/20 text-woodland">
                      {plan.discount}
                    </Badge>
                    <p className="text-sm text-kelp">₹{plan.pricePerMeal} per meal</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-woodland flex-shrink-0" />
                        <span className="text-sm text-kelp">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-woodland hover:bg-kelp text-stark-white shadow-lg' 
                        : 'bg-woodland/90 hover:bg-woodland text-stark-white'
                    }`}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-woodland/10 to-confetti/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-display font-bold text-woodland text-center mb-8">
              Why Choose Dabite Subscriptions?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-woodland/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏠</span>
                </div>
                <h4 className="font-bold text-woodland">Homestyle Cooking</h4>
                <p className="text-sm text-kelp">
                  Freshly prepared meals with traditional recipes from verified home kitchens
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-confetti/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-bold text-woodland">Save Money</h4>
                <p className="text-sm text-kelp">
                  Up to 40% cheaper than restaurants with consistent quality and taste
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-woodland/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚚</span>
                </div>
                <h4 className="font-bold text-woodland">Reliable Delivery</h4>
                <p className="text-sm text-kelp">
                  On-time delivery to your doorstep during lunch and dinner hours
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="border-woodland/20 bg-confetti/5">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-kelp italic mb-4">
                  "Dabite Max has been a game-changer for my college life. The food quality is amazing and it feels like eating at home. Highly recommended!"
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-10 h-10 bg-woodland/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-woodland">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-woodland">Arjun K.</p>
                    <p className="text-sm text-kelp">Engineering Student</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
