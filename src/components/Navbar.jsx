import { useState } from "react";
import MenuIcon from '../assets/menu.svg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full pb-4  z-50 text-white font-mono text-2xl  shadow-md md:py-4 bg-[#1a202c]">
      <div className={ `mx-auto flex flex-row-reverse md:flex md:justify-center  ${isMenuOpen? `mt-2` : ``}`}>
        {/* desktop menu */}
        <ul className="hidden md:gap-16 md:flex  lg:gap-40 lg:flex">
          <li>
            <a href="#home" className="hover:text-[#f6ad55] transition-all duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#f6ad55] transition-all duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#f6ad55] transition-all duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* moblie menu */}
        <button
          className="md:hidden pr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={MenuIcon} alt="Menu Icon" className="w-14"></img>
        </button>
        {isMenuOpen && (
          <ul className="w-full  pl-14 flex justify-center items-center md:hidden">
            <li>
              <a href="#home" className="hover:text-[#f6ad55] transition-all duration-300">
                Home
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
