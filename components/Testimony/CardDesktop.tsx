import React, { FC } from 'react';
import styles from './Testimony.module.css';
import Image from 'next/image';
import { TestimonyTypes } from '../../types/Model';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './Button';

const CardDesktop: FC<TestimonyTypes> = ({
  name_1,
  name_2,
  name_3,
  position_1,
  position_2,
  position_3,
  icon_1,
  icon_2,
  icon_3,
  title_testimony,
  description_testimony
}) => {
  return (
    <Tabs className={styles.card__container}>
      <TabList>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image src={icon_1} alt="icon_testimony" width={70} height={70} layout="responsive" />
            </div>
            <h2>{name_1}</h2>
            <p>{position_1}</p>
          </div>
        </Tab>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image src={icon_2} alt="icon_testimony" width={70} height={70} layout="responsive" />
            </div>
            <h2>{name_2}</h2>
            <p>{position_2}</p>
          </div>
        </Tab>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image src={icon_3} alt="icon_testimony" width={70} height={70} layout="responsive" />
            </div>
            <h2>{name_3}</h2>
            <p>{position_3}</p>
          </div>
        </Tab>
      </TabList>

      <TabPanel className={styles.card__paragraph}>
        <h2>{title_testimony}</h2>
        <p>{description_testimony}</p>
        <Button />
      </TabPanel>
      <TabPanel className={styles.card__paragraph}>
        <h2>{title_testimony}</h2>
        <p>{description_testimony}</p>
        <Button />
      </TabPanel>
      <TabPanel className={styles.card__paragraph}>
        <h2>{title_testimony}</h2>
        <p>{description_testimony}</p>
        <Button />
      </TabPanel>
    </Tabs>
  );
};

export default CardDesktop;
