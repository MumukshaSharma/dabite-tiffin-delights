
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, User, MapPin } from 'lucide-react';
import AuthDialog from '@/components/auth/AuthDialog';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Menu', href: '/menu' },
    { name: 'Subscription', href: '/subscription' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    navigate('/onboarding');
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-stark-white/95 backdrop-blur-sm border-b border-woodland/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-display font-bold text-woodland cursor-pointer" onClick={() => navigate('/home')}>
                Dabite
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-6 xl:space-x-8">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink 
                        href={item.href}
                        className="text-kelp hover:text-woodland transition-colors duration-200 font-medium text-sm xl:text-base px-2"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-kelp hover:text-woodland text-xs lg:text-sm px-2 lg:px-3"
                onClick={() => navigate('/addresses')}
              >
                <MapPin className="h-4 w-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Address</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-kelp hover:text-woodland text-xs lg:text-sm px-2 lg:px-3">
                <ShoppingCart className="h-4 w-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Cart</span>
              </Button>
              {isLoggedIn ? (
                <Button variant="ghost" size="sm" className="text-kelp hover:text-woodland text-xs lg:text-sm px-2 lg:px-3">
                  <User className="h-4 w-4 mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">Profile</span>
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-kelp hover:text-woodland text-xs lg:text-sm px-2 lg:px-3"
                  onClick={handleLoginClick}
                >
                  <User className="h-4 w-4 mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">Login</span>
                </Button>
              )}
              <Button 
                className="bg-woodland hover:bg-kelp text-stark-white text-xs lg:text-sm px-3 lg:px-4" 
                size="sm"
                onClick={() => navigate('/subscription')}
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6 text-woodland" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-stark-white w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg text-kelp hover:text-woodland transition-colors duration-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="pt-4 border-t border-woodland/10 space-y-4">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-kelp hover:text-woodland text-base"
                        onClick={() => {
                          navigate('/addresses');
                          setIsOpen(false);
                        }}
                      >
                        <MapPin className="h-5 w-5 mr-3" />
                        Address
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-kelp hover:text-woodland text-base">
                        <ShoppingCart className="h-5 w-5 mr-3" />
                        Cart
                      </Button>
                      {isLoggedIn ? (
                        <Button variant="ghost" className="w-full justify-start text-kelp hover:text-woodland text-base">
                          <User className="h-5 w-5 mr-3" />
                          Profile
                        </Button>
                      ) : (
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-kelp hover:text-woodland text-base"
                          onClick={() => {
                            handleLoginClick();
                            setIsOpen(false);
                          }}
                        >
                          <User className="h-5 w-5 mr-3" />
                          Login
                        </Button>
                      )}
                      <Button 
                        className="w-full bg-woodland hover:bg-kelp text-stark-white text-base"
                        onClick={() => {
                          navigate('/subscription');
                          setIsOpen(false);
                        }}
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <AuthDialog 
        open={authOpen} 
        onOpenChange={setAuthOpen} 
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Navbar;
