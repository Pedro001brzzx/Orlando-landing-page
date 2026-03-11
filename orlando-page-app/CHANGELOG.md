# Changelog

## [Unreleased] — 2026-03-11

### Adicionado

#### Página `/webdesign` (Branding)
- Nova página `/webdesign` com os componentes: `BrandingNav`, `BrandingHero`, `BrandingDeliverables`, `BrandingTestimonials`, `BrandingSobre`, `BrandingCTA`, `BrandingFooter`, `BrandingTicker`, `Portfolio`
- Background animado de estrelas (`GrokStarfield`) em todas as páginas
- Seção "Sobre" com imagem `AVATAR3.png` solta (sem moldura geométrica)
- Ticker animado com frases da marca

#### Nav — `/webdesign` (`BrandingNav`)
- Logo `LOGO1_ORIG_WEBDESIGN_2186x219.png`
- Links: Sobre nós, Landing Page, Portfólio, **Branding** (→ `/`), Solicitar orçamento
- Botão CTA "Quero criar meu projeto" → `/checkout2`
- Menu hamburger animado em mobile (≤900px) com `cubic-bezier(0.23, 1, 0.32, 1)`
- Menu mobile dropdown com todos os links + CTA "Quero meu projeto"

#### Nav — Homepage (`Nav`)
- Logo trocada para `LOGO1_ORIG.png`
- Link **Webdesign** (→ `/webdesign`) adicionado
- Menu hamburger idêntico ao da `/webdesign` em mobile
- Menu mobile dropdown com todos os links + CTA "Quero criar minha marca"

#### Checkout Page 2 (`/checkout2`)
- Seleção de planos (Standard, Plano 360, Diamond) com cards premium
- Formulário de contato pós-seleção com envio via Formspark
- `HomeIcon` SVG animado na nav → redireciona para `/webdesign`
- Logo `LOGO1_ORIG_WEBDESIGN_2186x219.png`

#### Checkout Page 1 (`/checkout`)
- `HomeIcon` SVG animado na nav → redireciona para `/`

### Modificado

#### Mobile responsivo
- `BrandingFooter` e `Footer`: `.o360-footer-nav` com `flex-wrap: wrap` para não vazar em telas pequenas
- `.o360-footer-copy` com `word-break: break-word`
- Seção "Sobre" (`BrandingSobre`): texto com `word-break: break-word; overflow-wrap: break-word`

#### Formulário `/checkout2`
- Bordas dos campos (`cp2-field`) mais visíveis: `rgba(255,255,255,0.28)` em repouso, `rgba(201,168,76,0.8)` no foco

#### Links corrigidos
- `BrandingHero`: CTA "Quero minha landing page" → `/checkout2` (era `/checkout`)
- `BrandingFooter`: link "Solicitar orçamento" → `/checkout2`
- `BrandingNav`: link da logo → `/webdesign`

### Assets adicionados
- `public/LOGO1_ORIG.png` — logo homepage
- `public/LOGO1_ORIG_WEBDESIGN_2186x219.png` — logo webdesign/checkout2
- `public/AVATAR3.png` — foto seção "Sobre nós"
