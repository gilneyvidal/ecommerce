// ==========================================
// VIDAL DESIGN SOLUTIONS - CART MODULE
// ==========================================

// Cart state
let cart = JSON.parse(localStorage.getItem('vidalCart')) || [];

// Initialize cart
function initCart() {
    updateCartCount();
    
    // Add to cart buttons (if any on the page)
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    saveCart();
    updateCartCount();
    showCartNotification();
    
    // Track event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            'event_category': 'ecommerce',
            'event_label': product.name
        });
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartPage();
}

// Update item quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            renderCartPage();
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('vidalCart', JSON.stringify(cart));
}

// Update cart count badge
function updateCartCount() {
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.textContent = totalItems;
        countElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Show notification
function showCartNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Item adicionado! <a href="pages/carrinho.html">Ver carrinho</a></span>
    `;
    
    // Styles
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Generate WhatsApp message with cart items
function generateWhatsAppMessage() {
    if (cart.length === 0) return '';
    
    let message = 'Olá! Gostaria de fazer um orçamento dos seguintes itens:\n\n';
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Quantidade: ${item.quantity}\n`;
        message += `   Preço estimado: ${formatCurrency(item.basePrice * item.quantity)}\n\n`;
    });
    
    message += 'Aguardo retorno com valores finais e prazo de entrega. Obrigado!';
    
    return encodeURIComponent(message);
}

// Send cart via WhatsApp
function sendCartViaWhatsApp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const phone = '5511968649673';
    const url = `https://wa.me/${phone}?text=${message}`;
    
    // Track conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            'event_category': 'conversion',
            'value': cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0)
        });
    }
    
    // Clear cart after sending
    cart = [];
    saveCart();
    updateCartCount();
    
    // Open WhatsApp
    window.open(url, '_blank');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initCart);
