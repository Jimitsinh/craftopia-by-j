import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-craft-cream px-6 py-20">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-craft-terracotta/10 blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-craft-lightBrown/15 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-craft-terracotta/10 text-craft-terracotta text-sm font-semibold tracking-wider uppercase">
          Welcome to Craftopia
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Unplug, Create, & <br className="hidden md:block" />
          <span className="text-craft-terracotta italic font-serif">Connect</span> at Your Favorite Cafes
        </h1>
        <p className="text-lg md:text-xl text-craft-green/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          We organize fun craft, pottery, and art workshops at local cafes. 
          Perfect for GenZ, couples, and friends looking for a unique, hands-on experience over great coffee.
        </p>
        
        <button 
          onClick={onBookClick}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-craft-green text-craft-cream font-medium text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <Calendar size={20} />
          <span>Book Your Slot / View Events</span>
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
