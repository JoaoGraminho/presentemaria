import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "Fevereiro 2020",
    title: "Nosso Primeiro Encontro",
    description: "O dia em que nos conhecemos e o mundo ganhou mais cor. Cada palavra trocada foi como uma semente de amor plantada em nossos corações."
  },
  {
    date: "Abril 2020",
    title: "Primeiro 'Eu Te Amo'",
    description: "As palavras mais doces que já ouvi. Naquele momento, soube que estava em casa nos seus braços."
  },
  {
    date: "Dezembro 2020",
    title: "Nosso Primeiro Natal Juntos",
    description: "Luzes, presentes e o melhor de tudo: você ao meu lado. O Natal nunca mais foi o mesmo depois desse dia."
  },
  {
    date: "Junho 2021",
    title: "Nossa Primeira Viagem",
    description: "Descobrindo o mundo juntos, criando memórias que guardaremos para sempre. Cada lugar fica mais bonito ao seu lado."
  },
  {
    date: "Fevereiro 2023",
    title: "Três Anos de Amor",
    description: "Três anos construindo uma história linda, cheia de cumplicidade, carinho e um amor que só cresce a cada dia."
  }
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Card */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          className="bg-card p-6 md:p-8 rounded-2xl shadow-romantic hover:shadow-romantic-md transition-shadow duration-300 border border-border/50"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-body tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-4">
            {item.date}
          </span>
          <h3 className="font-display text-2xl text-foreground mb-3">
            {item.title}
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Linha central com folha */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
        <motion.div
          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50"
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Leaf className="w-5 h-5 text-primary" strokeWidth={2} />
        </motion.div>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

      {/* Espaço vazio para layout alternado */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Linha do Tempo
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-0">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
