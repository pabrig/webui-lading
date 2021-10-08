import React, { FC } from 'react';
import styles from './Hero.module.css';
import { HeroTypes } from '../../types/Model';
import Image from 'next/image';

const Hero: FC<HeroTypes> = ({ title, icon }) => {
  return (
    <div className={styles.hero}>
      <h2>{title}</h2>
      {/* <Image src={icon} alt="icon_xepelin" layout="fill" width="100" height="100" /> */}
    </div>
  );
};

export default Hero;
