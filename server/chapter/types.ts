export type ChapterFileHeader = "<--NAME-->" | "<--CONTENT-->";

export interface Chapter {
  name: string;
  content: string[];
  number: number;
}
