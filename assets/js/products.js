// ==========================================
// VIDAL DESIGN SOLUTIONS - PRODUCTS MODULE
// ==========================================

let productsData = [];
let currentFilter = 'all';

// Load products from JSON
async function loadProducts() {
    try {
        // O parâmetro '?t=' + timestamp evita que o navegador ou o GitHub Pages guardem cache antigo
        const response = await fetch('data/products.json?t=' + new Date().getTime());
        
        if (!response.ok) {
            throw new Error(`Erro de rede: status ${response.status}`);
        }
        
        const data = await response.json();
        
        // Verifica se o JSON foi carregado e formatado corretamente
        if (!data || !data.products) {
            throw new Error('Formato do JSON inválido ou vazio');
        }
        
        productsData = data.products;
        
        // Aplica o filtro atual (por padrão carrega 'all')
        filterProducts(currentFilter);
        
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        showErrorMessage();
    }
}

// Render products grid
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    
    if (!grid) return;
    
    if (products.length === 0) {
        grid.innerHTML = '<p class="no-products" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--gray-500);">Nenhum produto encontrado nesta categoria no momento.</p>';
        return;
    }
    
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add click handlers to product buttons
    document.querySelectorAll('.product-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.getAttribute('data-id'));
            openProductPage(productId);
        });
    });
    
    // Add click handlers to cards (for image/title clicks)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.product-btn')) {
                const productId = parseInt(card.getAttribute('data-id'));
                openProductPage(productId);
            }
        });
    });
}

// Create product card HTML
function createProductCard(product) {
    const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    
    // Tenta carregar a imagem. Se der erro (ex: extensão errada), ativa o fallback (placeholder)
    const imageHtml = product.image && product.image !== 'placeholder' ? 
        `<img src="assets/images/produtos/${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div style="display:none; flex-direction:column; align-items:center; width: 100%; height: 100%; justify-content: center;">
            <i class="fas fa-image"></i><span style="font-size: 0.8rem; text-align: center; padding: 0.5rem;">${product.name}</span>
         </div>` : 
        `<div class="product-image-placeholder">
            <i class="fas fa-image"></i>
            <span style="font-size: 0.8rem; text-align: center; padding: 0.5rem;">${product.name}</span>
        </div>`;

    return `
        <article class="product-card" data-id="${product.id}" data-category="${product.category}" style="cursor: pointer;">
            <div class="product-image" style="background: var(--gray-200); aspect-ratio: 4/3;">
                ${imageHtml}
                ${badge}
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.shortDescription}</p>
                
                <div class="product-footer" style="display: flex; justify-content: center; padding-top: 1rem; border-top: 1px solid var(--gray-200);">
                    <button class="product-btn" data-id="${product.id}" style="width: 100%; justify-content: center; padding: 0.8rem;">
                        <i class="fas fa-list"></i>
                        Detalhes e Orçamento
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    
    if (category === 'all') {
        renderProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === category);
        renderProducts(filtered);
    }
    
    // Animate grid
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.style.opacity = '0';
        setTimeout(() => {
            grid.style.transition = 'opacity 0.3s ease';
            grid.style.opacity = '1';
        }, 100);
    }
}

// Open product page (redirect to product detail)
function openProductPage(productId) {
    const product = productsData.find(p => p.id === productId);
    
    if (!product) return;
    
    // Store product data in sessionStorage for the product page
    sessionStorage.setItem('currentProduct', JSON.stringify(product));
    
    // Track event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_product', {
            'event_category': 'engagement',
            'event_label': product.name
        });
    }
    
    // Redirect to product page
    window.location.href = `pages/produto.html?id=${productId}`;
}

// Show error message
function showErrorMessage() {
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.innerHTML = `
            <div class="error-message" style="text-align: center; padding: 3rem; grid-column: 1/-1;">
                <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--secondary); margin-bottom: 1rem;"></i>
                <h3>Erro de Conexão com o Catálogo</h3>
                <p style="margin-bottom: 1rem;">Ocorreu um erro ao ler o arquivo data/products.json do GitHub. Verifique se o arquivo existe e está no formato correto.</p>
                <a href="https://wa.me/5511968649673" class="btn btn-primary" style="margin-top: 1rem;">
                    <i class="fab fa-whatsapp"></i>
                    Falar no WhatsApp
                </a>
            </div>
        `;
    }
}

// Listen for filter events
window.addEventListener('filterProducts', (e) => {
    filterProducts(e.detail.category);
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', loadProducts);
