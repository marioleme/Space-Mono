import { motion } from 'framer-motion';

const LAYERS = [
  { index: 'Camada 1', name: 'Captura' },
  { index: 'Camada 2', name: 'Processamento' },
  { index: 'Camada 3', name: 'Interface' },
];

export default function Architecture() {
  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center max-w-3xl mx-auto px-6 py-32">
      {/* Heading block */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.0 }}
      >
        <p className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-8">
          Arquitetura
        </p>
        <h2 className="text-white font-light text-[clamp(28px,6vw,56px)] leading-[1.15] tracking-[-0.02em] mb-10">
          Três camadas. Zero atrito.
        </h2>
        <p className="text-white/45 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
          A camada de sensores captura sinais bioelétricos brutos. A camada de processamento isola a intenção. A camada de
          interface entrega saída estruturada para qualquer sistema conectado.
        </p>
      </motion.div>

      {/* Layer cards */}
      <motion.div
        className="mt-20 flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        {LAYERS.map((layer) => (
          <div
            key={layer.index}
            className="max-w-md w-full h-[72px] border border-white/10 rounded-lg flex items-center justify-between px-6"
          >
            <span className="text-white/30 text-[12px] tracking-[0.15em] uppercase">
              {layer.index}
            </span>
            <span className="text-white text-[16px] sm:text-[18px] font-light">
              {layer.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
