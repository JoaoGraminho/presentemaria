
import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden" id="historia">
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 opacity-10 text-terracotta text-6xl">✿</div>
      <div className="absolute bottom-10 left-10 opacity-10 text-terracotta text-6xl">✿</div>

      <div className="max-w-4xl mx-auto text-center">
        <span className="text-terracotta font-bold text-sm uppercase tracking-widest mb-4 block">Como tudo começou</span>
        <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8">Nossa História</h2>
        <div className="section-divider mb-12"></div>
        
        <div className="space-y-10 text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-terracotta first-letter:mr-3 first-letter:float-left">
            Tudo começou em uma noite despretensiosa, quando o destino decidiu que nossos caminhos deveriam se cruzar. 
            Eu não sabia ainda, mas aquele momento mudaria minha vida para sempre.
          </p>
          <p>
            Lembro-me do seu sorriso, daquela menina maravilhosa que iluminava o ambiente.
            Depois do nosso primeiro beijo, soube que havia encontrado algo raro e precioso.
          </p>
          <p>
            Foi ali que descobri que existem pessoas que simplesmente pertencem uma à outra, 
            como se o universo inteiro conspirasse para uni-las. E você, meu amor, 
            é essa pessoa para mim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
