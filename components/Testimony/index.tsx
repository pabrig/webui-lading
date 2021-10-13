import React, { FC } from 'react';
import styles from './Testimony.module.css';
import { TestimonyTypes } from '../../types/Model';
import Image from 'next/image';

const Testimony: FC<TestimonyTypes> = ({ title, description }) => {
  return (
    <div className={styles.testimony}>
      <div className={styles.testimony_container}>
        <div className={styles.reality__header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
