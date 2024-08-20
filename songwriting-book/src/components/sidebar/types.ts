import { Icon } from '../icon/types';

export type NavBarMode = 'search' | 'contents';

export interface Button {
  name: string;
  icon: Icon;
}

export interface NavButton {
  button: Button;
  navigation: NavBarMode;
}
