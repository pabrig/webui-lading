import React, { FC, useState } from 'react';
import styles from './Testimony.module.css';
import { TestimonyTypes } from '../../types/Model';
import Image from 'next/image';
import { items_testimony } from '../../lib/constants';

const Testimony: FC<TestimonyTypes> = ({ title, description }) => {
  return (
    <div className={styles.testimony}>
      <div className={styles.testimony_container}>
        <div className={styles.testimony__header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.container}>
          <ul className={styles.accordion}>
            <li className={styles.items}>
              <div className={styles.icon}>
                <p href="">Andrés Rosales</p>
                <div className={styles.paragraph_image}>
                  {' '}
                  <Image
                    src={'/images/testimony/image_1.jpeg'}
                    alt={'alt'}
                    width={15}
                    height={15}
                    layout="responsive"
                  />
                </div>
              </div>
              <p>Gerente general de Sacer Spa</p>
              <div className={styles.paragraph}>
                <h1>La Mejor Experiencia</h1>
                <p>
                  “En un principio habíamos pensado en acudir a algún banco, pero el problema es que
                  necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por
                  eso también estamos muy agradecidos con Xepelin, porque confiaron en nosotros.
                  Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que
                  nos permitió pagar sueldos, cotizaciones e impuestos al día, además de comprar
                  materiales."Con tan solo 7 meses de funcionamiento a toda máquina, la empresa de
                  soluciones de acero SACER ha sabido cómo lidiar con las dificultades que conlleva
                  el emprender con un negocio de manera autónoma
                </p>
              </div>
            </li>
            <li className={styles.items}>
              <div className={styles.icon}>
                <p href="">Andrés Rosales</p>
                <div className={styles.paragraph_image}>
                  {' '}
                  <Image
                    src={'/images/testimony/image_1.jpeg'}
                    alt={'alt'}
                    width={15}
                    height={15}
                    layout="responsive"
                  />
                </div>
              </div>
              <p>Gerente general de Sacer Spa</p>
              <div className={styles.paragraph}>
                <h1>La Mejor Experiencia</h1>
                <p>
                  “En un principio habíamos pensado en acudir a algún banco, pero el problema es que
                  necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por
                  eso también estamos muy agradecidos con Xepelin, porque confiaron en nosotros.
                  Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que
                  nos permitió pagar sueldos, cotizaciones e impuestos al día, además de comprar
                  materiales."Con tan solo 7 meses de funcionamiento a toda máquina, la empresa de
                  soluciones de acero SACER ha sabido cómo lidiar con las dificultades que conlleva
                  el emprender con un negocio de manera autónoma
                </p>
              </div>
            </li>
            <li className={styles.items}>
              <div className={styles.icon}>
                <p href="">Andrés Rosales</p>
                <div className={styles.paragraph_image}>
                  {' '}
                  <Image
                    src={'/images/testimony/image_1.jpeg'}
                    alt={'alt'}
                    width={15}
                    height={15}
                    layout="responsive"
                  />
                </div>
              </div>
              <p>Gerente general de Sacer Spa</p>
              <div className={styles.paragraph}>
                <h1>La Mejor Experiencia</h1>
                <p>
                  “En un principio habíamos pensado en acudir a algún banco, pero el problema es que
                  necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por
                  eso también estamos muy agradecidos con Xepelin, porque confiaron en nosotros.
                  Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que
                  nos permitió pagar sueldos, cotizaciones e impuestos al día, además de comprar
                  materiales."Con tan solo 7 meses de funcionamiento a toda máquina, la empresa de
                  soluciones de acero SACER ha sabido cómo lidiar con las dificultades que conlleva
                  el emprender con un negocio de manera autónoma
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
