import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.jpg';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="w-full bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-16" src={Logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#911a1b] font-medium items-center">
          <li><Link to="/about" className="hover:text-[#f9b6d1]">Biz Haqimizda</Link></li>
          <li><Link to="/kurslar" className="hover:text-[#f9b6d1]">Kurslar</Link></li>

          {/* Resurslar Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={toggleDropdown}
              className="flex items-center gap-1 hover:text-[#f9b6d1] focus:outline-none"
            >
              Resurslar
              <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <ul
                onMouseLeave={closeDropdown}
                className="absolute top-8 left-0 w-56 bg-white shadow-lg rounded-md z-50"
              >
                <li>
                  <Link to="/resurslar/tikuvchilik" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Tikuvchilik
                  </Link>
                </li>
                <li>
                  <Link to="/resurslar/pazandachilik" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Pazandachilik
                  </Link>
                </li>
                <li>
                  <Link to="/resurslar/hamshiralik" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Hamshiralik
                  </Link>
                </li>
                <li>
                  <Link to="/resurslar/makiyaj-va-soch" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Makiyaj va Soch
                  </Link>
                </li>
                <li>
                  <Link to="/resurslar/til-kurslari" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Til kurslari
                  </Link>
                </li>
                <li>
                  <Link to="/resurslar/qo'l-mehnati" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Qo'l mehnati
                  </Link>
                </li>
                <li>
                  <Link to="/resurslar/kompyuter-kurslari" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Kompyuter kurslari
                  </Link>
                  <li>
                  <Link to="/resurslar/kitoblar" className="block px-4 py-2 hover:bg-[#f9b6d1] hover:text-white" onClick={closeDropdown}>
                    Kitoblar
                  </Link>
                </li>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-[#f9b6d1]">Bog'lanish</Link></li>
          <li><Link to="/yangiliklar" className="hover:text-[#f9b6d1]">Yangiliklar</Link></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} color="#911a1b" /> : <Menu size={28} color="#911a1b" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-4 pb-6 rounded-b-lg shadow-md absolute top-16 left-0 w-full z-40">
          <ul className="flex flex-col space-y-4 text-[#911a1b] font-medium">
            <li><Link to="/about" onClick={toggleMenu}>Biz Haqimizda</Link></li>
            <li><Link to="/kurslar" onClick={toggleMenu}>Kurslar</Link></li>

            {/* Mobile Resurslar (accordion style) */}
            <li>
              <details className="group">
                <summary className="cursor-pointer">Resurslar</summary>
                <ul className="pl-4 pt-2 flex flex-col gap-1 text-sm">
                  <li><Link to="/resurslar/tikiuvchilik" onClick={toggleMenu}>Tikiuvchilik</Link></li>
                  <li><Link to="/resurslar/pazandachilik" onClick={toggleMenu}>Pazandachilik</Link></li>
                  <li><Link to="/resurslar/hamshiralik" onClick={toggleMenu}>Hamshiralik</Link></li>
                  <li><Link to="/resurslar/makiyaj-va-soch" onClick={toggleMenu}>Makiyaj va Soch</Link></li>
                  <li><Link to="/resurslar/oila-psixologiyasi" onClick={toggleMenu}>Oila psixologiyasi</Link></li>
                </ul>
              </details>
            </li>

            <li><Link to="/contact" onClick={toggleMenu}>Bog'lanish</Link></li>
            <li><Link to="/yangiliklar" onClick={toggleMenu}>Yangiliklar</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
