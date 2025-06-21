
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-dark mb-6">Frequently Asked Questions</h1>
        <p className="text-text-dark">FAQ content will be implemented here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
