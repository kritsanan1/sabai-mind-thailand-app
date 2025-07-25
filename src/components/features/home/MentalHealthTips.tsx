import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MentalHealthTipsProps {
  language: 'en' | 'th';
  onTipClick: (tipIndex: number) => void;
}

const MentalHealthTips: React.FC<MentalHealthTipsProps> = ({ language, onTipClick }) => {
  const text = {
    en: {
      mentalHealthTips: 'Mental Health Tips',
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
      mentalHealthTips: 'เคล็ดลับสุขภาพจิต',
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

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
        {text[language].mentalHealthTips}
      </h3>
      <div className="space-y-4">
        {text[language].tips.map((tip, index) => (
          <button
            key={index}
            onClick={() => onTipClick(index)}
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
  );
};

export default MentalHealthTips;