import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, TreePine, Flower2, Sprout } from "lucide-react";

interface MomentItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const momentsData: MomentItem[] = [
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Risadas Infinitas",
    description: "Aquelas gargalhadas que fazem doer a barriga, os momentos bobos que só nós entendemos, as piadas internas que carregamos no coração."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Noites de Conversa",
    description: "Conversas até o amanhecer, compartilhando sonhos, medos e esperanças. Cada palavra nos aproximando mais."
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Superações Juntos",
    description: "Os desafios que enfrentamos de mãos dadas, provando que juntos somos mais fortes que qualquer obstáculo."
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Pequenos Gestos",
    description: "Um café na cama, um bilhete escondido, um abraço quando mais precisava. São os pequenos gestos que constroem o grande amor."
  }
];

const MomentCard = ({ item, index }: { item: MomentItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -15 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="h-full bg-card p-8 rounded-2xl shadow-romantic hover:shadow-romantic-md transition-all duration-500 text-center group border border-border/50 relative overflow-hidden"
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Glow effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Ícone */}
        <motion.div
          className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary mb-6 group-hover:bg-primary/25 transition-all duration-500"
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          {item.icon}
        </motion.div>

        {/* Título */}
        <h3 className="relative font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>

        {/* Descrição */}
        <p className="relative font-body text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const MomentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Momentos que Marcaram
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            São as pequenas coisas que fazem nossa história ser tão especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {momentsData.map((item, index) => (
            <MomentCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
