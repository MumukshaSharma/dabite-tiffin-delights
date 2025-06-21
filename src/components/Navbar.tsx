
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, User, Star, CreditCard, Heart, Clock, Gift, LogOut, Settings, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LocationDisplay from './LocationDisplay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const mobileMenuItems = [
    { icon: Utensils, label: 'Menu', action: () => navigate('/menu') },
    { icon: Star, label: 'Subscription', action: () => navigate('/subscription') },
    { icon: User, label: 'Account', action: () => {} },
    { icon: Settings, label: 'Settings', action: () => {} },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary-bg/95 backdrop-blur-sm border-b border-secondary-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-display font-bold text-primary-accent cursor-pointer" onClick={() => navigate('/home')}>
              Dabite
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Location Display */}
            <LocationDisplay />

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-accent/60" />
              <Input
                placeholder="Search for food, kitchen..."
                className="pl-10 w-80 border-secondary-accent/50 focus:border-primary-accent bg-primary-bg"
              />
            </div>

            {/* Account Dropdown */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 bg-primary-bg border-secondary-accent" align="end">
                  {accountMenuItems.map((section, sectionIndex) => (
                    <div key={section.section}>
                      <DropdownMenuLabel className="text-xs text-text-dark/60 uppercase tracking-wide">
                        {section.section}
                      </DropdownMenuLabel>
                      {section.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <DropdownMenuItem 
                            key={itemIndex}
                            className="flex items-center space-x-3 py-3 cursor-pointer hover:bg-secondary-accent/20"
                            onClick={item.action}
                          >
                            <Icon className="h-4 w-4 text-primary-accent" />
                            <div className="flex-1">
                              <div className="font-medium text-text-dark">{item.label}</div>
                              {item.sublabel && (
                                <div className="text-xs text-text-dark/60">{item.sublabel}</div>
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
                className="text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20"
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
                  <Menu className="h-6 w-6 text-primary-accent" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-primary-bg w-80 border-secondary-accent">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Location */}
                  <div className="pb-4 border-b border-secondary-accent/30">
                    <LocationDisplay />
                  </div>

                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-accent/60" />
                    <Input
                      placeholder="Search for food, kitchen..."
                      className="pl-10 border-secondary-accent/50 focus:border-primary-accent bg-primary-bg"
                    />
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="space-y-2">
                    {mobileMenuItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Button 
                          key={index}
                          variant="ghost" 
                          className="w-full justify-start text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20"
                          onClick={item.action}
                        >
                          <Icon className="h-5 w-5 mr-3" />
                          {item.label}
                        </Button>
                      );
                    })}
                  </div>

                  {isLoggedIn && (
                    <div className="space-y-2 pt-4 border-t border-secondary-accent/30">
                      <Button variant="ghost" className="w-full justify-start text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20">
                        <Clock className="h-5 w-5 mr-3" />
                        Order History
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-primary-accent hover:text-primary-accent/80 hover:bg-secondary-accent/20">
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
