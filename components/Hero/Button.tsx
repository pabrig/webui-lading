import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Button = () => {
  return (
    <motion.button
      className={styles.hero__button}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 }
      }}
      whileTap={{ scale: 0.9 }}>
      <div className={styles.hero__button_description}>
        {' '}
        <p> Empieza a financiarte</p>
      </div>

      <div className={styles.hero__button_container}>
        <div className={styles.hero__button_container_arrow}>
          <Image
            src="/images/hero/arrow.png"
            alt="arrow"
            width={1}
            height={1}
            layout="responsive"
          />
        </div>
      </div>
    </motion.button>
  );
};

export default Button;
