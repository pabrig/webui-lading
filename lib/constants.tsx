import { createMedia } from '@artsy/fresnel';

/* breakpoints Media */
export const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    medium: 768,
    desktop: 1440
  }
});

/* Data Info */
export const Data = {
  header: {
    link_solutions: 'Soluciones',
    link_about: 'Sobre nosotros',
    link_resource: 'Recursos',
    link_job: 'Job Board',
    link_signin: 'Ingresar',
    link_register: 'Registrarse'
  },
  hero: {
    title: 'Financia el sueño de tu empresa',
    description:
      'Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite financiar en el mismo día.',
    pink_flash_mob: '/images/hero/pink_flash_mobile.svg',
    pink_flash_desk: '/images/hero/pink_flash_desktop.png',
    yellow_flash_mob: '/images/hero/yellow_flash_mobile.svg',
    yellow_flash_desk: '/images/hero/yellow_flash_desktop.svg',
    purple_flash_mob: '/images/hero/purple_flash_mobile.svg',
    purple_flash_desk: '/images/hero/purple_flash_desktop.svg',
    big_money: '/images/hero/big_money.png',
    money: '/images/hero/money.svg',
    bg_hero: '/images/hero/background_hero.png',
    star: '/images/hero/star.png',
    elipse: '/images/hero/elipse.png',
    elipse_hero: '/images/hero/elipse_header.svg'
  },
  reality: {
    title: '¿Cómo lo hacemos realidad?',
    description:
      'Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite <br/>financiar en el mismo día.',
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

export const items_cards = [
  {
    id: '1',
    src_icon: '/images/reality/icon_hand.png',
    title: 'Financiaimento Directo',
    description:
      'Pensado en empresas que necesiten financiar sus cuentas por cobrar o una alternativa al factoring.',
    link: '/',
    name: 'Explorar'
  },
  {
    id: '2',
    src_icon: '/images/reality/icon_touch.png',
    title: 'Pronto Pago',
    description:
      'Similar al Financiamiento Directo pero sin retención, sin costos adicionales por mora y por el 100% de tu factura.',
    link: '/',
    name: 'Explorar'
  },
  {
    id: '3',
    src_icon: '/images/reality/icon_one.png',
    title: 'Crédito de capital',
    description:
      'Para aquellos que buscan potenciar su negocio financiando ordenes de compra o inversión en crecimiento.',
    link: '/',
    name: 'Explorar'
  },
  {
    id: '4',
    src_icon: '/images/reality/icon_money.png',
    title: 'Confirming',
    description:
      'Pensado para Grandes Empresas y Corporativos que necesiten extender el plazo de sus cuentas por pagar.',
    link: '/',
    name: 'Explorar'
  }
];
