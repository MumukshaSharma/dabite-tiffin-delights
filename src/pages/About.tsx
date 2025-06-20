
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Award, Target, MapPin, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10K+", label: "Happy Students" },
    { icon: <Heart className="h-8 w-8" />, number: "50+", label: "Home Kitchens" },
    { icon: <Award className="h-8 w-8" />, number: "4.8", label: "Average Rating" },
    { icon: <Target className="h-8 w-8" />, number: "100K+", label: "Meals Delivered" }
  ];

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-6">
              About Dabite
            </h1>
            <div className="bg-woodland/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-kelp leading-relaxed text-center max-w-3xl mx-auto">
                We, <span className="font-semibold text-woodland">Mumuksha Sharma</span> and <span className="font-semibold text-woodland">Tanishka Jain</span>, Computer Science students, started Dabite out of a need. One of our friends in a PG struggled with food options, and we ourselves faced gaps in regular meals. Dabite was born to solve that.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-woodland/20 bg-confetti/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-woodland mb-4">Our Mission</h3>
                <p className="text-kelp leading-relaxed">
                  To bridge the gap between homestyle cooking and student life by connecting home kitchens with students who crave nutritious, affordable, and delicious meals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-woodland/20 bg-woodland/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-woodland mb-4">Our Vision</h3>
                <p className="text-kelp leading-relaxed">
                  To become the most trusted platform for homestyle meals, ensuring no student goes hungry and every home cook finds purpose in sharing their culinary skills.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-woodland/10 to-confetti/10 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-woodland text-center mb-8">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-woodland mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-woodland mb-2">{stat.number}</div>
                  <div className="text-sm text-kelp">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-woodland text-center mb-8">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-woodland/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-woodland" />
                </div>
                <h4 className="font-semibold text-woodland mb-2">Homestyle Love</h4>
                <p className="text-sm text-kelp">Every meal is prepared with the same care and love as a home-cooked meal</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-confetti/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-woodland" />
                </div>
                <h4 className="font-semibold text-woodland mb-2">Quality First</h4>
                <p className="text-sm text-kelp">We maintain the highest standards of hygiene and nutrition in every meal</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-woodland/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-woodland" />
                </div>
                <h4 className="font-semibold text-woodland mb-2">Student-Centric</h4>
                <p className="text-sm text-kelp">Everything we do is designed keeping student needs and budgets in mind</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="border-woodland/20 bg-woodland text-stark-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-4">Get in Touch</h3>
              <p className="mb-6 opacity-90">
                Have questions or want to partner with us? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@dabite.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Delhi NCR, India</span>
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

export default About;
