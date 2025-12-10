# Teste Técnico – Desenvolvedor Frontend

Projeto desenvolvido para o processo seletivo do **Grupo Ideal Trends**.

Este projeto consiste na implementação fiel de uma página institucional a partir de um design fornecido, utilizando apenas **HTML**, **CSS** e **JavaScript** puro, seguindo todas as diretrizes solicitadas no teste.

## 🎯 Objetivo

Reproduzir o layout enviado, com foco em organização do código, semântica, responsividade, slider funcional e boas práticas de desenvolvimento frontend.

## ✅ Requisitos Atendidos

### Indentação e Organização do Código

O HTML e CSS foram estruturados com indentação consistente, nomes de classes claros e padronização geral, facilitando leitura e manutenção.

### Fidelidade ao Design

Todo o layout foi reproduzido seguindo o design original:

- cores
- espaçamentos
- tipografia
- estrutura visual
- alinhamentos e proporções

Inclui hero, boxes, menu, rodapé e imagens de destaque.

### Uso de Flexbox e CSS Grid

O projeto utiliza Flexbox e Grid conforme recomendado:

- Topbar, menu e footer: **Flexbox**
- Sessão de conteúdo principal e boxes de destaque: **CSS Grid**
- Layout responsivo em todas as seções

Isso garante organização e performance, além de ser totalmente responsivo.

### Semântica HTML

A estrutura utiliza tags semânticas apropriadas:

- `header`
- `nav`
- `main`
- `section`
- `figure` e `figcaption`
- `footer`

Isso melhora SEO, acessibilidade e leitura do código.

### Responsividade com Media Queries

A responsividade foi implementada com media queries específicas para os principais breakpoints:

- `1260px` → quebra das duas colunas
- `840px` → ativação do menu mobile
- `600px` → layout 100% mobile

O layout adapta perfeitamente para telas pequenas, conforme exigido.

### Slider / Banner (Hero)

O projeto conta com um slider funcional, desenvolvido com JavaScript puro:

- transição de slides
- botões de navegação (prev/next)
- dots indicadores
- imagens com `object-fit: cover` para preencher corretamente o banner

(Plugins eram permitidos, mas optou-se por código próprio.)

### CSS, HTML, JS e PHP (onde aplicável)

O desenvolvimento foi feito 100% sem frameworks, apenas com:

- **HTML5**
- **CSS3**
- **JavaScript** puro
- **PHP** opcional em estrutura de projeto, conforme permitido

### Estratégias de SEO (Diferencial)

Foram aplicadas otimizações de SEO:

- HTML semântico com `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer`
- Hierarquia de headings consistente (`h1` na seção principal e `h2` em subseções)
- Imagens com `alt` descritivos e `figcaption` (visível apenas para leitores de tela via `sr-only`)
- `meta viewport` configurado para responsividade
- Navegação acessível com atributos ARIA em menu e slider

## 🕒 Tempo Total de Desenvolvimento

6h/8h horas de desenvolvimento

---

## 🚀 Como rodar o projeto

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local simples.

Ou utilize a extensão "Live Server" no VS Code para servir o `index.html`.
