
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Heart } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  mood?: string;
}

interface ChatScreenProps {
  language: 'en' | 'th';
}

const ChatScreen: React.FC<ChatScreenProps> = ({ language }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: language === 'en' 
        ? 'Hi there! I\'m here to help you understand your feelings. How are you feeling today?' 
        : 'สวัสดีค่ะ! ฉันมาช่วยให้คุณเข้าใจความรู้สึกของตัวเอง วันนี้คุณรู้สึกอย่างไร?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const text = {
    en: {
      placeholder: 'Share your feelings...',
      aiTyping: 'AI is typing...',
      saveMood: 'Save Mood',
      empathyResponses: [
        'I can sense you\'re going through something difficult. Would you like to try a 5-minute breathing exercise?',
        'It sounds like you\'re feeling stressed. Let\'s work through this together.',
        'Your feelings are completely valid. Have you considered some meditation to help center yourself?',
        'I\'m here to listen. Sometimes talking about our feelings can help us process them better.',
        'That must be challenging for you. Remember that it\'s okay to feel this way.'
      ]
    },
    th: {
      placeholder: 'แบ่งปันความรู้สึกของคุณ...',
      aiTyping: 'AI กำลังพิมพ์...',
      saveMood: 'บันทึกอารมณ์',
      empathyResponses: [
        'ฉันรู้สึกได้ว่าคุณกำลังผ่านช่วงเวลาที่ยากลำบาก อยากลองทำการหายใจ 5 นาทีไหม?',
        'ฟังดูเหมือนคุณรู้สึกเครียด เรามาลองจัดการกับมันด้วยกันเถอะ',
        'ความรู้สึกของคุณมันสมเหตุสมผลทีเดียว ลองทำสมาธิเพื่อช่วยจัดระเบียบจิตใจดูไหม?',
        'ฉันอยู่ที่นี่เพื่อฟัง บางครั้งการพูดคุยเรื่องความรู้สึกช่วยให้เราเข้าใจตัวเองได้ดีขึ้น',
        'มันต้องท้าทายมากสำหรับคุณ จำไว้นะว่าการรู้สึกแบบนี้มันเป็นเรื่องปกติ'
      ]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = text[language].empathyResponses;
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date(),
        mood: 'supportive'
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
            <Heart className="text-white" size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">AI Companion</h2>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Always here to listen' : 'พร้อมฟังคุณเสมอ'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-xl ${
                message.sender === 'user'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 shadow-sm border border-gray-200'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-2 ${
                message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-gray-500">{text[language].aiTyping}</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Save Mood Button */}
      <div className="px-4 pb-2">
        <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg font-medium border border-blue-200 hover:bg-blue-200 transition-colors">
          💾 {text[language].saveMood}
        </button>
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={text[language].placeholder}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              rows={1}
            />
          </div>
          <button className="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors">
            <Mic className="text-gray-600" size={20} />
          </button>
          <button
            onClick={handleSendMessage}
            className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={!inputText.trim()}
          >
            <Send className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
