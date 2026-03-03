# Vidal Design Solutions - Catálogo e Orçamentos

Site institucional e catálogo de produtos dinâmico para a Vidal Design Solutions. Este projeto foi desenvolvido para funcionar como um portfólio de serviços e um e-commerce voltado à geração de orçamentos precisos via WhatsApp, baseados na tabela de 2026.

## 🌟 Funcionalidades Principais

* **Catálogo Dinâmico:** Carregamento de produtos via JavaScript (simulando um banco de dados local com atualizações de valores).
* **Filtros por Categoria:** Navegação fluida entre adesivos, banners, fachadas, toldos e social mídia.
* **Calculadora Inteligente (Modal):** Algoritmo integrado em uma janela flutuante para precificação baseada em largura e altura (em centímetros) ou metro linear, aplicando regras de pedido mínimo de 1m² e adicionais de acabamento.
* **Carrinho de Orçamentos:** Armazenamento local (localStorage) permitindo ao usuário montar um pacote completo de materiais sem perder os dados ao fechar a aba.
* **Integração WhatsApp:** Geração inteligente de mensagens contendo todos os itens selecionados, especificações exatas (medidas e acabamentos) e o valor total estimado.

## 🚀 Como Publicar no GitHub Pages

### 1. Criar Repositório
1. Acesse github.com e faça login.
2. Clique em "+" → "New repository".
3. Nome: `vidaldesignsolutions`.
4. Deixe o repositório como Público.
5. Clique em "Create repository".

### 2. Upload dos Arquivos
1. No repositório criado, clique em "uploading an existing file".
2. Arraste todos os arquivos e pastas da estrutura do seu projeto.
3. Em "Commit changes", escreva: `Initial commit - Site Finalizado`.
4. Clique em "Commit changes".

### 3. Ativar GitHub Pages
1. Vá na aba "Settings" do repositório.
2. No menu lateral esquerdo, clique em "Pages".
3. Em "Source", selecione "Deploy from a branch".
4. Em "Branch", selecione "main" e mantenha a pasta como "/ (root)".
5. Clique em "Save".
6. Aguarde cerca de 2-5 minutos e acesse o link gerado pelo GitHub.

### 4. Configurar Domínio Personalizado (Opcional)
1. No menu "Pages", em "Custom domain", digite o seu domínio (ex: `vidaldesignsolutions.com.br`).
2. Clique em "Save".
3. Configure o DNS na sua hospedagem apontando para os IPs do GitHub Pages:
   - Tipo A: 185.199.108.153
   - Tipo A: 185.199.109.153
   - Tipo A: 185.199.110.153
   - Tipo A: 185.199.111.153
   - Tipo CNAME: www apontando para `seu-usuario.github.io`

## 📁 Estrutura de Pastas e Arquivos

```text
vidaldesignsolutions/
├── index.html                 # Página inicial (Home, Categorias, Destaques e Modal)
├── logo.png                   # Logo principal (Rodapé e Favicon)
├── logo_cabecalho.png         # Logo horizontal do cabeçalho
├── README.md                  # Documentação do projeto
├── pages/
│   └── carrinho.html          # Interface de revisão do orçamento e envio
└── assets/
    ├── css/
    │   ├── style.css          # Variáveis de cor, tipografia e estilos globais/Modal
    │   └── responsive.css     # Regras de Media Queries (Mobile/Tablet)
    ├── js/
    │   ├── main.js            # Animações de scroll, menu mobile, filtros globais
    │   ├── cart.js            # Lógica de Carrinho (localStorage) e disparo do WhatsApp
    │   └── products.js        # Banco de dados do catálogo e motor matemático da calculadora
    └── images/
        └── produtos/          # Pasta para armazenar as fotos e banners de cada produto
