import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import "../index.css";

export const Menu = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初期ウィンドウサイズで状態を更新する

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-right">
      <button
          className="md:hidden p-2"
          onClick={toggleMenu}
        >
          &#9776; {/* ハンバーガーメニューアイコン */}
        </button>
      <nav className="relative">
        <ul
          className={
            `flex-col items-end md:flex-row gap-y-2 \
            ${isOpen ? "flex" : "hidden"} \
            text-2xl md:text-base my-2 md:my-0 space-y-2 md:space-y-0 md:space-x-4`
          }
        >
          <li>
            <Link
              href="/"
              className={location === "/" ? "active-menu-link" : "menu-link"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={location === "/about" ? "active-menu-link" : "menu-link"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className={location === "/game" ? "active-menu-link" : "menu-link"}
            >
              Game
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className={location === "/pages" ? "active-menu-link" : "menu-link"}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={location === "/contact" ? "active-menu-link" : "menu-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
