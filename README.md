# Mario Goncalves — Space Mono

Landing page futurista e cinematográfica para Mario Goncalves, apresentando o conceito de uma **interface neural com IA** — um sistema que conecta o cérebro humano diretamente a dispositivos digitais.

## 🧠 Sobre o Projeto

Este é um site de página única (SPA) construído com React + TypeScript que explora uma estética cyberpunk/cinematográfica com vídeos de fundo em tela cheia, animações de texto com efeito "scramble", parallax 3D e métricas animadas. O projeto serve como portfólio/página de apresentação do conceito **Synapse X**: uma ponte neural entre o cérebro humano e sistemas computacionais.

Construído a partir do template `bolt-vite-react-ts`.

## 🚀 Tecnologias

| Tecnologia | Versão |
|---|---|
| React | 18.3.1 |
| TypeScript | 5.5.3 |
| Vite | 6.3.1 |
| Tailwind CSS | 3.4.1 |
| Framer Motion | 12.6.3 |
| Lucide React | 0.344.0 |
| ESLint | 9.9.1 |

## 📁 Estrutura

```
src/
├── components/
│   ├── Architecture.tsx      # Seção de arquitetura em 3 camadas
│   ├── CinematicText.tsx     # Texto cinematográfico com parallax 3D
│   ├── Footer.tsx            # Rodapé com vídeo e tagline
│   ├── Hero.tsx              # Hero com vídeo e mouse-scrub
│   ├── Metrics.tsx           # Métricas de performance animadas
│   ├── Navbar.tsx            # Barra de navegação fixa com glassmorphism
│   ├── ScrambleIn.tsx        # Animação de entrada com scramble
│   ├── ScrambleText.tsx      # Efeito scramble ao passar o mouse
│   ├── SquashHamburger.tsx   # Ícone hambúrguer animado
│   ├── SynapseXLogo.tsx      # Logo SVG personalizado
│   └── Technology.tsx        # Seção "Inteligência Adaptativa"
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## 🎯 Funcionalidades

- **Hero com vídeo interativo** — o mouse scrubs no timeline do vídeo em tempo real
- **Parallax 3D textual** — efeito de perspectiva e profundidade ao scrollar
- **Métricas animadas** — latência sináptica, precisão de sinal e parâmetros neurais com fade-in ao scroll
- **Grid de tecnologias** — mapeamento cortical, isolamento de sinal, predição de estado e feedback em loop
- **Arquitetura em 3 camadas** — captura, processamento e interface
- **Navbar com glassmorphism** — menu responsivo com toggle animado e efeito scramble nos links
- **Footer com vídeo** — layout dividido com chamada final

## 🛠️ Scripts

```bash
npm run dev       # Inicia servidor de desenvolvimento Vite
npm run build     # Gera build de produção em dist/
npm run preview   # Pré-visualiza a build de produção
npm run lint      # Executa ESLint em todo o projeto
```

## 🎨 Customização

- **Fontes**: Space Mono (primária) e Anton SC (watermark) via Google Fonts
- **Cores**: Tailwind CSS configurado em `tailwind.config.js`
- **Vídeos**: Hospedados no CloudFront CDN — substitua as URLs em cada componente para usar seus próprios assets
- **Animações**: Framer Motion — ajuste delays, durações e variações nos componentes

## 📄 Licença

© 2026 Mario Goncalves. Todos os direitos reservados.
