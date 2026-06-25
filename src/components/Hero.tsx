import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrambleIn from './ScrambleIn';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4';

interface HeroProps {
  entranceComplete: boolean;
}

export default function Hero({ entranceComplete }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [entrance, setEntrance] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntrance(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Mouse-scrub video control
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let seeking = false;

    const seek = () => {
      if (!video) return;
      if (Math.abs(video.currentTime - targetTime) < 0.01) {
        seeking = false;
        return;
      }
      seeking = true;
      video.currentTime = targetTime;
    };

    const onSeeked = () => {
      if (seeking) seek();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.movementX * 0.8;
      const duration = video.duration || 0;
      if (!duration) return;
      targetTime = Math.min(Math.max(video.currentTime + delta * 0.05, 0), duration);
      if (!seeking) seek();
    };

    video.addEventListener('seeked', onSeeked);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      video.removeEventListener('seeked', onSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.05,
        }}
      />

      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="uppercase leading-none select-none"
          style={{
            fontFamily: '"Anton SC", sans-serif',
            fontSize: 'clamp(120px, 30vw, 521px)',
            letterSpacing: '-4px',
            opacity: 0.1,
            transform: 'translateY(50px)',
            backgroundImage:
              'radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          TRANSCENDÊNCIA
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col h-full px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: entrance ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn text="Cérebro" delay={200} triggered={entranceComplete} />
              <br />
              <ScrambleIn text="E Corpo" delay={500} triggered={entranceComplete} />
            </h1>
            <motion.p
              className="max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: entrance ? 0 : 25, opacity: entrance ? 1 : 0 }}
              transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            >
              Construído na interseção entre neurociência e inteligência artificial. Mario Goncalves
              mapeia continuamente vias neurais, carga cognitiva e estados fisiológicos em uma
              única camada adaptativa de inteligência.
            </motion.p>
          </div>

          {/* Right h1 */}
          <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)] text-left md:text-right">
            <ScrambleIn text="Única" delay={700} triggered={entranceComplete} />
            <br />
            <ScrambleIn text="Rede" delay={1000} triggered={entranceComplete} />
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
