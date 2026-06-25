import { useState } from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import UpcomingEvents from './components/UpcomingEvents';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleRegisterClick = (eventId?: string) => {
    if (eventId) {
      setSelectedEventId(eventId);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEventId(null), 300); // Wait for transition
  };

  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-craft-terracotta selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-40 bg-craft-cream/80 backdrop-blur-md border-b border-craft-terracotta/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-craft-terracotta">
            Craftopia.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-craft-terracotta transition-colors">About</a>
            <a href="#events" className="hover:text-craft-terracotta transition-colors">Events</a>
            <a href="#faq" className="hover:text-craft-terracotta transition-colors">FAQ</a>
          </div>
          <button 
            onClick={() => handleRegisterClick()}
            className="px-5 py-2 rounded-full bg-craft-green text-craft-cream text-sm font-semibold hover:bg-craft-green/90 transition-all"
          >
            Book Now
          </button>
        </div>
      </nav>

      <Hero onBookClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })} />
      <div id="about"><AboutUs /></div>
      <UpcomingEvents onRegister={handleRegisterClick} />
      <Footer />

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedEventId={selectedEventId}
      />
    </main>
  );
}

export default App;
