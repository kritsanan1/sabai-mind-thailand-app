
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  icon: LucideIcon;
  label: { en: string; th: string };
}

interface BottomNavigationProps {
  items: NavItem[];
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  language: 'en' | 'th';
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  items, 
  activeScreen, 
  setActiveScreen, 
  language 
}) => {
  const handleNavClick = (itemId: string) => {
    // Prevent double-tap zoom and provide immediate feedback
    setActiveScreen(itemId);
  };

  return (
    <div className="bg-white border-t border-gray-200 px-2 py-2 flex justify-around items-center shadow-lg safe-area-bottom">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeScreen === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`flex flex-col items-center py-3 px-4 rounded-lg transition-all duration-200 touch-target mobile-button ${
              isActive 
                ? 'text-green-700 bg-green-50 scale-105' 
                : 'text-gray-500 hover:text-green-600 active:scale-95'
            }`}
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            <Icon size={22} className={`${isActive ? 'text-green-700' : 'text-gray-500'} transition-colors duration-200`} />
            <span className={`text-xs mt-1 font-medium transition-colors duration-200 ${
              language === 'th' ? 'font-thai' : 'font-poppins'
            }`}>
              {item.label[language]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
