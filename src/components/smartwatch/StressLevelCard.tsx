
import React, { useState, useEffect } from 'react';
import { Heart, Activity, Zap } from 'lucide-react';
import HealthDataService from '@/services/HealthDataService';

interface StressLevelCardProps {
  language: 'en' | 'th';
  onStartBreathing: () => void;
}

const StressLevelCard: React.FC<StressLevelCardProps> = ({ language, onStartBreathing }) => {
  const [heartRate, setHeartRate] = useState<number | null>(null);
  const [stressLevel, setStressLevel] = useState<'low' | 'medium' | 'high' | null>(null);
  const [loading, setLoading] = useState(true);

  const healthService = HealthDataService.getInstance();

  const text = {
    en: {
      title: 'Stress Level',
      heartRate: 'Heart Rate',
      bpm: 'BPM',
      stressLevels: {
        low: 'Calm & Relaxed',
        medium: 'Slightly Elevated',
        high: 'High Stress Detected'
      },
      startBreathing: 'Start Breathing Exercise',
      noDevice: 'Connect smartwatch for real-time monitoring',
      connectDevice: 'Connect Device'
    },
    th: {
      title: 'ระดับความเครียด',
      heartRate: 'อัตราการเต้นของหัวใจ',
      bpm: 'ครั้ง/นาที',
      stressLevels: {
        low: 'สงบและผ่อนคลาย',
        medium: 'เพิ่มขึ้นเล็กน้อย',
        high: 'ตรวจพบความเครียดสูง'
      },
      startBreathing: 'เริ่มการออกกำลังการหายใจ',
      noDevice: 'เชื่อมต่อสมาร์ทวอทช์เพื่อติดตามแบบเรียลไทม์',
      connectDevice: 'เชื่อมต่ออุปกรณ์'
    }
  };

  useEffect(() => {
    const updateHealthData = async () => {
      setLoading(true);
      try {
        const connectedDevices = healthService.getConnectedDevices();
        if (connectedDevices.length > 0) {
          const hr = await healthService.getLatestHeartRate();
          setHeartRate(hr);
          if (hr) {
            const stress = healthService.calculateStressLevel(hr);
            setStressLevel(stress);
          }
        }
      } catch (error) {
        console.error('Failed to fetch health data:', error);
      } finally {
        setLoading(false);
      }
    };

    updateHealthData();
    const interval = setInterval(updateHealthData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStressColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return 'from-green-400 to-teal-400';
      case 'medium': return 'from-yellow-400 to-orange-400';
      case 'high': return 'from-orange-400 to-red-400';
    }
  };

  const getStressIcon = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return '😌';
      case 'medium': return '😐';
      case 'high': return '😰';
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!heartRate || !stressLevel) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-blue-600" size={24} />
          <h3 className="font-semibold text-gray-800">{text[language].title}</h3>
        </div>
        <div className="text-center py-6">
          <Heart className="text-gray-300 mx-auto mb-3" size={48} />
          <p className="text-gray-600 text-sm mb-4">{text[language].noDevice}</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
            {text[language].connectDevice}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Activity className="text-blue-600" size={24} />
        <h3 className="font-semibold text-gray-800">{text[language].title}</h3>
      </div>

      {/* Heart Rate Display */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{getStressIcon(stressLevel)}</div>
          <div>
            <p className="text-sm text-gray-600">{text[language].heartRate}</p>
            <p className="text-2xl font-bold text-gray-800">{heartRate} <span className="text-sm font-normal">{text[language].bpm}</span></p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="text-red-500 animate-pulse" size={20} />
        </div>
      </div>

      {/* Stress Level Indicator */}
      <div className={`bg-gradient-to-r ${getStressColor(stressLevel)} rounded-lg p-4 mb-4 text-white`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm">{text[language].title}</p>
            <p className="font-semibold text-lg">{text[language].stressLevels[stressLevel]}</p>
          </div>
          <Zap className="text-white" size={24} />
        </div>
      </div>

      {/* Action Button */}
      {(stressLevel === 'medium' || stressLevel === 'high') && (
        <button
          onClick={onStartBreathing}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          {text[language].startBreathing}
        </button>
      )}
    </div>
  );
};

export default StressLevelCard;
