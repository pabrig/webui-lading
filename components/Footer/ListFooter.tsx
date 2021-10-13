import React, { FC } from 'react';
import styles from './Footer.module.css';
import { FooterTypes } from '../../types/Model';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import ListItemsSolutions from './ListItemsSolutions';
import ListItemsExplorer from './ListItemsExplorer';

const ListFooter: FC<FooterTypes> = ({
  description,
  solutions,
  explorer,
  followme,
  description_footer
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__desktop}>
        {' '}
        <div className={styles.footer__description}>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.footer__list}>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: solutions }} />
            <ListItemsSolutions />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: explorer }} />
            <ListItemsExplorer />
          </div>
        </div>
        <div className={styles.footer__social}>
          <h2 dangerouslySetInnerHTML={{ __html: followme }} />
          <SocialLinks />
        </div>
      </div>

      <div className={styles.footer__footer}>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: description_footer }} />
      </div>
    </div>
  );
};

export default ListFooter;
