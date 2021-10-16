import styles from './Hero.module.css';
import Image from 'next/image';

const Button = () => {
  return (
    <button className={styles.hero__button}>
      <div className={styles.hero__button_description}>
        {' '}
        <p> Empieza a financiarte</p>
      </div>

      <div className={styles.hero__button_container}>
        <div className={styles.hero__button_container_arrow}>
          <Image
            src="/images/hero/arrow.png"
            alt="arrow"
            width={0.9}
            height={0.9}
            layout="responsive"
          />
        </div>
      </div>
    </button>
  );
};

export default Button;
