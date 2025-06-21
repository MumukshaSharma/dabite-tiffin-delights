
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
    <div className="mt-6 sm:mt-8">
      <div className="flex items-center justify-center mb-4">
        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-accent mr-2" />
        <h3 className="text-base sm:text-lg font-semibold text-text-dark">
          Popular in {location.city}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {suggestions.map((item, index) => (
          <Card key={index} className="border-secondary-accent/30 hover:shadow-md transition-shadow bg-primary-bg">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h4 className="font-medium text-text-dark text-sm sm:text-base mb-1 sm:mb-0">{item.kitchen}</h4>
                <Badge variant="outline" className="text-xs border-primary-accent text-primary-accent self-start">
                  {item.distance}
                </Badge>
              </div>
              
              <p className="text-xs sm:text-sm text-text-dark/70 mb-3">{item.specialty}</p>
              
              <div className="flex items-center justify-between text-xs text-text-dark/60">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-highlight mr-1" />
                  {item.rating}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span className="hidden sm:inline">{item.deliveryTime}</span>
                  <span className="sm:hidden">{item.deliveryTime.split(' ')[0]}</span>
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
