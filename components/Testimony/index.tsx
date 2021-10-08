import React, { FC } from 'react';
import styles from './Testimony.module.css';
import { TestimonyTypes } from '../../types/Model';
import Image from 'next/image';

const Testimony: FC<TestimonyTypes> = ({ title, icon }) => {
  return (
    <div className={styles.Testimony}>
      <h2>{title}</h2>
      {/* <Image src={icon} alt="icon_xepelin" layout="fill" width="100" height="100" /> */}
    </div>
  );
};

export default Testimony;
