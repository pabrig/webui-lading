import { createMedia } from '@artsy/fresnel';
// breakpoints values can be either strings or integers
export const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1440
  }
});

/*Info */
export const Data = {
  hero: {
    title: 'Hero',
    icon: '/public/images/hero/icon_xepelin.svg'
  },
  reality: {
    title: '¿Cómo lo hacemos realidad?',
    description:
      'Nuestro modelo de riesgos evalúa en segundos<br/> una operación, lo que nos permite financiar en el mismo día.',
    green_flash_mob: '/images/reality/green_flash_mobile.png',
    green_flash_desk: '/images/reality/green_flash_desktop.png',
    orange_flash_mob: '/images/reality/orange_flash_mobile.png',
    orange_flash_desk: '/images/reality/orange_flash_desktop.png'
  },

  testimony: {
    title: 'Testimony',
    icon: '/public/images/hero/icon_xepelin.svg'
  },

  footer: {
    description:
      'Soñamos con un mercado en donde no existan barreras de entradas para el financiamiento de las pymes en Latinoamérica.',
    icon: '/icons/icon_xepelin.svg',
    solutions: 'Soluciones',
    explorer: 'Explorar',
    followme: 'Síguenos',
    description_footer: '<strong>&copy 2020 Xepelin</strong> Con amor para las pymes'
  }
};

export const items_solutions = [
  {
    name: 'Financiamento directo',
    link: '/'
  },
  {
    name: 'Pronto pago',
    link: '/'
  },
  { name: 'Crédito de capital', link: '/' },
  { name: 'Confiming', link: '/' }
];

export const items_explorer = [
  {
    name: 'Sobre nosotros',
    link: '/'
  },
  {
    name: 'Testimonios',
    link: '/'
  },
  { name: 'Noticias', link: '/' },
  { name: 'Blog', link: '/' }
];
export const items_social = [
  {
    name: 'faceboock',
    link: '/',
    src_icon: '/icons/icon_fb.svg'
  },
  {
    name: 'linkedin',
    link: '/',
    src_icon: '/icons/icon_ln.svg'
  },
  {
    name: 'twiter',
    link: '/',
    src_icon: '/icons/icon_tw.svg'
  }
];
