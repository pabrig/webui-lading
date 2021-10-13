import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';
import { Hero, Reality, Testimony, Footer } from '../../components';

import { Data } from '../../lib/constants';
const HomeContainer: FC = () => {
  //Const Data
  const hero = Data.hero;
  const reality = Data.reality;
  const testimony = Data.testimony;

  return (
    <div className={styles.home}>
      <Hero title={hero.title} description={hero.description} />
      <Reality title={reality.title} description={reality.description} />
      <Testimony title={testimony.title} description={testimony.description} />
    </div>
  );
};
export default HomeContainer;
