import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { NavButton } from './types';
import { Icon, IconColor, IconName } from '../icon/types';

@Component({
  tag: 'sb-icon-bar',
  styleUrl: 'icon-bar.scss',
  shadow: true,
})
export class SBIconBar {
  /**
   * Buttons available in the icon bar
   */
  @Prop()
  public buttons: NavButton[];

  /**
   * Emitted when a navigation button is clicked
   */
  @Event()
  public selection: EventEmitter<NavButton | null>;

  @State()
  private currentSelection: string | null = null;

  public render() {
    return <div id="navigation-buttons">{this.buttons.map(this.renderbutton)}</div>;
  }

  private renderbutton = (button: NavButton) => {
    let iconColor: IconColor = undefined;
    const iconName: IconName = button.button.icon.name;

    if (button.button.name === this.currentSelection) {
      iconColor = 'blue';
    }

    const icon: Icon = {
      name: iconName,
      color: iconColor,
    };

    return <sb-icon icon={icon} onClick={this.handleClick(button)} />;
  };

  private handleClick = (button: NavButton) => (event: PointerEvent) => {
    event.stopPropagation();

    if (this.currentSelection === button.button.name) {
      this.currentSelection = null;
      this.selection.emit(null);
    } else {
      this.currentSelection = button.button.name;
      this.selection.emit(button);
    }
  };
}
