
import React, { useState, useEffect } from 'react';
import { Watch, Smartphone, Wifi, WifiOff, ChevronRight, Shield } from 'lucide-react';
import HealthDataService, { DeviceInfo } from '@/services/HealthDataService';

interface DeviceConnectionScreenProps {
  language: 'en' | 'th';
  onClose: () => void;
}

const DeviceConnectionScreen: React.FC<DeviceConnectionScreenProps> = ({ language, onClose }) => {
  const [connectedDevices, setConnectedDevices] = useState<DeviceInfo[]>([]);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showPrivacyConsent, setShowPrivacyConsent] = useState(false);

  const healthService = HealthDataService.getInstance();

  const text = {
    en: {
      title: 'Connect Your Device',
      subtitle: 'Sync your smartwatch for better health insights',
      availableDevices: 'Available Devices',
      connectedDevices: 'Connected Devices',
      connect: 'Connect',
      disconnect: 'Disconnect',
      connecting: 'Connecting...',
      lastSync: 'Last sync:',
      privacyNotice: 'Privacy Notice',
      privacyText: 'Your health data is encrypted and stored securely. We comply with PDPA and GDPR regulations.',
      agreeAndConnect: 'Agree & Connect',
      cancel: 'Cancel',
      noDevices: 'No devices connected',
      connectFirst: 'Connect a smartwatch to enable health tracking features.'
    },
    th: {
      title: 'เชื่อมต่ออุปกรณ์',
      subtitle: 'ซิงค์สมาร์ทวอทช์เพื่อข้อมูลสุขภาพที่ดีขึ้น',
      availableDevices: 'อุปกรณ์ที่ใช้ได้',
      connectedDevices: 'อุปกรณ์ที่เชื่อมต่อ',
      connect: 'เชื่อมต่อ',
      disconnect: 'ยกเลิกการเชื่อมต่อ',
      connecting: 'กำลังเชื่อมต่อ...',
      lastSync: 'ซิงค์ล่าสุด:',
      privacyNotice: 'ประกาศความเป็นส่วนตัว',
      privacyText: 'ข้อมูลสุขภาพของคุณถูกเข้ารหัสและเก็บอย่างปลอดภัย เราปฏิบัติตาม PDPA และ GDPR',
      agreeAndConnect: 'ยอมรับและเชื่อมต่อ',
      cancel: 'ยกเลิก',
      noDevices: 'ไม่มีอุปกรณ์เชื่อมต่อ',
      connectFirst: 'เชื่อมต่อสมาร์ทวอทช์เพื่อเปิดใช้งานการติดตามสุขภาพ'
    }
  };

  const availableDevices = [
    { type: 'apple-watch' as const, name: 'Apple Watch', icon: '⌚' },
    { type: 'galaxy-watch' as const, name: 'Galaxy Watch', icon: '⌚' },
    { type: 'fitbit' as const, name: 'Fitbit', icon: '⌚' }
  ];

  useEffect(() => {
    setConnectedDevices(healthService.getConnectedDevices());
  }, []);

  const handleConnect = async (deviceType: DeviceInfo['type']) => {
    setShowPrivacyConsent(true);
  };

  const handlePrivacyAccept = async () => {
    const deviceType = connecting as DeviceInfo['type'];
    setConnecting(deviceType);
    setShowPrivacyConsent(false);
    
    try {
      await healthService.connectDevice(deviceType);
      setConnectedDevices(healthService.getConnectedDevices());
    } catch (error) {
      console.error('Failed to connect device:', error);
    } finally {
      setConnecting(null);
    }
  };

  const handleDisconnect = async (deviceId: string) => {
    await healthService.disconnectDevice(deviceId);
    setConnectedDevices(healthService.getConnectedDevices());
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Watch className="text-green-600" size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{text[language].title}</h2>
            <p className="text-gray-600">{text[language].subtitle}</p>
          </div>

          {/* Connected Devices */}
          {connectedDevices.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">{text[language].connectedDevices}</h3>
              <div className="space-y-2">
                {connectedDevices.map((device) => (
                  <div key={device.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">{device.name}</p>
                        <p className="text-sm text-gray-600">
                          {text[language].lastSync} {device.lastSync?.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDisconnect(device.id)}
                      className="text-red-600 text-sm font-medium hover:text-red-700"
                    >
                      {text[language].disconnect}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Devices */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">{text[language].availableDevices}</h3>
            <div className="space-y-2">
              {availableDevices.map((device) => {
                const isConnected = connectedDevices.some(d => d.type === device.type);
                const isConnecting = connecting === device.type;
                
                return (
                  <button
                    key={device.type}
                    onClick={() => !isConnected && !isConnecting && handleConnect(device.type)}
                    disabled={isConnected || isConnecting}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                      isConnected 
                        ? 'bg-gray-100 border-gray-200 cursor-not-allowed'
                        : isConnecting
                        ? 'bg-blue-50 border-blue-300 cursor-wait'
                        : 'bg-white border-gray-200 hover:border-green-300 hover:bg-green-50 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{device.icon}</span>
                      <span className="font-medium text-gray-800">{device.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {isConnected ? (
                        <Wifi className="text-green-600" size={20} />
                      ) : isConnecting ? (
                        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <ChevronRight className="text-gray-400" size={20} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Empty State */}
          {connectedDevices.length === 0 && (
            <div className="text-center py-8">
              <WifiOff className="text-gray-300 mx-auto mb-4" size={48} />
              <h4 className="font-semibold text-gray-800 mb-2">{text[language].noDevices}</h4>
              <p className="text-gray-600 text-sm">{text[language].connectFirst}</p>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            {text[language].cancel}
          </button>
        </div>

        {/* Privacy Consent Modal */}
        {showPrivacyConsent && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full animate-scale-in">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-green-600" size={24} />
                <h3 className="font-semibold text-gray-800">{text[language].privacyNotice}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {text[language].privacyText}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPrivacyConsent(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  {text[language].cancel}
                </button>
                <button
                  onClick={handlePrivacyAccept}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  {text[language].agreeAndConnect}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceConnectionScreen;
