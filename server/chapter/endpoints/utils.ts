import path from "path";
import fs from "fs";

export const getChapterFile = (chapter: number): string => {
  return path.join(
    __dirname,
    `../../chapters/chapter-${getChapterNumber(chapter)}.sb`
  );
};

export const getChapterNumber = (chapter: number): string => {
  return chapter.toString().padStart(2, "0");
};

export const getNumberOfFiles = (directoryPath: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    fs.readdir(
      directoryPath,
      (err: NodeJS.ErrnoException | null, files: string[]) => {
        if (err) {
          return reject(err);
        }

        const fileCount = files.filter((file) => {
          return fs.statSync(path.join(directoryPath, file)).isFile();
        }).length;

        resolve(fileCount);
      }
    );
  });
};
