import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-craft-green text-craft-cream py-16 px-6 border-t border-craft-terracotta/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-3xl font-serif font-bold mb-4 text-craft-terracotta">Craftopia.</h3>
          <p className="text-craft-cream/70 max-w-sm mb-6">
            Curated craft and art workshops at your favorite local cafes. Unplug, create, and connect.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/the.craftopia__" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-craft-terracotta transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="mailto:jimitsinhataliyua25@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-craft-terracotta transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-craft-cream/70">
            <li><a href="#about" className="hover:text-craft-terracotta transition-colors">About Us</a></li>
            <li><a href="#events" className="hover:text-craft-terracotta transition-colors">Upcoming Events</a></li>
            <li><a href="#faq" className="hover:text-craft-terracotta transition-colors">FAQs</a></li>
            <li><a href="#contact" className="hover:text-craft-terracotta transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Join the Community</h4>
          <p className="text-craft-cream/70 mb-4">
            Subscribe to get early access to new events before they hit our Instagram.
          </p>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-craft-terracotta flex-1"
            />
            <button className="bg-craft-terracotta px-4 py-2 rounded-lg font-semibold hover:bg-craft-terracotta/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-craft-cream/50 gap-4 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Craftopia. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={14} className="text-craft-terracotta" /> for the creative souls.
        </p>
      </div>
    </footer>
  );
}
