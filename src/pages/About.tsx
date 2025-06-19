
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Target, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-woodland mb-4">Our Story</h1>
            <p className="text-lg text-kelp max-w-2xl mx-auto">
              How two friends turned their college food struggles into a solution that feeds thousands of students across India
            </p>
          </div>

          {/* Story */}
          <Card className="border-woodland/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-woodland">The Beginning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-kelp">
              <p>
                It was a typical Tuesday evening in our college hostel. Arjun and I were sitting in our cramped room, 
                staring at our empty wallets and growling stomachs. We had just spent our entire month's allowance on 
                expensive food deliveries and unnecessary purchases. Sound familiar?
              </p>
              
              <p>
                "Why does eating have to be so expensive?" Arjun sighed, scrolling through food delivery apps showing 
                ₹300+ meals. "My mom's dal rice costs her ₹50 to make, but here it's ₹250!"
              </p>
              
              <p>
                That's when it hit us. College students across India were facing the same dilemma – choosing between 
                expensive restaurant food or unhealthy instant noodles. We realized that while buying clothes and gadgets 
                at the same time seemed normal, spending ₹500+ daily on food was unsustainable for most students.
              </p>
              
              <p>
                We started asking around our campus: "What if you could get fresh, homemade-style meals delivered daily 
                for just ₹99?" The response was overwhelming. Everyone wanted it, but nobody was providing it.
              </p>
              
              <p>
                <strong className="text-woodland">That's how Dabite was born.</strong> Not in a fancy boardroom, but in a hostel room, 
                from the genuine need of two broke college students who missed home-cooked food but couldn't afford 
                expensive alternatives.
              </p>
            </CardContent>
          </Card>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-woodland/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-woodland" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-kelp">
                <p>
                  To make nutritious, homestyle meals accessible and affordable for every college student and young 
                  professional. We believe good food shouldn't be a luxury – it should be a basic right.
                </p>
              </CardContent>
            </Card>

            <Card className="border-woodland/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-woodland" />
                  <span>Our Values</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-kelp">
                <ul className="space-y-2">
                  <li>• Affordability without compromising quality</li>
                  <li>• Fresh, hygienic preparation always</li>
                  <li>• Supporting local home chefs</li>
                  <li>• Building community through food</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Founders */}
          <Card className="border-woodland/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-woodland">Meet the Founders</CardTitle>
              <CardDescription>Two friends who turned hunger into innovation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-confetti/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="font-bold text-woodland mb-2">Arjun Sharma</h3>
                  <p className="text-sm text-kelp mb-2">Co-Founder & CEO</p>
                  <p className="text-sm text-kelp">
                    Computer Science graduate who codes by day and dreams of perfect dal-chawal by night. 
                    Handles tech and operations.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-confetti/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍🍳</span>
                  </div>
                  <h3 className="font-bold text-woodland mb-2">Rohit Kumar</h3>
                  <p className="text-sm text-kelp mb-2">Co-Founder & COO</p>
                  <p className="text-sm text-kelp">
                    Management graduate with a passion for food and community building. 
                    Takes care of kitchen partnerships and customer experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-woodland/20 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-woodland" />
                <span>Our Journey So Far</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-woodland mb-2">50,000+</div>
                  <p className="text-kelp">Meals Delivered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-woodland mb-2">5,000+</div>
                  <p className="text-kelp">Happy Students</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-woodland mb-2">25+</div>
                  <p className="text-kelp">Partner Kitchens</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-woodland mb-2">8</div>
                  <p className="text-kelp">Cities Covered</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-woodland mb-4">Join Our Mission</h2>
            <p className="text-kelp mb-6">
              Help us make good food accessible to every student. Whether you're a customer, partner chef, 
              or investor – let's build this together.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="bg-confetti/20 text-woodland px-4 py-2">
                #FoodForAll
              </Badge>
              <Badge variant="secondary" className="bg-confetti/20 text-woodland px-4 py-2">
                #StudentLife
              </Badge>
              <Badge variant="secondary" className="bg-confetti/20 text-woodland px-4 py-2">
                #HomeCooking
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
