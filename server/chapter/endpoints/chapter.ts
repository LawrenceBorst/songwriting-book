import fs from "fs";
import { Chapter, ChapterFileHeader } from "../types";
import { CHAPTER_FILE_HEADERS } from "../constants";
import { getChapterFile } from "./utils";

export const chapterEndpoint = (req: any, res: any): void => {
  const chapter: number = parseInt(req.params.index, 10);
  if (!isValidChapter(chapter)) {
    return res.status(400).send("Invalid chapter index");
  }

  const chapterFile: string = getChapterFile(chapter);

  fs.readFile(
    chapterFile,
    "utf-8",
    (err: NodeJS.ErrnoException | null, content: string): any => {
      if (err) {
        if (err.code === "ENOENT") {
          return res.status(404).send("Chapter not found");
        }
        return res.status(500).send("Error reading chapter");
      }

      res.send(getChapter(content.split("\n"), chapter));
    }
  );
};

const isValidChapter = (chapter: any): boolean => {
  if (
    isNaN(chapter) ||
    !Number.isInteger(chapter) ||
    chapter < 0 ||
    chapter > 100
  ) {
    return false;
  }

  return true;
};

const getChapter = (content: string[], number: number): Chapter => {
  let header: ChapterFileHeader | null = null;
  let name: string | undefined = undefined;
  let body: string[] = [];

  for (const line of content) {
    if (CHAPTER_FILE_HEADERS.includes(line as ChapterFileHeader)) {
      header = line as ChapterFileHeader;

      continue;
    }

    if (header === "<--NAME-->") {
      name = line;
    } else if (header === "<--CONTENT-->") {
      body.push(line);
    }
  }

  if (name === undefined) {
    throw Error(`No name found in chapter file ${number}`);
  }

  if (body === undefined) {
    throw Error(`No content found in chapter file ${number}`);
  }

  return {
    name: name,
    content: body,
    number: number,
  };
};
