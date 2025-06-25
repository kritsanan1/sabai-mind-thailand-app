
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
  return (
    <div className="bg-white border-t border-gray-200 px-2 py-2 flex justify-around items-center shadow-lg">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeScreen === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 hover:scale-105 ${
              isActive 
                ? 'text-green-700 bg-green-50' 
                : 'text-gray-500 hover:text-green-600'
            }`}
          >
            <Icon size={20} className={isActive ? 'text-green-700' : 'text-gray-500'} />
            <span className={`text-xs mt-1 font-medium ${
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
