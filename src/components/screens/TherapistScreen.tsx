
import React, { useState } from 'react';
import { Star, MapPin, Calendar, Filter, User } from 'lucide-react';

interface Therapist {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  price: number;
  location: string;
  languages: string[];
  isPremium: boolean;
  avatar: string;
  experience: number;
}

interface TherapistScreenProps {
  language: 'en' | 'th';
}

const TherapistScreen: React.FC<TherapistScreenProps> = ({ language }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const text = {
    en: {
      title: 'Find Your Therapist',
      filters: 'Filters',
      all: 'All',
      premium: 'Premium',
      affordable: 'Affordable',
      rating: 'Rating',
      experience: 'years experience',
      languages: 'Languages',
      bookSession: 'Book Session',
      viewProfile: 'View Profile',
      pricePerSession: '/session',
      premiumOnly: 'Premium Only'
    },
    th: {
      title: 'ค้นหานักจิตวิทยา',
      filters: 'ตัวกรอง',
      all: 'ทั้งหมด',
      premium: 'พรีเมียม',
      affordable: 'ราคาสมเหตุสมผล',
      rating: 'คะแนน',
      experience: 'ปีประสบการณ์',
      languages: 'ภาษา',
      bookSession: 'จองเซสชัน',
      viewProfile: 'ดูโปรไฟล์',
      pricePerSession: '/เซสชัน',
      premiumOnly: 'พรีเมียมเท่านั้น'
    }
  };

  const therapists: Therapist[] = [
    {
      id: '1',
      name: 'Dr. Siriporn Thanakit',
      specialty: 'Anxiety & Depression',
      rating: 4.9,
      price: 1200,
      location: 'Bangkok',
      languages: ['Thai', 'English'],
      isPremium: false,
      avatar: '👩‍⚕️',
      experience: 8
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Stress Management',
      rating: 4.7,
      price: 1800,
      location: 'Chiang Mai',
      languages: ['English', 'Chinese'],
      isPremium: true,
      avatar: '👨‍⚕️',
      experience: 12
    },
    {
      id: '3',
      name: 'Dr. Niran Sukhothai',
      specialty: 'Relationship Counseling',
      rating: 4.8,
      price: 1000,
      location: 'Phuket',
      languages: ['Thai'],
      isPremium: false,
      avatar: '👨‍⚕️',
      experience: 5
    }
  ];

  const filters = [
    { id: 'all', label: text[language].all },
    { id: 'premium', label: text[language].premium },
    { id: 'affordable', label: text[language].affordable }
  ];

  const filteredTherapists = therapists.filter(therapist => {
    if (selectedFilter === 'premium') return therapist.isPremium;
    if (selectedFilter === 'affordable') return therapist.price < 1500;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {text[language].title}
        </h1>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Filter Buttons */}
      {showFilters && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {/* Therapist List */}
      <div className="space-y-4">
        {filteredTherapists.map((therapist) => (
          <div key={therapist.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-2xl">
                {therapist.avatar}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{therapist.name}</h3>
                    <p className="text-gray-600">{therapist.specialty}</p>
                  </div>
                  {therapist.isPremium && (
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      {text[language].premiumOnly}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span>{therapist.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{therapist.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{therapist.experience} {text[language].experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">{text[language].languages}:</span>
                    <span>{therapist.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-green-600">
                    ฿{therapist.price.toLocaleString()}<span className="text-sm text-gray-500">{text[language].pricePerSession}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      {text[language].viewProfile}
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                      <Calendar size={16} />
                      {text[language].bookSession}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTherapists.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <p className="text-gray-600">No therapists found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default TherapistScreen;
