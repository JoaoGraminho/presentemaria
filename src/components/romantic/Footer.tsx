import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-foreground text-card">
      <div className="container mx-auto px-6 text-center">
        {/* Folha animada */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Leaf 
            className="w-10 h-10 mx-auto text-primary animate-float" 
            strokeWidth={2}
          />
        </motion.div>

        {/* Mensagem */}
        <motion.p
          className="font-display text-xl italic mb-2 text-card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Feito com amor, para o amor da minha vida
        </motion.p>

        {/* Ano */}
        <motion.p
          className="font-body text-sm text-card/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {currentYear}
        </motion.p>

        {/* Divisor decorativo */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="h-px w-8 bg-card/30" />
          <Leaf className="w-4 h-4 text-primary/80" strokeWidth={2} />
          <div className="h-px w-8 bg-card/30" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
