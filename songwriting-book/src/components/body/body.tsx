import { Component, h, Prop, State } from '@stencil/core';
import { getChapter } from '../utils/chapter';
import { Chapter } from '../../../../server/chapter/types';
import { SBWebComponent } from '../sbwebcomponent';

/**
 * The main body of the book, containing the text
 */
@Component({
  tag: 'sb-body',
  styleUrl: 'body.scss',
  shadow: true,
})
export class SBBody implements SBWebComponent {
  /**
   * @inheritdoc
   */
  @Prop()
  platform;
  
  @State()
  private chapter: Chapter = undefined;

  public render() {
    if (this.chapter === undefined) {
      return;
    }

    return (
      <article class="chapter">
        <header class="chapter-header">
          <h1>{this.chapter.name}</h1>
        </header>
        <section class="chapter-content">
          {this.chapter.content.map((line: string) => (
            <p>{line}</p>
          ))}
        </section>
      </article>
    );
  }

  public async componentDidLoad() {
    this.chapter = (await (await getChapter(1)).json()) as Chapter;
  }
}
