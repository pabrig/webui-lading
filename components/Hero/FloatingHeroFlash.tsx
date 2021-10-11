import React, { FC } from 'react';
import styles from './Hero.module.css';
import { FloatingHeroTypes } from '../../types/Model';
import Image from 'next/image';
import { MediaContextProvider, Media } from '../../lib/constants';
import { motion, Transition } from 'framer-motion';

//Animations

const SpringTransition: Transition = {
  type: 'spring',
  duration: 1
};
const YoYoTransition: Transition = {
  yoyo: Infinity,
  duration: 2
};
const RotateTransition: Transition = {
  duration: 1
};

const FloatingHeroFlash: FC<FloatingHeroTypes> = ({
  pink_flash_mob,
  purple_flash_mob,
  yellow_flash_mob,
  pink_flash_desk,
  purple_flash_desk,
  yellow_flash_desk,
  big_money,
  money
}) => {
  return (
    <motion.div className={styles.floating}>
      <div className={styles.hero__floating}>
        {/* Mobile */}
        <MediaContextProvider>
          <Media lessThan="desktop">
            <motion.div className={styles.hero__floating_yellow}>
              <Image
                src={yellow_flash_mob}
                alt="flash_yellow"
                width={17}
                height={117}
                layout="responsive"
              />
            </motion.div>
            <motion.div className={styles.hero__floating_purple}>
              <Image
                src={purple_flash_mob}
                alt="flash_purple"
                width={153}
                height={37}
                layout="responsive"
              />
            </motion.div>
            <motion.div className={styles.reality__floating_pink}>
              <Image
                src={pink_flash_mob}
                alt="flash_pink"
                width={18}
                height={84}
                layout="responsive"
              />
            </motion.div>
          </Media>
        </MediaContextProvider>

        {/* Desktop */}
        <MediaContextProvider>
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
              animate={{ y: 30, x: 40 }}
              transition={YoYoTransition}>
              <Image src={money} alt="money" width={80} height={64} layout="responsive" />
            </motion.div>
            <motion.div
              className={styles.hero__floating_big_money}
              animate={{ y: 10, x: 10 }}
              transition={YoYoTransition}>
              <Image src={big_money} alt="flash_pink" width={98} height={110} layout="responsive" />
            </motion.div>
          </Media>
        </MediaContextProvider>
      </div>
    </motion.div>
  );
};

export default FloatingHeroFlash;
