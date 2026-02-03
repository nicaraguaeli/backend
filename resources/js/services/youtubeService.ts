import { Video } from '../types';

/**
 * Lista estática de videos de YouTube seleccionados manualmente para pruebas.
 * Estos videos son "embeddable" (se pueden reproducir en sitios externos)
 * y tienen temáticas relevantes (Tabaco, Turismo, Café, Deportes).
 */
const MOCK_VIDEOS: Video[] = [
  {
    id: 'nicaragua-4k',
    title: 'Estelí y el Norte: Paisajes impresionantes en 4K',
    description: 'Recorrido aéreo por las zonas más bellas del norte de Nicaragua, destacando la belleza natural del diamante de las segovias.',
    thumbnail: 'https://img.youtube.com/vi/TDP4nCFZ3gQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/TDP4nCFZ3gQ',
    date: 'Hace 2 días',
    location: 'Estelí, Nicaragua',
    duration: '04:20',
    category: 'Turismo'
  },
  {
    id: 'coffee-process',
    title: 'El proceso del café: Del grano a la taza',
    description: 'Un vistazo detallado al proceso de producción del café, uno de los rubros más importantes de nuestra economía.',
    thumbnail: 'https://img.youtube.com/vi/PD-wJd1656Q/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/PD-wJd1656Q',
    date: 'Hace 5 días',
    location: 'Matagalpa, Norte',
    duration: '08:45',
    category: 'Economía'
  },
  {
    id: 'cigars-1',
    title: 'El Arte del Tabaco: Orgullo Nacional',
    description: 'Reportaje sobre la elaboración artesanal de puros, una tradición que coloca a nuestra región en el mapa mundial.',
    thumbnail: 'https://img.youtube.com/vi/Jg1d6x8fK4Y/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Jg1d6x8fK4Y',
    date: 'Hace 1 semana',
    location: 'Fábrica Local',
    duration: '12:10',
    category: 'Documentales'
  },
  {
    id: 'news-intro',
    title: 'Resumen Informativo Estelar',
    description: 'Las noticias más importantes del día en nuestra edición estelar. Sucesos, política y economía.',
    thumbnail: 'https://img.youtube.com/vi/gJsc35eE16g/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/gJsc35eE16g',
    date: 'Ayer',
    location: 'Estudios Centrales',
    duration: '55:00',
    category: 'Noticias'
  },
  {
    id: 'somoto-canyon',
    title: 'Aventura en el Cañón de Somoto',
    description: 'Explorando una de las maravillas geológicas más impresionantes de Centroamérica.',
    thumbnail: 'https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE',
    date: 'Hace 3 días',
    location: 'Madriz',
    duration: '06:30',
    category: 'Cultura'
  },
  {
    id: 'tech-agri',
    title: 'Tecnología en el campo',
    description: 'Innovaciones que están transformando la agricultura en el norte del país.',
    thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    date: 'Hace 4 días',
    location: 'Sébaco',
    duration: '05:45',
    category: 'Tecnología'
  }
];

export const fetchYoutubeVideos = async (query: string = '', maxResults: number = 10): Promise<Video[]> => {
  // Simulamos un pequeño retraso de red para que se sienta real la carga
  await new Promise(resolve => setTimeout(resolve, 600));

  console.log('[YouTube Service] Usando datos estáticos (Mock Data) para pruebas.');

  // Si se pide un límite, cortamos el array
  return MOCK_VIDEOS.slice(0, maxResults);
};