interface HealthData {
  heartRate?: number;
  sleepDuration?: number;
  sleepQuality?: 'good' | 'average' | 'poor';
  stressLevel?: 'low' | 'medium' | 'high';
  timestamp: Date;
}

interface DeviceInfo {
  id: string;
  name: string;
  type: 'apple-watch' | 'galaxy-watch' | 'fitbit';
  connected: boolean;
  lastSync?: Date;
}

class HealthDataService {
  private static instance: HealthDataService;
  private connectedDevices: DeviceInfo[] = [];
  private healthData: HealthData[] = [];

  static getInstance(): HealthDataService {
    if (!HealthDataService.instance) {
      HealthDataService.instance = new HealthDataService();
    }
    return HealthDataService.instance;
  }

  // Simulate device connection
  async connectDevice(deviceType: DeviceInfo['type']): Promise<boolean> {
    console.log(`Connecting to ${deviceType}...`);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newDevice: DeviceInfo = {
      id: `${deviceType}-${Date.now()}`,
      name: this.getDeviceName(deviceType),
      type: deviceType,
      connected: true,
      lastSync: new Date()
    };

    this.connectedDevices.push(newDevice);
    return true;
  }

  async disconnectDevice(deviceId: string): Promise<void> {
    this.connectedDevices = this.connectedDevices.filter(d => d.id !== deviceId);
  }

  getConnectedDevices(): DeviceInfo[] {
    return this.connectedDevices;
  }

  // Simulate heart rate monitoring
  async getLatestHeartRate(): Promise<number | null> {
    if (this.connectedDevices.length === 0) return null;
    
    // Simulate real-time HR data
    const baseHR = 70;
    const variation = Math.random() * 30; // 0-30 BPM variation
    return Math.round(baseHR + variation);
  }

  // Calculate stress level from heart rate
  calculateStressLevel(heartRate: number): 'low' | 'medium' | 'high' {
    if (heartRate < 80) return 'low';
    if (heartRate < 100) return 'medium';
    return 'high';
  }

  // Simulate sleep data
  async getLatestSleepData(): Promise<{ duration: number; quality: 'good' | 'average' | 'poor' } | null> {
    if (this.connectedDevices.length === 0) return null;
    
    // Simulate sleep data
    const duration = 6 + Math.random() * 3; // 6-9 hours
    const quality = duration > 7.5 ? 'good' : duration > 6.5 ? 'average' : 'poor';
    
    return { duration: Math.round(duration * 10) / 10, quality };
  }

  private getDeviceName(type: DeviceInfo['type']): string {
    switch (type) {
      case 'apple-watch': return 'Apple Watch';
      case 'galaxy-watch': return 'Galaxy Watch';
      case 'fitbit': return 'Fitbit';
      default: return 'Unknown Device';
    }
  }

  // Store health data with privacy compliance
  async storeHealthData(data: Omit<HealthData, 'timestamp'>): Promise<void> {
    const healthRecord: HealthData = {
      ...data,
      timestamp: new Date()
    };
    
    this.healthData.push(healthRecord);
    
    // Keep only last 30 days of data for privacy
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    this.healthData = this.healthData.filter(
      record => record.timestamp > thirtyDaysAgo
    );
  }

  getHealthDataHistory(): HealthData[] {
    return this.healthData;
  }
}

export default HealthDataService;
export type { HealthData, DeviceInfo };
