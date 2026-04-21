import { Video } from '../types';

/** Normaliza la fecha ISO 8601 del backend a string legible */
const formatDate = (isoDate: string): string => {
  if (!isoDate) return '';
  try {
    return new Date(isoDate).toLocaleDateString('es-NI', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return isoDate;
  }
};

/** Mapea el objeto crudo del JSON de YouTube al tipo Video esperado por los componentes */
const mapToVideo = (raw: Record<string, string>): Video => ({
  id: String(raw.id ?? ''),
  title: raw.title ?? '',
  description: raw.description ?? '',
  thumbnail: raw.thumbnail ?? '',
  videoUrl: raw.videoUrl ?? '',
  date: formatDate(raw.date ?? ''),
  location: 'Nicaragua',
  duration: raw.duration ?? '',
  category: raw.category ?? 'ABC TV',
});

export const fetchYoutubeVideos = async (query: string = '', maxResults: number = 10): Promise<Video[]> => {
  try {
    const params = new URLSearchParams({ maxResults: String(maxResults) });
    if (query) params.set('q', query);

    const response = await fetch(`/youtube?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Error fetching videos: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) return [];

    return data.map(mapToVideo);
  } catch (error) {
    console.error('[youtubeService]', error);
    return [];
  }
};