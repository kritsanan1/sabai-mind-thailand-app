
import React, { useState, useEffect } from 'react';
import { Home, MessageCircle, User, Calendar, Settings } from 'lucide-react';
import HomeScreen from '@/components/screens/HomeScreen';
import ChatScreen from '@/components/screens/ChatScreen';
import ContentScreen from '@/components/screens/ContentScreen';
import TherapistScreen from '@/components/screens/TherapistScreen';
import ProfileScreen from '@/components/screens/ProfileScreen';
import BottomNavigation from '@/components/navigation/BottomNavigation';

const Index = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [language, setLanguage] = useState('en'); // 'en' or 'th'

  const navItems = [
    { id: 'home', icon: Home, label: { en: 'Home', th: 'หน้าหลัก' } },
    { id: 'chat', icon: MessageCircle, label: { en: 'AI Chat', th: 'แชท AI' } },
    { id: 'content', icon: Settings, label: { en: 'Content', th: 'เนื้อหา' } },
    { id: 'therapist', icon: Calendar, label: { en: 'Therapist', th: 'นักจิตวิทยา' } },
    { id: 'profile', icon: User, label: { en: 'Profile', th: 'โปรไฟล์' } },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen language={language} />;
      case 'chat':
        return <ChatScreen language={language} />;
      case 'content':
        return <ContentScreen language={language} />;
      case 'therapist':
        return <TherapistScreen language={language} />;
      case 'profile':
        return <ProfileScreen language={language} setLanguage={setLanguage} />;
      default:
        return <HomeScreen language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col max-w-md mx-auto relative">
      {/* Status Bar Simulation */}
      <div className="h-11 bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-between px-4 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
          <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        items={navItems}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        language={language}
      />
    </div>
  );
};

export default Index;
