
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, MessageCircle, Clock, CreditCard, Truck, Shield, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqs = [
    {
      id: 'subscription',
      icon: <CreditCard className="h-5 w-5" />,
      question: "How does the subscription work?",
      answer: "Our subscription plans give you access to unlimited meals for a month. Choose from Dabba Lite (20 meals), Dabba Max (30 meals), or Protein Pack (30 high-protein meals). You can pause, modify, or cancel anytime."
    },
    {
      id: 'delivery',
      icon: <Truck className="h-5 w-5" />,
      question: "What are the delivery timings?",
      answer: "We deliver lunch between 12:00 PM - 2:00 PM and dinner between 7:00 PM - 9:00 PM. You can schedule your deliveries up to 7 days in advance through our app."
    },
    {
      id: 'refund',
      icon: <Shield className="h-5 w-5" />,
      question: "What is your refund policy?",
      answer: "If you're not satisfied with your meal, we offer a full refund within 2 hours of delivery. For subscription cancellations, we provide pro-rated refunds for unused days."
    },
    {
      id: 'areas',
      icon: <Truck className="h-5 w-5" />,
      question: "Which areas do you deliver to?",
      answer: "We currently deliver to all major college areas, PG accommodations, and hostels in the city. Check our app for specific pin code availability in your area."
    },
    {
      id: 'customization',
      icon: <Users className="h-5 w-5" />,
      question: "Can I customize my meals?",
      answer: "Yes! You can set dietary preferences (Veg/Non-Veg/Jain/Gluten-Free) and cuisine preferences. We also accommodate special requests like extra spice, less oil, etc."
    },
    {
      id: 'quality',
      icon: <Shield className="h-5 w-5" />,
      question: "How do you ensure food quality and hygiene?",
      answer: "All our partner kitchens are verified home kitchens that follow strict hygiene standards. We regularly audit our kitchens and maintain cold chain delivery to ensure fresh, safe meals."
    }
  ];

  const categories = [
    { icon: <CreditCard className="h-6 w-6" />, title: "Subscription & Billing", count: 8 },
    { icon: <Truck className="h-6 w-6" />, title: "Delivery & Timing", count: 6 },
    { icon: <Users className="h-6 w-6" />, title: "Food & Customization", count: 5 },
    { icon: <Shield className="h-6 w-6" />, title: "Safety & Quality", count: 4 }
  ];

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-kelp text-lg">
              Find answers to common questions about Dabite's services
            </p>
          </div>

          {/* Quick Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((category, index) => (
              <Card key={index} className="border-woodland/20 hover:border-woodland/40 transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-woodland mb-2 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-woodland text-sm mb-1">{category.title}</h3>
                  <p className="text-xs text-kelp">{category.count} questions</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id} className="border-woodland/20">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <CardHeader className="hover:bg-confetti/5 transition-colors duration-200">
                      <CardTitle className="flex items-center justify-between text-left">
                        <div className="flex items-center space-x-3">
                          <div className="text-woodland">
                            {faq.icon}
                          </div>
                          <span className="text-woodland">{faq.question}</span>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-woodland transition-transform duration-200 ${
                            openItems.includes(faq.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </CardTitle>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-kelp leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <Card className="mt-12 border-woodland/20 bg-confetti/10">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-woodland mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-woodland mb-2">
                Still have questions?
              </h3>
              <p className="text-kelp mb-4">
                Our support team is here to help you 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-kelp">
                  <Clock className="h-4 w-4" />
                  <span>Response time: Under 2 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
