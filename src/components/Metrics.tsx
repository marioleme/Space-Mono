import { motion } from 'framer-motion';

const METRICS_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4';

const METRICS = [
  { value: '2.4ms', label: 'Latência Sináptica' },
  { value: '99.7%', label: 'Precisão de Sinal' },
  { value: '140B', label: 'Parâmetros Neurais' },
];

export default function Metrics() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <video
        src={METRICS_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-32 px-6 max-w-6xl mx-auto">
        <motion.p
          className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          Métricas de Desempenho
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex flex-col items-center text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="text-white text-[clamp(48px,10vw,96px)] font-light tracking-[-0.04em] leading-none">
                {m.value}
              </div>
              <div className="text-white/40 text-[13px] sm:text-[15px] mt-4 tracking-wide">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
