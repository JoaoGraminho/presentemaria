
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#f0f9f4] text-center border-t border-emerald-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-terracotta text-4xl mb-6">♥</div>
        <p className="text-gray-700 font-serif italic text-2xl mb-4">
          Nossa história está apenas começando...
        </p>
        <div className="section-divider w-24 mx-auto mb-8"></div>
        <p className="text-gray-400 text-xs uppercase tracking-[0.4em] font-bold">
          &copy; 2025 • Criado por João Pedro Graminho
        </p>
      </div>
    </footer>
  );
};

export default Footer;
