
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WatchStory = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-dark mb-6">Our Story</h1>
        <p className="text-text-dark">Watch our story content will be implemented here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default WatchStory;
