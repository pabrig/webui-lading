import React from 'react';
import styles from './Testimony.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Button = () => {
  return (
    <motion.button
      className={styles.button}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 }
      }}
      whileTap={{ scale: 0.9 }}>
      <div className={styles.button_description}>
        {' '}
        <p> Conoce Más</p>
      </div>

      <div className={styles.button_container}>
        <div className={styles.button_container_arrow}>
          <Image
            src="/images/hero/arrow.png"
            alt="arrow"
            width={0.9}
            height={0.9}
            layout="responsive"
          />
        </div>
      </div>
    </motion.button>
  );
};

export default Button;
