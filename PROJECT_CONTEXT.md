# Contexto do Projeto: Anthony Velho - Portfólio Premium

## 1. Visão Geral
Este projeto é uma Landing Page/Portfólio de alta performance desenvolvida para um Web Designer e Especialista em IA. O objetivo é converter visitantes em clientes de alto ticket através de uma estética minimalista, "raw" (crua/industrial) e interações sofisticadas.

**Stack Tecnológica:**
- **Core:** React 19 (Vite), TypeScript.
- **Estilização:** Tailwind CSS.
- **Ícones:** Lucide React.
- **Tipografia:** Outfit (Display), Inter (Corpo), Playfair Display (Detalhes Serifados).

---

## 2. Design System & Estética

### Paleta de Cores
- **Background (`#F2F2F0`):** Um tom "off-white" estilo papel/vintage, reduzindo o cansaço visual do branco puro.
- **Primary (`#0A0A0A`):** Preto quase absoluto para textos e elementos principais (tinta).
- **Secondary (`#525252`):** Cinza neutro para textos de apoio.
- **Surface (`#FFFFFF`):** Branco puro para cartões e destaques.

### Elementos Visuais
- **Grain Overlay:** Uma camada de ruído (noise) fixa sobre toda a tela (`App.tsx`) para dar textura orgânica.
- **Custom Cursor:** Cursor personalizado (`CustomCursor.tsx`) com um "trailing" (rastro) suave. Possui estados:
  - *Default:* Ponto preto com anel sutil.
  - *Hover:* O anel expande ao passar por links/botões.
  - *Inverse:* Ao entrar em seções escuras (`AISection`), o cursor se torna branco automaticamente via atributo `data-cursor-inverse="true"`.

---

## 3. Estrutura de Componentes e Funcionalidades

### `App.tsx` (Entrada)
Gerencia o estado de carregamento inicial (`isLoading`). Renderiza o `Loader`, o `CustomCursor` e a estrutura principal da página. Usa `ScrollToTop` no refresh.

### `components/ui/Loader.tsx`
Tela de carregamento inicial com contador progressivo de 0% a 100%. Possui animação de saída suave (`fade-out`) antes de revelar o site.

### `components/Hero.tsx`
Seção de impacto inicial.
- **Parallax:** Usa referências (`useRef`) e `requestAnimationFrame` para mover grids, orbs de luz e textos em velocidades diferentes durante o scroll.
- **Animação:** Efeito de reveal nas tipografias gigantes ("ESTÉTICA Absoluta").
- **Performance:** Desativa efeitos pesados (orbs/parallax) em dispositivos móveis/touch.

### `components/Importance.tsx` (Feature Complexa: "Flashlight")
A seção mais interativa do site.
- **Conceito:** O usuário está no "escuro" (sem site) e precisa de uma luz.
- **Lógica Desktop:**
  - O site fica preto. O cursor age como uma lanterna (masking CSS `radial-gradient`) revelando o conteúdo real.
  - Existe um botão "Acender Luz" que remove a máscara e mostra o conteúdo iluminado permanentemente.
- **Lógica Mobile:** Remove toda a interatividade de lanterna e exibe o conteúdo de forma estática e legível para garantir performance e UX.

### `components/Services.tsx`
Grid de serviços oferecidos.
- **Typewriter:** Efeito de máquina de escrever no título ("crescimento", "autoridade", etc.).
- **Cards:** Efeito de hover sutil com bordas e ícones que reagem ao mouse.

### `components/AISection.tsx` (Modo Escuro)
Seção dedicada à Automação/IA.
- **Visual:** Fundo `bg-primary` (Preto).
- **Interação:** Define `data-cursor-inverse="true"` para inverter a cor do cursor personalizado.
- **Grid:** Layout estruturado com linhas finas (`border-white/10`) simulando um painel técnico.

### `components/Portfolio.tsx`
Call-to-Action (CTA) para o Behance.
- **Card Gigante:** Um link único e grande.
- **Animação:** Ao passar o mouse, um fundo preto sobe (`translate-y`) preenchendo o card, e o texto muda de preto para branco.

### `components/Contact.tsx` (Integração WhatsApp)
Formulário de contato funcional sem backend.
- **Lógica:** Captura Nome, Email, WhatsApp e Mensagem.
- **Ação:** Ao submeter, formata uma string (template literal) e abre a API do WhatsApp (`wa.me`) com a mensagem pré-preenchida, pronta para enviar.

### `components/ui/Reveal.tsx`
Wrapper de animação reaproveitável.
- Usa `IntersectionObserver` para detectar quando o elemento entra na tela.
- Aplica transformações CSS (Fade, Slide Up, Blur) baseadas nas props.

---

## 4. Otimizações de Performance (SEO & Core Web Vitals)
- **Lazy Loading:** Imagens carregadas com `loading="lazy"` (exceto LCP no head).
- **Fontes:** Pré-carregamento de fontes Google Fonts.
- **SEO Local:** Tags meta configuradas para Santa Catarina, Brasil.
- **Mobile First:** Condicionais em `Hero` e `Importance` desligam scripts pesados de mouse em telas de toque.
- **CSS:** Uso de `content-visibility`, `will-change` e transformações 3D aceleradas por hardware.

---

## 5. Diretrizes para Alterações Futuras
1. **Manter o Minimalismo:** Não adicionar cores vibrantes fora da paleta neutra, exceto para feedback de erro/sucesso muito sutis.
2. **Priorizar Performance:** Qualquer nova animação deve usar `transform` e `opacity`, nunca `top/left/width/height`.
3. **Cursor Personalizado:** Ao criar seções com fundo escuro, lembre-se de adicionar `data-cursor-inverse="true"` na `div` pai.
4. **Mobile:** Sempre verificar se animações complexas de mouse (hover/move) estão desativadas para touch.
