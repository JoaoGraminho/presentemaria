import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, ChevronDown, Sprout } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Efeitos parallax estilo Apple
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToStory = () => {
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingIcons = [Leaf, Sprout, Leaf, Sprout, Leaf, Sprout];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Elementos decorativos flutuantes - folhas e plantas */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y }}
      >
        {floatingIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              y: [-20, 20, -20],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            <Icon size={24 + i * 6} strokeWidth={1.5} />
          </motion.div>
        ))}
      </motion.div>

      {/* Conteúdo principal com parallax */}
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtítulo superior */}
          <motion.p
            className="text-muted-foreground font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Uma história de amor
          </motion.p>

          {/* Título principal com efeito de reveal */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Nossa História
            </motion.span>
            <br />
            <motion.span 
              className="text-primary italic inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              de Amor
            </motion.span>
          </motion.h1>

          {/* Divisor com folha */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div 
              className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-accent/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <Leaf className="w-6 h-6 text-accent animate-float" strokeWidth={2} />
            <motion.div 
              className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-accent/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Um conto de dois corações que se encontraram
            <br className="hidden md:block" />
            e nunca mais se separaram
          </motion.p>

          {/* Data */}
          <motion.p
            className="font-body text-sm text-muted-foreground tracking-widest uppercase mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {/* EDITE: Data do início do relacionamento */}
            Desde 14 de Fevereiro de 2020
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.button
        onClick={scrollToStory}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        style={{ opacity }}
      >
        <span className="text-xs font-body tracking-widest uppercase">Descobrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
