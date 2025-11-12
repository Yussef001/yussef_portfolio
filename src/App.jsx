import Navbar from "./components/Navbar";
import ParticlesBackground from "./ParticlesBackground"; 
import { motion } from "framer-motion";
import Footer from "./components/Footer";
// Variants d'animation réutilisables
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

function App() {
  const projects = [
    {
      title:
        "Système automatisé de climatisation pour Shelters – ASECNA Burkina Faso",
      description:
        "Conception et Réalisation d’un système de gestion automatisée de la climatisation pour Shelters à la Répresentation de l'ASECNA au Burkina Faso — Aéroport International de Bobo-Dioulasso.",
      link: "Confidentiel",
      color: "cyan",
    },
    {
      title: "Burkina Hôtel Consultant",
      description:
        "Cabinet de conseil spécialisé dans l’accompagnement stratégique, opérationnel et humain des établissements hôteliers.",
      link: "https://frekehotelexpertise.com/",
      color: "pink",
    },
    {
      title: "Stock Manager",
      description:
        "Application web complète de gestion des stocks, ventes et clients avec suivi financier et statistiques en temps réel.",
      link: "Confidentiel",
      color: "cyan",
    },
    {
      title: "Résidence 4 Horizons",
      description:
        "Référence en matière d’hébergement de luxe à Bobo-Dioulasso, alliant confort et élégance.",
      link: "https://residence4horizons.com/",
      color: "pink",
    },
    {
      title: "Hôtel & Restaurant Les 2 Palmiers",
      description:
        "Établissement hôtelier moderne offrant hébergement, restauration et services événementiels à Bobo-Dioulasso.",
      link: "https://api.grandex.digital/",
      color: "cyan",
    },
    {
      title: "DCOFAM",
      description:
        "DCOFAM est une entreprice de Design, de Conception et de Fabrication Mécanique.",
      link: "https://dcofam.com/",
      color: "pink",
    },
  ];
  return (
  <div className="relative min-h-screen overflow-hidden font-sans text-gray-200">
    {/* Fond animé */}
    <div className="absolute inset-0 -z-20 animate-[floating-glow_40s_ease_infinite] bg-gradient-to-r from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-[length:600%_600%]" />

    {/* Particules */}
    <ParticlesBackground />

    {/* Contenu principal */}
    <Navbar />

    {/* SECTION ABOUT */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 space-y-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* === PHOTO IDENTITÉ FUTURISTE === */}
        <br />
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_25px_#22d3ee] hover:shadow-[0_0_40px_#ec4899] transition-all duration-500"
          custom={0}
          variants={fadeInUp}
        >
          <img
            src="/src/assets/Me.png"
            alt="Yussef Codeur"
            className="w-full h-full object-cover"
          />
          {/* Halo néon animé */}
          <div className="absolute inset-0 rounded-full border-2 border-pink-500 animate-pulse opacity-40 blur-md"></div>
        </motion.div>

        {/* === TEXTE À PROPOS === */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_10px_#22d3ee] glow-pink"
          custom={0.2}
          variants={fadeInUp}
        >
          À propos de moi
        </motion.h2>

        <motion.p
          className="max-w-2xl text-gray-400 leading-relaxed text-lg"
          custom={0.4}
          variants={fadeInUp}
        >
          Je suis <span className="text-pink-500 font-semibold">Yussef Codeur</span>,  
  développeur <span className="text-cyan-400">Full Stack</span> passionné par l’univers du web depuis <span className="text-pink-400 font-medium">2020</span>.  
  J’aime transformer des idées en solutions numériques concrètes — qu’il s’agisse de sites vitrines,  
  d’applications web sur mesure ou de logiciels complets.  
   
  Si vous recherchez un développeur capable de donner vie à votre vision digitale  
  avec passion, précision et créativité — <span className="text-cyan-400 font-semibold">vous êtes au bon endroit</span>.
        </motion.p>
      </motion.section>

     {/* SECTION PROJECTS */}
      <motion.section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-pink-400 mb-10 drop-shadow-[0_0_10px_#ec4899] glow-cyan"
          custom={0}
          variants={fadeInUp}
        >
          Quelques réalisations
        </motion.h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className={`bg-[#1a1a2e] border border-${proj.color}-500/30 p-6 rounded-2xl 
                         hover:border-${proj.color}-500/60 hover:shadow-[0_0_20px_#22d3ee] 
                         transition-all duration-500 cursor-pointer`}
              custom={0.2 + i * 0.1}
              variants={fadeInUp}
            >
              <h3
                className={`text-xl font-semibold ${
                  proj.color === "pink" ? "text-pink-400" : "text-cyan-300"
                } mb-3`}
              >
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{proj.description}</p>
              {proj.link === "Confidentiel" ? (
                <span className="text-gray-500 italic text-sm">🔒 {proj.link}</span>
              ) : (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-${proj.color}-400 text-sm font-medium hover:underline`}
                >
                  🌐 Voir le site
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION CONTACT */}
      <motion.section
  id="contact"
  className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.h2
    className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_10px_#22d3ee] glow-pink"
    custom={0}
    variants={fadeInUp}
  >
    Me Contacter
  </motion.h2>

  {/* 🗣️ Accroche inspirante */}
  <motion.p
    className="max-w-xl text-gray-400 mb-8 text-lg leading-relaxed"
    custom={0.2}
    variants={fadeInUp}
  >
    Vous avez une idée, un projet ou une vision à concrétiser&nbsp;?  
    Depuis <span className="text-pink-400 font-semibold">2020</span>, j’accompagne entreprises et particuliers  
    dans la création de <span className="text-cyan-400">sites web</span>,  
    <span className="text-pink-400"> applications</span> et <span className="text-cyan-400">logiciels sur mesure</span>.  
    Ensemble, donnons vie à votre univers digital avec élégance, performance et innovation.
  </motion.p>

  {/* 🔗 Liens de contact */}
  <motion.div
    className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center justify-center mb-8"
    custom={0.4}
    variants={fadeInUp}
  >
    {/* Email */}
    <a
      href="mailto:abdelyussefs@gmail.com"
      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_#22d3ee] flex items-center space-x-2"
    >
      <span className="text-cyan-400">📧</span>
      <span>abdelyussefs@gmail.com</span>
    </a>

    {/* Téléphones */}
    <a
      href="tel:+22655440266"
      className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_#ec4899] flex items-center space-x-2"
    >
      <span className="text-pink-500">📞</span>
      <span>+226 55440266 / 60626507</span>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/22655440266"
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_#22c55e] flex items-center space-x-2"
    >
      <span className="text-green-400">💬</span>
      <span>WhatsApp</span>
    </a>
  </motion.div>

  {/* ⚡ Bouton d’action principal */}
  <motion.a
    href="https://wa.me/22655440266"
    target="_blank"
    rel="noreferrer"
    className="mt-4 inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full 
               shadow-lg hover:shadow-[0_0_25px_#ec4899] transition-all duration-300 hover:scale-105 hover:from-pink-500 hover:to-cyan-500"
    custom={0.6}
    variants={fadeInUp}
  >
    💬 Discuter de votre projet
  </motion.a>
</motion.section>
      <Footer />
  </div>
);
}

export default App;
