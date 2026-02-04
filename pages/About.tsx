import React from 'react';
import { RevealSection, Card } from '../components/UI';
import { Scissors, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/453/1920/1080?grayscale" 
            alt="Salon Team" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
            <RevealSection>
                <h1 className="text-5xl md:text-8xl font-serif text-black mb-6">The Art of Hair</h1>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light">
                    Where passion meets precision in the heart of Kuala Lumpur.
                </p>
            </RevealSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <RevealSection>
                      <div className="relative">
                          <img 
                            src="https://picsum.photos/id/338/800/1000?grayscale" 
                            alt="Stylist working" 
                            className="w-full h-auto shadow-2xl"
                          />
                          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-neutral-100 -z-10"></div>
                          <div className="absolute -top-8 -left-8 w-48 h-48 border border-gold-500 -z-10"></div>
                      </div>
                  </RevealSection>
                  
                  <RevealSection delay={200}>
                      <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-4 block">Our Story</span>
                      <h2 className="text-4xl font-serif text-black mb-8">A Sanctuary of Style</h2>
                      <p className="text-neutral-600 leading-relaxed mb-6">
                          Founded with a singular vision, HAIR SECRET was established to bridge the gap between high-fashion editorial styling and everyday wearability. Located in the vibrant district of Sentul, we have cultivated a space that feels less like a salon and more like a retreat.
                      </p>
                      <p className="text-neutral-600 leading-relaxed mb-6">
                          Our philosophy is simple: listen, create, and inspire. We believe that a great hairstyle is not just about the cut—it's about understanding the individual. Every texture, face shape, and lifestyle is unique, and our approach reflects that diversity.
                      </p>
                      <p className="text-neutral-600 leading-relaxed">
                          With over a decade of excellence, we have become a destination for those seeking transformation, whether it's a subtle refresh or a bold new identity.
                      </p>
                  </RevealSection>
              </div>
          </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-6">
              <RevealSection className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif text-black">Why Choose Us</h2>
              </RevealSection>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <RevealSection delay={100}>
                      <Card className="text-center h-full border-t-4 border-t-gold-500">
                          <Scissors className="w-12 h-12 text-black mx-auto mb-6" />
                          <h3 className="text-xl font-bold text-black mb-4">Precision Mastery</h3>
                          <p className="text-neutral-600 text-sm">
                              Our stylists undergo rigorous continuous training to master the latest global techniques in cutting and coloring.
                          </p>
                      </Card>
                  </RevealSection>
                  <RevealSection delay={200}>
                      <Card className="text-center h-full border-t-4 border-t-gold-500">
                          <Award className="w-12 h-12 text-black mx-auto mb-6" />
                          <h3 className="text-xl font-bold text-black mb-4">Premium Products</h3>
                          <p className="text-neutral-600 text-sm">
                              We exclusively use top-tier international brands that prioritize hair health, shine, and longevity.
                          </p>
                      </Card>
                  </RevealSection>
                  <RevealSection delay={300}>
                      <Card className="text-center h-full border-t-4 border-t-gold-500">
                          <Heart className="w-12 h-12 text-black mx-auto mb-6" />
                          <h3 className="text-xl font-bold text-black mb-4">Personal Connection</h3>
                          <p className="text-neutral-600 text-sm">
                              We build relationships, not just client lists. Your consultation is a dialogue, ensuring your vision comes to life.
                          </p>
                      </Card>
                  </RevealSection>
              </div>
          </div>
      </section>

      {/* Team Snippet */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
              <RevealSection>
                  <h2 className="text-4xl font-serif text-black mb-8">Meet The Team</h2>
                  <p className="text-neutral-600 mb-12">
                      Our diverse team of senior stylists and color experts brings a wealth of international experience to Kuala Lumpur. 
                      United by a passion for beauty and a dedication to service, we are here to make you look and feel your absolute best.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="group relative overflow-hidden aspect-[3/4]">
                              <img 
                                src={`https://picsum.photos/id/${60 + i}/400/600?grayscale`} 
                                alt="Stylist" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                          </div>
                      ))}
                  </div>
              </RevealSection>
          </div>
      </section>
    </div>
  );
};