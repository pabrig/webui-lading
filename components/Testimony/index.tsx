import React, { FC, useState } from 'react';
import styles from './Testimony.module.css';
import { TestimonyTypes } from '../../types/Model';
import Image from 'next/image';

const Testimony: FC<TestimonyTypes> = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];
  const { content } = accordionData;
  const Accordion = ({ content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };

  return (
    <div className={styles.testimony}>
      <div className={styles.testimony_container}>
        <div className={styles.testimony__header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.accordion}>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
