import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes propres pour le menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#0f0f1a]/80 border-b border-cyan-500/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <h1 className="text-cyan-400 text-2xl font-bold tracking-wide 
             hover:text-pink-500 transition-all duration-300
             hover:drop-shadow-[0_0_10px_#22d3ee]"> Yussef Codeur
        </h1>


        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-400 hover:text-pink-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-[#0f0f1a] border border-cyan-500/40 rounded-xl p-4 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
