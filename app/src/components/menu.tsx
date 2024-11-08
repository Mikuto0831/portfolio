import { useEffect, useState } from "react";
import { SlideToggle } from 'react-smooth-slide-toggle';
import { Link, useLocation } from "wouter";
import "../index.css";

type MenuProps = {
  location: string;
};

const MenuList = ({location}:MenuProps) => {
  return(
    <nav className="relative">
      <ul
        className={
          `flex-col lg:flex items-end lg:flex-row gap-y-2
          text-2xl lg:text-base my-2 lg:my-0 space-y-2 lg:space-y-0 lg:space-x-4`
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
            href="/pages"
            className={location === "/pages" ? "active-menu-link" : "menu-link"}
          >
            Pages
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={location === "/blog" ? "active-menu-link" : "menu-link"}
          >
            Blog
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
        <li>
          <Link
            href="/game"
            className={location === "/game" ? "active-menu-link" : "menu-link"}
          >
            Game
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export const Menu = () => {
  const [location] = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsWideScreen(true);
      } else {
        setIsWideScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初期ウィンドウサイズで状態を更新する

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location !== previousLocation) {
      setIsOpen(false); // locationが変更されたらメニューを閉じる
      setPreviousLocation(location);
    } else {
      setIsOpen(true);
    }
  }, [location, previousLocation]);

  return (
    <div className="text-right">
      {isWideScreen ? (
        <MenuList location={location} />
      ) : (
        (isOpen ?(
        <SlideToggle
          trigger={<button className="lg:hidden p-2">&#9776;</button>}
          easing="easeOutCubic"
          duration={625}
        >
          <MenuList location={location} />
        </SlideToggle>
        ) : (
          <button className="lg:hidden p-2">&#9776;</button>
        )
      )
      )}
    </div>
  );
};
