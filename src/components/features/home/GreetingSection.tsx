import React from 'react';
import { Sun } from 'lucide-react';

interface GreetingSectionProps {
  language: 'en' | 'th';
}

const GreetingSection: React.FC<GreetingSectionProps> = ({ language }) => {
  const text = {
    en: {
      greeting: 'Good morning, Kathy'
    },
    th: {
      greeting: 'สวัสดีตอนเช้า, แคทธี่'
    }
  };

  return (
    <div className="text-center space-y-2 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 font-poppins">
        {text[language].greeting}
      </h1>
      <div className="flex items-center justify-center gap-2">
        <Sun className="text-yellow-500" size={20} />
        <span className="text-gray-600 font-thai">Monday, June 6</span>
      </div>
    </div>
  );
};

export default GreetingSection;