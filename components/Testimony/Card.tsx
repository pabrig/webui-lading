import React, { FC } from 'react';
import { MediaContextProvider, Media } from '../../lib/constants';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import { Data } from '../../lib/constants';

const Card = () => {
  const testimony = Data.testimony;
  return (
    <MediaContextProvider>
      <Media lessThan="desktop">
        <CardMobile
          name_1={testimony.name_1}
          name_2={testimony.name_2}
          name_3={testimony.name_3}
          position_1={testimony.position_1}
          position_2={testimony.position_2}
          position_3={testimony.position_3}
          icon_1={testimony.icon_1}
          icon_2={testimony.icon_2}
          icon_3={testimony.icon_3}
          title_testimony={testimony.title_testimony}
          description_testimony={testimony.description_testimony}
        />
      </Media>
      <Media greaterThanOrEqual="desktop">
        <CardDesktop
          name_1={testimony.name_1}
          name_2={testimony.name_2}
          name_3={testimony.name_3}
          position_1={testimony.position_1}
          position_2={testimony.position_2}
          position_3={testimony.position_3}
          icon_1={testimony.icon_1}
          icon_2={testimony.icon_2}
          icon_3={testimony.icon_3}
          title_testimony={testimony.title_testimony}
          description_testimony={testimony.description_testimony}
        />
      </Media>
    </MediaContextProvider>
  );
};

export default Card;
