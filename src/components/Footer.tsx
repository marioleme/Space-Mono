import SynapseXLogo from './SynapseXLogo';

const FOOTER_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4';

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left: video */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
          <video
            src={FOOTER_VIDEO}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Right: content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-10 sm:p-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <SynapseXLogo className="w-[18px] h-[18px] text-white/70" />
              <span className="text-white/70 text-[15px] font-medium tracking-tight">
                Mario Goncalves
              </span>
            </div>
            <p className="text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
            A próxima evolução da interação humano-máquina. Feito para quem se recusa a ser
            limitado apenas pela biologia.
            </p>
          </div>

          <p className="text-white/25 text-[12px] mt-12">
            (c) 2026 Mario Goncalves. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
