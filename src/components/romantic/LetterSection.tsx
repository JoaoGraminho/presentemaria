import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Feather } from "lucide-react";

const LetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letterParagraphs = [
    "Escrever sobre o que sinto por você é tentar colocar em palavras algo que vai muito além delas. Mas aqui estou, tentando expressar o que meu coração transborda todos os dias.",
    "Você chegou na minha vida e transformou dias comuns em momentos extraordinários. Com você, aprendi que amar é sobre escolher alguém todos os dias, nos momentos fáceis e nos difíceis, nas risadas e nas lágrimas.",
    "Sou grato(a) por cada segundo ao seu lado, por cada abraço que me faz sentir seguro(a), por cada olhar que me lembra que sou amado(a). Você é minha paz, minha alegria, meu lar.",
    "Que nossa história continue sendo escrita com muito amor, cumplicidade e a certeza de que, aconteça o que acontecer, estaremos juntos. Porque é ao seu lado que quero construir todos os meus amanhãs."
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Feather className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Para Você, Meu Amor
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Papel da carta */}
          <div className="relative bg-card rounded-3xl shadow-romantic-md p-8 md:p-12 border border-border/30">
            {/* Decoração superior */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-20 h-6 bg-primary/20 rounded-full" />
            </div>

            {/* Saudação */}
            <motion.p
              className="font-display text-2xl italic text-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Meu amor,
            </motion.p>

            {/* Parágrafos da carta */}
            <div className="space-y-6">
              {letterParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="font-body text-muted-foreground leading-loose text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Assinatura */}
            <motion.div
              className="mt-12 text-right"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="font-display text-xl italic text-foreground">
                Com todo o meu amor,
              </p>
              <p className="font-display text-2xl text-primary mt-2">
                {/* EDITE: Seu nome ou assinatura */}
                Eternamente seu(sua)
              </p>
            </motion.div>

            {/* Folha decorativa */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.4, duration: 0.4, type: "spring" }}
            >
              <div className="w-10 h-10 rounded-full bg-card shadow-romantic flex items-center justify-center border border-primary/30">
                <Leaf className="w-5 h-5 text-primary animate-float" strokeWidth={2} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
