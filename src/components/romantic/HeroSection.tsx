import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToStory = () => {
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              y: [-20, 20, -20],
              rotate: [0, 10, 0]
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
            <Heart size={20 + i * 8} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtítulo superior */}
          <motion.p
            className="text-romantic-text-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Uma história de amor
          </motion.p>

          {/* Título principal */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Nossa História
            <br />
            <span className="text-primary italic">de Amor</span>
          </motion.h1>

          {/* Divisor com coração */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Um conto de dois corações que se encontraram
            <br className="hidden md:block" />
            e nunca mais se separaram
          </motion.p>

          {/* Data */}
          <motion.p
            className="font-body text-sm text-romantic-text-light tracking-widest uppercase mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* EDITE: Data do início do relacionamento */}
            Desde 14 de Fevereiro de 2020
          </motion.p>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        onClick={scrollToStory}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-xs font-body tracking-widest uppercase">Descobrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
