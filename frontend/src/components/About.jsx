import React from 'react';
import { MapPin, Star, Users, Clock } from 'lucide-react';
import { Card } from './ui/card';

export const About = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      title: '4.8★ Rating',
      description: 'Loved by 5100+ customers on Google'
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: 'Spacious Seating',
      description: 'Two floors with open-air dining'
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: 'Extended Hours',
      description: '12 PM to 1 AM, every single day'
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-500" />,
      title: 'Prime Location',
      description: 'Heart of HSR Layout, Bengaluru'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-amber-500">SOMRAS</span> Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A modern bar & kitchen in the heart of HSR Layout, where great food meets crafted cocktails in an atmosphere that keeps people coming back.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Where Friends Meet & Stories Unfold
            </h3>
            <p className="text-gray-300 leading-relaxed">
              SOMRAS BAR & KITCHEN has become HSR Layout's go-to destination for those seeking exceptional food, expertly crafted cocktails, and a vibe that feels just right. With a 4.8-star rating backed by over 5,100 reviews, we've earned our reputation one satisfied customer at a time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our two spacious floors feature dim-light ambiance perfect for intimate conversations, while our open-air seating lets you enjoy Bengaluru's pleasant evenings. Whether you're here for our signature Basha Fish, Jalapeno Cheese Poppers, or a perfectly mixed Tequila Sunset, we promise an experience worth repeating.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From noon till 1 AM, every day of the week, our doors are open to those who appreciate good company, great food, and the kind of atmosphere that turns casual visits into lasting memories.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1770319675686-ae3b11647bcd"
                  alt="Bar interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1768464706081-9ab0997a2e90"
                  alt="Ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-64 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1657313666513-70770d329ef4"
                  alt="Cocktails"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/12124893/pexels-photo-12124893.jpeg"
                  alt="Bar counter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-amber-900/30 p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
