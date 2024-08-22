import { ChapterInfo } from '../chapters/source/types';
import { Platform } from './types';

export async function getPlatform(): Promise<Platform> {
  const chapters: ChapterInfo[] = (await (await getChapters()).json()) as ChapterInfo[];

  const platform = {
    config: {
      chapters: chapters,
    },
    currentChapter: 0,
  };

  return platform;
}

async function getChapters(): Promise<Response> {
  try {
    const response: Response = await fetch(`/api/chapterinfo`);

    if (!response.ok) {
      if (response.status === 404) {
        throw Error(`Chapterinfo not found`);
      } else {
        throw Error(`Failed to fetch chapterinfo`);
      }
    }

    return response;
  } catch (error) {
    throw Error(`Error fetching chapter: ${error}`);
  }
}
