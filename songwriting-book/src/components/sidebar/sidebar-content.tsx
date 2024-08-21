import { Component, h, Prop } from '@stencil/core';
import { NavBarMode } from './types';
import { Platform } from '../../platform/types';
import { SBWebComponent } from '../sbwebcomponent';

@Component({
  tag: 'sb-sidebar-content',
  styleUrl: 'sidebar-content.scss',
  shadow: true,
})
export class SBSideBarContent implements SBWebComponent {
  /**
   * @inheritdoc
   */
  @Prop()
  public platform: Platform;

  /**
   * The current navigation mode to be displayed
   */
  @Prop()
  public mode: NavBarMode;

  public render() {
    if (this.mode === 'contents') {
      return <sb-sidebar-contents platform={this.platform} />;
    } else if (this.mode === 'search') {
      return <sb-sidebar-search />;
    }
  }
}
