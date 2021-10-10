import React, { useRef } from 'react';
import styles from './Reality.module.css';
import Image from 'next/image';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
import { MediaContextProvider, Media } from '../../lib/constants';

const items_cards = [
  {
    id: '1',
    src_icon: '/images/reality/icon_hand.jpg',
    title: 'Financiaimento Directo',
    description:
      'Pensado en empresas que necesiten financiar sus cuentas por cobrar o una alternativa al factoring.',
    link: '/',
    name: 'Explorar'
  },
  {
    id: '2',
    src_icon: '/images/reality/icon_touch.jpg',
    title: 'Pronto Pago',
    description:
      'Similar al Financiamiento Directo pero sin retención, sin costos adicionales por mora y por el 100% de tu factura.',
    link: '/',
    name: 'Explorar'
  },
  {
    id: '3',
    src_icon: '/images/reality/icon_one.jpg',
    title: 'Crédito de capital',
    description:
      'Para aquellos que buscan potenciar su negocio financiando ordenes de compra o inversión en crecimiento.',
    link: '/',
    name: 'Explorar'
  },
  {
    id: '4',
    src_icon: '/images/reality/icon_money.jpg',
    title: 'Confirming',
    description:
      'Pensado para Grandes Empresas y Corporativos que necesiten extender el plazo de sus cuentas por pagar.',
    link: '/',
    name: 'Explorar'
  }
];

const Card = () => {
  // const [currentSlide, setCurrentSlide] = React.useState(0);
  // const [sliderRef, slider] = useKeenSlider({
  //   initial: 0,
  //   slideChanged(s) {
  //     setCurrentSlide(s.details().relativeSlide);
  //   }
  // });
  return (
    // Desktop Version
    <MediaContextProvider>
      <Media greaterThanOrEqual="desktop">
        {' '}
        <ul>
          <div className={styles.reality__desktop}>
            {items_cards &&
              items_cards.map((items, i) => (
                <li key={i} className={styles.reality__desktop_item}>
                  <div className={styles.reality__desktop_image}>
                    <Image src={items.src_icon} width={154} height={154} layout="responsive" />
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.description}</p>
                  <a href={items.link} target="_blank" rel="noreferrer">
                    <p className={styles.reality__desktop_redirect}>{items.name}</p>
                  </a>
                </li>
              ))}
          </div>
        </ul>
      </Media>
    </MediaContextProvider>
  );
};

export default Card;
