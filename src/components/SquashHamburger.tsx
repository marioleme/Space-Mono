import { motion } from 'framer-motion';

interface SquashHamburgerProps {
  isOpen: boolean;
  mobile?: boolean;
}

export default function SquashHamburger({ isOpen, mobile = false }: SquashHamburgerProps) {
  const containerW = mobile ? 15 : 18;
  const containerH = mobile ? 10 : 12;
  const barH = mobile ? 1.2 : 1.5;
  const center = containerH / 2 - barH / 2;
  const topClosed = 0;
  const bottomClosed = containerH - barH;

  const spring = { stiffness: 300, damping: 20 };

  return (
    <div
      style={{ width: containerW, height: containerH }}
      className="relative flex flex-col justify-between"
    >
      <motion.span
        style={{ height: barH }}
        className="absolute left-0 right-0 bg-white rounded-full"
        animate={{
          top: isOpen ? center : topClosed,
          rotate: isOpen ? 45 : 0,
        }}
        transition={spring}
      />
      <motion.span
        style={{ height: barH, top: center }}
        className="absolute left-0 right-0 bg-white rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={spring}
      />
      <motion.span
        style={{ height: barH }}
        className="absolute left-0 right-0 bg-white rounded-full"
        animate={{
          top: isOpen ? center : bottomClosed,
          rotate: isOpen ? -45 : 0,
        }}
        transition={spring}
      />
    </div>
  );
}
