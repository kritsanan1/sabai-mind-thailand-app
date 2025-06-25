
import React, { useState, useEffect } from 'react';
import { Moon, Clock, TrendingUp } from 'lucide-react';
import HealthDataService from '@/services/HealthDataService';

interface SleepSummaryChartProps {
  language: 'en' | 'th';
  onPreBedMeditation: () => void;
}

const SleepSummaryChart: React.FC<SleepSummaryChartProps> = ({ language, onPreBedMeditation }) => {
  const [sleepData, setSleepData] = useState<{ duration: number; quality: 'good' | 'average' | 'poor' } | null>(null);
  const [loading, setLoading] = useState(true);

  const healthService = HealthDataService.getInstance();

  const text = {
    en: {
      title: 'Sleep Summary',
      duration: 'Sleep Duration',
      quality: 'Sleep Quality',
      hours: 'hours',
      qualities: {
        good: 'Good Sleep',
        average: 'Average Sleep',
        poor: 'Poor Sleep'
      },
      preBedMeditation: 'Pre-Bed Meditation',
      recommendation: 'Try a bedtime meditation for better sleep',
      noData: 'No sleep data available',
      connectDevice: 'Connect your smartwatch to track sleep'
    },
    th: {
      title: 'สรุปการนอนหลับ',
      duration: 'ระยะเวลาการนอน',
      quality: 'คุณภาพการนอน',
      hours: 'ชั่วโมง',
      qualities: {
        good: 'นอนหลับดี',
        average: 'นอนหลับปานกลาง',
        poor: 'นอนหลับไม่ดี'
      },
      preBedMeditation: 'การทำสมาธิก่อนนอน',
      recommendation: 'ลองทำสมาธิก่อนนอนเพื่อการนอนหลับที่ดีขึ้น',
      noData: 'ไม่มีข้อมูลการนอนหลับ',
      connectDevice: 'เชื่อมต่อสมาร์ทวอทช์เพื่อติดตามการนอนหลับ'
    }
  };

  useEffect(() => {
    const fetchSleepData = async () => {
      setLoading(true);
      try {
        const connectedDevices = healthService.getConnectedDevices();
        if (connectedDevices.length > 0) {
          const data = await healthService.getLatestSleepData();
          setSleepData(data);
        }
      } catch (error) {
        console.error('Failed to fetch sleep data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSleepData();
  }, []);

  const getQualityColor = (quality: 'good' | 'average' | 'poor') => {
    switch (quality) {
      case 'good': return 'from-green-400 to-teal-400';
      case 'average': return 'from-yellow-400 to-orange-400';
      case 'poor': return 'from-orange-400 to-red-400';
    }
  };

  const getQualityIcon = (quality: 'good' | 'average' | 'poor') => {
    switch (quality) {
      case 'good': return '😴';
      case 'average': return '😐';
      case 'poor': return '😵';
    }
  };

  const getDurationBars = (duration: number) => {
    const targetHours = 8;
    const bars = [];
    
    for (let i = 0; i < targetHours; i++) {
      const filled = i < duration;
      bars.push(
        <div
          key={i}
          className={`h-8 w-6 rounded-sm transition-all duration-300 ${
            filled ? 'bg-blue-500' : 'bg-gray-200'
          }`}
          style={{
            animationDelay: `${i * 100}ms`,
            animation: filled ? 'slide-up 0.5s ease-out' : 'none'
          }}
        />
      );
    }
    
    return bars;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!sleepData) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <Moon className="text-purple-600" size={24} />
          <h3 className="font-semibold text-gray-800">{text[language].title}</h3>
        </div>
        <div className="text-center py-6">
          <Moon className="text-gray-300 mx-auto mb-3" size={48} />
          <p className="text-gray-600 text-sm mb-4">{text[language].noData}</p>
          <p className="text-gray-500 text-xs">{text[language].connectDevice}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Moon className="text-purple-600" size={24} />
        <h3 className="font-semibold text-gray-800">{text[language].title}</h3>
      </div>

      {/* Sleep Duration Chart */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-600">{text[language].duration}</p>
          <p className="font-semibold text-gray-800">
            {sleepData.duration} {text[language].hours}
          </p>
        </div>
        <div className="flex items-end gap-1 h-12 mb-2">
          {getDurationBars(sleepData.duration)}
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>0h</span>
          <span>8h target</span>
        </div>
      </div>

      {/* Sleep Quality */}
      <div className={`bg-gradient-to-r ${getQualityColor(sleepData.quality)} rounded-lg p-4 mb-6 text-white`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm">{text[language].quality}</p>
            <p className="font-semibold text-lg">{text[language].qualities[sleepData.quality]}</p>
          </div>
          <div className="text-3xl">{getQualityIcon(sleepData.quality)}</div>
        </div>
      </div>

      {/* Recommendation */}
      {sleepData.quality !== 'good' && (
        <div className="bg-purple-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-purple-600" size={16} />
            <p className="font-medium text-purple-800 text-sm">{text[language].recommendation}</p>
          </div>
        </div>
      )}

      {/* Pre-bed Meditation Button */}
      <button
        onClick={onPreBedMeditation}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
      >
        <Moon size={20} />
        {text[language].preBedMeditation}
      </button>
    </div>
  );
};

export default SleepSummaryChart;
