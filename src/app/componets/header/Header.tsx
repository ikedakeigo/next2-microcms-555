"use client";

import Image from "next/image";
import "../../../css/global.css";
import styles from "./Header.module.css";
import menuStyles from "./Menu.module.css";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const navLinks = [
    { href: "/", label: "ABOUT" },
    { href: "/", label: "SERVICE" },
    { href: "/", label: "PRODUCT" },
    { href: "/", label: "NEWS" },
    { href: "/", label: "COMPANY" },
    { href: "/", label: "CONTACT" },
    { href: "/", label: "IR" },
    { href: "/", label: "RECRUIT" },
  ];

  const menuItems = [
    [
      { href: "/", text: "TOP" }
    ],
    [
      { href: "/", text: "ABOUT" },
      { href: "/", text: "SERVICE" },
      { href: "/", text: "PRODUCT" }
    ],
    [
      { href: "/", text: "NEWS" },
      { href: "/", text: "COMPANY" },
      { href: "/", text: "CONTACT" },
      { href: "/", text: "CAREER" }
    ]
  ];


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/next-logo.svg" width={500} height={500} alt="ロゴ" />
          </Link>
        </div>
        <div className={styles.container}>
          <nav>
            <ul className={styles.navLinks}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.menu}>
          <button className={styles.menuOpen} onClick={toggleMenu}></button>
        </div>
      </header>

      <div
      className={menuStyles.menu}
        style={{
          transform: menuOpen ? "translate(0px, 0px) rotate(0deg)" : "translate(100%, 0px)",
          translate: "none",
          rotate: "none",
          scale: "none",
          opacity: "1",
          transition: "transform 0.5s ease-in-out",
        }}
        >
        <button className={menuStyles.menuClose} onClick={toggleMenu}>×</button>
        <div className={`${menuStyles.menuBg} ${menuOpen ? menuStyles.menuBgOpen : ""}`}
          style={{
            transform: menuOpen ? "translate(0px, 0px)" : "translate(100%, 0px)",
            translate: "none",
            rotate: "none",
            scale: "none",
          }}></div>
        <div className={`${menuStyles.overlay} ${menuStyles.inner} ${menuOpen ? menuStyles.menuOpen : ""}`}>
          <div className={menuStyles.content}>
            <ul className={`${menuStyles.items} ${menuOpen ? menuStyles.itemsOpen : ""}`}>
            {menuItems.map((links, liIndex) => (
    <li key={liIndex} className={menuStyles.mainBlock}>
      {links.map((link, linkIndex) => (
        <p key={linkIndex}>
          <a className="Menu_is_top__Ys02k js-menu-top" href={link.href}>
            {link.text}
          </a>
        </p>
      ))}
    </li>
  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
