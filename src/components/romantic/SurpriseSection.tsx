import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift, Heart, Sparkles } from "lucide-react";

const SurpriseSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const flowers = ["🌹", "🌷", "🌸", "💐", "🌺", "🌻", "🌼", "💮"];
  const hearts = ["💕", "💖", "💗", "💝", "💞"];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="font-body text-muted-foreground mb-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Tenho uma surpresa especial para você...
              </motion.p>
              
              <motion.button
                onClick={() => setIsRevealed(true)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-lg rounded-full shadow-romantic-md hover:shadow-romantic-glow transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <Gift className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Abrir Surpresa</span>
                <Sparkles className="w-5 h-5 relative z-10 animate-pulse" />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="bouquet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Confetti de corações */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {hearts.map((heart, i) => (
                  <motion.span
                    key={`heart-${i}`}
                    className="absolute text-3xl md:text-4xl"
                    initial={{ 
                      opacity: 0, 
                      y: 0, 
                      x: `${20 + i * 15}%`,
                      scale: 0 
                    }}
                    animate={{ 
                      opacity: [0, 1, 1, 0], 
                      y: [-50, -150, -250],
                      scale: [0, 1.2, 1, 0.8],
                      rotate: [0, 20, -20, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {heart}
                  </motion.span>
                ))}
              </div>

              {/* Buquê de flores */}
              <motion.div
                className="relative inline-block"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.2 
                }}
              >
                {/* Círculo de fundo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Flores em círculo */}
                <div className="relative flex flex-wrap justify-center gap-2 max-w-xs mx-auto mb-8">
                  {flowers.map((flower, i) => (
                    <motion.span
                      key={i}
                      className="text-5xl md:text-6xl"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 0 
                      }}
                      transition={{ 
                        delay: 0.3 + i * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      {flower}
                    </motion.span>
                  ))}
                </div>

                {/* Buquê central grande */}
                <motion.div
                  className="text-8xl md:text-9xl mb-8"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 100 }}
                >
                  💐
                </motion.div>
              </motion.div>

              {/* Mensagem de amor */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <motion.h3
                  className="font-display text-4xl md:text-6xl lg:text-7xl text-accent mb-4"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Eu Amo Você
                </motion.h3>
                
                <motion.div
                  className="flex items-center justify-center gap-2 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <Heart className="w-6 h-6 text-accent animate-heartbeat" fill="currentColor" />
                  <p className="font-body text-lg text-muted-foreground">
                    Para sempre e sempre
                  </p>
                  <Heart className="w-6 h-6 text-accent animate-heartbeat" fill="currentColor" />
                </motion.div>
              </motion.div>

              {/* Botão para fechar */}
              <motion.button
                onClick={() => setIsRevealed(false)}
                className="mt-10 px-6 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.05 }}
              >
                ← Ver novamente
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseSection;
