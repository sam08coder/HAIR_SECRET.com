import React from 'react';
import { REVIEWS } from '../constants';
import { RevealSection, Card } from '../components/UI';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-12 pb-24">
        <div className="container mx-auto px-6">
            <RevealSection className="mb-16">
                <h1 className="text-4xl md:text-7xl font-serif text-black mb-6">Client Stories</h1>
                <div className="h-px w-24 bg-gold-500"></div>
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
                                <p className="text-lg md:text-xl text-neutral-800 font-serif leading-relaxed mb-8">
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
            
            <RevealSection className="mt-20 text-center">
                 <p className="text-neutral-600 mb-6">Have you visited us recently?</p>
                 <a href="https://google.com" target="_blank" rel="noreferrer" className="text-black border-b border-black hover:border-gold-600 hover:text-gold-600 transition-colors pb-1">Leave a Review on Google</a>
            </RevealSection>
        </div>
    </div>
  );
};