import React, { FC } from 'react';
import styles from './Hero.module.css';
import { FloatingHeroTypes } from '../../types/Model';
import Image from 'next/image';
import { MediaContextProvider, Media } from '../../lib/constants';
import { motion, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//Animations

const SpringTransition: Transition = {
  type: 'spring',
  duration: 7
};
const YoYoTransition: Transition = {
  yoyo: Infinity,
  duration: 2
};
const RotateTransition: Transition = {
  yoyo: Infinity,
  duration: 2,
  ease: 'easeOut'
};

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
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
  return (
    <motion.div className={styles.floating}>
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
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 2, ease: 'easeOut' }}
              ref={ref}>
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
                <Image
                  src={big_money}
                  alt="flash_pink"
                  width={98}
                  height={110}
                  layout="responsive"
                />
              </motion.div>
              <motion.div
                className={styles.hero__floating_star}
                animate={{ rotate: 360 }}
                transition={RotateTransition}>
                <Image src={star} alt="star" width={566} height={609} layout="responsive" />
              </motion.div>

              <motion.div
                className={styles.hero__floating_bg_hero}
                animate={{ x: -10 }}
                transition={SpringTransition}>
                <Image src={bg_hero} alt="bg_hero" width={52} height={58} layout="responsive" />
              </motion.div>
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
