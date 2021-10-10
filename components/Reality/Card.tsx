import React, { useState, useRef } from 'react';
import styles from './Reality.module.css';
import Image from 'next/image';
import { MediaContextProvider, Media } from '../../lib/constants';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';

const Card = () => {
  return (
    <ul>
      <MediaContextProvider>
        <Media lessThan="desktop">
          <CardMobile />
        </Media>
        <Media greaterThanOrEqual="desktop">
          <CardDesktop />
        </Media>
      </MediaContextProvider>
    </ul>
  );
};

export default Card;
