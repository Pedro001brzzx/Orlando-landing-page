# Orlando 360 — Landing Page App

Aplicação React para a agência **Orlando 360 Design**, composta por múltiplas páginas de conversão com design premium e responsividade completa.

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Branding / Identidade Visual |
| `/webdesign` | Webdesign — Landing Pages |
| `/checkout` | Formulário de orçamento (Identidade Visual) |
| `/checkout2` | Seleção de planos + formulário (Webdesign) |

## Tecnologias

- React 18 (Create React App)
- React Router DOM v6
- CSS inline + global.css (design system próprio)
- Vercel (deploy)

## Como rodar

```bash
npm install
npm start
```

## Build para produção

```bash
npm run build
```

## Estrutura principal

```
src/
  views/
    pages/
      Home.jsx          — Página inicial (branding)
      Branding.jsx      — Página webdesign
      Checkout.jsx      — Formulário orçamento branding
      CheckoutPage2.jsx — Planos + formulário webdesign
    components/
      Nav.jsx           — Nav da homepage
      BrandingNav.jsx   — Nav da /webdesign
      BrandingHero.jsx
      BrandingSobre.jsx
      BrandingDeliverables.jsx
      BrandingTestimonials.jsx
      BrandingCTA.jsx
      BrandingFooter.jsx
      BrandingTicker.jsx
      Portfolio.jsx
      Footer.jsx
      GrokStarfield.jsx — Background animado de estrelas
      Cursor.jsx        — Cursor customizado
  styles/
    global.css          — Design system global
  controllers/
    useScrollAnimation.js
    useReveal.js
public/
  LOGO1_ORIG.png                    — Logo homepage
  LOGO1_ORIG_WEBDESIGN_2186x219.png — Logo webdesign/checkout2
  AVATAR3.png                       — Imagem seção "Sobre"
```
