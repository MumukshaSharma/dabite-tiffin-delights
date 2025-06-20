
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-kelp max-w-2xl mx-auto">
              Have questions about our service? We're here to help you with anything you need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-woodland/20">
              <CardHeader>
                <CardTitle className="text-2xl text-woodland flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-woodland mb-2">First Name</label>
                    <Input placeholder="Enter your first name" className="border-woodland/30 focus:border-woodland" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-woodland mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" className="border-woodland/30 focus:border-woodland" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-woodland mb-2">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-woodland/30 focus:border-woodland" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-woodland mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="border-woodland/30 focus:border-woodland" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-woodland mb-2">Subject</label>
                  <Input placeholder="What's this about?" className="border-woodland/30 focus:border-woodland" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-woodland mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={5}
                    className="border-woodland/30 focus:border-woodland resize-none"
                  />
                </div>
                
                <Button className="w-full bg-woodland hover:bg-kelp text-stark-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-woodland/20 bg-confetti/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-display font-bold text-woodland mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-woodland rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-stark-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-woodland">Address</h4>
                        <p className="text-kelp">Delhi NCR, India</p>
                        <p className="text-kelp text-sm">Serving across major metro cities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-woodland rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-stark-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-woodland">Phone</h4>
                        <p className="text-kelp">+91 98765 43210</p>
                        <p className="text-kelp text-sm">Mon-Sun, 8:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-woodland rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-stark-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-woodland">Email</h4>
                        <p className="text-kelp">hello@dabite.com</p>
                        <p className="text-kelp text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-woodland rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-stark-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-woodland">Business Hours</h4>
                        <p className="text-kelp">Monday - Sunday</p>
                        <p className="text-kelp text-sm">8:00 AM - 10:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-woodland/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-display font-bold text-woodland mb-6">Quick Help</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start border-woodland/30 text-woodland hover:bg-woodland hover:text-stark-white">
                      FAQs - Common Questions
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-woodland/30 text-woodland hover:bg-woodland hover:text-stark-white">
                      Order Tracking
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-woodland/30 text-woodland hover:bg-woodland hover:text-stark-white">
                      Subscription Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-woodland/30 text-woodland hover:bg-woodland hover:text-stark-white">
                      Kitchen Partner Program
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-woodland/20">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-r from-woodland/10 to-kelp/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-woodland mx-auto mb-4" />
                      <h4 className="font-semibold text-woodland">Service Areas</h4>
                      <p className="text-kelp text-sm">Available in Delhi NCR, Mumbai, Bangalore, Pune</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
