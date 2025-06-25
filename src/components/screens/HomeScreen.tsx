
import React, { useState } from 'react';
import { Star, Heart, Moon, Sun, Settings } from 'lucide-react';
import PremiumUpgradeModal from '@/components/modals/PremiumUpgradeModal';
import StressLevelCard from '@/components/smartwatch/StressLevelCard';

interface HomeScreenProps {
  language: 'en' | 'th';
}

const HomeScreen: React.FC<HomeScreenProps> = ({ language }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [currentMood, setCurrentMood] = useState('calm');

  const text = {
    en: {
      greeting: 'Good morning, Kathy',
      moodSummary: 'Today\'s Mood Summary',
      moodMessage: 'You seem calm and focused today. Great start!',
      startMeditation: 'Start Meditation',
      checkMood: 'Check Your Mood',
      dailyTip: 'Daily Mindfulness Tip',
      tipContent: 'Take 3 deep breaths and notice how your body feels right now.',
      streakText: '7-day meditation streak! 🔥',
      upgradePremium: 'Upgrade to Premium'
    },
    th: {
      greeting: 'สวัสดีตอนเช้า, แคทธี่',
      moodSummary: 'สรุปอารมณ์วันนี้',
      moodMessage: 'วันนี้คุณดูสงบและมีสมาธิ เริ่มต้นดีเลย!',
      startMeditation: 'เริ่มทำสมาธิ',
      checkMood: 'ตรวจสอบอารมณ์',
      dailyTip: 'เคล็ดลับสติประจำวัน',
      tipContent: 'หายใจเข้าลึกๆ 3 ครั้ง และสังเกตความรู้สึกของร่างกายในขณะนี้',
      streakText: 'ทำสมาธิต่อเนื่อง 7 วัน! 🔥',
      upgradePremium: 'อัพเกรดเป็นพรีเมียม'
    }
  };

  const moodEmojis = {
    happy: '😊',
    calm: '😌',
    stressed: '😰',
    sad: '😔',
    excited: '🤩'
  };

  const handleStartBreathing = () => {
    // Navigate to breathing exercises in Content section
    console.log('Starting breathing exercise...');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Greeting Section */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">
          {text[language].greeting}
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Sun className="text-yellow-500" size={20} />
          <span className="text-gray-600">Monday, June 6</span>
        </div>
      </div>

      {/* Stress Level Card - New smartwatch integration */}
      <StressLevelCard 
        language={language} 
        onStartBreathing={handleStartBreathing}
      />

      {/* Mood Summary Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          {text[language].moodSummary}
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">{moodEmojis[currentMood]}</div>
          <div>
            <p className="text-gray-700">{text[language].moodMessage}</p>
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-green-700 transition-all duration-200 hover:scale-[1.02] active:scale-95">
          {text[language].startMeditation}
        </button>
        
        <button className="w-full bg-blue-100 text-blue-700 py-4 rounded-xl font-semibold border border-blue-200 hover:bg-blue-200 transition-all duration-200 hover:scale-[1.02] active:scale-95">
          {text[language].checkMood}
        </button>
      </div>

      {/* Daily Tip Card */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="text-green-600" size={20} />
          <h3 className="font-semibold text-gray-800">{text[language].dailyTip}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{text[language].tipContent}</p>
      </div>

      {/* Streak Display */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
          <span className="text-orange-700 font-semibold">{text[language].streakText}</span>
        </div>
      </div>

      {/* Premium Upgrade CTA */}
      <button 
        onClick={() => setShowPremiumModal(true)}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
      >
        ✨ {text[language].upgradePremium}
      </button>

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
