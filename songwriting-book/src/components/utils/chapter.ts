export async function getChapter(chapter: number): Promise<Response> {
  try {
    const response: Response = await fetch(`/api/chapters/${chapter}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw Error(`Chapter ${chapter} not found`);
      } else {
        throw Error(`Failed to fetch chapter ${chapter}`);
      }
    }

    return response;
  } catch (error) {
    throw new Error(`Error fetching chapter: ${error}`);
  }
}
