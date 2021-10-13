import Link from 'next/link';
import React, { FC, useState } from 'react';
import NavBar from './NavBar';
import styles from './Header.module.css';
import Image from 'next/image';
import { Data } from '../../lib/constants';

const Header = () => {
  const header = Data.header;
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
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
          <NavBar
            link_solutions={header.link_solutions}
            link_about={header.link_about}
            link_resource={header.link_resource}
            link_job={header.link_job}
            link_signin={header.link_signin}
            link_register={header.link_register}
          />
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
