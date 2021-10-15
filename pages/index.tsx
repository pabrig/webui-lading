import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import HomeContainer from '../containers/HomeContainer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeContainer />
    </div>
  );
};

export default Home;
