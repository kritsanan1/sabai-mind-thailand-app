import React from 'react';
import { Sparkles } from 'lucide-react';

interface PremiumUpgradeButtonProps {
  language: 'en' | 'th';
  onUpgradeClick: () => void;
}

const PremiumUpgradeButton: React.FC<PremiumUpgradeButtonProps> = ({ language, onUpgradeClick }) => {
  const text = {
    en: {
      upgradePremium: 'Upgrade to Premium'
    },
    th: {
      upgradePremium: 'อัพเกรดเป็นพรีเมียม'
    }
  };

  return (
    <div className="pt-4 animate-fade-in">
      <button 
        onClick={onUpgradeClick}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01] active:scale-95 opacity-90 hover:opacity-100 flex items-center justify-center gap-2 font-poppins mobile-button touch-target"
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
          willChange: 'transform'
        }}
      >
        <Sparkles size={18} />
        {text[language].upgradePremium}
      </button>
    </div>
  );
};

export default PremiumUpgradeButton;