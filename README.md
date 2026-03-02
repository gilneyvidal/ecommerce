Vidal Design Solutions - Catálogo e Orçamentos

Site institucional e catálogo de produtos dinâmico para a Vidal Design Solutions. Este projeto foi desenvolvido para funcionar como um portfólio de serviços e um e-commerce voltado à geração de orçamentos via WhatsApp.

🌟 Funcionalidades Principais

Catálogo Dinâmico: Carregamento de produtos via JSON (simulando um banco de dados).

Filtros por Categoria: Navegação fluida entre adesivos, banners, fachadas, etc.

Calculadora de M²: Algoritmo integrado na página do produto para precificação baseada em largura, altura e quantidade, aplicando regras de pedido mínimo.

Carrinho de Orçamentos: Armazenamento local (localStorage) permitindo ao usuário montar um pacote completo de materiais.

Integração WhatsApp: Geração inteligente de mensagens contendo todos os itens selecionados, especificações e valor total estimado.

🚀 Como Publicar no GitHub Pages

1. Criar Repositório

Acesse github.com e faça login.

Clique em "+" → "New repository".

Nome: vidaldesignsolutions.

Deixe o repositório como Público.

Clique em "Create repository".

2. Upload dos Arquivos

No repositório criado, clique em "uploading an existing file".

Arraste todos os arquivos e pastas da estrutura do seu projeto.

Em "Commit changes", escreva: Initial commit - Site Finalizado.

Clique em "Commit changes".

3. Ativar GitHub Pages

Vá na aba "Settings" do repositório.

No menu lateral esquerdo, clique em "Pages".

Em "Source", selecione "Deploy from a branch".

Em "Branch", selecione "main" e mantenha a pasta como "/ (root)".

Clique em "Save".

Aguarde cerca de 2-5 minutos e acesse o link gerado pelo GitHub.

4. Configurar Domínio Personalizado (Opcional)

No menu "Pages", em "Custom domain", digite o seu domínio (ex: vidaldesignsolutions.com.br).

Clique em "Save".

Configure o DNS na sua hospedagem apontando para os IPs do GitHub Pages:

Tipo A: 185.199.108.153

Tipo A: 185.199.109.153

Tipo A: 185.199.110.153

Tipo A: 185.199.111.153

Tipo CNAME: www apontando para seu-usuario.github.io

📁 Estrutura de Pastas e Arquivos

vidaldesignsolutions/
├── index.html                 # Página inicial (Home, Categorias, Destaques)
├── logo.png                   # Logo principal (Rodapé e Favicon)
├── logo_cabecalho.png         # Logo horizontal do cabeçalho
├── README.md                  # Documentação do projeto
├── pages/
│   ├── carrinho.html          # Interface de revisão do orçamento
│   └── produto.html           # Página de detalhes com calculadora
├── data/
│   └── products.json          # Banco de dados (Catálogo de produtos)
└── assets/
    ├── css/
    │   ├── style.css          # Variáveis de cor, tipografia e estilos globais
    │   └── responsive.css     # Regras de Media Queries (Mobile/Tablet)
    ├── js/
    │   ├── main.js            # Animações de scroll, menu mobile, filtros globais
    │   ├── cart.js            # Lógica de Carrinho (localStorage) e Notificações
    │   └── products.js        # Lógica de renderização (fetch) do catálogo
    └── images/
        └── produtos/          # Pasta para armazenar as fotos de cada produto


🛠️ Tecnologias Utilizadas

HTML5 Semântico

CSS3 (Variáveis, Flexbox, CSS Grid)

JavaScript Vanilla (ES6+, LocalStorage, SessionStorage, Fetch API)

FontAwesome (Ícones)

Google Fonts (Montserrat e Open Sans)
