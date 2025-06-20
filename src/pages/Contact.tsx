
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "hello@dabite.com",
      description: "Drop us a line anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon to Fri 9am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "Delhi NCR, India",
      description: "Our headquarters"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "24/7 Service",
      description: "Always here for you"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Customer Support",
      description: "Get help with your orders and account",
      action: "Chat Now"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partner with Us",
      description: "Join our network of home kitchens",
      action: "Apply Now"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Kitchen Onboarding",
      description: "Start cooking and earning with Dabite",
      action: "Get Started"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              We're here to help! Reach out to us for any questions, support, or partnership opportunities.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-woodland/20 hover:border-woodland/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-woodland mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="font-semibold text-woodland mb-2">{option.title}</h3>
                  <p className="text-kelp text-sm mb-4">{option.description}</p>
                  <Button className="bg-woodland hover:bg-kelp text-stark-white">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-woodland/20">
              <CardHeader>
                <CardTitle className="text-woodland">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-woodland mb-2">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-woodland/30 focus:border-woodland"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-woodland mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="border-woodland/30 focus:border-woodland"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-woodland mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-woodland/30 focus:border-woodland"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-woodland mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-woodland/30 focus:border-woodland"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-woodland mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your query..."
                      rows={5}
                      className="border-woodland/30 focus:border-woodland"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-woodland hover:bg-kelp text-stark-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="text-woodland">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-woodland mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-woodland">{info.title}</h4>
                        <p className="text-kelp font-medium">{info.content}</p>
                        <p className="text-kelp text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-woodland/20">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-woodland/10 to-confetti/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-woodland mx-auto mb-2" />
                      <p className="text-woodland font-medium">Interactive Map</p>
                      <p className="text-kelp text-sm">Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Quick Link */}
              <Card className="border-woodland/20 bg-confetti/10">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-woodland mb-2">Need Quick Answers?</h4>
                  <p className="text-kelp text-sm mb-4">
                    Check our FAQ section for instant solutions to common questions.
                  </p>
                  <Button variant="outline" className="border-woodland text-woodland hover:bg-woodland hover:text-stark-white">
                    View FAQs
                  </Button>
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
