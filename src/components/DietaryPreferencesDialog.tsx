
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Utensils, Globe } from 'lucide-react';

interface DietaryPreferencesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: (preferences: { dietary: string; cuisine: string }) => void;
}

const DietaryPreferencesDialog = ({ open, onOpenChange, onComplete }: DietaryPreferencesDialogProps) => {
  const [step, setStep] = useState(1);
  const [selectedDietary, setSelectedDietary] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const dietaryOptions = [
    { id: 'veg', label: 'Vegetarian', icon: '🥗', description: 'Plant-based meals only' },
    { id: 'non-veg', label: 'Non-Vegetarian', icon: '🍗', description: 'Includes meat and fish' },
    { id: 'jain', label: 'Jain', icon: '🌱', description: 'No root vegetables' },
    { id: 'gluten-free', label: 'Gluten-Free', icon: '🌾', description: 'No wheat, barley, rye' },
    { id: 'lactose-free', label: 'Lactose Intolerant', icon: '🥛', description: 'No dairy products' }
  ];

  const cuisineOptions = [
    { id: 'north-indian', label: 'North Indian', icon: '🍛', description: 'Roti, dal, curry' },
    { id: 'south-indian', label: 'South Indian', icon: '🥥', description: 'Rice, sambar, coconut' },
    { id: 'seafood', label: 'Seafood', icon: '🐟', description: 'Fish and prawns' },
    { id: 'asian', label: 'Asian', icon: '🍜', description: 'Chinese, Thai, Japanese' },
    { id: 'northeast', label: 'Northeast', icon: '🌿', description: 'Tribal and regional' }
  ];

  const handleNext = () => {
    if (step === 1 && selectedDietary) {
      setStep(2);
    } else if (step === 2 && selectedCuisine) {
      onComplete({ dietary: selectedDietary, cuisine: selectedCuisine });
      onOpenChange(false);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-woodland">
            {step === 1 ? 'What are your dietary preferences?' : 'Which cuisine do you prefer?'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-kelp mb-4">
                <Utensils className="h-5 w-5" />
                <span>This helps us recommend the right kitchens for you</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dietaryOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedDietary === option.id
                        ? 'border-woodland bg-woodland/5'
                        : 'border-woodland/20 hover:border-woodland/40'
                    }`}
                    onClick={() => setSelectedDietary(option.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <h3 className="font-semibold text-woodland">{option.label}</h3>
                          <p className="text-sm text-kelp">{option.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-kelp mb-4">
                <Globe className="h-5 w-5" />
                <span>We'll show you kitchens that specialize in these cuisines</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cuisineOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedCuisine === option.id
                        ? 'border-woodland bg-woodland/5'
                        : 'border-woodland/20 hover:border-woodland/40'
                    }`}
                    onClick={() => setSelectedCuisine(option.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <h3 className="font-semibold text-woodland">{option.label}</h3>
                          <p className="text-sm text-kelp">{option.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step === 2 && (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              disabled={step === 1 ? !selectedDietary : !selectedCuisine}
              className="bg-woodland hover:bg-kelp text-stark-white ml-auto"
            >
              {step === 1 ? 'Next' : 'Complete Setup'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DietaryPreferencesDialog;
