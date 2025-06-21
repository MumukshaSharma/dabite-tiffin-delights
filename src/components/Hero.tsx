
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LocationBasedSuggestions from "./LocationBasedSuggestions";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-primary-bg to-secondary-accent/20 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
            Fresh, Healthy
            <span className="text-primary-accent block">Tiffin Delivered</span>
            <span className="text-cta-color">to Your Doorstep</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience authentic home-cooked meals with our premium tiffin service. 
            Nutritious, delicious, and delivered fresh every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-cta-color hover:bg-cta-color/90 text-white px-8 py-3 text-lg font-medium"
              onClick={() => navigate('/menu')}
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white px-8 py-3 text-lg"
              onClick={() => navigate('/watch-story')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-accent mb-1">50K+</div>
              <div className="text-sm text-text-dark/70">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-accent mb-1">100+</div>
              <div className="text-sm text-text-dark/70">Partner Kitchens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-accent mb-1">15</div>
              <div className="text-sm text-text-dark/70">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-accent mb-1">4.8★</div>
              <div className="text-sm text-text-dark/70">Average Rating</div>
            </div>
          </div>

          {/* Location-based Suggestions */}
          <LocationBasedSuggestions />
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${primary-accent.slice(1)}' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-5a5 5 0 110 10 5 5 0 010-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </div>
  );
};

export default Hero;
