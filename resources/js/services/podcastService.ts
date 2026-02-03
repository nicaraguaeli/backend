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
const BASE_URL = window?.location?.origin ? `${window.location.origin}/` : '/';

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
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("API Response not ok");
    }

    const data: AudioReportajeAPI[] = await response.json();

    // Use response.url as base so relative paths from the API are resolved against the API host
    const base = response.url;

    return data.map(item => {
      // Corrección de imagen: Si no empieza con http, le pegamos el dominio
      let imageUrl = item.imagen || '';
      if (imageUrl && !imageUrl.startsWith('http')) {
        try {
          imageUrl = new URL(imageUrl, base).toString();
        } catch (e) {
          const cleanPath = imageUrl.startsWith('/') ? imageUrl.substring(1) : imageUrl;
          imageUrl = `${BASE_URL}${cleanPath}`;
        }
      } else if (!imageUrl) {
        imageUrl = 'https://via.placeholder.com/800x600?text=Audio';
      }

      // Corrección de audio URL si fuera necesario (asumiendo que viene completa o relativa)
      let audioUrl = item.url || '';
      if (audioUrl && !audioUrl.startsWith('http')) {
        try {
          audioUrl = new URL(audioUrl, base).toString();
        } catch (e) {
          const cleanPath = audioUrl.startsWith('/') ? audioUrl.substring(1) : audioUrl;
          audioUrl = `${BASE_URL}${cleanPath}`;
        }
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