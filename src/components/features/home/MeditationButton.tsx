import React from 'react';

interface MeditationButtonProps {
  language: 'en' | 'th';
  onStartMeditation: () => void;
}

const MeditationButton: React.FC<MeditationButtonProps> = ({ language, onStartMeditation }) => {
  const text = {
    en: {
      startMeditation: 'Start Meditation'
    },
    th: {
      startMeditation: 'เริ่มทำสมาธิ'
    }
  };

  return (
    <button 
      onClick={onStartMeditation}
      className="w-full bg-[#2E7D32] text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-green-800 transition-all duration-200 hover:scale-[1.02] active:scale-95 font-poppins animate-fade-in mobile-button touch-target"
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        willChange: 'transform'
      }}
    >
      {text[language].startMeditation}
    </button>
  );
};

export default MeditationButton;