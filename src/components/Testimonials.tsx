
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Engineering Student",
      college: "IIT Delhi",
      rating: 5,
      text: "Dabite has been a lifesaver! The food tastes just like home and fits perfectly within my budget. The dal chawal combo is my favorite - it's so comforting after long study sessions.",
      image: "👩‍🎓",
      subscription: "Monthly Plan"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Software Developer",
      company: "Bangalore",
      rating: 5,
      text: "Working from home made me realize how much I missed home-cooked meals. Dabite's subscription model is flexible and the food quality is consistently excellent. Highly recommended!",
      image: "👨‍💻",
      subscription: "Weekly Plan"
    },
    {
      id: 3,
      name: "Ananya Gupta",
      role: "Medical Student",
      college: "AIIMS",
      rating: 5,
      text: "As a medical student, I barely have time to cook. Dabite ensures I eat healthy, nutritious meals without compromising on taste. The delivery is always on time!",
      image: "👩‍⚕️",
      subscription: "Daily Plan"
    },
    {
      id: 4,
      name: "Arjun Patel",
      role: "MBA Student",
      college: "IIM Ahmedabad",
      rating: 5,
      text: "The variety in menu keeps things interesting. I love how they accommodate my dietary preferences. The value for money is unbeatable compared to restaurant food.",
      image: "👨‍🎓",
      subscription: "Monthly Plan"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      role: "Working Professional",
      company: "Hyderabad",
      rating: 4,
      text: "Moved to a new city for work and was struggling with food. Dabite felt like finding a piece of home. The South Indian specials are absolutely authentic!",
      image: "👩‍💼",
      subscription: "Weekly Plan"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-woodland text-stark-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-4xl">⭐</div>
        <div className="absolute top-20 right-20 text-3xl">💬</div>
        <div className="absolute bottom-20 left-20 text-5xl">❤️</div>
        <div className="absolute bottom-10 right-10 text-4xl">🎯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-confetti text-woodland px-4 py-2 text-sm font-medium mb-4">
            ❤️ Customer Love
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            What our customers say
          </h2>
          <p className="text-xl text-stark-white/80 max-w-3xl mx-auto">
            Join thousands of happy customers who have made Dabite their trusted food partner
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-stark-white/10 backdrop-blur-sm border-stark-white/20 overflow-hidden animate-scale-in">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  
                  {/* Customer Avatar & Info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-24 h-24 bg-confetti rounded-full flex items-center justify-center text-4xl mb-4 mx-auto lg:mx-0">
                      {testimonials[currentTestimonial].image}
                    </div>
                    <h3 className="text-xl font-semibold text-stark-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-stark-white/80 text-sm mb-2">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-stark-white/60 text-xs mb-3">
                      {testimonials[currentTestimonial].college || testimonials[currentTestimonial].company}
                    </p>
                    <Badge className="bg-canary text-woodland">
                      {testimonials[currentTestimonial].subscription}
                    </Badge>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <Quote className="h-8 w-8 text-confetti mr-3" />
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-canary text-canary" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg lg:text-xl leading-relaxed text-stark-white/90 text-center lg:text-left">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="text-stark-white hover:bg-stark-white/20 rounded-full p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-confetti scale-125' : 'bg-stark-white/30'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="text-stark-white hover:bg-stark-white/20 rounded-full p-2"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in">
            <div className="text-3xl lg:text-4xl font-bold text-confetti mb-2">98%</div>
            <p className="text-stark-white/80">Customer Satisfaction</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl lg:text-4xl font-bold text-confetti mb-2">4.8/5</div>
            <p className="text-stark-white/80">Average Rating</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl lg:text-4xl font-bold text-confetti mb-2">95%</div>
            <p className="text-stark-white/80">Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
