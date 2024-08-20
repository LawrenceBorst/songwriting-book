import fs from "fs";
import path from "path";
import { CHAPTER_FILE_HEADERS } from "./constants";
export const chapterEndpoint = (req, res) => {
    const chapter = parseInt(req.params.index, 10);
    if (!isValidChapter(chapter)) {
        return res.status(400).send("Invalid chapter index");
    }
    const chapterFile = path.join(__dirname, `../chapters/chapter-${getChapterNumber(chapter)}.sb`);
    fs.readFile(chapterFile, "utf-8", (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                return res.status(404).send("Chapter not found");
            }
            return res.status(500).send("Error reading chapter");
        }
        res.send(getChapter(content.split("\n"), chapter));
    });
};
const getChapterNumber = (chapter) => {
    return chapter.toString().padStart(2, "0");
};
const isValidChapter = (chapter) => {
    if (isNaN(chapter) ||
        !Number.isInteger(chapter) ||
        chapter < 0 ||
        chapter > 100) {
        return false;
    }
    return true;
};
const getChapter = (content, number) => {
    let header = null;
    let name = undefined;
    let body = [];
    for (const line of content) {
        if (CHAPTER_FILE_HEADERS.includes(line)) {
            header = line;
            continue;
        }
        if (header === "<--NAME-->") {
            name = line;
        }
        else if (header === "<--CONTENT-->") {
            body.push(line);
        }
    }
    if (name === undefined) {
        throw Error("No name found in chapter file");
    }
    if (body === undefined) {
        throw Error("No content found in chapter file");
    }
    return {
        name: name,
        content: body,
        number: number,
    };
};
//# sourceMappingURL=endpoint.js.map
