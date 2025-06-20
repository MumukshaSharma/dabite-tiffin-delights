
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Target, Zap, Heart, Beef, Wheat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NutritionInfo = () => {
  const mealPlans = [
    {
      id: 'weight-loss',
      name: 'Weight Loss',
      calories: '1200-1500',
      protein: '80-100g',
      carbs: '120-150g',
      fats: '40-50g',
      icon: <Target className="h-6 w-6" />,
      color: 'bg-green-500',
      description: 'Balanced meals for healthy weight management'
    },
    {
      id: 'maintenance',
      name: 'Maintenance',
      calories: '1800-2200',
      protein: '100-120g',
      carbs: '200-250g',
      fats: '60-80g',
      icon: <Heart className="h-6 w-6" />,
      color: 'bg-blue-500',
      description: 'Perfect for maintaining current weight and health'
    },
    {
      id: 'muscle-gain',
      name: 'Muscle Gain',
      calories: '2500-3000',
      protein: '150-180g',
      carbs: '300-350g',
      fats: '80-100g',
      icon: <Zap className="h-6 w-6" />,
      color: 'bg-orange-500',
      description: 'High-protein meals for building lean muscle'
    }
  ];

  const nutritionFacts = [
    {
      category: 'Protein Rich',
      icon: <Beef className="h-5 w-5" />,
      items: ['Dal Tadka', 'Chicken Curry', 'Paneer Bhurji', 'Egg Curry'],
      benefits: 'Builds muscle, improves metabolism'
    },
    {
      category: 'Complex Carbs',
      icon: <Wheat className="h-5 w-5" />,
      items: ['Brown Rice', 'Whole Wheat Roti', 'Quinoa', 'Oats'],
      benefits: 'Sustained energy, better digestion'
    },
    {
      category: 'Healthy Fats',
      icon: <Activity className="h-5 w-5" />,
      items: ['Ghee', 'Nuts', 'Seeds', 'Avocado'],
      benefits: 'Brain health, vitamin absorption'
    }
  ];

  const calorieChart = [
    { meal: 'Breakfast', calories: 300, items: 'Poha, Tea, Fruits' },
    { meal: 'Lunch', calories: 450, items: 'Dal, Rice, Sabzi, Roti' },
    { meal: 'Evening Snack', calories: 150, items: 'Nuts, Green Tea' },
    { meal: 'Dinner', calories: 400, items: 'Curry, Rice/Roti, Salad' }
  ];

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-4">
              Nutrition Information
            </h1>
            <p className="text-kelp text-lg max-w-2xl mx-auto">
              Understand the nutritional value of our meals and find the perfect diet plan for your goals
            </p>
          </div>

          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="plans">Diet Plans</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
              <TabsTrigger value="calories">Calorie Chart</TabsTrigger>
            </TabsList>

            <TabsContent value="plans" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {mealPlans.map((plan) => (
                  <Card key={plan.id} className="border-woodland/20 hover:border-woodland/40 transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center text-white mb-4`}>
                        {plan.icon}
                      </div>
                      <CardTitle className="text-woodland">{plan.name}</CardTitle>
                      <p className="text-kelp text-sm">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-kelp">Calories:</span>
                          <Badge variant="secondary">{plan.calories}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-kelp">Protein:</span>
                          <Badge variant="secondary">{plan.protein}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-kelp">Carbs:</span>
                          <Badge variant="secondary">{plan.carbs}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-kelp">Fats:</span>
                          <Badge variant="secondary">{plan.fats}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {nutritionFacts.map((fact, index) => (
                  <Card key={index} className="border-woodland/20">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-woodland">
                        {fact.icon}
                        <span>{fact.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-woodland mb-2">Found in:</h4>
                          <div className="flex flex-wrap gap-2">
                            {fact.items.map((item, idx) => (
                              <Badge key={idx} variant="outline" className="border-woodland/30">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-woodland mb-1">Benefits:</h4>
                          <p className="text-kelp text-sm">{fact.benefits}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calories" className="space-y-6">
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="text-woodland">Daily Calorie Breakdown</CardTitle>
                  <p className="text-kelp">Based on a 1300-calorie balanced diet plan</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {calorieChart.map((meal, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-confetti/10 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-woodland">{meal.meal}</h4>
                          <p className="text-kelp text-sm">{meal.items}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-woodland">{meal.calories}</div>
                          <div className="text-kelp text-sm">kcal</div>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-woodland/20 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-woodland">Total Daily Calories</span>
                        <span className="text-3xl font-bold text-woodland">1300 kcal</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-woodland/20 bg-confetti/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-woodland mb-4">Nutrition Tips</h3>
                  <ul className="space-y-2 text-kelp">
                    <li>• Drink 8-10 glasses of water daily</li>
                    <li>• Include a variety of colorful vegetables in your meals</li>
                    <li>• Choose whole grains over refined carbohydrates</li>
                    <li>• Have your last meal at least 2-3 hours before bedtime</li>
                    <li>• Include healthy snacks between meals to maintain energy levels</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NutritionInfo;
