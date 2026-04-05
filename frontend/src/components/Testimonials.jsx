import React from 'react';
import { Star } from 'lucide-react';
import { Card } from './ui/card';
import { testimonials } from '../mockData';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-amber-500">Guests</span> Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700 p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">Verified Google Review</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Join 5100+ happy customers</p>
          <div className="inline-flex items-center gap-2 text-amber-400">
            <Star className="w-6 h-6 fill-amber-500" />
            <span className="text-3xl font-bold">4.8</span>
            <span className="text-gray-400">/ 5.0 on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};
