import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEventId?: string | null;
}

const eventDetails = [
  { id: "e1", title: "Clay & Coffee Date Night", date: "Oct 12, 2026", time: "6:00 PM - 8:30 PM" },
  { id: "e2", title: "Tote Bag Painting Mixer", date: "Oct 15, 2026", time: "4:00 PM - 6:30 PM" },
  { id: "e3", title: "Textured Art Therapy", date: "Oct 20, 2026", time: "5:00 PM - 7:00 PM" }
];

export default function RegistrationModal({ isOpen, onClose, selectedEventId }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attendanceType: 'Single',
    groupSize: '3',
    event: selectedEventId || 'e1'
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, event: selectedEventId || 'e1' }));
    }
  }, [isOpen, selectedEventId]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedEvent = eventDetails.find(ev => ev.id === formData.event);
    const membersCount = formData.attendanceType === 'Group' ? formData.groupSize : (formData.attendanceType === 'Couple' ? '2' : '1');

    const whatsappMessage = `📢 *New Slot Booking Received*

A new booking has been made.

👤 Customer: ${formData.fullName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
👥 Members: ${membersCount}
📅 Date: ${selectedEvent?.date}
🕒 Time: ${selectedEvent?.time}

Please contact the customer to confirm the booking and payment.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Number is hidden from the UI and only used to generate the secure WhatsApp link
    const ownerWhatsAppNumber = "919427446542"; 

    window.open(`https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`, '_blank');

    alert(`Redirecting to WhatsApp... Please hit 'Send' to finalize your booking, ${formData.fullName}!`);
    onClose();
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-craft-green/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-craft-cream rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-craft-green/50 hover:text-craft-green transition-colors rounded-full hover:bg-craft-terracotta/10 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto">
          <h2 className="text-3xl font-bold mb-2">Book Your Slot</h2>
          <p className="text-craft-green/70 mb-8">No payment required now. We'll contact you to confirm!</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-craft-terracotta/20 bg-white focus:outline-none focus:ring-2 focus:ring-craft-terracotta focus:border-transparent transition-all"
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-craft-terracotta/20 bg-white focus:outline-none focus:ring-2 focus:ring-craft-terracotta focus:border-transparent transition-all"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-craft-green/60 font-medium">+91</span>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-craft-terracotta/20 bg-white focus:outline-none focus:ring-2 focus:ring-craft-terracotta focus:border-transparent transition-all"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Event</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-craft-terracotta/20 bg-white focus:outline-none focus:ring-2 focus:ring-craft-terracotta transition-all appearance-none"
                  value={formData.event}
                  onChange={e => setFormData({...formData, event: e.target.value})}
                >
                  <option value="e1">Clay & Coffee</option>
                  <option value="e2">Tote Bag Painting</option>
                  <option value="e3">Textured Art Therapy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Who's Coming?</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-craft-terracotta/20 bg-white focus:outline-none focus:ring-2 focus:ring-craft-terracotta transition-all appearance-none"
                  value={formData.attendanceType}
                  onChange={e => setFormData({...formData, attendanceType: e.target.value})}
                >
                  <option value="Single">Just Me (Single)</option>
                  <option value="Couple">Couple</option>
                  <option value="Group">Group</option>
                </select>
              </div>
            </div>

            {formData.attendanceType === 'Group' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-sm font-medium mb-2">How many members?</label>
                <input 
                  type="number" 
                  min="3"
                  max="20"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-craft-terracotta/20 bg-white focus:outline-none focus:ring-2 focus:ring-craft-terracotta focus:border-transparent transition-all"
                  placeholder="e.g. 3"
                  value={formData.groupSize}
                  onChange={e => setFormData({...formData, groupSize: e.target.value})}
                />
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 py-4 rounded-xl bg-craft-green text-craft-cream font-semibold text-lg hover:bg-craft-green/90 transition-colors shadow-lg active:scale-[0.98] disabled:opacity-70"
            >
              {isSubmitting ? "Sending Request..." : "Submit Booking Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
