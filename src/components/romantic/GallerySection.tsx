import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, X, ZoomIn } from "lucide-react";

// Imagens placeholder - substitua pelos caminhos reais das suas fotos
const galleryImages = [
  { id: 1, alt: "Momento especial 1" },
  { id: 2, alt: "Momento especial 2" },
  { id: 3, alt: "Momento especial 3" },
  { id: 4, alt: "Momento especial 4" },
  { id: 5, alt: "Momento especial 5" },
  { id: 6, alt: "Momento especial 6" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Elementos decorativos parallax */}
      <motion.div 
        className="absolute left-10 top-20 text-primary/10"
        style={{ y }}
      >
        <Leaf size={100} strokeWidth={0.5} />
      </motion.div>
      <motion.div 
        className="absolute right-10 bottom-20 text-accent/10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      >
        <Leaf size={80} strokeWidth={0.5} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden">
            <motion.h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Nossos Momentos
            </motion.h2>
          </div>
          <motion.div 
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.p 
            className="font-body text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Memórias que guardaremos para sempre
          </motion.p>
        </motion.div>

        {/* Grid de fotos com efeito escalonado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 80, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 80, rotateY: -10 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-romantic hover:shadow-romantic-glow transition-all duration-500"
              onClick={() => setSelectedImage(image.id)}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* Placeholder visual bonito */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                  <p className="font-display text-lg text-foreground/60 italic">
                    Foto {image.id}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    Adicione sua foto aqui
                  </p>
                </div>
              </div>

              {/* Overlay no hover */}
              <motion.div
                className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-center justify-center"
              >
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                >
                  <div className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal lightbox */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-romantic-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-card transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Leaf className="w-16 h-16 text-primary/50 mx-auto mb-4 animate-float" />
                  <p className="font-display text-2xl text-foreground/70 italic">
                    Sua foto especial
                  </p>
                  <p className="font-body text-muted-foreground mt-2">
                    Substitua pelo caminho da imagem no código
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
