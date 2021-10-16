import styles from './Testimony.module.css';
import Image from 'next/image';

const Stars = () => {
  return (
    <div className={styles.star__container}>
      <ul>
        <li>
          <div className={styles.star__image}>
            <Image
              src="/icons/icon_star.png"
              alt="icon_star"
              width={18}
              height={18}
              layout="responsive"
            />
          </div>
        </li>
        <li>
          <div className={styles.star__image}>
            <Image
              src="/icons/icon_star.png"
              alt="icon_star"
              width={18}
              height={18}
              layout="responsive"
            />
          </div>
        </li>
        <li>
          <div className={styles.star__image}>
            <Image
              src="/icons/icon_star.png"
              alt="icon_star"
              width={18}
              height={18}
              layout="responsive"
            />
          </div>
        </li>
        <li>
          <div className={styles.star__image}>
            <Image
              src="/icons/icon_star.png"
              alt="icon_star"
              width={18}
              height={18}
              layout="responsive"
            />
          </div>
        </li>
        <li>
          <div className={styles.star__image}>
            <Image
              src="/icons/icon_star.png"
              alt="icon_star"
              width={18}
              height={18}
              layout="responsive"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Stars;
