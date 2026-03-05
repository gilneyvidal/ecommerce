// ==========================================
// VIDAL DESIGN SOLUTIONS - PRODUCTS CATALOG & CALCULATOR
// ==========================================

const arteOptions = {
    id: 'arte',
    label: 'Opções de Arte',
    type: 'radio',
    obs: '* NÃO CONFERIMOS ARQUIVOS ENVIADOS, CASO NÃO SEJA FEITA A CONTRATAÇÃO DA ARTE. Envie preferencialmente em PDFx1a, JPEG ou PNG alta resolução, CMYK, textos em curvas.',
    choices: [
        { label: 'Tenho o arquivo pronto (Upload no WhatsApp)', price: 0, isM2: false, isPerJob: true },
        { label: 'Contratar criação', price: 40, isM2: false, isPerJob: true }
    ]
};

const productsData = [
    // --- ADESIVOS ---
    {
        id: 'prod-adesivo-branco',
        name: 'Adesivo Branco Personalizado',
        category: 'adesivos',
        description: 'O Adesivo Branco oferece alta qualidade, versatilidade e personalização em larga escala, ideal para comunicação visual, rótulos, decoração e sinalização. Disponível em versões fosca ou com brilho, nas qualidades Padrão e Premium.',
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
        description: 'O Adesivo Transparente da VIDAL DESIGN SOLUTIONS oferece alta qualidade, versatilidade e personalização em larga escala, ideal para comunicação visual, rótulos, decoração, sinalização e aplicações em superfícies lisas.',
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
        description: 'O Adesivo Perfurado Personalizado da VIDAL DESIGN SOLUTIONS garante impacto visual sem bloquear a visão interna. Ideal para vitrines e vidros, com impressão colorida e ótima aderência.',
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
        description: 'Adesivo branco com recorte para etiquetas e rótulos personalizados, com cores vibrantes, alta definição e corte preciso. Ideal para embalagens e identificação de produtos.',
        calcType: 'area',
        basePrice: 59.90,
        image: 'assets/images/produtos/adesivo-recorte-branco.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Brilho', price: 0}, {label: 'Fosco', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            { id: 'formato', label: 'Formato de entrega:', type: 'select', choices: [{label: 'Receber em Rolo', price: 0}, {label: 'Receber em A3', price: 5, isM2: true}, {label: 'Receber em A4', price: 7, isM2: true}, {label: 'Receber Individual', price: 10, isM2: true}] },
            { id: 'corte', label: 'Tamanho do corte:', type: 'select', choices: [{label: 'Corte acima de 5cm', price: 0}, {label: 'Corte abaixo de 5cm', price: 5, isM2: true}] },
            { id: 'revestimento', label: 'Selecione o revestimento:', type: 'select', choices: [{label: 'Sem laminação', price: 0}, {label: 'Com laminação', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-adesivo-recorte-transp',
        name: 'Adesivo Transparente Impresso c/ Recorte',
        category: 'adesivos',
        description: 'Adesivo transparente com recorte para rótulos e etiquetas personalizadas. Impressão colorida, brilho ou fosco, com opção de laminação e entrega em rolo, folhas ou unidades individuais.',
        calcType: 'area',
        basePrice: 59.90,
        image: 'assets/images/produtos/adesivo-recorte-transparente.jpg',
        options: [
            { id: 'material', label: 'Selecione o material:', type: 'select', choices: [{label: 'Brilho', price: 0}, {label: 'Fosco', price: 0}] },
            { id: 'qualidade', label: 'Qualidade de Impressão:', type: 'select', choices: [{label: 'Padrão', price: 0}, {label: 'Premium', price: 10, isM2: true}] },
            { id: 'formato', label: 'Formato de entrega:', type: 'select', choices: [{label: 'Receber em Rolo', price: 0}, {label: 'Receber em A3', price: 5, isM2: true}, {label: 'Receber em A4', price: 7, isM2: true}, {label: 'Receber Individual', price: 10, isM2: true}] },
            { id: 'corte', label: 'Tamanho do corte:', type: 'select', choices: [{label: 'Corte acima de 5cm', price: 0}, {label: 'Corte abaixo de 5cm', price: 5, isM2: true}] },
            { id: 'revestimento', label: 'Selecione o revestimento:', type: 'select', choices: [{label: 'Sem laminação', price: 0}, {label: 'Com laminação', price: 10, isM2: true}] },
            arteOptions
        ]
    },
    {
        id: 'prod-dtf-a4',
        name: 'CARTELA A4 - DTF UV',
        category: 'adesivos',
        description: 'Impressão DTF UV de alta resolução para adesivos com acabamento premium e cores vibrantes. Ideal para personalizar superfícies rígidas como acrílico, metal, vidro, plástico, madeira e outros materiais lisos, com excelente durabilidade. (21 x 29 cm)',
        calcType: 'unit',
        basePrice: 45.90,
        image: 'assets/images/produtos/cartela-a4-dtf.jpg',
        options: [ arteOptions ]
    },
    {
        id: 'prod-dtf-a3',
        name: 'CARTELA A3 - DTF UV',
        category: 'adesivos',
        description: 'Impressão DTF UV de alta resolução para adesivos com acabamento premium e cores vibrantes. Ideal para personalizar superfícies rígidas como acrílico, metal, vidro, plástico, madeira e outros materiais lisos, com excelente durabilidade. (29 x 42 cm)',
        calcType: 'unit',
        basePrice: 57.90,
        image: 'assets/images/produtos/cartela-a3-dtf.jpg',
        options: [ arteOptions ]
    },

    // --- PAPELARIA (NOVO) ---
    {
        id: 'prod-cv-brilho-4x4',
        name: 'Cartão de Visita Brilho (4x4)',
        category: 'papelaria',
        description: '88x48mm em Couché Brilho 250g - 4x4 (Frente e Verso Coloridos) - Verniz Total Brilho Frente - Refile. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/cartao-visita-brilho-4x4.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '500 unidades', price: 79.49, isM2: false}, 
                {label: '1.000 unidades', price: 95.99, isM2: false}, 
                {label: '3.000 unidades', price: 247.49, isM2: false}, 
                {label: '4.000 unidades', price: 323.99, isM2: false}, 
                {label: '5.000 unidades', price: 395.99, isM2: false}, 
                {label: '10.000 unidades', price: 764.99, isM2: false}, 
                {label: '20.000 unidades', price: 1496.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-cv-brilho-4x0',
        name: 'Cartão de Visita Brilho (4x0)',
        category: 'papelaria',
        description: '88x48mm em Couché Brilho 250g - 4x0 (Apenas Frente Colorida) - Verniz Total Brilho Frente - Refile. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/cartao-visita-brilho-4x0.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '100 unidades', price: 61.49, isM2: false}, 
                {label: '500 unidades', price: 62.99, isM2: false}, 
                {label: '1.000 unidades', price: 83.99, isM2: false}, 
                {label: '2.000 unidades', price: 148.49, isM2: false}, 
                {label: '3.000 unidades', price: 211.49, isM2: false}, 
                {label: '4.000 unidades', price: 274.49, isM2: false}, 
                {label: '5.000 unidades', price: 334.49, isM2: false}, 
                {label: '10.000 unidades', price: 640.49, isM2: false}, 
                {label: '20.000 unidades', price: 1244.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-cv-fosco-4x4',
        name: 'Cartão de Visita Fosco c/ Verniz (4x4)',
        category: 'papelaria',
        description: '88x48mm em Couché Fosco 300g - 4x4 - Laminação Fosca e Verniz Localizado Frente e Verso - Refile. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/cartao-visita-fosco.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '100 unidades', price: 128.99, isM2: false}, 
                {label: '500 unidades', price: 133.49, isM2: false}, 
                {label: '1.000 unidades', price: 161.99, isM2: false}, 
                {label: '5.000 unidades', price: 710.99, isM2: false}, 
                {label: '10.000 unidades', price: 1381.49, isM2: false}, 
                {label: '20.000 unidades', price: 2702.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-folheto-10x14-4x0',
        name: 'Folheto 10x14cm (4x0)',
        category: 'papelaria',
        description: '100x140mm em Couché Brilho 90g - 4x0 (Apenas Frente Colorida) - Sem Enobrecimento - Refile. Prazo: 2 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/folheto-10x14-4x0.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1.000 unidades', price: 145.49, isM2: false}, 
                {label: '2.500 unidades', price: 203.99, isM2: false}, 
                {label: '5.000 unidades', price: 308.99, isM2: false}, 
                {label: '10.000 unidades', price: 551.99, isM2: false}, 
                {label: '20.000 unidades', price: 1069.49, isM2: false}, 
                {label: '30.000 unidades', price: 1586.99, isM2: false}, 
                {label: '50.000 unidades', price: 2612.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-folheto-10x14-4x4',
        name: 'Folheto 10x14cm (4x4)',
        category: 'papelaria',
        description: '100x140mm em Couché Brilho 90g - 4x4 (Frente e Verso Coloridos) - Sem Enobrecimento - Refile. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/folheto-10x14-4x4.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1.000 unidades', price: 167.99, isM2: false}, 
                {label: '2.500 unidades', price: 224.99, isM2: false}, 
                {label: '5.000 unidades', price: 350.99, isM2: false}, 
                {label: '10.000 unidades', price: 611.99, isM2: false}, 
                {label: '20.000 unidades', price: 1189.49, isM2: false}, 
                {label: '30.000 unidades', price: 1768.49, isM2: false}, 
                {label: '50.000 unidades', price: 2915.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-folheto-14x20-4x0',
        name: 'Folheto 14x20cm (4x0)',
        category: 'papelaria',
        description: '140x200mm em Couché Brilho 90g - 4x0 (Apenas Frente Colorida) - Sem Enobrecimento - Refile. Prazo: 2 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/folheto-14x20-4x0.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1.000 unidades', price: 257.99, isM2: false}, 
                {label: '2.500 unidades', price: 374.99, isM2: false}, 
                {label: '5.000 unidades', price: 584.99, isM2: false}, 
                {label: '10.000 unidades', price: 1069.49, isM2: false}, 
                {label: '20.000 unidades', price: 2096.99, isM2: false}, 
                {label: '30.000 unidades', price: 3130.49, isM2: false}, 
                {label: '50.000 unidades', price: 5174.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-folheto-14x20-4x4',
        name: 'Folheto 14x20cm (4x4)',
        category: 'papelaria',
        description: '140x200mm em Couché Brilho 90g - 4x4 (Frente e Verso Coloridos) - Sem Enobrecimento - Refile. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/folheto-14x20-4x4.jpg',
        options: [
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1.000 unidades', price: 302.99, isM2: false}, 
                {label: '2.500 unidades', price: 418.49, isM2: false}, 
                {label: '5.000 unidades', price: 668.99, isM2: false}, 
                {label: '10.000 unidades', price: 1189.49, isM2: false}, 
                {label: '20.000 unidades', price: 2338.49, isM2: false}, 
                {label: '30.000 unidades', price: 3491.99, isM2: false}, 
                {label: '50.000 unidades', price: 5780.99, isM2: false}
            ] },
            arteOptions
        ]
    },

    // --- BANNERS E LONAS ---
    {
        id: 'prod-banner-440g',
        name: 'Banner 440g - Lona Impressa',
        category: 'banners',
        description: 'Banner em lona 440g fosca ou brilho, impressão digital em alta resolução com cores vibrantes e excelente durabilidade. Acabamento a escolha com ilhós, bastão, cordinha e corte reto com entrega rápida.',
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
        description: 'Faixa em lona 440g sob medida, com impressão digital de alta resolução, cores vibrantes e acabamento em bastão e ilhós. Ideal para qualquer formato, com produção rápida e qualidade profissional.',
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
        name: 'Lona Impressão Digital 440g - Sob Medida',
        category: 'banners',
        description: 'Lona impressa em material de 440g, alta resolução, disponível com brilho ou fosca, com acabamento em Reforço e Ilhós. Cores vibrantes, durabilidade e qualidade profissional para destacar sua marca.',
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
        id: 'prod-wind-banner-p',
        name: 'Wind Banner Completo (P)',
        category: 'banners',
        description: 'Wind Banner tamanho P (650x1900mm) em Tecido Poliéster 98g - 4x4. Impressão Ultra HD Sublimática - Dupla-Face Costurado. Acompanha Base Plástica e Haste Desmontável Curva. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/wind-banner-p.jpg',
        options: [
            { id: 'modelo', label: 'Modelo da Bandeira:', type: 'select', choices: [{label: 'Ângulo', price: 0}, {label: 'Faca', price: 0}, {label: 'Pena', price: 0}, {label: 'Retangular', price: 0}, {label: 'Vela', price: 0}] },
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1 unidade', price: 224.99, isM2: false}, 
                {label: '3 unidades', price: 644.99, isM2: false}, 
                {label: '5 unidades', price: 1064.99, isM2: false}, 
                {label: '10 unidades', price: 2114.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-wind-banner-m',
        name: 'Wind Banner Completo (M)',
        category: 'banners',
        description: 'Wind Banner tamanho M (650x2450mm) em Tecido Poliéster 98g - 4x4. Impressão Ultra HD Sublimática - Dupla-Face Costurado. Acompanha Base Plástica e Haste Desmontável Curva. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/wind-banner-m.jpg',
        options: [
            { id: 'modelo', label: 'Modelo da Bandeira:', type: 'select', choices: [{label: 'Ângulo', price: 0}, {label: 'Faca', price: 0}, {label: 'Pena', price: 0}, {label: 'Retangular', price: 0}, {label: 'Vela', price: 0}] },
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1 unidade', price: 254.99, isM2: false}, 
                {label: '3 unidades', price: 734.99, isM2: false}, 
                {label: '5 unidades', price: 1214.99, isM2: false}, 
                {label: '10 unidades', price: 2414.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-wind-banner-g',
        name: 'Wind Banner Completo (G)',
        category: 'banners',
        description: 'Wind Banner tamanho G (650x3000mm) em Tecido Poliéster 98g - 4x4. Impressão Ultra HD Sublimática - Dupla-Face Costurado. Acompanha Base Plástica e Haste Desmontável Curva. Prazo: 3 dias úteis + frete.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/wind-banner-g.jpg',
        options: [
            { id: 'modelo', label: 'Modelo da Bandeira:', type: 'select', choices: [{label: 'Ângulo', price: 0}, {label: 'Faca', price: 0}, {label: 'Pena', price: 0}, {label: 'Retangular', price: 0}, {label: 'Vela', price: 0}] },
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1 unidade', price: 284.99, isM2: false}, 
                {label: '3 unidades', price: 824.99, isM2: false}, 
                {label: '5 unidades', price: 1364.99, isM2: false}, 
                {label: '10 unidades', price: 2714.99, isM2: false}
            ] },
            arteOptions
        ]
    },

    // --- TOLDOS ---
    {
        id: 'prod-toldo-retratil',
        name: 'Toldo Retrátil / Cortina',
        category: 'toldos',
        description: 'Material feito com tubo galvanizado parede 1.20 peças e juntas em alumínio, lona 440gr cores diversas acabamento com barra plástica transparente.',
        calcType: 'linear', // Metro linear
        basePrice: 450.00,
        image: 'assets/images/produtos/toldo-retratil.jpg',
        options: [
            { id: 'cor', label: 'Selecione a cor:', type: 'select', choices: [{label: 'Preto', price:0}, {label: 'Azul', price:0}, {label: 'Verde', price:0}, {label: 'Amarelo', price:0}, {label: 'Cinza', price:0}, {label: 'Outros (informar no envio)', price:0}] },
            { id: 'instalacao', label: 'Instalação:', type: 'select', choices: [{label: 'Não', price:0}, {label: 'Contratar (Solicitaremos foto e endereço do local)', price:0}] },
            { id: 'projecao', label: 'Projeção:', type: 'select', choices: [{label: 'Padrão 1 metro', price:0}, {label: 'Outro (Ajuste no atendimento)', price:0}] }
        ]
    },
    {
        id: 'prod-toldo-fixo',
        name: 'Toldo Fixo',
        category: 'toldos',
        description: 'Material feito com tubo galvanizado parede 1.20, lona 440gr cores diversas acabamento com barra plástica transparente.',
        calcType: 'linear',
        basePrice: 450.00,
        image: 'assets/images/produtos/toldo-fixo.jpg',
        options: [
            { id: 'cor', label: 'Selecione a cor:', type: 'select', choices: [{label: 'Preto', price:0}, {label: 'Azul', price:0}, {label: 'Verde', price:0}, {label: 'Amarelo', price:0}, {label: 'Cinza', price:0}, {label: 'Outros (informar no envio)', price:0}] },
            { id: 'instalacao', label: 'Instalação:', type: 'select', choices: [{label: 'Não', price:0}, {label: 'Contratar (Solicitaremos foto e endereço do local)', price:0}] },
            { id: 'projecao', label: 'Projeção:', type: 'select', choices: [{label: 'Padrão 1 metro', price:0}, {label: 'Outro (Ajuste no atendimento)', price:0}] }
        ]
    },

    // --- VESTUÁRIO (NOVO) ---
    {
        id: 'prod-camiseta-dryfit',
        name: 'Camiseta Dry Fit Masculina',
        category: 'vestuario',
        description: 'Modelo: Gola Redonda - Tecido Dry Fit. Confortável e de alta qualidade. Informe no WhatsApp a distribuição dos tamanhos desejados caso seja um pacote.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/camiseta-dry-fit.jpg',
        options: [
            { id: 'tamanho_principal', label: 'Tamanho Principal (ou variados no Whats):', type: 'select', choices: [{label: 'Tamanhos Variados (Informar no WhatsApp)', price:0}, {label: 'P', price:0}, {label: 'M', price:0}, {label: 'G', price:0}, {label: 'GG', price:0}, {label: 'XL1', price:0}, {label: 'XL2', price:0}, {label: 'XL3', price:0}, {label: 'XL4', price:0}] },
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1 unidade', price: 52.49, isM2: false}, 
                {label: '5 unidades', price: 260.99, isM2: false}, 
                {label: '10 unidades', price: 520.49, isM2: false}, 
                {label: '20 unidades', price: 1037.99, isM2: false}, 
                {label: '30 unidades', price: 1552.49, isM2: false}, 
                {label: '40 unidades', price: 2063.99, isM2: false}, 
                {label: '50 unidades', price: 2572.49, isM2: false}, 
                {label: '100 unidades', price: 5129.99, isM2: false}
            ] },
            arteOptions
        ]
    },
    {
        id: 'prod-moletom-canguru',
        name: 'Moletom Canguru (Unissex)',
        category: 'vestuario',
        description: 'Modelo: Canguru Unissex - Tecido Moletom Flanelado quentinho e premium. Informe no WhatsApp a distribuição dos tamanhos desejados caso seja um pacote.',
        calcType: 'variant',
        basePrice: 0,
        image: 'assets/images/produtos/moletom-canguru.jpg',
        options: [
            { id: 'tamanho_principal', label: 'Tamanho Principal (ou variados no Whats):', type: 'select', choices: [{label: 'Tamanhos Variados (Informar no WhatsApp)', price:0}, {label: 'P', price:0}, {label: 'M', price:0}, {label: 'G', price:0}, {label: 'GG', price:0}, {label: 'XL1', price:0}, {label: 'XL2', price:0}, {label: 'XL3', price:0}, {label: 'XL4', price:0}] },
            { id: 'pacote', label: 'Selecione a quantidade:', type: 'select', choices: [
                {label: '1 unidade', price: 130.49, isM2: false}, 
                {label: '5 unidades', price: 628.49, isM2: false}, 
                {label: '10 unidades', price: 1250.99, isM2: false}, 
                {label: '20 unidades', price: 2495.99, isM2: false}, 
                {label: '30 unidades', price: 3740.99, isM2: false}, 
                {label: '40 unidades', price: 4985.99, isM2: false}, 
                {label: '50 unidades', price: 6226.49, isM2: false}, 
                {label: '100 unidades', price: 12449.99, isM2: false}
            ] },
            arteOptions
        ]
    },

    // --- SOCIAL MÍDIA ---
    {
        id: 'prod-pacote-artes',
        name: 'Pacote de Artes - Redes Sociais',
        category: 'social mídia',
        description: 'Criação de mídia digital para post, story e feed. Escolha entre pacotes avulsos ou contratos mensais e trimestrais (exclusivo em até 3x) para manter sua rede social sempre atualizada e profissional.',
        calcType: 'variant', // Escolha direta do valor
        basePrice: 0,
        image: 'assets/images/produtos/pacote-artes.jpg',
        options: [
            { id: 'pacote', label: 'Selecione o pacote:', type: 'radio', choices: [
                {label: 'Pacote com 10 Artes', price: 350, isM2: false}, 
                {label: 'Pacote com 20 Artes', price: 600, isM2: false}, 
                {label: 'Pacote Mensal - 27 artes/mês', price: 1000, isM2: false}, 
                {label: 'Pacote Trimestral - 27 artes/mês (em até 3x)', price: 2675.97, isM2: false}
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
                        <i class="fas fa-shopping-bag"></i> Comprar
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
    
    // Inserção inteligente dos campos de medida e de QUANTIDADE
    if (currentProduct.calcType === 'area') {
        dimensionsHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Largura (cm)</label>
                    <input type="number" id="calcW" value="0" min="0" step="1" onchange="calcTotal()" onkeyup="calcTotal()">
                </div>
                <div class="form-group">
                    <label>Altura (cm)</label>
                    <input type="number" id="calcH" value="0" min="0" step="1" onchange="calcTotal()" onkeyup="calcTotal()">
                </div>
            </div>
            <div class="form-group" style="margin-top: -0.5rem;">
                <label style="color: var(--primary); font-weight: 700;">Quantidade de Peças</label>
                <input type="number" id="calcQty" value="1" min="1" step="1" onchange="calcTotal()" onkeyup="calcTotal()" style="border-color: var(--primary);">
            </div>`;
    } else if (currentProduct.calcType === 'linear') {
        dimensionsHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Largura Total (cm)</label>
                    <input type="number" id="calcW" value="0" min="0" step="1" onchange="calcTotal()" onkeyup="calcTotal()">
                </div>
                <div class="form-group">
                    <label style="color: var(--primary); font-weight: 700;">Quantidade</label>
                    <input type="number" id="calcQty" value="1" min="1" step="1" onchange="calcTotal()" onkeyup="calcTotal()" style="border-color: var(--primary);">
                </div>
            </div>`;
    } else {
        // Para produtos Unitários e Pacotes de Artes
        dimensionsHTML = `
            <div class="form-group">
                <label style="color: var(--primary); font-weight: 700;">Quantidade de Lotes/Pacotes</label>
                <input type="number" id="calcQty" value="1" min="1" step="1" onchange="calcTotal()" onkeyup="calcTotal()" style="border-color: var(--primary);">
            </div>`;
    }

    let optionsHTML = '';
    currentProduct.options.forEach((opt, optIndex) => {
        optionsHTML += `<div class="form-group"><label>${opt.label}</label>`;
        if(opt.obs) optionsHTML += `<p style="font-size:0.75rem; color:#ef4444; margin-bottom:0.5rem; line-height:1.2;">${opt.obs}</p>`;
        
        if (opt.type === 'select') {
            optionsHTML += `<select id="opt_${optIndex}" onchange="calcTotal()">`;
            opt.choices.forEach((choice, choiceIndex) => {
                optionsHTML += `<option value="${choiceIndex}">${choice.label}</option>`;
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
        <p style="color: var(--gray-600); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">${currentProduct.description}</p>
        
        <div style="border-top: 1px solid var(--gray-200); padding-top: 1.5rem;">
            ${dimensionsHTML}
            ${optionsHTML}
        </div>
        
        <div id="modalSummary" style="background: var(--gray-50); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--gray-200); margin-top: 1.5rem; font-size: 0.9rem; color: var(--gray-700); line-height: 1.5;">
        </div> 

        <div class="modal-footer">
            <div class="modal-total">Total do Lote: <span id="modalTotalPrice">R$ 0,00</span></div>
            <button class="btn btn-primary" onclick="confirmModalCart()">Adicionar ao Carrinho</button>
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
    
    let w_cm = document.getElementById('calcW') ? parseFloat(document.getElementById('calcW').value) || 0 : 0;
    let h_cm = document.getElementById('calcH') ? parseFloat(document.getElementById('calcH').value) || 0 : 0;
    let qty = document.getElementById('calcQty') ? parseInt(document.getElementById('calcQty').value) || 1 : 1;
    
    if (qty < 1) qty = 1; // Trava contra números negativos
    
    let multiplier = 0;
    let summaryText = `<strong>Resumo da seleção:</strong><br>`;
    
    // Cálculo da área e aplicação do Mínimo de 0.5m² PARA O LOTE TODO
    if (currentProduct.calcType === 'area') {
        let areaM2 = (w_cm / 100) * (h_cm / 100);
        let totalAreaLote = areaM2 * qty;
        
        summaryText += `- <strong>Medidas:</strong> ${w_cm}cm x ${h_cm}cm<br>`;
        summaryText += `- <strong>Quantidade:</strong> ${qty} peça(s)<br>`;
        
        if (w_cm > 0 && h_cm > 0) {
            multiplier = totalAreaLote < 0.5 ? 0.5 : totalAreaLote; 
        }
    } else if (currentProduct.calcType === 'linear') {
        let totalLinear = (w_cm / 100) * qty;
        summaryText += `- <strong>Largura:</strong> ${w_cm}cm lineares<br>`;
        summaryText += `- <strong>Quantidade:</strong> ${qty} peça(s)<br>`;
        if (w_cm > 0) {
            multiplier = totalLinear;
        }
    } else if (currentProduct.calcType === 'unit' || currentProduct.calcType === 'variant') {
        multiplier = qty;
        summaryText += `- <strong>Quantidade:</strong> ${qty} Lote/Pacote(s)<br>`;
    }

    let base = currentProduct.basePrice;
    let extraM2 = 0;
    let extraFlatPerPiece = 0;
    let extraFlatPerJob = 0;

    currentProduct.options.forEach((opt, optIndex) => {
        let selectedIndex = 0;
        if (opt.type === 'select') {
            selectedIndex = parseInt(document.getElementById(`opt_${optIndex}`).value);
        } else if (opt.type === 'radio') {
            let radios = document.getElementsByName(`opt_${optIndex}`);
            for(let r of radios) { if(r.checked) selectedIndex = parseInt(r.value); }
        }
        
        let choice = opt.choices[selectedIndex];
        
        let cleanLabel = opt.label.replace(':', '');
        summaryText += `- <strong>${cleanLabel}:</strong> ${choice.label}<br>`;
        
        if (choice.price > 0) {
            if (choice.isM2) extraM2 += choice.price;
            else if (choice.isPerJob) extraFlatPerJob += choice.price; 
            else extraFlatPerPiece += choice.price; 
        }
    });

    let finalPrice = 0;
    
    // Matemática final blindada
    if (currentProduct.calcType === 'variant') {
        // Se for um pacote de artes ou itens engessados de papelaria/vestuário
        finalPrice = (extraFlatPerPiece * qty) + extraFlatPerJob; 
    } else if (multiplier === 0 && currentProduct.calcType !== 'unit' && currentProduct.calcType !== 'variant') {
        // Cliente ainda não preencheu largura/altura
        finalPrice = 0; 
    } else {
        // Preço Base do Lote + Adicionais de M² + Adicionais por Peça + Adicionais por Lote (Arte)
        finalPrice = (base * multiplier) + (extraM2 * multiplier) + (extraFlatPerPiece * qty) + extraFlatPerJob;
    }

    document.getElementById('modalSummary').innerHTML = summaryText;
    document.getElementById('modalTotalPrice').innerText = formatCurrencyProduct(finalPrice);
    
    return { finalPrice, multiplier, w_cm, h_cm, qty };
}

function confirmModalCart() {
    const calcData = calcTotal();
    
    // Proteção dupla para obrigar a preencher as medidas
    if ((currentProduct.calcType === 'area' || currentProduct.calcType === 'linear') && (calcData.w_cm === 0 || (currentProduct.calcType === 'area' && calcData.h_cm === 0))) {
        alert("Por favor, preencha as medidas do seu material antes de adicionar ao carrinho.");
        return;
    }
    
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

    // Registra a quantidade informada no título do item do carrinho para o Whats
    let sizeStr = '';
    if(currentProduct.calcType === 'area') sizeStr = `(${calcData.w_cm}cm x ${calcData.h_cm}cm) - Lote c/ ${calcData.qty} unid.`;
    else if(currentProduct.calcType === 'linear') sizeStr = `(${calcData.w_cm}cm linear) - Lote c/ ${calcData.qty} unid.`;
    else sizeStr = `- Lote/Pacote c/ ${calcData.qty} unid.`;

    const cartItem = {
        id: currentProduct.id + '-' + Date.now(), 
        name: `${currentProduct.name} ${sizeStr} ${detailsStr}`,
        category: currentProduct.category,
        basePrice: calcData.finalPrice, // O preço já vai sendo o total desse lote
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
