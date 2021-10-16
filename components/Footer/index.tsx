import styles from './Footer.module.css';
import Image from 'next/image';
import ListFooter from './ListFooter';
import { Data } from '../../lib/constants';

const Footer = () => {
  const footer = Data.footer;

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Image
            src={'/icons/icon_xepelin.svg'}
            alt="icon_xepelin"
            width={85}
            height={23}
            layout="responsive"
          />
        </div>
        <ListFooter
          description={footer.description}
          solutions={footer.solutions}
          explorer={footer.explorer}
          followme={footer.followme}
          description_footer={footer.description_footer}
        />
      </div>
    </div>
  );
};

export default Footer;
