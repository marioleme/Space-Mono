import { useState } from 'react';
import { motion } from 'framer-motion';
import SynapseXLogo from './SynapseXLogo';
import SquashHamburger from './SquashHamburger';
import ScrambleText from './ScrambleText';

interface NavbarProps {
  entranceComplete: boolean;
}

const scrollTo = (multiplier: number) => {
  window.scrollTo({ top: window.innerHeight * multiplier, behavior: 'smooth' });
};

export default function Navbar({ entranceComplete }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-2">
        {/* Logo pill */}
        <motion.div
          className="hidden md:flex h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] items-center gap-2 cursor-pointer"
          animate={{ width: menuOpen ? 0 : 'auto', opacity: menuOpen ? 0 : 1, padding: menuOpen ? 0 : undefined }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.98 }}
          style={{ overflow: 'hidden' }}
        >
          <SynapseXLogo className="w-[18px] h-[18px] text-white shrink-0" />
          <span className="text-white text-base font-medium tracking-tight whitespace-nowrap">Mario Goncalves</span>
        </motion.div>

        {/* Expanding menu pill */}
        <motion.div
          className="h-12 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center overflow-hidden"
          animate={{ width: menuOpen ? 290 : 48 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        >
          <motion.button
            className={menuOpen ? 'shrink-0 w-9 h-9 rounded-[11px] bg-white/10 hover:bg-white/20 ml-1.5 flex items-center justify-center' : 'shrink-0 w-12 h-12 rounded-[14px] flex items-center justify-center'}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Alternar menu"
          >
            <SquashHamburger isOpen={menuOpen} />
          </motion.button>

          <motion.div
            className="flex items-center gap-5 ml-3 whitespace-nowrap"
            initial={false}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 15 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
          >
            <button
              className="text-white/85 hover:text-white text-base font-normal transition-colors"
              onMouseEnter={() => setHovered('about')}
              onMouseLeave={() => setHovered(null)}
              onClick={() => scrollTo(1)}
            >
              <ScrambleText text="Sobre" isHovered={hovered === 'about'} />
            </button>
            <button
              className="text-white/85 hover:text-white text-base font-normal transition-colors"
              onMouseEnter={() => setHovered('metrics')}
              onMouseLeave={() => setHovered(null)}
              onClick={() => scrollTo(2)}
            >
              <ScrambleText text="Métricas" isHovered={hovered === 'metrics'} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden items-center gap-2 w-full">
        {/* Logo pill */}
        <motion.div
          className="h-9 px-3.5 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-1.5 shrink-0"
          animate={{ width: menuOpen ? 0 : 'auto', opacity: menuOpen ? 0 : 1, padding: menuOpen ? 0 : undefined }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          style={{ overflow: 'hidden' }}
        >
          <SynapseXLogo className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="text-white text-[13px] font-medium tracking-tight whitespace-nowrap">Mario Goncalves</span>
        </motion.div>

        {/* Expanding menu capsule */}
        <motion.div
          className="h-9 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center overflow-hidden"
          animate={{ width: menuOpen ? '100%' : 36 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        >
          <motion.button
            className={menuOpen ? 'shrink-0 w-7 h-7 rounded-[8px] bg-white/10 hover:bg-white/20 ml-1 flex items-center justify-center' : 'shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center'}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Alternar menu"
          >
            <SquashHamburger isOpen={menuOpen} mobile />
          </motion.button>

          <motion.div
            className="flex items-center gap-4 ml-2 whitespace-nowrap"
            initial={false}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 15 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
          >
            <button
              className="text-white/85 hover:text-white text-[13px] font-normal transition-colors"
              onMouseEnter={() => setHovered('about')}
              onMouseLeave={() => setHovered(null)}
               onClick={() => scrollTo(1)}
            >
              <ScrambleText text="Sobre" isHovered={hovered === 'about'} />
            </button>
            <button
              className="text-white/85 hover:text-white text-[13px] font-normal transition-colors"
              onMouseEnter={() => setHovered('metrics')}
              onMouseLeave={() => setHovered(null)}
              onClick={() => scrollTo(2)}
            >
              <ScrambleText text="Métricas" isHovered={hovered === 'metrics'} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Download button - desktop */}
      <motion.button
        className="hidden sm:flex h-12 px-6 bg-white rounded-full items-center gap-2 text-black shrink-0"
        whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
        whileTap={{ scale: 0.97 }}
        onMouseEnter={() => setHovered('download')}
        onMouseLeave={() => setHovered(null)}
      >
        <i className="bi bi-apple text-lg" />
        <span className="text-base font-normal">
          <ScrambleText text="Baixar" isHovered={hovered === 'download'} />
        </span>
      </motion.button>

      {/* Download button - mobile */}
      <motion.button
        className="sm:hidden h-9 px-3.5 bg-white rounded-full flex items-center gap-1.5 text-black shrink-0"
        whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
        whileTap={{ scale: 0.97 }}
        onMouseEnter={() => setHovered('download')}
        onMouseLeave={() => setHovered(null)}
      >
        <i className="bi bi-apple text-sm" />
        <span className="text-[13px] font-normal">
          <ScrambleText text="Baixar" isHovered={hovered === 'download'} />
        </span>
      </motion.button>
    </motion.nav>
  );
}
