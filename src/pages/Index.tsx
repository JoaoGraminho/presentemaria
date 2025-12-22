const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <div className="text-5xl mb-6 animate-pulse">💕</div>
        <h1 className="text-3xl md:text-4xl font-serif text-[#4A4A4A] mb-4">
          Site Romântico Criado!
        </h1>
        <p className="text-[#8A8A8A] mb-8 leading-relaxed">
          Seu site foi criado com HTML, CSS e JavaScript puro, pronto para funcionar no GitHub Pages.
        </p>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-[#4A4A4A] mb-4">📁 Arquivos Criados:</h2>
          <ul className="text-left text-[#5A5A5A] space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-[#E8B4B8]">•</span>
              <code className="bg-[#FAF0EB] px-2 py-1 rounded text-sm">public/romantic/index.html</code>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E8B4B8]">•</span>
              <code className="bg-[#FAF0EB] px-2 py-1 rounded text-sm">public/romantic/style.css</code>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E8B4B8]">•</span>
              <code className="bg-[#FAF0EB] px-2 py-1 rounded text-sm">public/romantic/script.js</code>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E8B4B8]">•</span>
              <code className="bg-[#FAF0EB] px-2 py-1 rounded text-sm">public/romantic/images/</code>
            </li>
          </ul>
        </div>

        <a 
          href="/romantic/index.html"
          className="inline-block bg-[#E8B4B8] text-white px-8 py-4 rounded-full font-medium hover:bg-[#D4A5A5] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Ver Site Romântico →
        </a>

        <div className="mt-12 p-6 bg-[#FAF0EB] rounded-xl">
          <h3 className="font-semibold text-[#4A4A4A] mb-3">🚀 Para usar no GitHub Pages:</h3>
          <ol className="text-left text-sm text-[#5A5A5A] space-y-2">
            <li>1. Baixe a pasta <code className="bg-white px-1 rounded">romantic/</code></li>
            <li>2. Renomeie para o nome do seu repositório</li>
            <li>3. Adicione suas fotos na pasta <code className="bg-white px-1 rounded">images/</code></li>
            <li>4. Edite os textos no <code className="bg-white px-1 rounded">index.html</code></li>
            <li>5. Faça upload para o GitHub e ative Pages</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Index;
