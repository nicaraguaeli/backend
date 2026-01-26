
export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
  target?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  is_active: boolean | number;
  is_featured: boolean | number;
  show_in_menu: boolean | number;
  menu_order: number;
  image_path?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // HTML content from API
  author: string;
  date: string; // Mapped from publishedAt
  category: string; // Mapped from region
  imageUrl: string;
  imageCaption?: string; // Mapped from imageRef
  views?: number;
}

export interface ArticleData {
    id: number;
    title: string;
    slug: string;
    lead?: string;
    excerpt: string;
    content: string;
    area?: string;
    published_at: string;
    image_path: string;
    caption?: string;
    city?: string;
    type?: string;
    country?: string;
    author?: { name: string; type: string }[];
    categories?: Category[];
    tags?: { id: number; name: string }[];
}

// Raw API Interface
export interface NewsAPIItem {
  id: number | string;
  title: string;
  summary: string;
  content: string;
  publishedAt: string;
  region: string;
  imageRef: string;
  image: string;
  views: number;
  author: string;
}

export interface User {
  name: string;
  avatar: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
  location: string;
  duration: string;
  category?: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  expirationDate: string;
  summary: string;
  logo?: string;
}

export type ViewState = 'home' | 'article' | 'videos' | 'category' | 'podcast' | 'jobs' | 'about';

// Nuevo Tipo para el estado global del audio
export interface AudioState {
  isPlaying: boolean;
  type: 'live' | 'podcast';
  data?: {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    audioUrl: string;
    id?: string;
  };
}
