import React, { FC, useState } from 'react';
import styles from './Testimony.module.css';
import { TestimonyTypes } from '../../types/Model';
import Card from './Card';

const Testimony: FC<TestimonyTypes> = ({ title, description }) => {
  return (
    <div className={styles.testimony}>
      <div className={styles.testimony_container}>
        <div className={styles.testimony__header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.container}>
          <ul className={styles.accordion}>
            <Card />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
