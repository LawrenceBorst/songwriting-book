import { Component, h, State } from '@stencil/core';
import { getPlatform } from '../../platform/platform';
import { Platform } from '../../platform/types';

/**
 * Topmost component in the document
 */
@Component({
  tag: 'sb-application',
  styleUrl: 'application.scss',
  shadow: true,
})
export class SBApplication {
  @State()
  private platform: Platform | undefined;

  public render() {
    if (this.platform === undefined) {
      return <div></div>
    }

    return (
      <div id="content-wrapper">
        <sb-sidebar platform={this.platform} />
        <sb-body platform={this.platform} />
      </div>
    );
  }

  public async componentDidLoad() {
    this.platform = await getPlatform();
  }
}
