
import React, { useState } from 'react';
import { Clock, Play, Heart, Moon, Sun } from 'lucide-react';

interface ContentScreenProps {
  language: 'en' | 'th';
}

const ContentScreen: React.FC<ContentScreenProps> = ({ language }) => {
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('meditation');

  const text = {
    en: {
      title: 'Mindful Content',
      meditation: 'Guided Meditation',
      breathing: 'Breathing Exercises',
      articles: 'Mental Health Articles',
      selectDuration: 'Select Duration',
      minutes: 'min',
      startSession: 'Start Session',
      themes: {
        sleep: 'Better Sleep',
        stress: 'Stress Relief',
        focus: 'Deep Focus',
        anxiety: 'Calm Anxiety'
      },
      popular: 'Popular This Week'
    },
    th: {
      title: 'เนื้อหาเพื่อจิตใจ',
      meditation: 'การทำสมาธิแบบมีคำแนะนำ',
      breathing: 'การออกกำลังการหายใจ',
      articles: 'บทความสุขภาพจิต',
      selectDuration: 'เลือกระยะเวลา',
      minutes: 'นาที',
      startSession: 'เริ่มเซสชัน',
      themes: {
        sleep: 'นอนหลับดีขึ้น',
        stress: 'คลายความเครียด',
        focus: 'เพิ่มสมาธิ',
        anxiety: 'ลดความวิตกกังวล'
      },
      popular: 'ยอดนิยมสัปดาห์นี้'
    }
  };

  const durations = [5, 10, 15, 20];
  const categories = [
    { id: 'meditation', label: text[language].meditation, icon: Heart },
    { id: 'breathing', label: text[language].breathing, icon: Sun },
    { id: 'articles', label: text[language].articles, icon: Moon }
  ];

  const meditationThemes = [
    { id: 'sleep', label: text[language].themes.sleep, icon: '🌙', color: 'from-purple-400 to-blue-400' },
    { id: 'stress', label: text[language].themes.stress, icon: '🌊', color: 'from-blue-400 to-green-400' },
    { id: 'focus', label: text[language].themes.focus, icon: '🎯', color: 'from-green-400 to-teal-400' },
    { id: 'anxiety', label: text[language].themes.anxiety, icon: '🕊️', color: 'from-teal-400 to-cyan-400' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {text[language].title}
        </h1>
        <p className="text-gray-600">{text[language].popular}</p>
      </div>

      {/* Category Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-white text-green-700 shadow-sm'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content based on selected category */}
      {selectedCategory === 'meditation' && (
        <div className="space-y-6">
          {/* Duration Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {text[language].selectDuration}
            </h3>
            <div className="flex gap-3">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedDuration === duration
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Clock size={16} />
                    <span className="font-medium">{duration}{text[language].minutes}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Meditation Themes */}
          <div className="space-y-3">
            {meditationThemes.map((theme) => (
              <div
                key={theme.id}
                className={`p-6 rounded-xl bg-gradient-to-r ${theme.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{theme.icon}</span>
                    <div>
                      <h4 className="font-semibold text-lg">{theme.label}</h4>
                      <p className="text-white/80 text-sm">{selectedDuration} {text[language].minutes}</p>
                    </div>
                  </div>
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Play className="text-white" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Start Session Button */}
          <button className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-green-700 transition-all duration-200 hover:scale-[1.02] active:scale-95">
            {text[language].startSession}
          </button>
        </div>
      )}

      {selectedCategory === 'breathing' && (
        <div className="space-y-4">
          {/* Breathing Exercises */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">4-7-8 Breathing</h3>
            <p className="text-gray-600 mb-4">Inhale for 4, hold for 7, exhale for 8. Perfect for relaxation.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Exercise
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Box Breathing</h3>
            <p className="text-gray-600 mb-4">Equal counts for inhale, hold, exhale, hold. Great for focus.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Start Exercise
            </button>
          </div>
        </div>
      )}

      {selectedCategory === 'articles' && (
        <div className="space-y-4">
          {/* Mental Health Articles */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Understanding Anxiety in Young Adults</h3>
            <p className="text-gray-600 mb-3">Learn about common anxiety triggers and coping strategies...</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">5 min read</span>
              <button className="text-green-600 font-medium hover:text-green-700">Read More</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Building Healthy Sleep Habits</h3>
            <p className="text-gray-600 mb-3">Tips for improving your sleep quality and establishing routines...</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">7 min read</span>
              <button className="text-green-600 font-medium hover:text-green-700">Read More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentScreen;
