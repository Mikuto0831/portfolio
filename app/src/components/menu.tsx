import { Link, useLocation } from "wouter";
import "../index.css";

export const Menu = () => {
  const [location] = useLocation();
  return (
    <div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={location === "/" ? "active-menu-link" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={location === "/about" ? "active-menu-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className={location === "/game" ? "active-menu-link" : ""}
            >
              Game
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className={location === "/pages" ? "active-menu-link" : ""}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={location === "/contact" ? "active-menu-link" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
