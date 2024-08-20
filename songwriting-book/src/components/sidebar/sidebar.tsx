import { Component, h, State } from '@stencil/core';
import { sidebarButtons } from './sidebar-buttons';
import { NavBarMode, NavButton } from './types';

@Component({
  tag: 'sb-sidebar',
  styleUrl: 'sidebar.scss',
  shadow: true,
})
export class SBSideBar {
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
