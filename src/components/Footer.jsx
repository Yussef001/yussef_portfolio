import { Mail, Phone, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-[#0f0f1a]/80 border-t border-cyan-500/20 backdrop-blur-md py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-6">

        {/* Signature */}
        <p className="text-sm text-gray-400">
          Fait avec <span className="text-pink-500 animate-pulse">❤️</span> par{" "}
          <span className="text-cyan-400 font-semibold glow-cyan">Yussef Codeur</span>
        </p>

        {/* Contacts */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0 text-gray-400 text-sm">
          <a
            href="mailto:abdelyussefs@gmail.com"
            className="flex items-center space-x-2 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_#22d3ee]"
          >
            <Mail size={18} />
            <span>abdelyussefs@gmail.com</span>
          </a>

          <a
            href="tel:+22655440266"
            className="flex items-center space-x-2 hover:text-pink-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_#ec4899]"
          >
            <Phone size={18} />
            <span>+226 55440266 / 60626507</span>
          </a>

          <a
            href="https://wa.me/22655440266"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_#22c55e]"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mentions légales */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Yussef Codeur. Tous droits réservés.
        </p>
      </div>

      {/* Ligne lumineuse animée */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 animate-[pulse_3s_infinite]" />
    </footer>
  );
}

export default Footer;
