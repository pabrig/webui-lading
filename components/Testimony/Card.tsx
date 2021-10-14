import React, { useState, useRef } from 'react';
import styles from './Reality.module.css';
import Image from 'next/image';
import { MediaContextProvider, Media } from '../../lib/constants';
import CardDesktop from './CardDesktop';

const Card = () => {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="desktop">
        <CardDesktop />
      </Media>
    </MediaContextProvider>
  );
};

export default Card;
