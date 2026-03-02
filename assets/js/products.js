// ==========================================
// VIDAL DESIGN SOLUTIONS - PRODUCTS CATALOG
// ==========================================

const productsData = [
    {
        id: 'prod-adesivo-01',
        name: 'Adesivo Vinil Impresso',
        category: 'adesivos',
        description: 'Adesivo em vinil com impressão digital de alta resolução.',
        basePrice: 0.00,
        // Caminho exato conforme o seu GitHub (.png)
        image: 'assets/images/produtos/adesivo-branco-impresso-vinil.png' 
    },
    {
        id: 'prod-banner-01',
        name: 'Banner Lona com Acabamento',
        category: 'banners',
        description: 'Banner em lona 440g com acabamento em bastão e corda.',
        basePrice: 0.00,
        // Caminho exato conforme o seu GitHub
        image: 'assets/images/produtos/banner-lona.jpg'
    }
];

function formatCurrencyProduct(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray-500);">
                Nenhum produto cadastrado com imagens nesta categoria.
            </div>
        `;
        return;
    }
    
    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card animate-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">${product.category}</span>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-label">Valor (Tabela 2026)</span>
                        <span class="price-value">${formatCurrencyProduct(product.basePrice)}</span>
                    </div>
                    <button class="product-btn add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-plus"></i> Calcular
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    attachCartEvents();
}

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

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
    
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
