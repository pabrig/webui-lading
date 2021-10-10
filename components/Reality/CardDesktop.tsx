import React, { useState, useRef } from 'react';
import styles from './Reality.module.css';
import Image from 'next/image';
import { items_cards } from '../../lib/constants';
import { useSpring, animated } from 'react-spring';

const CardDesktop = () => {
  const ref: React.MutableRefObject<HTMLLIElement> = useRef(undefined);
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });
  return (
    <div className={styles.reality__desktop}>
      {items_cards &&
        items_cards.map((items, i) => (
          <animated.li
            key={i}
            className={styles.reality__desktop_item}
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
              const x =
                clientX -
                (ref.current.offsetLeft -
                  (window.scrollX || window.pageXOffset || document.body.scrollLeft));
              const y =
                clientY -
                (ref.current.offsetTop -
                  (window.scrollY || window.pageYOffset || document.body.scrollTop));

              const dampen = 50;
              const xys = [
                -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                (x - ref.current.clientWidth / 2) / dampen, // rotateY
                1.07
              ];

              setAnimatedProps({ xys: xys });
            }}
            onMouseLeave={() => {
              setHovered(false);

              setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
              zIndex: isHovered ? 2 : 1,
              transform: animatedProps.xys.interpolate(
                (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
              )
            }}>
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
              <p className={styles.reality__desktop_redirect}>{items.name}</p>
            </a>
          </animated.li>
        ))}
    </div>
  );
};

export default CardDesktop;
