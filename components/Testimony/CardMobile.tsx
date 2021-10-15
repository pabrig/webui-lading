import React, { FC } from 'react';
import styles from './Testimony.module.css';
import Image from 'next/image';
import { items_testimony } from '../../lib/constants';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './Button';

const CardMobile = () => {
  return (
    <Tabs className={styles.card__container}>
      <TabList>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image
                src={items_testimony.icon_1}
                alt="icon_testimony"
                width={70}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </Tab>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image
                src={items_testimony.icon_2}
                alt="icon_testimony"
                width={70}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </Tab>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image
                src={items_testimony.icon_3}
                alt="icon_testimony"
                width={70}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </Tab>
      </TabList>

      <TabPanel className={styles.card__paragraph}>
        <h2>{items_testimony.title_testimony}</h2>
        <p>{items_testimony.description_testimony}</p>
        <h2>{items_testimony.name_1}</h2>
        <p>{items_testimony.position_1}</p>
        <Button />
      </TabPanel>
      <TabPanel className={styles.card__paragraph}>
        <h2>{items_testimony.title_testimony}</h2>
        <p>{items_testimony.description_testimony}</p>
        <h2>{items_testimony.name_2}</h2>
        <p>{items_testimony.position_2}</p>
        <Button />
      </TabPanel>
      <TabPanel className={styles.card__paragraph}>
        <h2>{items_testimony.title_testimony}</h2>
        <p>{items_testimony.description_testimony}</p>
        <h2>{items_testimony.name_3}</h2>
        <p>{items_testimony.position_3}</p>
        <Button />
      </TabPanel>
    </Tabs>
  );
};

export default CardMobile;
