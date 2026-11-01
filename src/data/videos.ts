export interface Video {
  id: string;
  title: string;
  poster: string;
  youtubeId: string;
  transcript: string;
  kind: 'information' | 'testimonial';
  publishApproved: boolean;
}
// TODO_CLIENTE: video, diritti, consensi, poster e trascrizioni. Nessun embed prima di consenso esplicito.
export const videos: Video[] = [];

export const testimonialPlaceholders = [
  {
    number: '01',
    label: 'Testimonianza principale',
    note: 'Video e consenso in attesa di approvazione',
    featured: true,
    poster: stockMedia.clinicBright,
  },
  {
    number: '02',
    label: 'Esperienza del paziente',
    note: 'Contenuto non ancora disponibile',
    featured: false,
    poster: stockMedia.materials,
  },
  {
    number: '03',
    label: 'Esperienza del paziente',
    note: 'Contenuto non ancora disponibile',
    featured: false,
    poster: stockMedia.equipment,
  },
] as const;
import { stockMedia } from './media';

