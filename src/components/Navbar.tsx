
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, MapPin, User, Star, CreditCard, Heart, Clock, Gift, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Select Location');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const accountMenuItems = [
    { 
      section: 'Subscription',
      items: [
        { icon: Star, label: 'Active Plan: Dabba Max', sublabel: '15 days left', action: () => navigate('/subscription') }
      ]
    },
    {
      section: 'Personal',
      items: [
        { icon: MapPin, label: 'Saved Addresses', action: () => navigate('/addresses') },
        { icon: CreditCard, label: 'Payment Methods', sublabel: '2 cards added' },
        { icon: Gift, label: 'Available Vouchers', sublabel: '3 active' },
        { icon: Heart, label: 'Favorite Kitchens', sublabel: '5 saved' }
      ]
    },
    {
      section: 'History & Rewards',
      items: [
        { icon: Clock, label: 'Order History', action: () => navigate('/order-tracking') },
        { icon: Star, label: 'Reward Points', sublabel: '240 points' }
      ]
    },
    {
      section: 'Account',
      items: [
        { icon: Settings, label: 'Account Settings' },
        { icon: LogOut, label: 'Logout', action: () => setIsLoggedIn(false) }
      ]
    }
  ];

  return (
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
          <div className="hidden lg:flex items-center space-x-6">
            {/* Location Picker */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-kelp hover:text-woodland">
                  <MapPin className="h-4 w-4 mr-2" />
                  {location}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Location</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setLocation('Delhi NCR')}>Delhi NCR</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation('Mumbai')}>Mumbai</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation('Bangalore')}>Bangalore</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation('Pune')}>Pune</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-kelp/60" />
              <Input
                placeholder="Search for food, kitchen..."
                className="pl-10 w-80 border-woodland/30 focus:border-woodland"
              />
            </div>

            {/* Account Dropdown */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-kelp hover:text-woodland">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72" align="end">
                  {accountMenuItems.map((section, sectionIndex) => (
                    <div key={section.section}>
                      <DropdownMenuLabel className="text-xs text-kelp/60 uppercase tracking-wide">
                        {section.section}
                      </DropdownMenuLabel>
                      {section.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <DropdownMenuItem 
                            key={itemIndex}
                            className="flex items-center space-x-3 py-3 cursor-pointer"
                            onClick={item.action}
                          >
                            <Icon className="h-4 w-4 text-woodland" />
                            <div className="flex-1">
                              <div className="font-medium text-woodland">{item.label}</div>
                              {item.sublabel && (
                                <div className="text-xs text-kelp/60">{item.sublabel}</div>
                              )}
                            </div>
                          </DropdownMenuItem>
                        );
                      })}
                      {sectionIndex < accountMenuItems.length - 1 && <DropdownMenuSeparator />}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                className="text-kelp hover:text-woodland"
                onClick={() => navigate('/')}
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6 text-woodland" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-stark-white w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-kelp/60" />
                    <Input
                      placeholder="Search for food, kitchen..."
                      className="pl-10 border-woodland/30 focus:border-woodland"
                    />
                  </div>

                  {/* Mobile Location */}
                  <Button variant="ghost" className="w-full justify-start text-kelp hover:text-woodland">
                    <MapPin className="h-5 w-5 mr-3" />
                    {location}
                  </Button>

                  {isLoggedIn && (
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-kelp hover:text-woodland">
                        <Star className="h-5 w-5 mr-3" />
                        Active Subscription
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-kelp hover:text-woodland">
                        <Clock className="h-5 w-5 mr-3" />
                        Order History
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-kelp hover:text-woodland">
                        <Heart className="h-5 w-5 mr-3" />
                        Favorites
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
