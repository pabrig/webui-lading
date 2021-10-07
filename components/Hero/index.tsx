import React, { FC } from 'react';
import styles from './Hero.module.css';
import { HeroTypes } from '../../types/Model';

const Hero: FC<HeroTypes> = ({ title }) => {
  return (
    <div className={styles.hero}>
      <h2>{title}</h2>
    </div>
  );
};

export default Hero;
