// Interface cruda que viene de la API
export interface AudioReportajeAPI {
  id: number | string;
  slug: string;
  url: string;
  titulo: string;
  entrada: string;
  contenido: string;
  categoria: string;
  imagen: string;
  autor: string;
  created_at: string;
}

// Interface mapeada para la vista
export interface PodcastEpisode {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  duration: string;
  audioUrl: string;
  image: string;
  category: string;
  author: string;
}

const API_URL = '/api/audioreportajes';
// Use the injected global variable for the base URL, or fallback to current origin
const BASE_URL = (window as any).APP_URL || (window?.location?.origin ? `${window.location.origin}` : '/');

// Helper para formatear fecha
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
  } catch (e) {
    return dateString;
  }
};

export const fetchPodcasts = async (): Promise<PodcastEpisode[]> => {
  try {
    // Ensure API_URL is prefixed correctly if it's relative
    const fetchUrl = API_URL.startsWith('/') ? `${BASE_URL}${API_URL}` : API_URL;
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error("API Response not ok");
    }

    const data: AudioReportajeAPI[] = await response.json();

    // Use response.url as base so relative paths from the API are resolved against the API host
    const base = response.url;

    return data.map(item => {
      // Corrección de imagen
      let imageUrl = item.imagen || '';
      if (imageUrl && !imageUrl.startsWith('http')) {
        // If it starts with storage/, prepend BASE_URL
        // remove leading slash to avoid double slash if BASE_URL has one (though we try to keep BASE_URL without trailing slash in other places, let's be safe)
        const cleanPath = imageUrl.startsWith('/') ? imageUrl.substring(1) : imageUrl;
        // If BASE_URL ends with /, remove it from there or just control it here.
        // Let's assume BASE_URL is "https://domain.com/subdir" (no trailing slash usually from our previous logic)
        // But if it came from window.location.origin, it doesn't have trailing slash.

        // Handle if cleanPath is "storage/..."
        imageUrl = `${BASE_URL}/${cleanPath}`;
      } else if (!imageUrl) {
        imageUrl = 'https://via.placeholder.com/800x600?text=Audio';
      }

      // Corrección de audio URL
      let audioUrl = item.url || '';
      if (audioUrl && !audioUrl.startsWith('http')) {
        const cleanPath = audioUrl.startsWith('/') ? audioUrl.substring(1) : audioUrl;
        audioUrl = `${BASE_URL}/${cleanPath}`;
      }

      return {
        id: String(item.id),
        slug: item.slug || `audio-${item.id}`,
        title: item.titulo,
        excerpt: item.entrada,
        content: item.contenido,
        date: formatDate(item.created_at),
        duration: 'Audio',
        audioUrl: audioUrl,
        image: imageUrl,
        category: item.categoria || 'Reportajes',
        author: item.autor || 'ABC Stereo'
      };
    });

  } catch (error) {
    console.warn("Error fetching podcasts API, returning fallback data:", error);

    return [
      {
        id: 'p1',
        slug: 'error-loading',
        title: 'Error cargando datos',
        excerpt: 'No se pudieron cargar los audioreportajes.',
        content: '',
        date: '',
        duration: '',
        audioUrl: '#',
        image: 'https://via.placeholder.com/800x600?text=Error',
        category: 'Error',
        author: 'Sistema'
      }
    ];
  }
};