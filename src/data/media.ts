// Immagini di repertorio per l'anteprima. Sostituire con fotografie approvate
// dello studio prima del lancio e verificare nuovamente licenze e consensi.
export const stockMedia = {
  clinicBright: {
    src: 'media/stock/clinic-bright.webp',
    width: 1600,
    height: 1067,
    alt: 'Ambiente luminoso di uno studio dentistico con riunito e attrezzature',
    caption: 'Immagine di repertorio · Pexels / Tima Miroshnichenko',
    source: 'https://www.pexels.com/photo/a-clinic-with-dental-equipment-5355920/',
  },
  clinicNeutral: {
    src: 'media/stock/clinic-neutral.webp',
    width: 1600,
    height: 1068,
    alt: 'Ambiente contemporaneo di uno studio dentistico con riunito',
    caption: 'Immagine di repertorio · Pexels / Pavel Danilyuk',
    source: 'https://www.pexels.com/photo/a-dental-equipment-in-the-clinic-6812453/',
  },
  materials: {
    src: 'media/stock/materials.webp',
    width: 1200,
    height: 1800,
    alt: 'Materiali e strumenti odontoiatrici disposti su un piano di lavoro',
    caption: 'Immagine di repertorio · Pexels / Polina Zimmerman',
    source: 'https://www.pexels.com/photo/close-up-of-dentistry-tools-4687153/',
  },
  equipment: {
    src: 'media/stock/equipment.webp',
    width: 1202,
    height: 1800,
    alt: 'Dettaglio delle attrezzature di un riunito odontoiatrico',
    caption: 'Immagine di repertorio · Pexels / Pavel Danilyuk',
    source: 'https://www.pexels.com/photo/tools-in-a-dentists-office-6812484/',
  },
} as const;

const treatmentStock = {
  alignmentModel: {
    src: 'media/treatments/alignment-model.webp', width: 1400, height: 789,
    alt: 'Modello dimostrativo delle arcate dentarie su fondo chiaro',
    caption: 'Immagine di repertorio · Pexels / emirkhan bal',
    source: 'https://www.pexels.com/photo/a-dental-model-on-a-white-surface-5794073/',
  },
  dentalCasts: {
    src: 'media/treatments/dental-casts.webp', width: 1400, height: 934,
    alt: 'Modelli dentali dimostrativi disposti in laboratorio',
    caption: 'Immagine di repertorio · Pexels / Emeric Kalil',
    source: 'https://www.pexels.com/photo/teeth-and-dental-cast-models-7422519/',
  },
  dentalInstruments: {
    src: 'media/treatments/dental-instruments.webp', width: 1400, height: 935,
    alt: 'Strumenti odontoiatrici disposti su un riunito',
    caption: 'Immagine di repertorio · Pexels / Pavel Danilyuk',
    source: 'https://www.pexels.com/photo/close-up-of-dentists-instruments-6812482/',
  },
  dentalModelHand: {
    src: 'media/treatments/dental-model-hand.webp', width: 1400, height: 1120,
    alt: 'Professionista che mostra un modello dimostrativo delle arcate dentarie',
    caption: 'Immagine di repertorio · Pexels / Enis Yavuz',
    source: 'https://www.pexels.com/photo/a-person-holding-dental-teeth-model-6363882/',
  },
  dentalModelTools: {
    src: 'media/treatments/dental-model-tools.webp', width: 1400, height: 2100,
    alt: 'Modello dentale e strumenti in un ambiente clinico',
    caption: 'Immagine di repertorio · Pexels / Busenur Demirkan',
    source: 'https://www.pexels.com/photo/dental-tools-and-model-teeth-in-a-clinic-31786502/',
  },
  dentalXray: {
    src: 'media/treatments/dental-xray.webp', width: 1400, height: 934,
    alt: 'Radiografia dentale visualizzata su uno schermo durante una spiegazione',
    caption: 'Immagine di repertorio · Pexels / Tima Miroshnichenko',
    source: 'https://www.pexels.com/photo/a-dentist-showing-a-dental-x-ray-5355704/',
  },
  digitalPlanning: {
    src: 'media/treatments/digital-planning.webp', width: 1400, height: 1400,
    alt: 'Professionista che consulta immagini odontoiatriche digitali al computer',
    caption: 'Immagine di repertorio · Pexels / Bakytzhan Baurzhanov',
    source: 'https://www.pexels.com/photo/dentist-working-on-laptop-9951387/',
  },
  implantModel: {
    src: 'media/treatments/implant-model.webp', width: 1400, height: 934,
    alt: 'Modello dimostrativo con impianto dentale',
    caption: 'Immagine di repertorio · Pexels / cottonbro studio',
    source: 'https://www.pexels.com/photo/close-up-shot-of-dental-implant-model-6502343/',
  },
  transparentImplant: {
    src: 'media/treatments/transparent-implant.webp', width: 1400, height: 2098,
    alt: 'Modello trasparente dimostrativo con impianti dentali',
    caption: 'Immagine di repertorio · Pexels / Pavel Danilyuk',
    source: 'https://www.pexels.com/photo/transparent-dental-implant-model-6812500/',
  },
} as const;

export const treatmentMedia = {
  conservativa: treatmentStock.dentalModelTools,
  endodonzia: treatmentStock.transparentImplant,
  'igiene-prevenzione': treatmentStock.dentalInstruments,
  'chirurgia-orale': stockMedia.materials,
  implantologia: treatmentStock.implantModel,
  protesi: treatmentStock.dentalCasts,
  parodontologia: treatmentStock.dentalModelHand,
  gnatologia: treatmentStock.alignmentModel,
  pedodonzia: stockMedia.clinicBright,
  ortodonzia: treatmentStock.alignmentModel,
  'estetica-dentale': treatmentStock.dentalCasts,
  laser: stockMedia.equipment,
  'apnee-notturne': stockMedia.clinicNeutral,
  previsualizzazione: treatmentStock.digitalPlanning,
  'ansia-anestesia': stockMedia.clinicBright,
  radiologia: treatmentStock.dentalXray,
} as const;
