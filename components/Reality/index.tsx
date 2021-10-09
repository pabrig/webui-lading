import React, { FC } from 'react';
import styles from './Reality.module.css';
import Image from 'next/image';
import { RealityTypes } from '../../types/Model';
import FloatingFlash from './FloatingFlash';
import Card from './Card';
import { Data } from '../../lib/constants';

const Reality: FC<RealityTypes> = ({ title, description }) => {
  const reality = Data.reality;
  return (
    <div className={styles.reality}>
      <div className={styles.reality__container}>
        <div className={styles.reality__header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.reality__card}>
          <Card />
        </div>
        <div className={styles.reality__footer}>
          <FloatingFlash
            green_flash_mob={reality.green_flash_mob}
            orange_flash_mob={reality.orange_flash_mob}
            green_flash_desk={reality.green_flash_desk}
            orange_flash_desk={reality.orange_flash_desk}
          />
        </div>
      </div>
    </div>
  );
};

export default Reality;
