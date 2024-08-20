import { Component, h, Prop } from '@stencil/core';
import { NavBarMode } from './types';

@Component({
  tag: 'sb-sidebar-content',
  styleUrl: 'sidebar-content.scss',
  shadow: true,
})
export class SBSideBarContent {
  /**
   * The current navigation mode to be displayed
   */
  @Prop()
  public mode: NavBarMode;

  public render() {
    if (this.mode === 'contents') {
      return <sb-sidebar-contents />
    } else if (this.mode === 'search') {
      return <sb-sidebar-search />
    }
  }
}
