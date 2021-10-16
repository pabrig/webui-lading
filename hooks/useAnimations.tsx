import { Transition, useMotionValue, useTransform } from 'framer-motion';

function useAnimations() {
  const SpringTransition: Transition = {
    type: 'spring',
    duration: 7
  };

  const YoYoTransition: Transition = {
    yoyo: Infinity,
    duration: 2
  };

  const RotateTransition: Transition = {
    yoyo: Infinity,
    duration: 2,
    ease: 'easeOut'
  };

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return [SpringTransition, YoYoTransition, RotateTransition, variants];
}

export default useAnimations;
