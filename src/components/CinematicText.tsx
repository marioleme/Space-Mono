import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4';

const TEXT =
  'Olá, me chamo Mario Gonçalves e possuo sólida trajetória como Desenvolvedor React. Ao longo da minha carreira, especializei-me em React, HTML5, CSS3 e JavaScript, com foco na entrega de interfaces responsivas, semânticas e pixel-perfect.Domino ferramentas como Visual Studio Code e Cloud, sempre direcionando minha atuação para a conquista de grandes resultados. Busco atuar em ambientes que utilizem React integrado ao ecossistema Salesforce, onde minha expertise em React possa agregar valor e potencializar os objetivos da organização. Meu objetivo é aplicar minhas competências técnicas para gerar impacto real ,  Sigo à disposição para uma conversa mais detalhada.';

export default function CinematicText() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  });

  const yScaleValue = useTransform(smoothProgress, [0, 1], [60, -120]);
  const opacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);

  const transform = useMotionTemplate`rotateX(24deg) translateY(${yScaleValue}px) translateZ(15px)`;

  return (
    <section
      ref={ref}
      className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black"
    >
      <video
        src={SECTION_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Top gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-[180px] z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #010103, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-5xl w-full" style={{ perspective: '400px' }}>
          <motion.p
            className="font-sans font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none px-6 sm:px-12 text-center"
            style={{ transform, opacity }}
          >
            {TEXT}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
