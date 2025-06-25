
import React, { useState } from 'react';
import { Settings, Star, Calendar, Trophy, Crown, ChevronRight, Watch } from 'lucide-react';
import DeviceConnectionScreen from '@/components/smartwatch/DeviceConnectionScreen';
import SleepSummaryChart from '@/components/smartwatch/SleepSummaryChart';

interface ProfileScreenProps {
  language: 'en' | 'th';
  setLanguage: (lang: 'en' | 'th') => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ language, setLanguage }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showDeviceConnection, setShowDeviceConnection] = useState(false);

  const text = {
    en: {
      profile: 'Profile',
      progress: 'Your Progress',
      meditationStreak: 'Meditation Streak',
      days: 'days',
      totalSessions: 'Total Sessions',
      minutesMeditated: 'Minutes Meditated',
      achievements: 'Achievements',
      settings: 'Settings',
      language: 'Language',
      notifications: 'Notifications',
      privacy: 'Privacy Settings',
      help: 'Help & Support',
      connectedDevices: 'Connected Devices',
      upgradePremium: 'Upgrade to Premium',
      badges: {
        beginner: 'First Steps',
        consistent: 'Consistent Practitioner',
        dedicated: 'Dedicated Meditator'
      }
    },
    th: {
      profile: 'โปรไฟล์',
      progress: 'ความก้าวหน้าของคุณ',
      meditationStreak: 'การทำสมาธิต่อเนื่อง',
      days: 'วัน',
      totalSessions: 'เซสชันทั้งหมด',
      minutesMeditated: 'นาทีที่ทำสมาธิ',
      achievements: 'ความสำเร็จ',
      settings: 'การตั้งค่า',
      language: 'ภาษา',
      notifications: 'การแจ้งเตือน',
      privacy: 'การตั้งค่าความเป็นส่วนตัว',
      help: 'ความช่วยเหลือและการสนับสนุน',
      connectedDevices: 'อุปกรณ์ที่เชื่อมต่อ',
      upgradePremium: 'อัพเกรดเป็นพรีเมียม',
      badges: {
        beginner: 'ก้าวแรก',
        consistent: 'ผู้ฝึกซ้อมอย่างสม่ำเสมอ',
        dedicated: 'ผู้ทำสมาธิที่อุทิศตน'
      }
    }
  };

  const stats = [
    { label: text[language].meditationStreak, value: '7', unit: text[language].days, icon: '🔥', color: 'from-orange-400 to-red-400' },
    { label: text[language].totalSessions, value: '23', unit: '', icon: '🧘‍♀️', color: 'from-green-400 to-teal-400' },
    { label: text[language].minutesMeditated, value: '340', unit: 'min', icon: '⏰', color: 'from-blue-400 to-purple-400' }
  ];

  const achievements = [
    { id: 'beginner', name: text[language].badges.beginner, icon: '🌱', earned: true },
    { id: 'consistent', name: text[language].badges.consistent, icon: '⭐', earned: true },
    { id: 'dedicated', name: text[language].badges.dedicated, icon: '💎', earned: false }
  ];

  const settingsItems = [
    { id: 'language', label: text[language].language, icon: '🌐' },
    { id: 'devices', label: text[language].connectedDevices, icon: '⌚' },
    { id: 'notifications', label: text[language].notifications, icon: '🔔' },
    { id: 'privacy', label: text[language].privacy, icon: '🔒' },
    { id: 'help', label: text[language].help, icon: '❓' }
  ];

  const handlePreBedMeditation = () => {
    console.log('Starting pre-bed meditation...');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
          👤
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Kathy Chen</h1>
        <p className="text-gray-600">Premium Member</p>
      </div>

      {/* Progress Stats */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{text[language].progress}</h2>
        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-r ${stat.color} rounded-xl p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value} {stat.unit}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleep Summary - New smartwatch integration */}
      <SleepSummaryChart 
        language={language} 
        onPreBedMeditation={handlePreBedMeditation}
      />

      {/* Achievements */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{text[language].achievements}</h2>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl text-center ${
                achievement.earned
                  ? 'bg-gradient-to-b from-yellow-100 to-orange-100 border-2 border-yellow-300'
                  : 'bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <div className={`text-3xl mb-2 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                {achievement.icon}
              </div>
              <p className={`text-xs font-medium ${
                achievement.earned ? 'text-orange-700' : 'text-gray-500'
              }`}>
                {achievement.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Upgrade */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown className="text-yellow-300" size={24} />
              <h3 className="text-lg font-semibold">{text[language].upgradePremium}</h3>
            </div>
            <p className="text-purple-100 text-sm">Unlock unlimited features and content</p>
          </div>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Upgrade
          </button>
        </div>
      </div>

      {/* Settings */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{text[language].settings}</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          {settingsItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'language') {
                  setLanguage(language === 'en' ? 'th' : 'en');
                } else if (item.id === 'devices') {
                  setShowDeviceConnection(true);
                }
              }}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-800 font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.id === 'language' && (
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {language === 'en' ? 'English' : 'ไทย'}
                  </span>
                )}
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Device Connection Modal */}
      {showDeviceConnection && (
        <DeviceConnectionScreen 
          language={language}
          onClose={() => setShowDeviceConnection(false)}
        />
      )}
    </div>
  );
};

export default ProfileScreen;
