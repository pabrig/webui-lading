import Link from 'next/link';
import React, { useState } from 'react';
import { Media, MediaContextProvider } from '../../lib/constants';
import { HeroTypes } from '../../types/Model';
import styles from './Header.module.css';

const Header = ({
  icon,
  link_solutions,
  link_about,
  link_resource,
  link_job,
  link_signin,
  link_register
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.navlogo}>{icon}</a>
          </Link>
          <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}>
                  {link_solutions}
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
                  {link_about}
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
                  {link_job}
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
                        {link_signin}
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
                        {link_register}
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
