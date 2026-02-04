import React from 'react';
import { Link } from 'react-router-dom';
import { RevealSection, Button, Card } from '../components/UI';
import { SERVICES, SALON_INFO, REVIEWS } from '../constants';
import { Star, MapPin, Clock, Quote, Phone, MessageCircle } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Abstract Background - Lighter for White Theme */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/193/1920/1080?grayscale" 
            alt="Salon Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient to White */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <RevealSection>
              <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] text-black mb-6">
                Unveil Your <br />
                <span className="text-gold-500 italic">True Elegance</span>
              </h1>
            </RevealSection>
            
            <RevealSection delay={200}>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed font-light">
                Experience world-class styling in the heart of Sentul. 
                Precision cuts, bespoke color, and luxury care tailored just for you.
              </p>
            </RevealSection>

            <RevealSection delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <Button icon>Book Appointment</Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline">Shop Products</Button>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-neutral-50 border-y border-neutral-100 py-16">
        <div className="container mx-auto px-6">
          <RevealSection className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="flex flex-col items-center text-center p-4">
                <MapPin className="w-8 h-8 mb-4 text-gold-600" />
                <h3 className="font-serif text-xl font-bold mb-2 text-black">Locate Us</h3>
                <p className="text-neutral-600 text-sm max-w-xs">{SALON_INFO.address}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <Clock className="w-8 h-8 mb-4 text-gold-600" />
                <h3 className="font-serif text-xl font-bold mb-2 text-black">Opening Hours</h3>
                <p className="text-neutral-600 text-sm">{SALON_INFO.days}</p>
                <p className="text-neutral-600 text-sm font-medium">{SALON_INFO.hours}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <Star className="w-8 h-8 mb-4 text-gold-600" />
                <h3 className="font-serif text-xl font-bold mb-2 text-black">Premium Service</h3>
                <p className="text-neutral-600 text-sm max-w-xs">Top-tier stylists using international luxury products.</p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="text-4xl md:text-6xl font-serif text-black mb-16 text-center">
              Curated Services
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, index) => (
              <RevealSection key={service.id} delay={index * 150}>
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <span className="text-gold-600 text-xs font-bold uppercase tracking-widest mb-2 block">{service.category}</span>
                    <h3 className="text-2xl font-serif text-black mb-2">{service.name}</h3>
                    <p className="text-neutral-500 text-sm mb-4">A complete transformation session tailored to your face shape and lifestyle.</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-neutral-100 pt-4 mt-4">
                    <span className="text-black font-medium">{service.price}</span>
                    <span className="text-neutral-400 text-sm">{service.duration}</span>
                  </div>
                </Card>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-12">
             <Link to="/booking">
                <span className="text-gold-600 hover:text-black border-b border-gold-400 pb-1 transition-colors cursor-pointer text-sm tracking-widest uppercase">View Full Menu</span>
             </Link>
          </RevealSection>
        </div>
      </section>

      {/* Client Reviews Section (Moved from Reviews.tsx) */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
            <RevealSection className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Client Stories</h2>
                <div className="h-px w-24 bg-gold-500 mx-auto"></div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {REVIEWS.map((review, index) => (
                    <RevealSection key={review.id} delay={index * 150}>
                        <Card className="h-full relative overflow-hidden bg-white border-neutral-100 shadow-sm">
                            <Quote className="absolute top-6 right-6 text-neutral-100 w-24 h-24 rotate-180" />
                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg text-neutral-800 font-serif leading-relaxed mb-8">
                                    "{review.comment}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-black text-sm font-bold uppercase tracking-wide">{review.name}</p>
                                        <p className="text-neutral-500 text-xs">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </RevealSection>
                ))}
            </div>
            
            <RevealSection className="mt-12 text-center">
                 <a href="https://google.com" target="_blank" rel="noreferrer" className="text-neutral-500 text-sm hover:text-gold-600 transition-colors">See all reviews on Google</a>
            </RevealSection>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[50vh] relative flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://picsum.photos/id/433/1920/1080")' }}>
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 text-center px-6">
            <RevealSection>
                <h2 className="text-4xl md:text-7xl font-serif text-black mb-6">Redefine Yourself</h2>
                <Link to="/booking">
                    <Button variant="primary">Book Your Transformation</Button>
                </Link>
            </RevealSection>
        </div>
      </section>

      {/* Contact Section (Moved from Contact.tsx) */}
      <section className="relative bg-white">
        {/* Map */}
        <div className="h-[400px] w-full bg-neutral-200">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.674900645014!2d101.69151507497127!3d3.179830596795096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc481093156947%3A0xc644c9b2075775c9!2sSentul%20Raya%20Boulevard!5e0!3m2!1sen!2smy!4v1714494123456!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>

        {/* Contact Info Overlay */}
        <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
            <RevealSection>
                <div className="bg-white border border-neutral-100 p-8 md:p-12 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-serif text-black mb-6">Get In Touch</h2>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-black font-bold text-sm mb-1">Address</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">{SALON_INFO.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-black font-bold text-sm mb-1">Phone</h3>
                                <p className="text-neutral-600 text-sm">{SALON_INFO.phone}</p>
                            </div>
                        </div>
                        <div className="pt-4 flex gap-4">
                            <a href={`https://wa.me/${SALON_INFO.whatsapp}`} target="_blank" rel="noreferrer">
                                <Button className="bg-green-600 hover:bg-green-700 text-white border-none shadow-md py-2 px-4 text-xs">
                                    <MessageCircle className="w-4 h-4" /> WhatsApp
                                </Button>
                            </a>
                            <a href={`tel:${SALON_INFO.phone}`}>
                                <Button variant="outline" className="py-2 px-4 text-xs">Call Store</Button>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6 md:border-l md:border-neutral-100 md:pl-12">
                         <h2 className="text-3xl font-serif text-black mb-6">Opening Hours</h2>
                         <div className="space-y-4">
                            <div className="flex justify-between border-b border-neutral-100 pb-2">
                                <span className="text-neutral-500 text-sm">Days</span>
                                <span className="text-black font-medium text-sm">{SALON_INFO.days}</span>
                            </div>
                            <div className="flex justify-between border-b border-neutral-100 pb-2">
                                <span className="text-neutral-500 text-sm">Hours</span>
                                <span className="text-black font-medium text-sm">{SALON_INFO.hours}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealSection>
        </div>
      </section>
    </>
  );
};