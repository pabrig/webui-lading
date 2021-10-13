import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Media, MediaContextProvider } from '../../lib/constants';
import { HeaderTypes } from '../../types/Model';
import styles from './Header.module.css';
import { items_header } from '../../lib/constants';
import Image from 'next/image';
const NavBar: FC<HeaderTypes> = ({
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
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={isOpen === false ? styles.navlogo : styles.navlogo + ' ' + styles.active}>
            <Image
              src={'/icons/icon_xepelin.svg'}
              alt="logo"
              width={204}
              height={28}
              layout="responsive"
            />
          </a>
        </Link>
        <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
          <MediaContextProvider>
            {' '}
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
                  {link_resource}
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
            <Media lessThan="desktop">
              <li className={styles.navitem}>
                <Link href="/">
                  <a
                    className={
                      isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active
                    }
                    onClick={openMenu}>
                    {link_signin}
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
                    {link_register}
                  </a>
                </Link>
              </li>
            </Media>
            <Media greaterThanOrEqual="desktop">
              <div style={{ display: 'flex' }}>
                <li className={styles.navitem}>
                  <button className={styles.button_desk}>
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
                  <button className={styles.button_desk}>
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
              </div>
            </Media>
          </MediaContextProvider>
          <button
            className={isOpen === false ? styles.hamburger : styles.hamburger + ' ' + styles.active}
            onClick={openMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;