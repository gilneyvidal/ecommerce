// ==========================================
// VIDAL DESIGN SOLUTIONS - PRODUCTS CATALOG
// ==========================================

// Catálogo de Produtos (Valores de referência para 2026)
const productsData = [
    {
        id: 'prod-adesivo-01',
        name: 'Adesivo Vinil Impresso',
        category: 'adesivos',
        description: 'Adesivo em vinil com impressão digital de alta resolução. Ideal para vitrines, veículos e sinalização. Valor por metro quadrado.',
        basePrice: 85.00,
        image: 'adesivo-branco-impresso-vinil.jpg'
    },
    {
        id: 'prod-banner-01',
        name: 'Banner Lona com Acabamento',
        category: 'banners',
        description: 'Banner em lona 440g com acabamento em bastão e corda. Alta durabilidade externa com cores vivas. Valor por metro quadrado.',
        basePrice: 95.00,
        image: 'banner-lona.jpg'
    },
    {
        id: 'prod-sinal-01',
        name: 'Placa de Sinalização em ACM',
        category: 'sinalizacao',
        description: 'Placa rígida em ACM 3mm com adesivo vinil aplicado. Resistente a intempéries. Valor base para orçamento.',
        basePrice: 280.00,
        image: 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Placa+ACM'
    },
    {
        id: 'prod-toldo-01',
        name: 'Toldo Retrátil Articulado',
        category: 'toldos',
        description: 'Estrutura em alumínio com lona de alta resistência. Proteção UV e chuva. Preço estimado por metro linear.',
        basePrice: 450.00,
        image: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Toldo+Retratil'
    },
    {
        id: 'prod-fachada-01',
        name: 'Letra Caixa Iluminada',
        category: 'fachadas',
        description: 'Letras em alto relevo com iluminação LED interna. Alto impacto visual noturno para a fachada do seu negócio.',
        basePrice: 850.00,
        image: 'https://via.placeholder.com/400x300/111827/ffffff?text=Letra+Caixa'
    },
    {
        id: 'prod-social-01',
        name: 'Pacote Social Media (10 Artes)',
        category: 'social mídia',
        description: 'Criação de 10 artes profissionais exclusivas para Instagram e Facebook (Formatos Feed e Story).',
        basePrice: 350.00,
        image: 'https://via.placeholder.com/400x300/fbbf24/111827?text=Artes+Redes+Sociais'
    }
];

// Função para formatar moeda (Real Brasileiro)
function formatCurrencyProduct(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Função principal para renderizar os produtos na tela
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    
    // Verifica se o contêiner existe na página
    if (!productsGrid) return;
    
    // Limpa o grid antes de popular
    productsGrid.innerHTML = '';
    
    // Se não houver produtos para a categoria selecionada
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray-500);">
                <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>Nenhum produto encontrado nesta categoria.</h3>
                <p>Entre em contato via WhatsApp para orçamentos personalizados.</p>
            </div>
        `;
        return;
    }
    
    // Cria os cards de produtos
    productsToRender.forEach((product, index) => {
        // Verifica se é uma imagem do placeholder ou arquivo real
        const isPlaceholder = product.image.includes('placeholder');
        const imageContent = isPlaceholder 
            ? `<div class="product-image-placeholder"><img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>`
            : `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;

        const card = document.createElement('div');
        card.className = 'product-card animate-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">${product.category}</span>
                ${imageContent}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-label">A partir de</span>
                        <span class="price-value">${formatCurrencyProduct(product.basePrice)}</span>
                    </div>
                    <button class="product-btn add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
    
    // Re-atribui os eventos de clique para os novos botões "Adicionar"
    attachCartEvents();
}

// Função para ligar os botões recém-criados ao cart.js
function attachCartEvents() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = productsData.find(p => p.id === productId);
            if (product && typeof addToCart === 'function') {
                addToCart(product);
            }
        });
    });
}

// Inicializa a vitrine quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todos os produtos inicialmente
    renderProducts(productsData);
    
    // Escuta o evento customizado disparado pelos botões de filtro no HTML e no main.js
    window.addEventListener('filterProducts', (e) => {
        const category = e.detail.category;
        
        if (category === 'all') {
            renderProducts(productsData);
        } else {
            const filtered = productsData.filter(p => p.category === category);
            renderProducts(filtered);
        }
    });
});
