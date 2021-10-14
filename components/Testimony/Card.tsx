import { MediaContextProvider, Media } from '../../lib/constants';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';

const Card = () => {
  return (
    <MediaContextProvider>
      <Media lessThan="desktop">
        <CardMobile />
      </Media>
      <Media greaterThanOrEqual="desktop">
        <CardDesktop />
      </Media>
    </MediaContextProvider>
  );
};

export default Card;
