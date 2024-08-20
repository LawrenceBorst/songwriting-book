import { ChapterInfo } from "../chapters/source/types";

export interface Platform {
    config: Config;
}

export interface Config {
    chapters: ChapterInfo[];
}