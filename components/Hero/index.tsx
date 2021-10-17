import React, { FC } from 'react';
import styles from './Hero.module.css';
import { HeroTypes } from '../../types/Model';
import FloatingHeroFlash from './FloatingHeroFlash';
import Button from './Button';
import { useViewportScroll, motion, useTransform } from 'framer-motion';

import { Data } from '../../lib/constants';

const Hero: FC<HeroTypes> = ({ title, description }) => {
  const hero = Data.hero;
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [10, 50], [10, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -150]);

  return (
    <div className={styles.hero}>
      <motion.div className={styles.hero__container}>
        <motion.div className={styles.hero__header} style={{ y: y2, x: -50 }}>
          <motion.div className={styles.hero__title}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
          </motion.div>
          <div className={styles.hero__description}>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </motion.div>

        <motion.div style={{ y: y1 }}>
          <Button />
        </motion.div>

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
