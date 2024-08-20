export interface ChapterInfo {
  name: string;
  number: number;
  sections: Section[];
}

export interface Section {
  name: string;
  subSections?: Section[];
}
