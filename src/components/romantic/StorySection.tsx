import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf } from "lucide-react";

const StorySection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const paragraphs = [
    "Tudo começou em uma tarde qualquer, quando o destino decidiu que nossos caminhos deveriam se cruzar. Eu não sabia ainda, mas aquele encontro mudaria minha vida para sempre.",
    "Lembro-me do seu sorriso, daquela conversa que parecia não ter fim, e de como o tempo passou voando quando estávamos juntos pela primeira vez.",
    "Foi ali que descobri que existem pessoas que simplesmente pertencem uma à outra, como se o universo inteiro conspirasse para uni-las. E você, meu amor, é essa pessoa para mim."
  ];

  return (
    <section id="historia" ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Elemento decorativo parallax */}
      <motion.div 
        className="absolute right-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="absolute left-0 bottom-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título da seção com reveal */}
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Nossa História
            </motion.h2>
          </div>

          {/* Divisor animado */}
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Parágrafos com reveal escalonado */}
          <div className="space-y-8">
            {paragraphs.map((text, index) => (
              <div key={index} className="overflow-hidden">
                <motion.p
                  className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ 
                    delay: 0.6 + index * 0.2, 
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {text}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Decoração final - folha */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
            transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
          >
            <Leaf className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
