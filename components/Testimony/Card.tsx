import React, { FC, useState } from 'react';
import styles from './Testimony.module.css';
import Image from 'next/image';
import { items_testimony } from '../../lib/constants';

const Card = () => {
  return (
    <>
      {items_testimony &&
        items_testimony.map((items, i) => (
          <li className={styles.items} key={i}>
            <div className={styles.icon}>
              <p>{items.name}</p>
              <div className={styles.paragraph_image}>
                {' '}
                <Image
                  src={items.icon}
                  alt={items.name}
                  width={15}
                  height={15}
                  layout="responsive"
                />
              </div>
            </div>
            <p>{items.position}</p>
            <div className={styles.paragraph}>
              <h1>{items.title}</h1>
              <p> {items.description}</p>
            </div>
          </li>
        ))}
    </>
  );
};

export default Card;
