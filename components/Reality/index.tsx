import React, { FC } from 'react';
import styles from './Reality.module.css';
import { RealityTypes } from '../../types/Model';
import FloatingFlash from './FloatingFlash';
import Card from './Card';
import { Data } from '../../lib/constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reality: FC<RealityTypes> = ({ title, description }) => {
  const reality = Data.reality;
  const [ref, inView, entry] = useInView({
    /* Optional options */
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
    <div className={styles.reality}>
      <motion.div className={styles.reality__container} ref={ref}>
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 2, ease: 'easeOut' }}>
          <div className={styles.reality__header}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className={styles.reality__card}>
            <Card />
          </div>
        </motion.div>
        <div className={styles.reality__footer}>
          <FloatingFlash
            green_flash_mob={reality.green_flash_mob}
            orange_flash_mob={reality.orange_flash_mob}
            green_flash_desk={reality.green_flash_desk}
            orange_flash_desk={reality.orange_flash_desk}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Reality;
