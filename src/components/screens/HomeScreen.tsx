import React, { useState } from 'react';
import PremiumUpgradeModal from '@/components/modals/PremiumUpgradeModal';
import StressLevelCard from '@/components/smartwatch/StressLevelCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  GreetingSection,
  MoodSummaryCard,
  MeditationButton,
  MentalHealthTips,
  PremiumUpgradeButton
} from '@/components/features/home';

interface HomeScreenProps {
  language: 'en' | 'th';
}

const HomeScreen: React.FC<HomeScreenProps> = ({ language }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleStartMeditation = () => {
    console.log('Starting meditation...');
  };

  const handleStartBreathing = () => {
    console.log('Starting breathing exercise...');
  };

  const handleTipClick = (tipIndex: number) => {
    console.log(`Tip ${tipIndex + 1} selected`);
  };

  return (
    <div className="min-h-screen bg-white safe-area-top">
      <ScrollArea className="h-screen scroll-smooth">
        <div className="p-6 space-y-6 pb-24">
          <GreetingSection language={language} />
          
          <MoodSummaryCard language={language} />

          {/* Stress Level Card - Smartwatch Integration */}
          <StressLevelCard 
            language={language} 
            onStartBreathing={handleStartBreathing}
          />

          <MeditationButton 
            language={language}
            onStartMeditation={handleStartMeditation}
          />

          <MentalHealthTips 
            language={language}
            onTipClick={handleTipClick}
          />

          <PremiumUpgradeButton 
            language={language}
            onUpgradeClick={() => setShowPremiumModal(true)}
          />
        </div>
      </ScrollArea>

      {/* Premium Modal */}
      {showPremiumModal && (
        <PremiumUpgradeModal 
          language={language}
          onClose={() => setShowPremiumModal(false)}
        />
      )}
    </div>
  );
};

export default HomeScreen;
