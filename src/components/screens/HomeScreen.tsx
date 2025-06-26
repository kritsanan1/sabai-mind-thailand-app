import React, { useState } from 'react';
import { Star, Heart, Moon, Sun, Settings, ChevronRight, Sparkles } from 'lucide-react';
import PremiumUpgradeModal from '@/components/modals/PremiumUpgradeModal';
import StressLevelCard from '@/components/smartwatch/StressLevelCard';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HomeScreenProps {
  language: 'en' | 'th';
}

const HomeScreen: React.FC<HomeScreenProps> = ({ language }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const text = {
    en: {
      greeting: 'Good morning, Kathy',
      moodSummary: 'Daily Mood Summary',
      moodMessage: 'Today you seem calm and focused. Your mindfulness practice is showing positive effects on your emotional well-being.',
      startMeditation: 'Start Meditation',
      mentalHealthTips: 'Mental Health Tips',
      upgradePremium: 'Upgrade to Premium',
      tips: [
        {
          title: 'Practice Deep Breathing',
          description: 'Take 3 deep breaths when you feel overwhelmed. Focus on the sensation of air entering and leaving your body.'
        },
        {
          title: 'Mindful Walking',
          description: 'Take a 5-minute walk and pay attention to each step. Notice how your feet feel touching the ground.'
        },
        {
          title: 'Gratitude Practice',
          description: 'Write down 3 things you\'re grateful for each day. This simple practice can shift your perspective positively.'
        },
        {
          title: 'Body Scan Meditation',
          description: 'Spend 10 minutes scanning your body from head to toe, noticing any tension or sensations without judgment.'
        },
        {
          title: 'Digital Detox',
          description: 'Set aside 30 minutes each day to disconnect from devices and connect with yourself or nature.'
        }
      ]
    },
    th: {
      greeting: 'สวัสดีตอนเช้า, แคทธี่',
      moodSummary: 'สรุปอารมณ์ประจำวัน',
      moodMessage: 'วันนี้คุณดูสงบและมีสมาธิ การฝึกสติของคุณส่งผลดีต่อสุขภาพจิตใจ',
      startMeditation: 'เริ่มทำสมาธิ',
      mentalHealthTips: 'เคล็ดลับสุขภาพจิต',
      upgradePremium: 'อัพเกรดเป็นพรีเมียม',
      tips: [
        {
          title: 'ฝึกหายใจลึก',
          description: 'หายใจเข้าลึกๆ 3 ครั้งเมื่อรู้สึกหนักใจ สนใจความรู้สึกของลมหายใจที่เข้าออกจากร่างกาย'
        },
        {
          title: 'การเดินอย่างมีสติ',
          description: 'เดิน 5 นาทีและใส่ใจในทุกก้าว สังเกตความรู้สึกของเท้าที่สัมผัสพื้น'
        },
        {
          title: 'การฝึกความกตัญญู',
          description: 'เขียนสิ่งที่รู้สึกขอบคุณ 3 อย่างทุกวัน การฝึกนี้ช่วยเปลี่ยนมุมมองในทางบวก'
        },
        {
          title: 'การสแกนร่างกาย',
          description: 'ใช้เวลา 10 นาทีสแกนร่างกายจากหัวจรดเท้า สังเกตความตึงเครียดโดยไม่ตัดสิน'
        },
        {
          title: 'การดีท็อกซ์ดิจิทัล',
          description: 'แยกเวลา 30 นาทีทุกวันเพื่อหยุดใช้อุปกรณ์และเชื่อมต่อกับตัวเองหรือธรรมชาติ'
        }
      ]
    }
  };

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
          {/* Greeting Section */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-800 font-poppins">
              {text[language].greeting}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Sun className="text-yellow-500" size={20} />
              <span className="text-gray-600 font-thai">Monday, June 6</span>
            </div>
          </div>

          {/* Daily Mood Summary Card */}
          <div className="bg-[#E6F0FA] rounded-xl p-6 shadow-sm border border-blue-100 animate-fade-in mobile-button">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">
              {text[language].moodSummary}
            </h2>
            <div className="flex items-start gap-4">
              <div className="text-4xl">😌</div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed font-thai text-sm">
                  {text[language].moodMessage}
                </p>
                <div className="flex gap-1 mt-3">
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

          {/* Stress Level Card - Smartwatch Integration */}
          <StressLevelCard 
            language={language} 
            onStartBreathing={handleStartBreathing}
          />

          {/* Start Meditation CTA */}
          <button 
            onClick={handleStartMeditation}
            className="w-full bg-[#2E7D32] text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-green-800 transition-all duration-200 hover:scale-[1.02] active:scale-95 font-poppins animate-fade-in mobile-button touch-target"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              willChange: 'transform'
            }}
          >
            {text[language].startMeditation}
          </button>

          {/* Mental Health Tips Section */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
              {text[language].mentalHealthTips}
            </h3>
            <div className="space-y-4">
              {text[language].tips.map((tip, index) => (
                <button
                  key={index}
                  onClick={() => handleTipClick(index)}
                  className="w-full bg-[#D4F4E2] rounded-xl p-5 border border-green-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md animate-scale-in mobile-button touch-target active:scale-95"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation',
                    willChange: 'transform'
                  }}
                >
                  <div className="flex items-start justify-between gap-3 text-left">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2 font-poppins">
                        {tip.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-thai">
                        {tip.description}
                      </p>
                    </div>
                    <ChevronRight className="text-gray-400 mt-1 flex-shrink-0 transition-transform duration-200" size={20} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Non-intrusive Premium Upgrade */}
          <div className="pt-4 animate-fade-in">
            <button 
              onClick={() => setShowPremiumModal(true)}
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
