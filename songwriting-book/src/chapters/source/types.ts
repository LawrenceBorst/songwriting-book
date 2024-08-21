export interface ChapterInfo {
  name: string | null;
  number: number;
  sections: Section[];
}

export interface Section {
  name: string | null;
  sections?: Section[];
}
