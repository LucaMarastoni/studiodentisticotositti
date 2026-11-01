export interface Treatment {
  slug: string;
  title: string;
  summary: string;
  image: string;
  status: 'approved' | 'draft';
}
// TODO_CLIENTE: inserire esclusivamente prestazioni effettivamente confermate e testi approvati.
export const treatments: Treatment[] = [];
export const treatmentPlaceholders = [
  { number: '01', title: 'Le prestazioni', description: 'La presentazione dei trattamenti dello studio.', image: stockMedia.clinicBright },
  { number: '02', title: 'Gli approfondimenti', description: 'Informazioni dedicate, da leggere con calma.', image: stockMedia.materials },
  { number: '03', title: 'Le tue domande', description: 'Uno spazio per conoscere e orientarsi.', image: stockMedia.equipment },
];
import { stockMedia } from './media';

