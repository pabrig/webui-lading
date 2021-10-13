import React, { FC } from 'react';
import styles from './Reality.module.css';
import { FloatingTypes } from '../../types/Model';
import Image from 'next/image';
import { MediaContextProvider, Media } from '../../lib/constants';
import { motion } from 'framer-motion';

//Animations
const imageAnimateVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};
const divAnimateVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

const FloatingFlash: FC<FloatingTypes> = ({
  green_flash_mob,
  orange_flash_mob,
  green_flash_desk,
  orange_flash_desk
}) => {
  return (
    <motion.div
      className={styles.reality}
      initial="hidden"
      animate="visible"
      variants={divAnimateVariants}>
      <div className={styles.reality__footer}>
        {/* Mobile */}
        <MediaContextProvider>
          <Media lessThan="desktop">
            <motion.div className={styles.reality__footer_green} variants={imageAnimateVariants}>
              <Image
                src={green_flash_mob}
                alt="flash_green"
                width={120}
                height={29}
                layout="responsive"
              />
            </motion.div>
            <motion.div className={styles.reality__footer_orange} variants={imageAnimateVariants}>
              <Image
                src={orange_flash_mob}
                alt="flash_orange"
                width={140}
                height={18}
                layout="responsive"
              />
            </motion.div>
          </Media>

          {/* Desktop */}

          <Media greaterThanOrEqual="desktop">
            <motion.div className={styles.reality__footer_green} variants={imageAnimateVariants}>
              <Image
                src={green_flash_desk}
                alt="flash_green"
                width={476}
                height={34}
                layout="responsive"
              />
            </motion.div>
            <motion.div className={styles.reality__footer_orange} variants={imageAnimateVariants}>
              <Image
                src={orange_flash_desk}
                alt="flash_orange"
                width={287}
                height={18}
                layout="responsive"
              />
            </motion.div>
          </Media>
        </MediaContextProvider>
      </div>
    </motion.div>
  );
};

export default FloatingFlash;
