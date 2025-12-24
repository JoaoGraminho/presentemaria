
import React, { useState } from 'react';

const Letter: React.FC = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  // Itens do buquê com posições específicas para formar um arranjo denso e arredondado
  // x: horizontal %, y: vertical %, r: rotação, s: escala, e: emoji
  const bouquetItems = [
    { e: "🌹", x: "50%", y: "20%", r: "0deg", s: "1.4" },   // Centro topo
    { e: "🌸", x: "35%", y: "30%", r: "-15deg", s: "1.2" }, // Esquerda
    { e: "🌷", x: "65%", y: "30%", r: "15deg", s: "1.2" },  // Direita
    { e: "🌻", x: "50%", y: "45%", r: "5deg", s: "1.3" },   // Centro baixo
    { e: "🌿", x: "20%", y: "40%", r: "-30deg", s: "1.1" }, // Folha esquerda
    { e: "🍃", x: "80%", y: "40%", r: "30deg", s: "1.1" },  // Folha direita
    { e: "🌺", x: "40%", y: "55%", r: "-10deg", s: "1.2" }, // Meio esquerda
    { e: "🌼", x: "60%", y: "55%", r: "10deg", s: "1.2" },  // Meio direita
    { e: "🌹", x: "25%", y: "60%", r: "-20deg", s: "1.1" }, // Base esquerda
    { e: "🌷", x: "75%", y: "60%", r: "20deg", s: "1.1" },  // Base direita
    { e: "🌸", x: "50%", y: "70%", r: "0deg", s: "1.2" },   // Base centro
    { e: "🌿", x: "45%", y: "15%", r: "10deg", s: "0.9" },  // Folha topo
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white relative" id="carta">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-20 text-[20rem] text-terracotta rotate-12">♥</div>
        <div className="absolute -left-20 bottom-20 text-[20rem] text-terracotta -rotate-12">♥</div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-terracotta mb-4">Para Você, Meu Amor</h2>
          <div className="w-24 h-[2px] bg-terracotta mx-auto opacity-20"></div>
        </div>
        
        <div className="relative group">
          {/* Shadows and depth */}
          <div className="absolute inset-0 bg-terracotta/5 rounded-[3rem] blur-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
          
          <div className="bg-[#fffcf9] p-10 md:p-20 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-terracotta/10 relative paper-texture overflow-hidden">
            {/* Wax seal simulation */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-inner border-4 border-terracotta/50 opacity-80">
              JP
            </div>

            <p className="font-serif text-3xl text-terracotta mb-12 italic border-b border-terracotta/10 pb-4">Meu amor,</p>
            
            <div className="space-y-8 text-gray-700 text-xl md:text-2xl leading-relaxed font-light italic">
              <p>
                Escrever sobre o que sinto por você é praticamente impossível, pois o amor que tenho é tão profundo e imenso que as palavras parecem insuficientes para expressá-lo completamente.
              </p>
              
              <p>
                Você chegou na minha vida e transformou dias comuns em incríveis. Com você, aprendi que amar é sobre escolher alguém todos os dias, nos momentos fáceis e nos difíceis, nas risadas e nas lágrimas.
              </p>
              
              <p>
                Sou grato por cada segundo ao seu lado, por cada abraço que me faz sentir seguro, por cada olhar que me lembra que sou amado. Você é minha paz, minha alegria, meu lar.
              </p>
              
              <p>
                Que nossa história continue sendo escrita com muito amor, cumplicidade e a certeza de que, aconteça o que acontecer, estaremos juntos. Porque é ao seu lado que quero construir todos os meus amanhãs.
              </p>
            </div>
            
            <div className="mt-20 flex flex-col items-end">
              <div className="text-right">
                <p className="text-gray-400 mb-4 text-lg">Com todo o meu amor,</p>
                <p className="font-serif text-4xl text-terracotta mb-1">João Pedro Graminho</p>
                <div className="h-[1px] w-full bg-terracotta/30 mb-2"></div>
                <p className="text-sm text-gray-400 uppercase tracking-widest italic">Eternamente seu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Surprise Section - Improved Static Bouquet */}
        <div className="mt-16 text-center">
          {!showSurprise ? (
            <button 
              onClick={() => setShowSurprise(true)}
              className="bg-terracotta text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-[#c15b46] transition-all transform hover:scale-105 active:scale-95 animate-pulse"
            >
              Clique para uma surpresa ♥
            </button>
          ) : (
            <div className="animate-fade-in transition-all duration-1000 flex flex-col items-center">
              <p className="font-serif text-2xl text-terracotta mb-12 italic">Um buquê especial para você:</p>
              
              {/* Bouquet Container */}
              <div className="relative w-72 h-[450px] mb-8 flex flex-col items-center justify-end pb-10">
                
                {/* Bouquet Wrap (The "Cone") - Posicionado atrás das flores */}
                <div className="absolute bottom-10 w-40 h-64 bg-[#f5e6d3] shadow-lg rounded-b-lg opacity-95 border-x border-b border-[#e5d6c3] z-10" 
                     style={{ clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)' }}>
                  <div className="w-full h-full paper-texture opacity-20"></div>
                  {/* Inner shadow/depth for the opening */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/5"></div>
                </div>

                {/* The Flowers Head - Arranjo estático e denso */}
                <div className="absolute top-0 w-full h-[320px] z-20 pointer-events-none">
                   {bouquetItems.map((item, i) => (
                     <span 
                       key={i} 
                       className="absolute text-5xl md:text-6xl drop-shadow-md select-none transform -translate-x-1/2 -translate-y-1/2"
                       style={{ 
                         left: item.x,
                         top: item.y,
                         transform: `translate(-50%, -50%) rotate(${item.r}) scale(${item.s})`,
                       }}
                     >
                       {item.e}
                     </span>
                   ))}
                </div>

                {/* Ribbon Bow - Posicionado na frente do embrulho */}
                <div className="absolute bottom-32 z-30 text-5xl md:text-6xl drop-shadow-xl scale-125">
                  🎀
                </div>
              </div>

              <button 
                onClick={() => setShowSurprise(false)}
                className="mt-4 text-gray-400 hover:text-terracotta transition-colors text-sm uppercase tracking-widest"
              >
                Esconder buquê
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Letter;
