import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';
import { Header, Hero, Reality, Testimony, Footer } from '../../components';

import { Data } from '../../lib/constants';
const HomeContainer: FC = () => {
  //Const Data
  const header = Data.header;
  const hero = Data.hero;
  const reality = Data.reality;
  const testimony = Data.testimony;
  const footer = Data.footer;

  return (
    <div className={styles.home}>
      <Header
        icon={header.icon}
        link_solutions={header.link_solutions}
        link_about={header.link_about}
        link_resource={header.link_resource}
        link_job={header.link_job}
        link_signin={header.link_signin}
        link_register={header.link_register}
      />
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
