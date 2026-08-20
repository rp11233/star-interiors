import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/starinteriors-logo.png";

const navItems = [
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="navbar-inner">

          {/* LOGO */}
          <a href="#" className="brand flex items-center">
            <img
              src={logo}
              alt="Starinteriors"
              className="h-auto w-[200px] object-contain sm:w-[220px]"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a href="#contact" className="nav-cta">
            <span>START</span>
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.2} />
            ) : (
              <Menu size={22} strokeWidth={1.2} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-menu-cta"
            onClick={handleNavClick}
          >
            START YOUR PROJECT
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      )}
    </>
  );
}