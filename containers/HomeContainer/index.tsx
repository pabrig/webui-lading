import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';
import Hero from '../../components/Hero';
import { Data } from '../../lib/constants';
const HomeContainer: FC = () => {
  const data = Data;
  return (
    <div className={styles.home}>
      {' '}
      <Hero title={data.hero.title} />
    </div>
  );
};
export default HomeContainer;
