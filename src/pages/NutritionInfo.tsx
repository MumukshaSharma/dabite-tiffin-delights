import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Target, Zap, Heart, Dumbbell, Apple, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NutritionInfo = () => {
  const dietPlans = [
    {
      name: "Weight Loss Plan",
      calories: "1200-1500 kcal",
      protein: "80-100g",
      carbs: "120-150g",
      fats: "40-60g",
      icon: <Target className="h-6 w-6" />,
      color: "bg-green-500",
      meals: ["Oats with fruits", "Grilled chicken salad", "Vegetable curry with quinoa"]
    },
    {
      name: "Muscle Building",
      calories: "2000-2500 kcal",
      protein: "150-200g",
      carbs: "200-300g",
      fats: "70-100g",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "bg-red-500",
      meals: ["Protein pancakes", "Chicken rice bowl", "Fish with sweet potato"]
    },
    {
      name: "Maintenance",
      calories: "1800-2000 kcal",
      protein: "100-130g",
      carbs: "180-220g",
      fats: "60-80g",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-blue-500",
      meals: ["Balanced breakfast", "Mixed dal rice", "Grilled vegetables"]
    },
    {
      name: "High Energy",
      calories: "2500-3000 kcal",
      protein: "120-150g",
      carbs: "300-400g",
      fats: "80-120g",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-orange-500",
      meals: ["Energy smoothie", "Pasta with meat", "Nuts and dried fruits"]
    }
  ];

  const nutritionFacts = [
    { nutrient: "Protein", amount: "25g", daily: 85, color: "bg-red-400" },
    { nutrient: "Carbs", amount: "45g", daily: 65, color: "bg-blue-400" },
    { nutrient: "Fats", amount: "12g", daily: 40, color: "bg-yellow-400" },
    { nutrient: "Fiber", amount: "8g", daily: 90, color: "bg-green-400" }
  ];

  const mealCategories = [
    {
      category: "Breakfast",
      time: "7:00 AM - 10:00 AM",
      calories: "300-500 kcal",
      options: ["Poha with vegetables", "Upma", "Paratha with curd", "Oats porridge"]
    },
    {
      category: "Lunch",
      time: "12:00 PM - 2:00 PM",
      calories: "400-700 kcal",
      options: ["Dal rice combo", "Rajma chawal", "Chicken curry", "Mixed vegetables"]
    },
    {
      category: "Snacks",
      time: "4:00 PM - 6:00 PM",
      calories: "150-300 kcal",
      options: ["Fruit bowl", "Nuts mix", "Samosa", "Tea with biscuits"]
    },
    {
      category: "Dinner",
      time: "7:00 PM - 9:00 PM",
      calories: "400-600 kcal",
      options: ["Light curry with roti", "Soup with bread", "Fish with rice", "Vegetable pulao"]
    }
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
            <p className="text-lg text-kelp max-w-2xl mx-auto">
              Discover balanced meal plans and nutrition facts to fuel your body right
            </p>
          </div>

          {/* Diet Plans */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-woodland mb-6">Diet Plans</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dietPlans.map((plan, index) => (
                <Card key={index} className="border-woodland/20 hover:border-woodland/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center text-white mx-auto mb-2`}>
                      {plan.icon}
                    </div>
                    <CardTitle className="text-lg text-woodland">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-woodland">{plan.calories}</div>
                      <div className="text-sm text-kelp">per day</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-kelp">Protein</span>
                        <span className="font-medium text-woodland">{plan.protein}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-kelp">Carbs</span>
                        <span className="font-medium text-woodland">{plan.carbs}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-kelp">Fats</span>
                        <span className="font-medium text-woodland">{plan.fats}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-woodland mb-2">Sample Meals:</h5>
                      <ul className="text-xs text-kelp space-y-1">
                        {plan.meals.map((meal, mealIndex) => (
                          <li key={mealIndex}>• {meal}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calorie Chart */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-woodland mb-6">Daily Calorie Breakdown</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle>Nutrition Facts (Per Meal)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nutritionFacts.map((fact, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-woodland font-medium">{fact.nutrient}</span>
                        <span className="text-kelp">{fact.amount}</span>
                      </div>
                      <Progress value={fact.daily} className="h-2" />
                      <div className="text-xs text-kelp text-right">{fact.daily}% Daily Value</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-woodland/20 bg-confetti/10">
                <CardHeader>
                  <CardTitle>Calorie Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-woodland">2000</div>
                      <div className="text-kelp">Daily Calories</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-woodland">Breakfast</span>
                        <Badge variant="secondary">25%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-woodland">Lunch</span>
                        <Badge variant="secondary">35%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-woodland">Snacks</span>
                        <Badge variant="secondary">15%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-woodland">Dinner</span>
                        <Badge variant="secondary">25%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Meal Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold text-woodland mb-6">Meal Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mealCategories.map((category, index) => (
                <Card key={index} className="border-woodland/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-woodland">{category.category}</CardTitle>
                      <Badge variant="outline">{category.calories}</Badge>
                    </div>
                    <div className="text-sm text-kelp">{category.time}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {category.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="p-2 bg-confetti/10 rounded text-sm text-woodland">
                          {option}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Health Tips */}
          <Card className="border-woodland/20 bg-woodland text-stark-white">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Apple className="h-8 w-8" />
                <h3 className="text-2xl font-display font-bold">Healthy Eating Tips</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">For Students:</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Eat regular meals to maintain energy levels</li>
                    <li>• Include protein in every meal for brain function</li>
                    <li>• Stay hydrated with 8-10 glasses of water daily</li>
                    <li>• Choose whole grains over refined foods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">General Guidelines:</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Balance all food groups in your meals</li>
                    <li>• Limit processed and fried foods</li>
                    <li>• Include fruits and vegetables daily</li>
                    <li>• Practice portion control</li>
                  </ul>
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

export default NutritionInfo;
