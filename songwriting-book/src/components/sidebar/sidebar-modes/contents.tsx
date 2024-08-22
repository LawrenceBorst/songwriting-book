import { Component, h, Prop } from '@stencil/core';
import { SBWebComponent } from '../../sbwebcomponent';
import { Platform } from '../../../platform/types';
import { ChapterInfo, Section } from '../../../chapters/source/types';

@Component({
  tag: 'sb-sidebar-contents',
  styleUrl: 'contents.scss',
  shadow: true,
})
export class SBSideBarContents implements SBWebComponent {
  /**
   * @inheritdoc
   */
  @Prop()
  public platform: Platform;

  private currentChapter: number;

  public componentWillLoad() {
    this.currentChapter = this.platform.currentChapter;
  }

  public render() {
    const chapterInfo: ChapterInfo | undefined = this.platform.config.chapters[this.currentChapter];

    if (chapterInfo === undefined) {
      console.error(`Chapterinfo could not be found in the configs for chapter ${this.currentChapter}`);

      return;
    }

    return (
      <div>
        <p>{chapterInfo.name}</p>
        {this.renderSections(chapterInfo.sections)}
      </div>
    );
  }

  private renderSections = (sections: Section[] | undefined): HTMLElement | undefined => {
    if (sections === undefined || sections.length === 0) {
      return undefined;
    }

    return (
      <ul>
        {sections.map((section: Section) => {
          const subsections: Section[] | undefined = section?.sections;

          return (
            <li>
              {this.getSectionName(section)}
              {this.renderSections(subsections)}
            </li>
          );
        })}
      </ul>
    );
  };

  private getSectionName = (section: Section): string => {
    if (section.name !== null) {
      return section.name;
    }

    return '';
  };
}
