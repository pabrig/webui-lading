import React, { FC } from 'react';
import styles from './Hero.module.css';
import { HeroTypes } from '../../types/Model';
import FloatingHeroFlash from './FloatingHeroFlash';
import Button from './Button';
import NavBar from '../Header';
import { Data } from '../../lib/constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero: FC<HeroTypes> = ({ title, description }) => {
  const hero = Data.hero;

  return (
    <div className={styles.hero}>
      <motion.div className={styles.hero__container}>
        <div className={styles.hero__title}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <div className={styles.hero__description}>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <Button />

        <FloatingHeroFlash
          yellow_flash_mob={hero.yellow_flash_mob}
          yellow_flash_desk={hero.yellow_flash_desk}
          purple_flash_mob={hero.purple_flash_mob}
          purple_flash_desk={hero.purple_flash_desk}
          pink_flash_mob={hero.pink_flash_mob}
          pink_flash_desk={hero.pink_flash_desk}
          big_money={hero.big_money}
          money={hero.money}
          star={hero.star}
          bg_hero={hero.bg_hero}
          elipse={hero.elipse}
          elipse_hero={hero.elipse_hero}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
