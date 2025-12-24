
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800", alt: "Casamento/Romance 1" },
    { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800", alt: "Casamento/Romance 2" },
    { src: "https://images.unsplash.com/photo-1516589174184-c6852657d803?q=80&w=800", alt: "Casamento/Romance 3" },
    { src: "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=800", alt: "Casamento/Romance 4" },
    { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800", alt: "Casamento/Romance 5" },
    { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800", alt: "Casamento/Romance 6" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#f0f9f4]" id="galeria">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Nossa Galeria</h2>
          <p className="text-terracotta italic">Registros de momentos inesquecíveis</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-lg border-4 border-white">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-terracotta shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  ♥
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
