import React from 'react';
import styles from './Footer.module.css';
import { items_explorer } from '../../lib/constants';

const ListItemExplorer = () => {
  return (
    <ul className={styles.footer__list_items}>
      {items_explorer &&
        items_explorer.map((items, i) => (
          <li key={i}>
            <a href={items.link} target="_blank" rel="noreferrer">
              <p> {items.name}</p>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ListItemExplorer;
