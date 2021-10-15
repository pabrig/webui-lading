import React, { FC, useState } from 'react';
import styles from './Header.module.css';
import NavBar from './NavBar';
import { Data } from '../../lib/constants';

const Header = () => {
  const header = Data.header;
  return (
    <div className={styles.header}>
      <NavBar
        icon={header.icon}
        link_solutions={header.link_solutions}
        link_about={header.link_about}
        link_resource={header.link_resource}
        link_job={header.link_job}
        link_signin={header.link_signin}
        link_register={header.link_register}
      />
    </div>
  );
};
export default Header;
