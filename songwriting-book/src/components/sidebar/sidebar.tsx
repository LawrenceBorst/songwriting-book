import { Component, h, Prop, State } from '@stencil/core';
import { sidebarButtons } from './sidebar-buttons';
import { NavBarMode, NavButton } from './types';
import { Platform } from '../../platform/types';
import { SBWebComponent } from '../sbwebcomponent'

@Component({
  tag: 'sb-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true,
})
export class SBSideBar implements SBWebComponent {
  /**
   * @inheritdoc
   */
  @Prop()
  public platform: Platform;

  @State()
  private mode: NavBarMode | null = null;

  public render() {
    const iconBar = <sb-icon-bar buttons={sidebarButtons} onSelection={this.handleSelection} />;

    if (this.mode === null) {
      return iconBar;
    }

    return [<sb-sidebar-content mode={this.mode} />, iconBar];
  }

  private handleSelection = (event: CustomEvent<NavButton | null>) => {
    event.stopPropagation();

    if (event.detail === null) {
      this.mode = null;
    } else {
      this.mode = event.detail.navigation;
    }
  };
}
