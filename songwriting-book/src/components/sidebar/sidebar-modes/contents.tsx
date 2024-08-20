import { Component, h } from '@stencil/core';

@Component({
  tag: 'sb-sidebar-contents',
  styleUrl: 'contents.scss',
  shadow: true,
})
export class SBSideBarContents {
  public render() {
    return <p>content</p>;
  }
}
