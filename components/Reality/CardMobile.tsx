import React, { useState, useRef } from 'react';
import styles from './Reality.module.css';
import Image from 'next/image';
import { items_cards } from '../../lib/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardMobile = () => {
  return (
    <div className={styles.reality__mobile}>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {items_cards &&
          items_cards.map((items, i) => (
            <SwiperSlide key={i}>
              <div className={styles.reality__mobile_item}>
                <div className={styles.reality__mobile_image}>
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
                  <p className={styles.reality__mobile_redirect}>{items.name}</p>
                </a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CardMobile;
