import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/layouts/Header.module.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const updateMenuOpen = () => setMenuOpen(!menuOpen);
  const navPos = {
    right: menuOpen ? 0 : -200,
  };

  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>THE BRAND</h3>
      <button onClick={updateMenuOpen} className={styles.hamburger}>
        <div className={styles.hamburger_line}></div>
        <div className={styles.hamburger_line}></div>
        <div className={styles.hamburger_line}></div>
      </button>
      <nav className={styles.nav} style={navPos}>
        <ul>
          <li>
            <Link href="/">
              <a>KEZDŐLAP</a>
            </Link>
          </li>
          <li>
            <Link href="/bolt">
              <a>BOLT</a>
            </Link>
          </li>
          <li>
            <Link href="/egyedi_termek">
              <a>EGYEDI TERMÉK</a>
            </Link>
          </li>
          <li>
            <Link href="/kosar">
              <a>KOSÁR</a>
            </Link>
          </li>
          {/*<li>
            <Link href="/bejelentkezes">
              <a>BEJELENTKEZÉS</a>
            </Link>
          </li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
