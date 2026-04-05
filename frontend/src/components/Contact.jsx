import React from 'react';
import { MapPin, Phone, Clock, Navigation, Car } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { contactInfo } from '../mockData';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit <span className="text-amber-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're located in the heart of HSR Layout, ready to welcome you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-amber-900/30 p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300 leading-relaxed">{contactInfo.address}</p>
                  <Button
                    onClick={() => window.open(contactInfo.mapsLink, '_blank')}
                    className="mt-4 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-amber-900/30 p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300 text-lg">{contactInfo.phone}</p>
                  <Button
                    onClick={() => window.location.href = `tel:${contactInfo.phone}`}
                    className="mt-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-amber-900/30 p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                  <p className="text-gray-300">{contactInfo.hours}</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-400 text-sm font-medium">Open Now</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Parking Info */}
            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-amber-900/30 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Parking</h3>
                  <p className="text-gray-300">Valet parking available. Arriving early is recommended during peak hours.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <div className="h-full min-h-[600px]">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl border-2 border-amber-900/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1661234567!2d77.63558!3d12.91334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQ4LjAiTiA3N8KwMzgnMDguMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SOMRAS BAR & KITCHEN Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
