import Link from 'next/link';
import React, { useState } from 'react';
import { Media, MediaContextProvider } from '../../lib/constants';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.navlogo}>[Logo]</a>
          </Link>
          <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}>
                  About
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}>
                  Contact
                </a>
              </Link>
            </li>
            <MediaContextProvider>
              <Media greaterThanOrEqual="desktop">
                <li className={styles.navitem}>
                  <button>
                    <Link href="/">
                      <a
                        className={
                          isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                        }
                        onClick={openMenu}>
                        BUtton
                      </a>
                    </Link>
                  </button>
                </li>
                <li className={styles.navitem}>
                  <button>
                    <Link href="/">
                      <a
                        className={
                          isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                        }
                        onClick={openMenu}>
                        BUtton
                      </a>
                    </Link>
                  </button>
                </li>
              </Media>
            </MediaContextProvider>
          </ul>
          <button
            className={isOpen === false ? styles.hamburger : styles.hamburger + ' ' + styles.active}
            onClick={openMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
};
export default Header;
