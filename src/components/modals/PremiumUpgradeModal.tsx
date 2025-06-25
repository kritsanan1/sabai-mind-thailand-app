
import React from 'react';
import { Crown, X, Check } from 'lucide-react';

interface PremiumUpgradeModalProps {
  language: 'en' | 'th';
  onClose: () => void;
}

const PremiumUpgradeModal: React.FC<PremiumUpgradeModalProps> = ({ language, onClose }) => {
  const text = {
    en: {
      title: 'Upgrade to Premium',
      subtitle: 'Unlock your full potential with premium features',
      features: [
        'Unlimited AI conversations',
        'Exclusive meditation content',
        'Priority therapist booking',
        'Advanced progress tracking',
        'Offline content access',
        'No ads'
      ],
      monthlyPrice: '฿299/month',
      yearlyPrice: '฿2,999/year',
      yearlyDiscount: 'Save 17%',
      startTrial: 'Start 7-Day Free Trial',
      terms: 'Terms and conditions apply'
    },
    th: {
      title: 'อัพเกรดเป็นพรีเมียม',
      subtitle: 'ปลดล็อคศักยภาพเต็มรูปแบบด้วยฟีเจอร์พรีเมียม',
      features: [
        'สนทนากับ AI ได้ไม่จำกัด',
        'เนื้อหาการทำสมาธิเฉพาะ',
        'จองนักจิตวิทยาได้เป็นอันดับแรก',
        'ติดตามความก้าวหน้าแบบละเอียด',
        'เข้าถึงเนื้อหาออฟไลน์',
        'ไม่มีโฆษณา'
      ],
      monthlyPrice: '฿299/เดือน',
      yearlyPrice: '฿2,999/ปี',
      yearlyDiscount: 'ประหยัด 17%',
      startTrial: 'เริ่มทดลองใช้ฟรี 7 วัน',
      terms: 'มีเงื่อนไขการใช้บริการ'
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Crown className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{text[language].title}</h2>
          <p className="text-gray-600 text-sm">{text[language].subtitle}</p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {text[language].features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <Check size={12} className="text-green-600" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-800">Monthly</span>
              <span className="text-lg font-bold text-gray-800">{text[language].monthlyPrice}</span>
            </div>
          </div>
          
          <div className="border-2 border-purple-500 rounded-xl p-4 relative bg-purple-50">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {text[language].yearlyDiscount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-800">Yearly</span>
              <span className="text-lg font-bold text-purple-600">{text[language].yearlyPrice}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 mb-3">
          {text[language].startTrial}
        </button>

        {/* Terms */}
        <p className="text-center text-xs text-gray-500">{text[language].terms}</p>
      </div>
    </div>
  );
};

export default PremiumUpgradeModal;
