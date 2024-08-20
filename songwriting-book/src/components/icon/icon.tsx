import { Component, h, Prop } from '@stencil/core';
import { Icon, IconColor } from './types';

/**
 * A wrapper for material icons
 */
@Component({
  tag: 'sb-icon',
  styleUrls: ['icon.scss', 'icon-colors.scss'],
  shadow: false,
})
export class SBIcon {
  /**
   * Icon to be rendered
   */
  @Prop()
  public icon: Icon;

  public render() {
    let color: IconColor;

    if (this.icon.color === undefined) {
      color = 'black';
    } else {
      color = this.icon.color;
    }

    return <i class={`material-icons md-${color}`}>{this.icon.name}</i>;
  }
}
