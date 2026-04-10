export const fetchYoutubeVideos = async (query: string = '', maxResults: number = 10) => {
  try {
    const url = `/youtube?q=${encodeURIComponent(query)}&maxResults=${maxResults}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching videos');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};