
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LocationBasedSuggestions from "./LocationBasedSuggestions";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-primary-bg to-secondary-accent/20 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-dark mb-4 sm:mb-6 leading-tight">
            Fresh, Healthy
            <span className="text-primary-accent block mt-1 sm:mt-2">Tiffin Delivered</span>
            <span className="text-cta-color">to Your Doorstep</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Experience authentic home-cooked meals with our premium tiffin service. 
            Nutritious, delicious, and delivered fresh every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-cta-color hover:bg-cta-color/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium"
              onClick={() => navigate('/menu')}
            >
              Order Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
              onClick={() => navigate('/watch-story')}
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 px-2">
            <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-accent mb-1">50K+</div>
              <div className="text-xs sm:text-sm text-text-dark/70">Happy Customers</div>
            </div>
            <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-accent mb-1">100+</div>
              <div className="text-xs sm:text-sm text-text-dark/70">Partner Kitchens</div>
            </div>
            <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-accent mb-1">15</div>
              <div className="text-xs sm:text-sm text-text-dark/70">Cities Served</div>
            </div>
            <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4 lg:p-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-accent mb-1">4.8★</div>
              <div className="text-xs sm:text-sm text-text-dark/70">Average Rating</div>
            </div>
          </div>

          {/* Location-based Suggestions */}
          <div className="px-2">
            <LocationBasedSuggestions />
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233E4E42' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-5a5 5 0 110 10 5 5 0 010-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </div>
  );
};

export default Hero;
