import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';
import { Footer } from '../../components';

import { Data } from '../../lib/constants';
const FooterContainer: FC = () => {
  //Const Data

  const footer = Data.footer;

  return (
    <div className={styles.footer}>
      {' '}
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
export default FooterContainer;
