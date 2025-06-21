
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NutritionInfo = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-dark mb-6">Nutrition Information</h1>
        <p className="text-text-dark">Nutrition information content will be implemented here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default NutritionInfo;
