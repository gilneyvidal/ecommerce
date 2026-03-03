// ==========================================
// VIDAL DESIGN SOLUTIONS - PRODUCTS CATALOG & CALCULATOR
// ==========================================

const arteOptions = {
    id: 'arte',
    label: 'Opções de Arte',
    type: 'radio',
    obs: '* NÃO CONFERIMOS ARQUIVOS ENVIADOS, CASO NÃO SEJA FEITA A CONTRATAÇÃO DA ARTE. Envie preferencialmente em PDFx1a, JPEG ou PNG alta resolução, CMYK, textos em curvas.',
    choices: [
        { label: 'Tenho o arquivo pronto (Upload no WhatsApp)', price: 0, isM2: false },
        { label: 'Contratar criação [+R$ 40,00]', price: 40, isM2: false }
    ]
};

const productsData = [
    {
        id: 'prod-adesivo-branco',
        name: 'Adesivo Branco Personalizado',
        category: 'adesivos',
        description: 'Alta qualidade, versatilidade e personalização. Ideal para comunicação visual, rótulos e sinalização.',
        calcType: 'area', // m²
        basePrice: 50.90,
        image: 'assets/images/produtos/adesivo-branco.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Fosco', price: 0}, {label: 'Brilhante', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            { id: 'revestimento', label: 'Selecione o revestimento:', type: 'select', choices: [{label: 'Sem laminação', price: 0}, {label: 'Com laminação', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-adesivo-transp',
        name: 'Adesivo Transparente Brilho Personalizado',
        category: 'adesivos',
        description: 'Ideal para comunicação visual, rótulos, decoração, sinalização e aplicações em superfícies lisas.',
        calcType: 'area',
        basePrice: 50.90,
        image: 'assets/images/produtos/adesivo-transparente.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Brilhante', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            { id: 'revestimento', label: 'Selecione o revestimento:', type: 'select', choices: [{label: 'Sem laminação', price: 0}, {label: 'Com laminação', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-adesivo-perf',
        name: 'Adesivo Perfurado Personalizado',
        category: 'adesivos',
        description: 'Garante impacto visual sem bloquear a visão interna. Ideal para vitrines e vidros.',
        calcType: 'area',
        basePrice: 62.90,
        image: 'assets/images/produtos/adesivo-perfurado.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Perfurado - Semi brilho', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-adesivo-recorte-branco',
        name: 'Adesivo Branco Impresso com Recorte',
        category: 'adesivos',
        description: 'Etiquetas e rótulos personalizados com corte especial e alta definição.',
        calcType: 'area',
        basePrice: 59.90,
        image: 'assets/images/produtos/adesivo-recorte-branco.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Brilho', price: 0}, {label: 'Fosco', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            { id: 'formato', label: 'Formato de entrega:', type: 'select', choices: [{label: 'Em Rolo', price: 0}, {label: 'Em A3', price: 5, isM2: true}, {label: 'Em A4', price: 7, isM2: true}, {label: 'Individual', price: 10, isM2: true}] },
            { id: 'corte', label: 'Tamanho do corte:', type: 'select', choices: [{label: 'Acima de 5cm', price: 0}, {label: 'Abaixo de 5cm', price: 5, isM2: true}] },
            { id: 'revestimento', label: 'Selecione o revestimento:', type: 'select', choices: [{label: 'Sem laminação', price: 0}, {label: 'Com laminação', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-adesivo-recorte-transp',
        name: 'Adesivo Transparente Impresso c/ Recorte',
        category: 'adesivos',
        description: 'Etiquetas e rótulos em adesivo transparente com corte especial.',
        calcType: 'area',
        basePrice: 59.90,
        image: 'assets/images/produtos/adesivo-recorte-transparente.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Brilho', price: 0}, {label: 'Fosco', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            { id: 'formato', label: 'Formato de entrega:', type: 'select', choices: [{label: 'Em Rolo', price: 0}, {label: 'Em A3', price: 5, isM2: true}, {label: 'Em A4', price: 7, isM2: true}, {label: 'Individual', price: 10, isM2: true}] },
            { id: 'corte', label: 'Tamanho do corte:', type: 'select', choices: [{label: 'Acima de 5cm', price: 0}, {label: 'Abaixo de 5cm', price: 5, isM2: true}] },
            { id: 'revestimento', label: 'Selecione o revestimento:', type: 'select', choices: [{label: 'Sem laminação', price: 0}, {label: 'Com laminação', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-dtf-a4',
        name: 'CARTELA A4 - DTF UV',
        category: 'adesivos',
        description: 'Impressão DTF UV alta resolução. Verniz para auto relevo (21 x 29 cm).',
        calcType: 'unit',
        basePrice: 45.90,
        image: 'assets/images/produtos/cartela-a4-dtf.jpg',
        options: [ arteOptions ]
    },
    {
        id: 'prod-dtf-a3',
        name: 'CARTELA A3 - DTF UV',
        category: 'adesivos',
        description: 'Impressão DTF UV alta resolução. Verniz para auto relevo (29 x 42 cm).',
        calcType: 'unit',
        basePrice: 57.90,
        image: 'assets/images/produtos/cartela-a3-dtf.jpg',
        options: [ arteOptions ]
    },
    {
        id: 'prod-banner-440g',
        name: 'Banner 440g - Lona Impressa',
        category: 'banners',
        description: 'Banner em lona 440g. Cores vibrantes, tintas ecológicas e excelente durabilidade.',
        calcType: 'area',
        basePrice: 57.99,
        image: 'assets/images/produtos/banner-440g.jpg',
        options: [
            { id: 'acabamento', label: 'Selecione o acabamento:', type: 'select', choices: [{label: 'Bastão, Ponteira, Cordinha', price: 0}, {label: 'Bastão, Ponteira, Cordinha + 4 ilhós', price: 20, isM2: false}] },
            arteOptions
        ]
    },
    {
        id: 'prod-faixa-lona',
        name: 'Faixa Lona 440g',
        category: 'banners',
        description: 'Faixa sob medida com qualidade profissional. Ideal para qualquer formato.',
        calcType: 'area',
        basePrice: 57.99,
        image: 'assets/images/produtos/faixa-lona.jpg',
        options: [
            { id: 'acabamento', label: 'Selecione o acabamento:', type: 'select', choices: [{label: 'Acabamento de Faixa (madeira)', price: 0}, {label: 'Acabamento de Faixa (madeira) + Ilhós', price: 20, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-lona-medida',
        name: 'Lona Impressão Digital 440g',
        category: 'banners',
        description: 'Lona impressa sob medida com acabamento a escolha para destacar sua marca.',
        calcType: 'area',
        basePrice: 57.99,
        image: 'assets/images/produtos/lona-sob-medida.jpg',
        options: [
            { id: 'tipo', label: 'Selecione o tipo:', type: 'select', choices: [{label: 'Brilho', price: 0}, {label: 'Fosco', price: 0}] },
            { id: 'acabamento', label: 'Selecione o acabamento:', type: 'select', choices: [{label: 'Somente impressão', price: 0}, {label: 'Apenas com reforço', price: 10, isM2: true}, {label: 'Com reforço e ilhós', price: 20, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-toldo-retratil',
        name: 'Toldo Retrátil / Cortina',
        category: 'toldos',
        description: 'Tubo galvanizado 1.20, juntas de alumínio, lona 440g e barra plástica transparente.',
        calcType: 'linear', // Metro linear
        basePrice: 450.00,
        image: 'assets/images/produtos/toldo-retratil.jpg',
        options: [
            { id: 'cor', label: 'Selecione a cor:', type: 'select', choices: [{label: 'Preto', price:0}, {label: 'Azul', price:0}, {label: 'Verde', price:0}, {label: 'Amarelo', price:0}, {label: 'Cinza', price:0}, {label: 'Outro (Informar no Whats)', price:0}] },
            { id: 'instalacao', label: 'Instalação:', type: 'select', choices: [{label: 'Não preciso', price:0}, {label: 'Contratar (Enviar foto e endereço no Whats)', price:0}] },
            { id: 'projecao', label: 'Projeção:', type: 'select', choices: [{label: 'Padrão 1 metro', price:0}, {label: 'Outro tamanho (Sujeito a recálculo)', price:0}] }
        ]
    },
    {
        id: 'prod-toldo-fixo',
        name: 'Toldo Fixo',
        category: 'toldos',
        description: 'Tubo galvanizado 1.20, lona 440g diversas cores, acabamento com barra transparente.',
        calcType: 'linear',
        basePrice: 450.00,
        image: 'assets/images/produtos/toldo-fixo.jpg',
        options: [
            { id: 'cor', label: 'Selecione a cor:', type: 'select', choices: [{label: 'Preto', price:0}, {label: 'Azul', price:0}, {label: 'Verde', price:0}, {label: 'Amarelo', price:0}, {label: 'Cinza', price:0}, {label: 'Outro (Informar no Whats)', price:0}] },
            { id: 'instalacao', label: 'Instalação:', type: 'select', choices: [{label: 'Não preciso', price:0}, {label: 'Contratar (Enviar foto e endereço no Whats)', price:0}] },
            { id: 'projecao', label: 'Projeção:', type: 'select', choices: [{label: 'Padrão 1 metro', price:0}, {label: 'Outro tamanho (Sujeito a recálculo)', price:0}] }
        ]
    },
    {
        id: 'prod-pacote-artes',
        name: 'Pacote de Artes - Redes Sociais',
        category: 'social mídia',
        description: 'Criação de mídia digital para post, story e feed.',
        calcType: 'variant', // Escolha direta do valor
        basePrice: 0,
        image: 'assets/images/produtos/pacote-artes.jpg',
        options: [
            { id: 'pacote', label: 'Selecione o pacote:', type: 'radio', choices: [
                {label: 'Pacote 10 Artes', price: 350, isM2: false}, 
                {label: 'Pacote 20 Artes', price: 600, isM2: false}, 
                {label: 'Pacote Mensal (27 artes/mês)', price: 1000, isM2: false}, 
                {label: 'Pacote Trimestral (27 artes/mês)', price: 900, isM2: false}
            ] }
        ]
    }
];

function formatCurrencyProduct(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// Injeção da estrutura do Modal no HTML via JS
function initModalStructure() {
    const modalHTML = `
    <div id="productModal" class="modal-overlay hidden">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()"><i class="fas fa-times"></i></button>
            <div id="modalBody"></div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray-500);">Nenhum produto cadastrado nesta categoria.</div>`;
        return;
    }
    
    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card animate-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        let displayPrice = product.calcType === 'variant' ? 'Consulte opções' : formatCurrencyProduct(product.basePrice);
        let priceUnit = product.calcType === 'area' ? '/ m²' : (product.calcType === 'linear' ? '/ metro' : '');
        
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">${product.category}</span>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.src='https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Sem+Foto'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-label">A partir de</span>
                        <span class="price-value">${displayPrice} <span style="font-size: 0.7em;">${priceUnit}</span></span>
                    </div>
                    <button class="product-btn config-btn" data-id="${product.id}">
                        <i class="fas fa-cog"></i> Configurar
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    document.querySelectorAll('.config-btn').forEach(btn => {
        btn.addEventListener('click', (e) => openModal(e.currentTarget.getAttribute('data-id')));
    });
}

let currentProduct = null;

function openModal(productId) {
    currentProduct = productsData.find(p => p.id === productId);
    const modalBody = document.getElementById('modalBody');
    
    let dimensionsHTML = '';
    if (currentProduct.calcType === 'area') {
        dimensionsHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Largura (metros)</label>
                    <input type="number" id="calcW" value="1" min="0.1" step="0.1" onchange="calcTotal()">
                </div>
                <div class="form-group">
                    <label>Altura (metros)</label>
                    <input type="number" id="calcH" value="1" min="0.1" step="0.1" onchange="calcTotal()">
                </div>
            </div>`;
    } else if (currentProduct.calcType === 'linear') {
        dimensionsHTML = `
            <div class="form-group">
                <label>Largura Total (metros lineares)</label>
                <input type="number" id="calcW" value="1" min="0.5" step="0.5" onchange="calcTotal()">
            </div>`;
    }

    let optionsHTML = '';
    currentProduct.options.forEach((opt, optIndex) => {
        optionsHTML += `<div class="form-group"><label>${opt.label}</label>`;
        if(opt.obs) optionsHTML += `<p style="font-size:0.75rem; color:#ef4444; margin-bottom:0.5rem; line-height:1.2;">${opt.obs}</p>`;
        
        if (opt.type === 'select') {
            optionsHTML += `<select id="opt_${optIndex}" onchange="calcTotal()">`;
            opt.choices.forEach((choice, choiceIndex) => {
                let priceText = choice.price > 0 ? ` (+ R$ ${choice.price.toFixed(2)})` : '';
                optionsHTML += `<option value="${choiceIndex}">${choice.label}${priceText}</option>`;
            });
            optionsHTML += `</select></div>`;
        } else if (opt.type === 'radio') {
            opt.choices.forEach((choice, choiceIndex) => {
                let checked = choiceIndex === 0 ? 'checked' : '';
                optionsHTML += `
                <label class="radio-label">
                    <input type="radio" name="opt_${optIndex}" value="${choiceIndex}" ${checked} onchange="calcTotal()">
                    ${choice.label}
                </label>`;
            });
            optionsHTML += `</div>`;
        }
    });

    modalBody.innerHTML = `
        <h2 style="margin-bottom: 0.5rem;">${currentProduct.name}</h2>
        <p style="color: var(--gray-600); font-size: 0.9rem; margin-bottom: 1.5rem;">Configure os detalhes do seu material.</p>
        ${dimensionsHTML}
        ${optionsHTML}
        <div class="modal-footer">
            <div class="modal-total">Total Estimado: <span id="modalTotalPrice">R$ 0,00</span></div>
            <button class="btn btn-primary" onclick="confirmModalCart()">Adicionar ao Orçamento</button>
        </div>
    `;
    
    document.getElementById('productModal').classList.remove('hidden');
    calcTotal();
}

function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
}

function calcTotal() {
    if (!currentProduct) return;
    
    let w = document.getElementById('calcW') ? parseFloat(document.getElementById('calcW').value) || 0 : 1;
    let h = document.getElementById('calcH') ? parseFloat(document.getElementById('calcH').value) || 0 : 1;
    
    let multiplier = 1;
    if (currentProduct.calcType === 'area') {
        multiplier = w * h;
        if(multiplier < 1 && multiplier > 0) multiplier = 1; // Mínimo de 1m² ou cobrança mínima gráfica
    } else if (currentProduct.calcType === 'linear') {
        multiplier = w;
    }

    let base = currentProduct.basePrice;
    let extraM2 = 0;
    let extraFlat = 0;

    currentProduct.options.forEach((opt, optIndex) => {
        let selectedIndex = 0;
        if (opt.type === 'select') {
            selectedIndex = parseInt(document.getElementById(`opt_${optIndex}`).value);
        } else if (opt.type === 'radio') {
            let radios = document.getElementsByName(`opt_${optIndex}`);
            for(let r of radios) { if(r.checked) selectedIndex = parseInt(r.value); }
        }
        
        let choice = opt.choices[selectedIndex];
        if (choice.price > 0) {
            if (choice.isM2) extraM2 += choice.price;
            else extraFlat += choice.price;
        }
    });

    let finalPrice = 0;
    if(currentProduct.calcType === 'variant') {
        finalPrice = extraFlat; // Se for pacote, ignora a base 0 e pega o preço do rádio
    } else {
        finalPrice = (base * multiplier) + (extraM2 * multiplier) + extraFlat;
    }

    document.getElementById('modalTotalPrice').innerText = formatCurrencyProduct(finalPrice);
    return { finalPrice, multiplier, w, h };
}

function confirmModalCart() {
    const calcData = calcTotal();
    
    // Concatena as escolhas para o nome do produto no carrinho
    let detailsStr = '';
    currentProduct.options.forEach((opt, optIndex) => {
        let selectedIndex = 0;
        if (opt.type === 'select') selectedIndex = parseInt(document.getElementById(`opt_${optIndex}`).value);
        else if (opt.type === 'radio') {
            let radios = document.getElementsByName(`opt_${optIndex}`);
            for(let r of radios) { if(r.checked) selectedIndex = parseInt(r.value); }
        }
        detailsStr += ` | ${opt.choices[selectedIndex].label}`;
    });

    let sizeStr = '';
    if(currentProduct.calcType === 'area') sizeStr = `(${calcData.w}m x ${calcData.h}m)`;
    else if(currentProduct.calcType === 'linear') sizeStr = `(${calcData.w}m linear)`;

    const cartItem = {
        id: currentProduct.id + '-' + Date.now(), // ID único para a configuração
        name: `${currentProduct.name} ${sizeStr} ${detailsStr}`,
        category: currentProduct.category,
        basePrice: calcData.finalPrice, // O preço base no carrinho passa a ser o total já calculado desta peça
        image: currentProduct.image
    };

    if (typeof addToCart === 'function') {
        addToCart(cartItem);
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initModalStructure();
    renderProducts(productsData);
    
    window.addEventListener('filterProducts', (e) => {
        const category = e.detail.category;
        if (category === 'all') renderProducts(productsData);
        else renderProducts(productsData.filter(p => p.category === category));
    });
});
