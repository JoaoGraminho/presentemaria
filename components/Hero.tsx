
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Ken Burns effect simulation */}
      <div className="absolute inset-0 z-0 scale-110 animate-[pulse_10s_infinite]">
        <img 
          src="https://images.unsplash.com/photo-1516589174184-c6852657d803?auto=format&fit=crop&q=80&w=1920" 
          alt="Couple holding hands"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 hero-overlay"></div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <span className="inline-block mb-4 text-sm md:text-base font-medium uppercase tracking-[0.3em] opacity-80 animate-fade-in">
          Nossa Jornada
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 drop-shadow-2xl tracking-tight leading-tight">
          Nossa História <br/> de Amor
        </h1>
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="h-[1px] w-12 md:w-24 bg-white/40"></div>
          <span className="text-3xl text-terracotta animate-bounce">♥</span>
          <div className="h-[1px] w-12 md:w-24 bg-white/40"></div>
        </div>
        <p className="text-xl md:text-2xl font-light italic opacity-90 mb-10">
          "Um pequeno trecho de nossa jornada"
        </p>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 inline-block px-8 py-3 rounded-full">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em]">
            Desde 15 de novembro de 2023
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2 opacity-60">Role para baixo</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;
