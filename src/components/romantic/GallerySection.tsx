import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, X } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-romantic-blush">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Nossos Momentos
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground">
            Memórias que guardaremos para sempre
          </p>
        </motion.div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-romantic hover:shadow-romantic-md transition-shadow"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Placeholder visual bonito */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-10 h-10 text-primary/50 mx-auto mb-3" />
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
                className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <Heart className="w-8 h-8 text-card" fill="currentColor" />
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
                  <Heart className="w-16 h-16 text-primary/50 mx-auto mb-4 animate-heartbeat" fill="currentColor" />
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
