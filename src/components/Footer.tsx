
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Subscription Plans', href: '/subscription' },
    { name: 'Track Order', href: '/track' },
    { name: 'Contact', href: '/contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'FSSAI License', href: '/fssai' },
    { name: 'Nutritional Info', href: '/nutrition' }
  ];

  const cities = [
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 
    'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  return (
    <footer className="bg-kelp text-stark-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-confetti mb-3">
                Dabite
              </h2>
              <p className="text-stark-white/80 leading-relaxed">
                Bringing the taste of home to students and professionals across India. 
                Fresh, hygienic, and affordable meals delivered daily.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-confetti" />
                <span className="text-stark-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-confetti" />
                <span className="text-stark-white/90">hello@dabite.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-confetti" />
                <span className="text-stark-white/90">Mon-Sun: 7:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stark-white/10 rounded-full flex items-center justify-center hover:bg-confetti hover:text-woodland transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stark-white/10 rounded-full flex items-center justify-center hover:bg-confetti hover:text-woodland transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stark-white/10 rounded-full flex items-center justify-center hover:bg-confetti hover:text-woodland transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stark-white/10 rounded-full flex items-center justify-center hover:bg-confetti hover:text-woodland transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-confetti mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-stark-white/80 hover:text-confetti transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-semibold text-confetti mb-6">Policies & Info</h3>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a 
                    href={policy.href} 
                    className="text-stark-white/80 hover:text-confetti transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities We Serve */}
          <div>
            <h3 className="text-xl font-semibold text-confetti mb-6">
              <MapPin className="inline h-5 w-5 mr-2" />
              Cities We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <Badge 
                  key={city} 
                  variant="secondary" 
                  className="bg-stark-white/10 text-stark-white hover:bg-confetti hover:text-woodland transition-all duration-300 cursor-pointer"
                >
                  {city}
                </Badge>
              ))}
            </div>
            <p className="text-stark-white/60 text-sm mt-4">
              More cities coming soon! Stay tuned.
            </p>
          </div>
        </div>

        <Separator className="bg-stark-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-stark-white/70 text-sm">
              © 2024 Dabite. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-stark-white/60 text-sm">
              <span>FSSAI Lic. No: 12345678901234</span>
              <span>GST: 07AABCD1234E1Z5</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-500 text-white">
              ✓ FSSAI Certified
            </Badge>
            <Badge className="bg-blue-500 text-white">
              🔒 Secure Payments
            </Badge>
            <Badge className="bg-orange-500 text-white">
              🚚 Fast Delivery
            </Badge>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 bg-stark-white/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-confetti mb-3">
            Stay Updated with Dabite
          </h3>
          <p className="text-stark-white/80 mb-6">
            Get the latest menu updates, offers, and nutrition tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-stark-white/10 border border-stark-white/20 text-stark-white placeholder-stark-white/60 focus:outline-none focus:ring-2 focus:ring-confetti"
            />
            <button className="px-6 py-3 bg-confetti text-woodland font-semibold rounded-lg hover:bg-canary transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
