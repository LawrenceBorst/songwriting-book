import { Component, h } from '@stencil/core';

/**
 * The main body of the book, containing the text
 */
@Component({
  tag: 'sb-body',
  styleUrl: 'body.scss',
  shadow: true,
})
export class SBBody {
  public render() {
    return <div>Hello, World!</div>;
  }
}
