/* ========================================
   SITE ROMÂNTICO - JAVASCRIPT
   Animações suaves e interatividade
   ======================================== */

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
    
    // ----------------------------------------
    // ANIMAÇÃO DE ELEMENTOS AO SCROLL
    // Elementos aparecem suavemente ao entrar na tela
    // ----------------------------------------
    
    function initScrollAnimations() {
        // Seleciona todos os elementos que devem animar
        const animatedElements = document.querySelectorAll(
            '.story-text, .timeline-card, .moment-card, .gallery-item, .letter-paper'
        );
        
        // Adiciona a classe inicial para animação
        animatedElements.forEach(element => {
            element.classList.add('fade-in');
        });
        
        // Configuração do Intersection Observer
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% do elemento visível
        };
        
        // Callback quando elemento entra na tela
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Adiciona classe que ativa a animação
                    entry.target.classList.add('visible');
                    // Para de observar após animar
                    observer.unobserve(entry.target);
                }
            });
        };
        
        // Cria o observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Observa cada elemento
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // ----------------------------------------
    // EFEITO PARALLAX SUAVE NO HERO
    // O conteúdo se move levemente com o scroll
    // ----------------------------------------
    
    function initParallax() {
        const heroContent = document.querySelector('.hero-content');
        
        if (!heroContent) return;
        
        // Verifica se o usuário prefere movimento reduzido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) return;
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            
            // Só aplica efeito enquanto o hero está visível
            if (scrolled < heroHeight) {
                const translateY = scrolled * 0.3;
                const opacity = 1 - (scrolled / heroHeight);
                
                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = Math.max(0, opacity);
            }
        });
    }
    
    // ----------------------------------------
    // ESCONDE INDICADOR DE SCROLL
    // Desaparece quando o usuário começa a scrollar
    // ----------------------------------------
    
    function initScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (!scrollIndicator) return;
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
    
    // ----------------------------------------
    // SMOOTH SCROLL PARA LINKS INTERNOS
    // Navegação suave para âncoras
    // ----------------------------------------
    
    function initSmoothScroll() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // ----------------------------------------
    // GALERIA - PLACEHOLDER PARA IMAGENS
    // Mostra um fundo suave se a imagem não carregar
    // ----------------------------------------
    
    function initGalleryFallback() {
        const galleryImages = document.querySelectorAll('.gallery-image');
        
        galleryImages.forEach(img => {
            img.addEventListener('error', function() {
                // Esconde a imagem quebrada
                this.style.display = 'none';
                
                // Adiciona um placeholder visual ao container
                const parent = this.parentElement;
                parent.innerHTML = `
                    <div style="
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #F5E6E0 0%, #E8B4B8 100%);
                        color: #5A5A5A;
                        font-family: 'Playfair Display', serif;
                        font-style: italic;
                        font-size: 1rem;
                        text-align: center;
                        padding: 1rem;
                    ">
                        Adicione sua foto aqui
                    </div>
                `;
            });
        });
    }
    
    // ----------------------------------------
    // ADICIONA DELAY NAS ANIMAÇÕES
    // Elementos aparecem em sequência
    // ----------------------------------------
    
    function initStaggeredAnimations() {
        const timelineCards = document.querySelectorAll('.timeline-card');
        const momentCards = document.querySelectorAll('.moment-card');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Adiciona delay progressivo para timeline
        timelineCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Adiciona delay progressivo para momentos
        momentCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Adiciona delay progressivo para galeria
        galleryItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    }
    
    // ----------------------------------------
    // INICIALIZA TODAS AS FUNÇÕES
    // ----------------------------------------
    
    initScrollAnimations();
    initParallax();
    initScrollIndicator();
    initSmoothScroll();
    initGalleryFallback();
    initStaggeredAnimations();
    
    // Log para confirmar carregamento
    console.log('💕 Site romântico carregado com sucesso!');
    
});

/* ----------------------------------------
   FUNÇÃO UTILITÁRIA - CONTADOR DE TEMPO JUNTOS
   Descomente e adicione ao HTML se desejar usar
   ---------------------------------------- */

/*
function initTimeCounter(startDate) {
    // startDate no formato: 'YYYY-MM-DD'
    const start = new Date(startDate);
    const counterElement = document.getElementById('time-counter');
    
    if (!counterElement) return;
    
    function updateCounter() {
        const now = new Date();
        const diff = now - start;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        counterElement.innerHTML = `
            ${days} dias, ${hours} horas e ${minutes} minutos juntos
        `;
    }
    
    updateCounter();
    setInterval(updateCounter, 60000); // Atualiza a cada minuto
}

// Exemplo de uso:
// initTimeCounter('2020-02-14');
*/