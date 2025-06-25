
import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

interface FeedbackFormProps {
  language: 'en' | 'th';
  onSubmit: (feedback: { rating: number; comment: string; category: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ language, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('general');

  const text = {
    en: {
      title: 'Share Your Feedback',
      subtitle: 'Help us improve your experience',
      ratingLabel: 'How would you rate your experience?',
      categoryLabel: 'What type of feedback is this?',
      categories: {
        general: 'General Experience',
        ai: 'AI Chat Feature',
        meditation: 'Meditation Content',
        therapist: 'Therapist Booking',
        bugs: 'Bug Report'
      },
      commentLabel: 'Tell us more (optional)',
      commentPlaceholder: 'Share your thoughts, suggestions, or issues...',
      submit: 'Send Feedback',
      thankYou: 'Thank you for your feedback!'
    },
    th: {
      title: 'แบ่งปันความคิดเห็น',
      subtitle: 'ช่วยเราปรับปรุงประสบการณ์ของคุณ',
      ratingLabel: 'คุณจะให้คะแนนประสบการณ์การใช้งานเท่าไร?',
      categoryLabel: 'นี่เป็นความคิดเห็นประเภทใด?',
      categories: {
        general: 'ประสบการณ์ทั่วไป',
        ai: 'ฟีเจอร์แชท AI',
        meditation: 'เนื้อหาการทำสมาธิ',
        therapist: 'การจองนักจิตวิทยา',
        bugs: 'รายงานข้อผิดพลาด'
      },
      commentLabel: 'อยากแบ่งปันอะไรเพิ่มเติม (ไม่บังคับ)',
      commentPlaceholder: 'แบ่งปันความคิด ข้อเสนอแนะ หรือปัญหาที่พบ...',
      submit: 'ส่งความคิดเห็น',
      thankYou: 'ขอบคุณสำหรับความคิดเห็นของคุณ!'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      onSubmit({ rating, comment, category });
      // Reset form
      setRating(0);
      setComment('');
      setCategory('general');
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{text[language].title}</h3>
        <p className="text-gray-600 text-sm">{text[language].subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {text[language].ratingLabel}
          </label>
          <div className="flex justify-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index + 1)}
                className="p-1 hover:scale-110 transition-transform"
              >
                <Star
                  size={32}
                  className={`${
                    index < rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {text[language].categoryLabel}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {Object.entries(text[language].categories).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {text[language].commentLabel}
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={text[language].commentPlaceholder}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={rating === 0}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
          {text[language].submit}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
