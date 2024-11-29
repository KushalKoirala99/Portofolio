import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-50  bg-white font-mono text-2xl  shadow-md">
      <div className="container mx-auto flex justify-center items-center ">
        {/* desktop menu */}
        <ul className="hidden md:gap-16 md:flex  lg:gap-40 lg:flex">
          <li>
            <a href="#home" className="hover:text-orange">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange">
              Contact
            </a>
          </li>
        </ul>

        {/* moblie menu */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={40}></Menu>
        </button>
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white text-center py-4  shadow-md md:hidden">
            <li>
              <a href="#home" className="hover:text-orange">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
