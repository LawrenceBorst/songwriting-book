export async function getChapter(chapter: number): Promise<Response> {
  try {
    const response: Response = await fetch(`/api/chapters/${chapter}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Chapter ${chapter} not found`);
      } else {
        console.error(`Failed to fetch chapter ${chapter}`);
      }

      return;
    }

    return response;
  } catch (error) {
    console.error('Error fetching chapter:', error);
  }
}
