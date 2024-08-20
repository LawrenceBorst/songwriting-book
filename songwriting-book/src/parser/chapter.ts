import {readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { Chapter } from './types';

const CHAPTERS_DIR = join(__dirname, '../chapters/')

export const getChapter = (number: number): Chapter => {
    if (!Number.isInteger(number) || number < 0 || number > 100) {
        throw new Error(`${number} is not a valid chapter number`);
    }

    const chapterNumber: string = number.toString().padStart(2, '0');
    const chapterName: string = `chapter_${chapterNumber}`;

    let content: string = '';

    readdirSync(CHAPTERS_DIR).forEach((file: string) => {
        if (file !== chapterName) {
            return;
        }

        const filePath: string = join(CHAPTERS_DIR, file)
        content = readFileSync(filePath, 'utf-8');
    })

    return {
        name: 'test',
        content: content,
        number: 0,
    }
}