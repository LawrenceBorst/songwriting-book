import { Component, h } from '@stencil/core';

@Component({
  tag: 'sidebar-contents',
  styleUrl: 'contents.scss',
  shadow: true,
})
export class SideBarContents {
  render() {
    return <p>test</p>;
  }
}
