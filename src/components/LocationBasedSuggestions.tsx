
import { useLocation } from '@/hooks/useLocation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star } from 'lucide-react';

const LocationBasedSuggestions = () => {
  const { location } = useLocation();

  if (!location) return null;

  // Mock data based on location - in real app, this would come from an API
  const suggestions = [
    {
      kitchen: "Rajasthani Rasoi",
      specialty: "Authentic Dal Baati Churma",
      rating: 4.5,
      deliveryTime: "25-30 mins",
      distance: "1.2 km"
    },
    {
      kitchen: "Ghar Ka Khana",
      specialty: "Home-style Tiffin",
      rating: 4.3,
      deliveryTime: "20-25 mins", 
      distance: "0.8 km"
    },
    {
      kitchen: "Healthy Bites",
      specialty: "Nutritious Meal Plans",
      rating: 4.6,
      deliveryTime: "30-35 mins",
      distance: "2.1 km"
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-primary-accent mr-2" />
        <h3 className="text-lg font-semibold text-text-dark">
          Popular in {location.city}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((item, index) => (
          <Card key={index} className="border-secondary-accent/30 hover:shadow-md transition-shadow bg-primary-bg">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-text-dark">{item.kitchen}</h4>
                <Badge variant="outline" className="text-xs border-primary-accent text-primary-accent">
                  {item.distance}
                </Badge>
              </div>
              
              <p className="text-sm text-text-dark/70 mb-3">{item.specialty}</p>
              
              <div className="flex items-center justify-between text-xs text-text-dark/60">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-highlight mr-1" />
                  {item.rating}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {item.deliveryTime}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocationBasedSuggestions;
