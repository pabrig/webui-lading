import React, { FC } from 'react';
import styles from './Hero.module.css';
import { FloatingHeroTypes } from '../../types/Model';
import Image from 'next/image';
import { MediaContextProvider, Media } from '../../lib/constants';
import useAnimations from '../../hooks/useAnimations';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const FloatingHeroFlash: FC<FloatingHeroTypes> = ({
  pink_flash_mob,
  purple_flash_mob,
  yellow_flash_mob,
  pink_flash_desk,
  purple_flash_desk,
  yellow_flash_desk,
  big_money,
  money,
  star,
  bg_hero,
  elipse,
  elipse_hero
}) => {
  const [SpringTransition, YoYoTransition, RotateTransition] = useAnimations();

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 1400], [45, -165]);
  const rotateY = useTransform(x, [0, 1400], [-165, 45]);

  function handleMouse(e: any) {
    x.set(e.pageX);
    y.set(e.pageY);
  }
  return (
    <motion.div className={styles.floating} onMouseMove={handleMouse}>
      <div className={styles.hero__floating}>
        {/* Mobile */}
        <MediaContextProvider>
          <Media lessThan="desktop">
            <motion.div
              className={styles.hero__floating_yellow_mob}
              animate={{ y: 10 }}
              transition={SpringTransition}>
              <Image
                src={yellow_flash_mob}
                alt="flash_yellow"
                width={17}
                height={117}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className={styles.hero__floating_purple_mob}
              animate={{ y: -20 }}
              transition={SpringTransition}>
              <Image
                src={purple_flash_mob}
                alt="flash_purple"
                width={18}
                height={74}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className={styles.hero__floating_pink_mob}
              animate={{ x: -10 }}
              transition={SpringTransition}>
              <Image
                src={pink_flash_mob}
                alt="flash_pink"
                width={153}
                height={37}
                layout="responsive"
              />
            </motion.div>
          </Media>

          {/* Desktop */}

          <Media greaterThanOrEqual="desktop">
            <motion.div
              className={styles.hero__floating_yellow}
              animate={{ y: 10 }}
              transition={SpringTransition}>
              <Image
                src={yellow_flash_desk}
                alt="flash_yellow"
                width={17}
                height={98}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className={styles.hero__floating_purple}
              animate={{ y: -20 }}
              transition={SpringTransition}>
              <Image
                src={purple_flash_desk}
                alt="flash_purple"
                width={28}
                height={103}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className={styles.hero__floating_pink}
              animate={{ x: -100 }}
              transition={SpringTransition}>
              <Image
                src={pink_flash_desk}
                alt="flash_pink"
                width={165}
                height={49}
                layout="responsive"
              />
            </motion.div>

            <motion.div
              className={styles.hero__floating_money}
              animate={{ rotate: 360 }}
              transition={RotateTransition}>
              <Image src={money} alt="money" width={80} height={64} layout="responsive" />
            </motion.div>
            <motion.div
              className={styles.hero__floating_big_money}
              animate={{ y: 10, x: 10 }}
              transition={YoYoTransition}>
              <Image src={big_money} alt="flash_pink" width={98} height={110} layout="responsive" />
            </motion.div>
            <motion.div
              className={styles.hero__floating_star}
              style={{
                rotateX: rotateX,
                rotateY: rotateY
              }}>
              <Image src={star} alt="star" width={566} height={609} layout="responsive" />
            </motion.div>

            <motion.div
              className={styles.hero__floating_bg_hero}
              animate={{ x: -10 }}
              transition={SpringTransition}>
              <Image src={bg_hero} alt="bg_hero" width={52} height={58} layout="responsive" />
            </motion.div>
            <motion.div
              className={styles.hero__floating_elipse}
              animate={{ x: -10 }}
              transition={SpringTransition}>
              <Image src={elipse} alt="elipse" width={441} height={469} layout="responsive" />
            </motion.div>

            <motion.div
              className={styles.hero__floating_elipse_hero}
              animate={{ x: -10 }}
              transition={SpringTransition}>
              <Image src={elipse_hero} alt="elipse" width={330} height={351} layout="responsive" />
            </motion.div>
          </Media>
        </MediaContextProvider>
      </div>
    </motion.div>
  );
};

export default FloatingHeroFlash;
