
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import { useLocation } from '@/hooks/useLocation';

const LocationDisplay = () => {
  const { location, isLoading, error, requestLocation, hasPermission } = useLocation();
  const [selectedCity, setSelectedCity] = useState<string>('');

  const popularCities = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Pune',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Jaipur',
    'Ahmedabad',
    'Surat'
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const displayLocation = location?.city && location?.state 
    ? `${location.city}, ${location.state}`
    : selectedCity || 'Select Location';

  return (
    <div className="flex items-center space-x-2">
      {/* Auto-detect location button */}
      {!location && hasPermission !== false && (
        <Button
          variant="ghost"
          size="sm"
          onClick={requestLocation}
          disabled={isLoading}
          className="text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
          {isLoading ? 'Detecting...' : 'Detect Location'}
        </Button>
      )}

      {/* Location display / manual selection */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20 max-w-[200px] justify-start"
          >
            <MapPin className="h-4 w-4 mr-2" />
            <span className="truncate">
              {location ? `Delivering to: ${displayLocation}` : displayLocation}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-primary-bg border-secondary-accent">
          <div className="p-2">
            <p className="text-xs text-text-dark/60 mb-2">Popular Cities</p>
            {popularCities.map((city) => (
              <DropdownMenuItem 
                key={city}
                onClick={() => handleCitySelect(city)}
                className="cursor-pointer hover:bg-secondary-accent/20"
              >
                {city}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Error indicator */}
      {error && hasPermission === false && (
        <div className="flex items-center text-xs text-cta-color">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span className="hidden sm:inline">Location access denied</span>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
