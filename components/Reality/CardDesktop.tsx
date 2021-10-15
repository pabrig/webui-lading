import styles from './Reality.module.css';
import Image from 'next/image';
import { items_cards } from '../../lib/constants';

const CardDesktop = () => {
  return (
    <div className={styles.reality__desktop}>
      {items_cards &&
        items_cards.map((items, i) => (
          <li key={i} className={styles.reality__desktop_item}>
            <div className={styles.reality__desktop_image}>
              <Image
                src={items.src_icon}
                alt={items.name}
                width={154}
                height={154}
                layout="responsive"
              />
            </div>
            <h3>{items.title}</h3>
            <p>{items.description}</p>
            <a href={items.link} target="_blank" rel="noreferrer">
              <h4>{items.name}</h4>
            </a>
          </li>
        ))}
    </div>
  );
};

export default CardDesktop;
