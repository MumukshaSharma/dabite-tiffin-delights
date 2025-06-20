
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Heart, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WatchStory = () => {
  const stories = [
    {
      id: 1,
      title: "From PG Struggles to Dabite",
      description: "How two CS students solved the food crisis for college students",
      thumbnail: "/placeholder.svg",
      duration: "3:45",
      views: "12K"
    },
    {
      id: 2,
      title: "Meet Our Home Chefs",
      description: "Stories of aunties and uncles who cook with love",
      thumbnail: "/placeholder.svg",
      duration: "5:20",
      views: "8.5K"
    },
    {
      id: 3,
      title: "Student Life Made Easy",
      description: "How Dabite is changing campus food culture",
      thumbnail: "/placeholder.svg",
      duration: "4:12",
      views: "15K"
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10K+", label: "Happy Students" },
    { icon: <Heart className="h-8 w-8" />, number: "50+", label: "Home Kitchens" },
    { icon: <Award className="h-8 w-8" />, number: "4.8", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-woodland mb-4">
              Watch Our Story
            </h1>
            <p className="text-kelp text-lg max-w-2xl mx-auto">
              Discover how Dabite started and the amazing journey of bringing homemade food to students across the city
            </p>
          </div>

          {/* Featured Story */}
          <Card className="mb-12 border-woodland/20">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Dabite Story"
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-woodland hover:bg-kelp text-stark-white rounded-full p-6"
                  >
                    <Play className="h-8 w-8 ml-2" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-stark-white">
                  <h3 className="text-2xl font-bold mb-2">The Dabite Story</h3>
                  <p className="text-stark-white/80">From dorm room idea to city-wide solution</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Story Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {stories.map((story) => (
              <Card key={story.id} className="border-woodland/20 hover:border-woodland/40 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={story.thumbnail} 
                      alt={story.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-stark-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-stark-white text-xs px-2 py-1 rounded">
                      {story.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-woodland mb-2">{story.title}</h3>
                    <p className="text-kelp text-sm mb-2">{story.description}</p>
                    <p className="text-xs text-kelp">{story.views} views</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-confetti/10 rounded-lg p-8">
            <h2 className="text-2xl font-display font-bold text-woodland text-center mb-8">
              Our Impact in Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-woodland mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-woodland mb-2">{stat.number}</div>
                  <div className="text-kelp">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WatchStory;
