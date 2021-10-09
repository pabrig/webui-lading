import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import HomeContainer from '../containers/HomeContainer';
import FooterContainer from '../containers/FooterContainer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeContainer />
    </div>
  );
};

export default Home;
