// ==========================================
// VIDAL DESIGN SOLUTIONS - PRODUCTS MODULE
// ==========================================

let productsData = [];
let currentFilter = 'all';

// Load products from JSON
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        const data = await response.json();
        productsData = data.products;
        renderProducts(productsData);
    } catch (error) {
        console.error('Error loading products:', error);
        showErrorMessage();
    }
}

// Render products grid
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    
    if (!grid) return;
    
    if (products.length === 0) {
        grid.innerHTML = '<p class="no-products">Nenhum produto encontrado.</p>';
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
    
    return `
        <article class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <div class="product-image-placeholder">
                    <i class="fas fa-image"></i>
                    <span>IMG PRODUTO<br>${product.id}</span>
                </div>
                ${badge}
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-label">A partir de</span>
                        <span class="price-value">${formatCurrency(product.basePrice)}/${product.unit}</span>
                    </div>
                    <button class="product-btn" data-id="${product.id}">
                        <i class="fas fa-whatsapp"></i>
                        Orçar
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
    grid.style.opacity = '0';
    setTimeout(() => {
        grid.style.transition = 'opacity 0.3s ease';
        grid.style.opacity = '1';
    }, 100);
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
                <h3>Erro ao carregar produtos</h3>
                <p>Por favor, tente novamente mais tarde ou entre em contato pelo WhatsApp.</p>
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
