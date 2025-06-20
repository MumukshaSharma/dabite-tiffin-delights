
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stark-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-woodland/20 mb-4">404</div>
          <h1 className="text-3xl font-display font-bold text-woodland mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-kelp mb-8">
            The page you're looking for seems to have wandered off like a hungry student looking for food!
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/home')} 
            className="w-full bg-woodland hover:bg-kelp text-stark-white"
          >
            <Home className="h-4 w-4 mr-2" />
            Go to Home
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="w-full border-woodland/30 text-woodland hover:bg-woodland hover:text-stark-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/menu')}
            className="w-full text-kelp hover:text-woodland"
          >
            <Search className="h-4 w-4 mr-2" />
            Browse Menu
          </Button>
        </div>

        <div className="mt-12 p-6 bg-confetti/10 rounded-lg">
          <h3 className="font-semibold text-woodland mb-2">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <button 
              onClick={() => navigate('/about')}
              className="block text-kelp hover:text-woodland transition-colors"
            >
              About Dabite
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="block text-kelp hover:text-woodland transition-colors"
            >
              Contact Support
            </button>
            <button 
              onClick={() => navigate('/faq')}
              className="block text-kelp hover:text-woodland transition-colors"
            >
              Help & FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
