import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf } from "lucide-react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "Tudo começou em uma tarde qualquer, quando o destino decidiu que nossos caminhos deveriam se cruzar. Eu não sabia ainda, mas aquele encontro mudaria minha vida para sempre.",
    "Lembro-me do seu sorriso, daquela conversa que parecia não ter fim, e de como o tempo passou voando quando estávamos juntos pela primeira vez.",
    "Foi ali que descobri que existem pessoas que simplesmente pertencem uma à outra, como se o universo inteiro conspirasse para uni-las. E você, meu amor, é essa pessoa para mim."
  ];

  return (
    <section id="historia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título da seção */}
          <motion.h2
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nossa História
          </motion.h2>

          {/* Divisor */}
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* Parágrafos */}
          <div className="space-y-8">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Decoração final - folha */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <Leaf className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
