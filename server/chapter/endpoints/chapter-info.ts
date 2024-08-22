import fs from "fs";
import path from "path";
import {
  ChapterInfo,
  Section,
} from "../../../songwriting-book/src/chapters/source/types";
import { ChapterFileHeader } from "../types";
import { CHAPTER_FILE_HEADERS } from "../constants";

export async function chapterInfoEndpoint(_req: any, res: any): Promise<void> {
  const chaptersPath: string = path.join(__dirname, "../../chapters");

  const files: string[] = fs.readdirSync(chaptersPath);

  const chapterInfos: ChapterInfo[] = await Promise.all(
    files.map(getChapterInfo)
  );

  res.send(chapterInfos);
}

const getChapterInfo = async (file: string, number: number): Promise<ChapterInfo> => {
  const filePath = path.join(__dirname, "../../chapters/", file);
  let chapterInfo: ChapterInfo = await new Promise((resolve, reject) =>
    fs.readFile(
      filePath,
      "utf-8",
      (err: NodeJS.ErrnoException | null, content: string): any => {
        if (err) {
          if (err.code === "ENOENT") {
            console.error("Chapter not found", err);
            reject(err);
          }
          console.error("Error reading chapter", err);
          reject(err);
        }

        let chapterInfo: ChapterInfo = {name: '', number: number, sections: []};

        const lines: string[] = content.split("\n");
        let header: ChapterFileHeader | null = null;
        let objectPath: number[] = [];

        for (const line of lines) {
          [chapterInfo, header, objectPath] = handleLine(
            chapterInfo,
            header,
            objectPath,
            line
          );
        }

        resolve(chapterInfo);
      }
    )
  );

  if (chapterInfo.name === "") {
    throw Error(`No name found for chapter ${path.basename(file)}`);
  }

  if (chapterInfo.number === -1) {
    throw Error(`No number found for chapter ${path.basename(file)}`);
  }

  return chapterInfo;
};

const handleLine = (
  chapterInfo: ChapterInfo,
  header: ChapterFileHeader | null,
  objectPath: number[],
  line: string
): [ChapterInfo, ChapterFileHeader | null, number[]] => {
  if (CHAPTER_FILE_HEADERS.includes(line as ChapterFileHeader)) {
    header = line as ChapterFileHeader;
  } else if (line.startsWith("#") && header === "<--CONTENT-->") {
    const nesting = line.match(/^#+/)![0].length;
    const name = line.slice(nesting + 1);

    objectPath = getUpdatedObjectPath(nesting, objectPath);
    chapterInfo = getUpdatedChapterInfo(chapterInfo, objectPath, name);
  } else if (header === '<--NAME-->') {
    chapterInfo.name = line;
  }

  return [chapterInfo, header, objectPath];
};

const getUpdatedObjectPath = (
  nesting: number,
  objectPath: number[]
): number[] => {
  const currentDepth = objectPath.length;

  if (nesting > currentDepth) {
    const diff: number = nesting - currentDepth;
    objectPath = objectPath.concat(...new Array(diff).fill(0));
  } else if (nesting === currentDepth) {
    objectPath[objectPath.length - 1] += 1;
  } else if (nesting < currentDepth) {
    const diff: number = currentDepth - nesting;
    objectPath = objectPath.slice(0, -diff);
    objectPath[objectPath.length - 1] += 1;
  }

  return objectPath;
};

const getUpdatedChapterInfo = (
  chapterInfo: ChapterInfo,
  objectPath: number[],
  name: string
): ChapterInfo => {
  return accessOrCreateSection(chapterInfo, objectPath, name) as ChapterInfo;
};

const accessOrCreateSection = (
  section: Section | ChapterInfo,
  objectPath: number[],
  newName: string
): Section => {
  if (objectPath.length === 0) {
    return {
        sections: [],
        name: newName,
    }
  }

  const [currentIndex, ...restIndices] = objectPath;

  if (!section.sections) {
    section.sections = [];
  }

  if (!section.sections[currentIndex]) {
    section.sections[currentIndex] = {
        sections: [],
        name: null,
    }
  }

  section.sections[currentIndex] = accessOrCreateSection(section.sections[currentIndex], restIndices, newName)

  return section;
};
