import React from 'react';
import { PRODUCTS } from '../constants';
import { RevealSection, Button } from '../components/UI';
import { ShoppingBag } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-12 pb-24">
        <div className="container mx-auto px-6">
            <RevealSection className="text-center mb-16">
                <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-4 block">Shop</span>
                <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">Home Care Collection</h1>
                <p className="text-neutral-600 max-w-xl mx-auto">
                    Extend your salon experience with our curated selection of premium hair care products.
                </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.map((product, index) => (
                    <RevealSection key={product.id} delay={index * 100}>
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden aspect-square mb-6 bg-neutral-100">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button variant="primary" className="w-full text-xs py-2">Add to Bag</Button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-serif text-black mb-1 group-hover:text-gold-600 transition-colors">{product.name}</h3>
                                <p className="text-neutral-500 text-xs mb-2 line-clamp-2">{product.description}</p>
                                <p className="text-black font-medium">{product.price}</p>
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>

            <RevealSection className="mt-24 p-12 bg-neutral-50 text-center border border-neutral-200">
                <ShoppingBag className="w-12 h-12 text-gold-600 mx-auto mb-6" />
                <h2 className="text-2xl font-serif text-black mb-4">Visit Store to Purchase</h2>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                    Products are available for purchase directly at our Sentul location. Reserve online for pickup.
                </p>
                <a href={`https://wa.me/60178760900?text=${encodeURIComponent("Hi, I'm interested in buying some products.")}`} target="_blank" rel="noreferrer">
                    <Button variant="outline">Inquire on WhatsApp</Button>
                </a>
            </RevealSection>
        </div>
    </div>
  );
};