"use client";

import Image from "next/image";
import "../../../css/global.css";
import styles from "./Header.module.css";
import Link from "next/link";

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

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        <Image
        src="/next.svg"
        width={500}
        height={500}
        alt="ロゴ"
        />
        </Link>
      </div>
      <div className={styles.headerContainer}>
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
    </header>
  );
};

export default Header;
