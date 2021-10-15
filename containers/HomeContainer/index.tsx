import styles from '../../styles/Home.module.css';
import { Hero, Reality, Testimony, Footer } from '../../components';
import { motion } from 'framer-motion';
import { Data } from '../../lib/constants';
const HomeContainer = () => {
  //Const Data
  const hero = Data.hero;
  const reality = Data.reality;
  const testimony = Data.testimony;

  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1
      }}
      transition={{ duration: 5 }}>
      <Hero title={hero.title} description={hero.description} />
      <Reality title={reality.title} description={reality.description} />
      <Testimony title={testimony.title} description={testimony.description} />
    </motion.div>
  );
};
export default HomeContainer;
