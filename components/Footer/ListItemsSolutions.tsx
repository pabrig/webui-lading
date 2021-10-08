import React from 'react';
import styles from './Footer.module.css';
import { items_solutions } from '../../lib/constants';

const ListItemsSolutions = () => {
  return (
    <ul className={styles.footer__list_items}>
      {items_solutions &&
        items_solutions.map((items, i) => (
          <li key={i}>
            <a href={items.link} target="_blank" rel="noreferrer">
              <p>{items.name}</p>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ListItemsSolutions;
