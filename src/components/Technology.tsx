import { motion } from 'framer-motion';

const TECH_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4';

const ITEMS = [
  { title: 'Mapeamento Cortical', desc: 'Reconstrução espacial em tempo real de regiões neurais ativas.' },
  { title: 'Isolamento de Sinal', desc: 'Separa a intenção cognitiva do ruído biológico.' },
  { title: 'Predição de Estado', desc: 'Antecipa transições cognitivas antes que ocorram.' },
  { title: 'Feedback em Loop', desc: 'Ajuste em malha fechada baseado na correlação de resultados.' },
];

export default function Technology() {
  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden bg-black">
      <video
        src={TECH_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col h-full px-8 sm:px-12 md:px-16 py-12 sm:py-16">
        {/* Top area */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <motion.h2
            className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em]"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            Inteligência
            <br />
            Adaptativa
          </motion.h2>

          <motion.p
            className="text-white/50 text-[13px] sm:text-[15px] leading-relaxed max-w-xs md:text-right md:pt-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            O sistema aprende sua linha de base neural em 72 horas. A partir daí, cada estado
            cognitivo é mapeado, previsto e otimizado em tempo real.
          </motion.p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="text-white text-[14px] sm:text-[16px] font-normal mb-2">
                {item.title}
              </h3>
              <p className="text-white/40 text-[12px] sm:text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
