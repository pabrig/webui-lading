import styles from './Testimony.module.css';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from './Button';

const CardMobile = () => {
  return (
    <Tabs className={styles.card__container}>
      <TabList>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image
                src={'/images/testimony/image_1.jpeg'}
                alt="icon_testimony"
                width={70}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </Tab>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image
                src={'/images/testimony/image_2.jpeg'}
                alt="icon_testimony"
                width={70}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </Tab>
        <Tab>
          <div className={styles.card__header}>
            <div className={styles.card__image}>
              <Image
                src={'/images/testimony/image_3.jpeg'}
                alt="icon_testimony"
                width={70}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </Tab>
      </TabList>

      <TabPanel className={styles.card__paragraph}>
        <h2>La Mejor Experiencia</h2>
        <p>
          “En un principio habíamos pensado en acudir a algún banco, pero el problema es que
          necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por eso
          también estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta
          alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permitió pagar
          sueldos, cotizaciones e impuestos al día, además de comprar materiales."Con tan solo 7
          meses de funcionamiento a toda máquina, la empresa de soluciones de acero SACER ha sabido
          cómo lidiar con las dificultades que conlleva el emprender con un negocio de manera
          autónoma
        </p>
        <h2>Andrés Rosales</h2>
        <p>Gerente general de Sacer Spa</p>
        <Button />
      </TabPanel>
      <TabPanel>
        <h2>La Mejor Experiencia</h2>
        <p>
          “En un principio habíamos pensado en acudir a algún banco, pero el problema es que
          necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por eso
          también estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta
          alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permitió pagar
          sueldos, cotizaciones e impuestos al día, además de comprar materiales."Con tan solo 7
          meses de funcionamiento a toda máquina, la empresa de soluciones de acero SACER ha sabido
          cómo lidiar con las dificultades que conlleva el emprender con un negocio de manera
          autónoma
        </p>
        <h2>Carlos Zapata</h2>
        <p>Gerente general de Zapata Ltda</p>
        <Button />
      </TabPanel>
      <TabPanel>
        <h2>La Mejor Experiencia</h2>
        <p>
          “En un principio habíamos pensado en acudir a algún banco, pero el problema es que
          necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por eso
          también estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta
          alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permitió pagar
          sueldos, cotizaciones e impuestos al día, además de comprar materiales."Con tan solo 7
          meses de funcionamiento a toda máquina, la empresa de soluciones de acero SACER ha sabido
          cómo lidiar con las dificultades que conlleva el emprender con un negocio de manera
          autónoma
        </p>
        <h2>Leonardo Moncada</h2>
        <p>Ing y MOntajes Cerro Bramador Spa</p>
        <Button />
      </TabPanel>
    </Tabs>
  );
};

export default CardMobile;
