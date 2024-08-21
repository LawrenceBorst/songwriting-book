import { ChapterInfo } from "../chapters/source/types";

export interface Platform {
    config: Config;
    currentChapter: number;
}

export interface Config {
    chapters: ChapterInfo[];
}