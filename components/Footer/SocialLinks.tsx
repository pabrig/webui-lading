import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { items_social } from '../../lib/constants';

const SocialLinks = () => {
  return (
    <ul className={styles.footer__social_items}>
      {items_social &&
        items_social.map((items, i) => (
          <li key={i} className={styles.footer__social_icons}>
            <a href={items.link} target="_blank" rel="noreferrer">
              <Image src={items.src_icon} alt={items.name} width={100} height={100} />
            </a>
          </li>
        ))}
    </ul>
  );
};
export default SocialLinks;
