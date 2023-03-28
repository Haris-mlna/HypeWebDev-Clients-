import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import "./navbar.scss";

export default function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const Navbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      const navbar = Navbar.current;
      if (currentPosition > scrollTop) {
        if (navbar !== null) {
          navbar.style.top = "-100px";
        }
      } else {
        if (navbar !== null) {
          navbar.style.top = "0";
        }
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      setIsOpen(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LOGO = "HYPE";

  return (
    <>
      <nav ref={Navbar}>
        <div className="navbar">
          <div className="nav-lt-side">
            <div className="logo">
              <Link to="/">{LOGO}</Link>
            </div>
          </div>
          <div className="nav-rt-side">
            <Link to="" className="register-nav">
              Register
            </Link>
            <Link to="" className="login-nav">
              Login
            </Link>
            <button className="menu-nav" onClick={toggleMenu}>
              <AiOutlineMenu className="menuIcons" />
            </button>
          </div>
        </div>
        <div className="mini-nav">
          <ul>
            <li>
              <a href="">
                <HiOutlineMail />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="main-menu">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">Services</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
