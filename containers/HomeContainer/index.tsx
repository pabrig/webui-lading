import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';
import { Header, Hero, Reality, Testimony, Footer } from '../../components';

import { Data } from '../../lib/constants';
const HomeContainer: FC = () => {
  //Const Data
  const hero = Data.hero;
  const reality = Data.reality;
  const testimony = Data.testimony;
  const footer = Data.footer;

  return (
    <div className={styles.home}>
      <Header />
      <Hero title={hero.title} description={hero.description} />

      <Reality title={reality.title} description={reality.description} />
      <Testimony title={testimony.title} icon={testimony.icon} />
      <Footer
        icon={footer.icon}
        description={footer.description}
        solutions={footer.solutions}
        explorer={footer.explorer}
        followme={footer.followme}
        description_footer={footer.description_footer}
      />
    </div>
  );
};
export default HomeContainer;
