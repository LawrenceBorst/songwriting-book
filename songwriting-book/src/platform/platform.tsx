import { ChapterInfo } from '../chapters/source/types';
import { Platform } from './types';

export async function getPlatform(): Promise<Platform> {
  const chapters: ChapterInfo[] = await getChapters();

  const platform = {
    config: {
      chapters: chapters,
    },
  };

  return platform;
};

async function getChapters(): Promise<ChapterInfo[]> {
  return;
}
