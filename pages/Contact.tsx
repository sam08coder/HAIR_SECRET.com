import React from 'react';
import { SALON_INFO } from '../constants';
import { RevealSection, Button } from '../components/UI';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-10">
      {/* Map Placeholder Area */}
      <section className="h-[40vh] w-full bg-neutral-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.674900645014!2d101.69151507497127!3d3.179830596795096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc481093156947%3A0xc644c9b2075775c9!2sSentul%20Raya%20Boulevard!5e0!3m2!1sen!2smy!4v1714494123456!5m2!1sen!2smy" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-100"
        />
      </section>

      <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info Card - High Contrast White */}
            <RevealSection>
                <div className="bg-white border border-neutral-100 p-10 shadow-2xl">
                    <h1 className="text-4xl font-serif text-black mb-8">Get In Touch</h1>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-black font-bold mb-2">Address</h3>
                                <p className="text-neutral-600 leading-relaxed max-w-sm">
                                    {SALON_INFO.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-black font-bold mb-2">Phone</h3>
                                <p className="text-neutral-600">
                                    {SALON_INFO.phone}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 flex gap-4">
                            <a href={`https://wa.me/${SALON_INFO.whatsapp}`} target="_blank" rel="noreferrer">
                                <Button className="bg-green-600 hover:bg-green-700 text-white border-none shadow-md">
                                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                                </Button>
                            </a>
                            <a href={`tel:${SALON_INFO.phone}`}>
                                <Button variant="outline">Call Store</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* Hours */}
            <RevealSection delay={200} className="flex flex-col justify-end pb-10 md:pb-0">
                <h2 className="text-2xl font-serif text-black mb-6">Opening Hours</h2>
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-neutral-200 pb-4">
                        <span className="text-neutral-500">Monday - Sunday</span>
                        <span className="text-black font-medium">{SALON_INFO.hours}</span>
                    </div>
                    <p className="text-gold-600 text-sm mt-4 italic">Open Everyday for your convenience.</p>
                </div>
            </RevealSection>
        </div>
      </div>
    </div>
  );
};