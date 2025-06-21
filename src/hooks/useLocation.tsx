
import { useState, useEffect } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
}

interface UseLocationReturn {
  location: LocationData | null;
  isLoading: boolean;
  error: string | null;
  requestLocation: () => void;
  hasPermission: boolean | null;
}

export const useLocation = (): UseLocationReturn => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const reverseGeocode = async (lat: number, lng: number): Promise<LocationData> => {
    try {
      // Using OpenCage Geocoding API (free tier available)
      // For production, you should use environment variables for the API key
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=YOUR_OPENCAGE_API_KEY`
      );
      
      if (!response.ok) {
        throw new Error('Geocoding failed');
      }
      
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const components = result.components;
        
        return {
          latitude: lat,
          longitude: lng,
          address: result.formatted,
          city: components.city || components.town || components.village || 'Unknown City',
          state: components.state || 'Unknown State'
        };
      } else {
        throw new Error('No location found');
      }
    } catch (err) {
      console.error('Reverse geocoding error:', err);
      // Fallback to mock data for demo purposes
      return {
        latitude: lat,
        longitude: lng,
        address: 'Current Location',
        city: 'Your City',
        state: 'Your State'
      };
    }
  };

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setHasPermission(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const locationData = await reverseGeocode(latitude, longitude);
          setLocation(locationData);
          setHasPermission(true);
          
          // Store in localStorage for persistence
          localStorage.setItem('userLocation', JSON.stringify(locationData));
        } catch (err) {
          setError('Failed to get location details');
          console.error('Location error:', err);
        } finally {
          setIsLoading(false);
        }
      },
      (err) => {
        setIsLoading(false);
        setHasPermission(false);
        
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError('Location access denied by user');
            break;
          case err.POSITION_UNAVAILABLE:
            setError('Location information unavailable');
            break;
          case err.TIMEOUT:
            setError('Location request timed out');
            break;
          default:
            setError('An unknown error occurred');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  useEffect(() => {
    // Check for stored location on mount
    const storedLocation = localStorage.getItem('userLocation');
    if (storedLocation) {
      try {
        setLocation(JSON.parse(storedLocation));
      } catch (err) {
        console.error('Failed to parse stored location:', err);
      }
    }
  }, []);

  return {
    location,
    isLoading,
    error,
    requestLocation,
    hasPermission
  };
};
