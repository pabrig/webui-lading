import React, { FC } from 'react';
import styles from './About.module.css';
import { AboutTypes } from '../../types/Model';
import Image from 'next/image';

const About: FC<AboutTypes> = ({ title, icon }) => {
  return (
    <div className={styles.about}>
      <h2>{title}</h2>
      {/* <Image src={icon} alt="icon_xepelin" layout="fill" width="100" height="100" /> */}
    </div>
  );
};

export default About;
