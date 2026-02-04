import React, { useState } from 'react';
import { SERVICES, SALON_INFO } from '../constants';
import { RevealSection, Button, Card } from '../components/UI';
import { Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { Service } from '../types';

export const Booking: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  // Mock Calendar Generation
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const dates = generateDates();
  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:30 PM', '2:30 PM', '4:00 PM', '5:30 PM', '6:30 PM'];

  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2);
    if (step === 2 && selectedDate && selectedTime) setStep(3);
    if (step === 3 && formData.name && formData.phone) setStep(4);
  };

  const handleGoogleCalendar = () => {
    if (!selectedDate || !selectedTime || !selectedService) return;
    
    // Construct Google Calendar Link
    const startDateTime = new Date(selectedDate);
    // Parse time roughly for demo
    const timeParts = selectedTime.split(/[: ]/);
    let hours = parseInt(timeParts[0]);
    if (selectedTime.includes('PM') && hours !== 12) hours += 12;
    if (selectedTime.includes('AM') && hours === 12) hours = 0;
    
    startDateTime.setHours(hours, parseInt(timeParts[1]), 0);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Assume 1 hour

    const formatGCalDate = (date: Date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Appointment: ${selectedService.name}`)}&dates=${formatGCalDate(startDateTime)}/${formatGCalDate(endDateTime)}&details=${encodeURIComponent(`Service: ${selectedService.name} at HAIR SECRET`)}&location=${encodeURIComponent(SALON_INFO.address)}&sf=true&output=xml`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-10 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <RevealSection>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-4">Book Your Visit</h1>
            <p className="text-neutral-500">Step {step} of 4</p>
            <div className="w-full h-1 bg-neutral-200 mt-4 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gold-500 transition-all duration-500 ease-out"
                    style={{ width: `${step * 25}%` }}
                />
            </div>
          </header>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Interaction Area */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Step 1: Services */}
                {step === 1 && (
                    <RevealSection className="space-y-4">
                        <h2 className="text-2xl font-serif text-black mb-6">Select a Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {SERVICES.map((service) => (
                                <div 
                                    key={service.id}
                                    onClick={() => setSelectedService(service)}
                                    className={`p-6 border cursor-pointer transition-all duration-300 rounded-sm flex flex-col justify-between shadow-sm ${
                                        selectedService?.id === service.id 
                                        ? 'bg-black text-white border-black transform scale-[1.02]' 
                                        : 'bg-white text-black border-neutral-100 hover:border-gold-400'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif text-lg font-bold">{service.name}</h3>
                                        <span className={`text-xs font-bold uppercase tracking-wider ${selectedService?.id === service.id ? 'text-neutral-400' : 'text-gold-600'}`}>{service.category}</span>
                                    </div>
                                    <div className="flex justify-between items-end opacity-80 text-sm">
                                        <span>{service.duration}</span>
                                        <span className="font-bold text-lg">{service.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                    <RevealSection className="space-y-8">
                         <h2 className="text-2xl font-serif text-black">Select Date & Time</h2>
                         
                         {/* Date Strip */}
                         <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
                             {dates.map((date) => {
                                 const isSelected = selectedDate?.getDate() === date.getDate();
                                 return (
                                     <button 
                                        key={date.toString()}
                                        onClick={() => setSelectedDate(date)}
                                        className={`flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center border transition-all duration-300 ${
                                            isSelected 
                                            ? 'bg-black border-black text-white shadow-lg' 
                                            : 'bg-white border-neutral-200 text-neutral-500 hover:border-gold-400 hover:text-black'
                                        }`}
                                     >
                                         <span className="text-sm font-medium">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                         <span className="text-2xl font-serif font-bold">{date.getDate()}</span>
                                     </button>
                                 )
                             })}
                         </div>

                         {/* Time Grid */}
                         {selectedDate && (
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 animate-fade-in-up">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-3 px-2 text-sm border transition-all duration-300 ${
                                            selectedTime === time
                                            ? 'bg-black text-white border-black'
                                            : 'bg-white text-black border-neutral-200 hover:border-black'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                         )}
                    </RevealSection>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                    <RevealSection className="space-y-6 max-w-md">
                        <h2 className="text-2xl font-serif text-black">Your Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white border border-neutral-200 text-black p-4 focus:outline-none focus:border-gold-500 transition-colors shadow-sm"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    className="w-full bg-white border border-neutral-200 text-black p-4 focus:outline-none focus:border-gold-500 transition-colors shadow-sm"
                                    placeholder="+60 12 345 6789"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Email (Optional)</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-white border border-neutral-200 text-black p-4 focus:outline-none focus:border-gold-500 transition-colors shadow-sm"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>
                    </RevealSection>
                )}

                {/* Step 4: Confirmation */}
                {step === 4 && (
                    <RevealSection className="text-center py-10 space-y-6 bg-white border border-neutral-100 p-8 shadow-xl">
                        <CheckCircle className="w-20 h-20 text-gold-500 mx-auto animate-pulse-slow" />
                        <h2 className="text-3xl font-serif text-black">Booking Confirmed</h2>
                        <p className="text-neutral-600">
                            Thank you, {formData.name}. We look forward to seeing you.
                        </p>
                        <div className="bg-neutral-50 p-6 inline-block text-left rounded-lg space-y-2 min-w-[300px] border border-neutral-100">
                            <p className="text-gold-600 text-sm font-bold uppercase tracking-wider">Appointment Summary</p>
                            <p className="text-black text-lg font-serif">{selectedService?.name}</p>
                            <p className="text-neutral-600">{selectedDate?.toDateString()}</p>
                            <p className="text-neutral-600">{selectedTime}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <Button onClick={handleGoogleCalendar} variant="outline" className="border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white hover:border-gold-500">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                Add to Google Calendar
                            </Button>
                            <Button onClick={() => window.location.reload()}>Book Another</Button>
                        </div>
                    </RevealSection>
                )}

                {/* Navigation Buttons */}
                {step < 4 && (
                    <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
                        {step > 1 ? (
                            <button onClick={() => setStep(step - 1 as any)} className="text-neutral-500 hover:text-black transition-colors">Back</button>
                        ) : <div></div>}
                        
                        <Button 
                            onClick={handleNext}
                            disabled={
                                (step === 1 && !selectedService) || 
                                (step === 2 && (!selectedDate || !selectedTime)) ||
                                (step === 3 && (!formData.name || !formData.phone))
                            }
                            className="disabled:opacity-50 disabled:cursor-not-allowed"
                            icon
                        >
                            {step === 3 ? 'Confirm Booking' : 'Continue'}
                        </Button>
                    </div>
                )}
            </div>

            {/* Sticky Summary Card */}
            {step < 4 && (
                <div className="hidden lg:block">
                    <div className="sticky top-32">
                        <Card className="space-y-6">
                            <h3 className="font-serif text-xl text-black border-b border-neutral-100 pb-4">Booking Summary</h3>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-neutral-500">Service</span>
                                    <span className="text-black text-right max-w-[150px]">{selectedService?.name || '-'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-500">Date</span>
                                    <span className="text-black">{selectedDate?.toLocaleDateString() || '-'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-500">Time</span>
                                    <span className="text-black">{selectedTime || '-'}</span>
                                </div>
                                <div className="flex justify-between pt-4 border-t border-neutral-100">
                                    <span className="text-black font-medium">Total</span>
                                    <span className="text-gold-600 font-bold text-xl">{selectedService?.price || 'RM 0'}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};