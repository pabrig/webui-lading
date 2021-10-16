import styles from './Testimony.module.css';
import Image from 'next/image';

const Button = () => {
  return (
    <button className={styles.button}>
      <div className={styles.button_description}>
        {' '}
        <p> Conoce Más</p>
      </div>

      <div className={styles.button_container}>
        <div className={styles.button_container_arrow}>
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
