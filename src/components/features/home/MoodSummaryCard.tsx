import React from 'react';
import { Star } from 'lucide-react';

interface MoodSummaryCardProps {
  language: 'en' | 'th';
}

const MoodSummaryCard: React.FC<MoodSummaryCardProps> = ({ language }) => {
  const text = {
    en: {
      moodSummary: 'Daily Mood Summary',
      moodMessage: 'Today you seem calm and focused. Your mindfulness practice is showing positive effects on your emotional well-being.'
    },
    th: {
      moodSummary: 'สรุปอารมณ์ประจำวัน',
      moodMessage: 'วันนี้คุณดูสงบและมีสมาธิ การฝึกสติของคุณส่งผลดีต่อสุขภาพจิตใจ'
    }
  };

  return (
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
  );
};

export default MoodSummaryCard;