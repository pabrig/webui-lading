import React, { FC } from 'react';
import styles from './Testimony.module.css';
import { TestimonyTypes } from '../../types/Model';
import Card from './Card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimony: FC<TestimonyTypes> = ({ title, description }) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  const variants = {
    visible: { opacity: 1, y: -30 },
    hidden: {
      opacity: 0,
      y: 50
    }
  };

  return (
    <motion.div className={styles.testimony} ref={ref}>
      <motion.div
        className={styles.testimony_container}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}>
        <motion.div className={styles.testimony__header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </motion.div>{' '}
        <Card />
      </motion.div>
    </motion.div>
  );
};

export default Testimony;
