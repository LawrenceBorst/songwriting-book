import { Component, h } from '@stencil/core';

/**
 * Topmost component in the document
 */
@Component({
  tag: 'sb-application',
  styleUrl: 'application.scss',
  shadow: true,
})
export class SBApplication {
  public render() {
    return (
      <div id="content-wrapper">
        <sb-sidebar />
        <sb-body />
      </div>
    );
  }
}
