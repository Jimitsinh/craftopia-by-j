import { Coffee, Palette, Users } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-craft-terracotta" />,
      title: "Hands-on Creativity",
      description: "From pottery to tote bag painting, explore a new craft every week."
    },
    {
      icon: <Coffee className="w-8 h-8 text-craft-terracotta" />,
      title: "Cozy Cafe Vibes",
      description: "Hosted at your favorite local spots with great aesthetics and even better coffee."
    },
    {
      icon: <Users className="w-8 h-8 text-craft-terracotta" />,
      title: "Connect & Vibe",
      description: "Perfect for date nights, making new friends, or a memorable squad hang out."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">More Than Just a Workshop</h2>
          <p className="text-lg text-craft-green/80 max-w-2xl mx-auto leading-relaxed">
            Craftopia brings people together through creative activities. 
            We believe in disconnecting from screens and reconnecting with our hands, 
            our creativity, and each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-craft-cream border border-craft-terracotta/10 hover:border-craft-terracotta/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-craft-terracotta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-craft-green/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
