
import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "Novembro 2023",
    title: "Nosso Primeiro Encontro",
    description: "O dia em que nos conhecemos e o mundo ganhou mais cor. Desde o primeiro beijo eu sabia que era você!"
  },
  {
    date: "Dezembro 2023",
    title: "Primeiro \"Eu Te Amo\"",
    description: "Palavras que mudaram tudo. Dizer \"eu te amo\" pela primeira vez foi como se o tempo parasse."
  },
  {
    date: "Dezembro 2023",
    title: "Nosso Primeiro Ano Novo",
    description: "Celebrando a virada ao seu lado, com a promessa de muitos outros momentos felizes. Foi quando te pedi em namoro."
  },
  {
    date: "Dezembro 2023",
    title: "Nossa Primeira Viagem",
    description: "Nossa viagem para Balneário Camboriú foi um caos completo kkkkk, mas me diverti muito ao seu lado."
  },
  {
    date: "Novembro 2025",
    title: "Dois Anos de Amor",
    description: "Completamos dois anos de conexão. Agora que estamos juntos, nada mais importa."
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#f0f9f4]" id="momentos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Linha do Tempo</h2>
          <p className="text-terracotta italic text-lg">Nossas datas mais importantes</p>
          <div className="w-20 h-1 bg-terracotta mx-auto mt-6 rounded-full opacity-40"></div>
        </div>
        
        <div className="relative">
          {/* Central Line - Fixed positioning for true centering */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-terracotta/30"></div>
          <div className="md:hidden absolute left-4 h-full w-[2px] bg-terracotta/30"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`mb-16 relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Desktop Empty Space for alignment */}
              <div className="hidden md:block w-[45%]"></div>
              
              {/* Dot - Truly centered on line */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-terracotta shadow-[0_0_0_8px_rgba(226,114,91,0.1)] z-10"></div>
              
              {/* Content Card */}
              <div className="w-full md:w-[45%] ml-12 md:ml-0">
                <div className="group bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold text-terracotta uppercase tracking-[0.2em] block mb-3">{item.date}</span>
                  <h3 className="font-serif text-2xl mb-4 text-gray-800 group-hover:text-terracotta transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light italic">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
