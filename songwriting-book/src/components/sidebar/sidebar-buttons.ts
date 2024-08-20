import { NavButton } from './types';

export const sidebarButtons: NavButton[] = [
  {
    button: {
      name: 'search',
      icon: {
        name: 'search',
      },
    },
    navigation: 'search',
  },
  {
    button: {
      name: 'contents',
      icon: {
        name: 'menu',
      },
    },
    navigation: 'contents',
  },
];
