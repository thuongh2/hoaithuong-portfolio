import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const links = [
  { to: "experience", label: "Experience" },
  { to: "work", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "activities", label: "Writing" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="nav">
      <nav className="nav__pill" aria-label="Main">
        <Link to="home" href="#home" smooth={true} duration={500} className="nav__mark">
          <img src={Logo} alt="Vo Hoai Thuong, home" width="56" height="28" />
        </Link>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} href={`#${l.to}`} smooth={true} duration={500}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a className="key key--sm nav__cta" href="mailto:hoaithuong.data@gmail.com">
          Email me
        </a>

        <button
          type="button"
          className="nav__toggle"
          onClick={handleClick}
          aria-expanded={nav}
          aria-controls="mobile-menu"
          aria-label={nav ? "Close menu" : "Open menu"}
        >
          {!nav ? <FaBars aria-hidden="true" /> : <FaTimes aria-hidden="true" />}
        </button>
      </nav>

      <ul id="mobile-menu" className="nav__mobile" hidden={!nav}>
        {links.map((l) => (
          <li key={l.to}>
            <Link onClick={handleClick} to={l.to} href={`#${l.to}`} smooth={true} duration={500}>
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <a href="mailto:hoaithuong.data@gmail.com">Email me</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
