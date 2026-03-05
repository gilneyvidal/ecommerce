// ==========================================
// VIDAL DESIGN SOLUTIONS - CART MODULE
// ==========================================

// Recupera o carrinho salvo na memória do navegador
let cart = JSON.parse(localStorage.getItem('vidalCart')) || [];

function saveCart() {
    localStorage.setItem('vidalCart', JSON.stringify(cart));
}

function updateCartCount() {
    const countElements = document.querySelectorAll('#cartCount, #cartItemCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    countElements.forEach(el => {
        el.textContent = totalItems;
        if (el.id === 'cartItemCount') {
            el.textContent = `${totalItems} item(ns)`;
        }
    });
}

function addToCart(product) {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    saveCart();
    updateCartCount();
    
    alert(`${product.name.split(' |')[0]} foi adicionado ao seu carrinho!`);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            'event_category': 'ecommerce',
            'event_label': product.name
        });
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if(item.quantity < 1) item.quantity = 1; 
        
        saveCart();
        updateCartCount();
        
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
    }
}

function formatCurrencyCart(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// NOVA FUNÇÃO: Gera a mensagem estruturada exatamente no seu molde
function generateWhatsAppMessage() {
    if (cart.length === 0) return '';
    
    // Verifica se a chave de Cliente Final (+30%) está ativada no carrinho
    const typeSelect = document.getElementById('customerType');
    const isRetail = typeSelect ? typeSelect.value === 'retail' : true;
    const markupMultiplier = isRetail ? 1.30 : 1.0; // Adiciona 30% se for Varejo
    
    let message = '*Orçamento* 🖨️\n\n';
    
    let totalCart = 0;
    
    cart.forEach((item) => {
        // Aplica o markup de 30% em cima do valor base que veio do products.js
        let itemTotal = item.basePrice * markupMultiplier;
        totalCart += itemTotal;
        
        message += `🔹 *${item.name}*\n`;
        message += `${item.quantity} unidade(s) / lote(s)\n`;
        // Exibe o valor sem a sigla R$ duplicada
        message += `R$ ${formatCurrencyCart(itemTotal).replace('R$', '').trim()}\n\n`;
    });
    
    // Adiciona o total da compra para facilitar a visualização
    message += `💰 *Total Estimado: ${formatCurrencyCart(totalCart)}*\n\n`;
    
    // Textos fixos de prazo e pagamento
    message += `🚀 *Prazo de Produção*\n`;
    message += `🔸 Até 3 dias úteis após aprovação da arte e confirmação do pagamento.\n\n`;
    
    message += `💳 *Formas de Pagamento Flexíveis* 💳\n\n`;
    message += `🔹 Parcelamento: Em até 3x no Cartão de Crédito (juros por conta do cliente).\n`;
    message += `🔹 Desconto Especial: 5% de desconto para pagamento à vista em Dinheiro ou PIX.\n\n`;
    
    message += `🎁 *Promoção Exclusiva – Avalie e Ganhe!* 🎁\n`;
    message += `⭐ Avalie nosso serviço com 5 estrelas e ganhe +5% de desconto na sua compra! (Somente para pagamento à vista no PIX)\n`;
    message += `👉 Avalie aqui: https://g.page/r/CXNPrWMbM0IZEBM/review\n\n`;
    
    message += `📆 *Validade do Orçamento*\n`;
    message += `Este orçamento é válido por 5 dias úteis.\n\n`;
    
    message += `📞 *Fale com a Gente!*\n`;
    message += `🔸 Gilney: 📱 (11) 96864-9673\n`;
    message += `🔸 Elisete: 📱 (11) 94914-1803`;
    
    return encodeURIComponent(message);
}

function sendCartViaWhatsApp() {
    if (cart.length === 0) {
        alert('Sua lista de orçamento está vazia!');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const phone = '5511968649673'; 
    const url = `https://wa.me/${phone}?text=${message}`;
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            'event_category': 'conversion',
            'value': cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0)
        });
    }
    
    window.open(url, '_blank');
    
    setTimeout(() => {
        if(confirm("Deseja esvaziar sua lista de orçamento agora que o pedido foi enviado?")) {
            cart = [];
            saveCart();
            updateCartCount();
            if (typeof renderCartPage === 'function') {
                renderCartPage();
            }
        }
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
