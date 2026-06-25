import { CalendarDays, Clock, MapPin, Tag } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
}

const dummyEvents: Event[] = [
  {
    id: "e1",
    title: "Clay & Coffee Date Night",
    date: "Oct 12, 2026",
    time: "6:00 PM - 8:30 PM",
    location: "The Roast Room, Downtown",
    price: "₹3,500 per person",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "e2",
    title: "Tote Bag Painting Mixer",
    date: "Oct 15, 2026",
    time: "4:00 PM - 6:30 PM",
    location: "Canvas Cafe, Westside",
    price: "₹2,500 per person",
    image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "e3",
    title: "Textured Art Therapy",
    date: "Oct 20, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "Brew & Brush, East End",
    price: "₹3,000 per person",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function UpcomingEvents({ onRegister }: { onRegister: (eventId: string) => void }) {
  return (
    <section id="events" className="py-24 px-6 bg-craft-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-craft-green/80 max-w-xl">
              Grab your spot before they sell out! Our workshops are kept small for the best experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyEvents.map((event) => (
            <div 
              key={event.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-craft-terracotta/5 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-craft-green/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-craft-terracotta">
                  Filling Fast
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 line-clamp-2">{event.title}</h3>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-craft-green/70">
                    <CalendarDays size={18} className="text-craft-terracotta" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-craft-green/70">
                    <Clock size={18} className="text-craft-terracotta" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-craft-green/70">
                    <MapPin size={18} className="text-craft-terracotta" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-craft-green/70">
                    <Tag size={18} className="text-craft-terracotta" />
                    <span className="font-medium text-craft-green">{event.price}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onRegister(event.id)}
                  className="w-full py-3 md:py-4 rounded-xl bg-craft-terracotta/10 text-craft-terracotta font-semibold group-hover:bg-craft-terracotta group-hover:text-white transition-colors duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
