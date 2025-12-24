
import React from 'react';

const moments = [
  { icon: "✨", title: "Risadas Infinitas", text: "Eu adoro ver você rir, aquelas risadas espontâneas que iluminam meu dia e fazem meu coração bater mais forte." },
  { icon: "🌙", title: "Noites de Conversa", text: "Nossos momentos de conversa até altas horas me fazem sentir tão conectado a você." },
  { icon: "💪", title: "Superações Juntos", text: "Enfrentamos desafios lado a lado, e cada obstáculo superado fortalece ainda mais nosso amor." },
  { icon: "🌅", title: "Nossos Momentos", text: "Eu amo passar meu tempo com você, seja em aventuras ou em momentos simples do dia a dia." }
];

const Moments: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white" id="marcaram">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">O que amamos um no outro</h2>
          <div className="section-divider w-1/2 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {moments.map((moment, idx) => (
            <div key={idx} className="group relative bg-[#fcfdfc] p-10 rounded-[2.5rem] text-center border border-emerald-50 hover:border-terracotta/20 transition-all duration-500">
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{moment.icon}</div>
              <h3 className="font-serif text-2xl text-terracotta mb-5">{moment.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed italic">{moment.text}</p>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 text-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity">♥</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moments;
