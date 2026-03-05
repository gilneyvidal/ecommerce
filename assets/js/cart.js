// ==========================================
// VIDAL DESIGN SOLUTIONS - CART MODULE
// ==========================================

// Recupera o carrinho salvo na memória do navegador
let cart = JSON.parse(localStorage.getItem('vidalCart')) || [];

// Salva as alterações na memória
function saveCart() {
    localStorage.setItem('vidalCart', JSON.stringify(cart));
}

// Atualiza a bolinha vermelha de contagem de itens em todas as páginas
function updateCartCount() {
    const countElements = document.querySelectorAll('#cartCount, #cartItemCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    countElements.forEach(el => {
        el.textContent = totalItems;
        // Se for o badge da página do carrinho, adiciona a palavra "itens"
        if (el.id === 'cartItemCount') {
            el.textContent = `${totalItems} item(ns)`;
        }
    });
}

// Adiciona um novo item ao carrinho (chamado pelo products.js)
function addToCart(product) {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    // Como os IDs agora são únicos (gerados por Date.now() no products.js), 
    // ele sempre vai adicionar uma linha nova, garantindo que artes diferentes não se misturem
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
    
    // Feedback visual rápido pro usuário
    alert(`${product.name.split(' |')[0]} foi adicionado ao seu orçamento!`);
    
    // Rastreamento Analytics (se houver tag instalada)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'add_to_cart', {
            'event_category': 'ecommerce',
            'event_label': product.name
        });
    }
}

// Remove um item completamente (chamado pelo botão da lixeira)
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    
    // Se estivermos na página do carrinho, re-renderiza a lista para o item sumir da tela
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

// Altera a quantidade de um item específico
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if(item.quantity < 1) item.quantity = 1; // Não permite zero ou número negativo
        
        saveCart();
        updateCartCount();
        
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
    }
}

// Formata moeda para a lista do WhatsApp
function formatCurrencyCart(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// Gera o texto estruturado que será enviado no WhatsApp
function generateWhatsAppMessage() {
    if (cart.length === 0) return '';
    
    let message = 'Olá, Gilney! Vim pelo site e gostaria de fazer o orçamento dos seguintes itens:\n\n';
    
    let totalCart = 0;
    
    cart.forEach((item, index) => {
        let itemTotal = item.basePrice * item.quantity;
        totalCart += itemTotal;
        
        message += `*Item ${index + 1}:* ${item.name}\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Valor ref. total da peça: ${formatCurrencyCart(itemTotal)}\n\n`;
    });
    
    message += `*Estimativa Base Final:* ${formatCurrencyCart(totalCart)}\n\n`;
    message += 'Aguardo o seu retorno para análise técnica e fechamento do pedido. Obrigado!';
    
    // Transforma o texto em um formato de URL seguro para o navegador
    return encodeURIComponent(message);
}

// A função mestre que é ativada no clique do botão verde do carrinho
function sendCartViaWhatsApp() {
    if (cart.length === 0) {
        alert('Sua lista de orçamento está vazia!');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const phone = '5511968649673'; // O seu número principal do rodapé
    const url = `https://wa.me/${phone}?text=${message}`;
    
    // Rastreio de conversão
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            'event_category': 'conversion',
            'value': cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0)
        });
    }
    
    // AQUI ESTÁ A CORREÇÃO: Abre a página do WhatsApp numa nova guia
    window.open(url, '_blank');
    
    // Aguarda 2 segundos e pergunta se o usuário quer limpar a lista
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

// Inicializa o carrinho sempre que uma página termina de carregar
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
