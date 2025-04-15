import { useState, useEffect } from "react";
import "./Navbar.css"; // We'll create this next

export default function Navbar({ data, navlinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Toggle body overflow when menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("CLicked");
  };

  return (
    <nav className="hero-nav">
      <div className="nav-container">
        <div className="logo">
          <img src={data.logo.url} alt="Company Logo" />
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navlinks ${isOpen ? "open" : ""}`}>
          {navlinks.map((link) => (
            <li key={link.linkId} onClick={() => isMobile && toggleMenu()}>
              <a
                className={`navlink ${
                  link.title.toLowerCase() === "contatti" ? "btn" : ""
                }`}
                href={`#${link.slug}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
