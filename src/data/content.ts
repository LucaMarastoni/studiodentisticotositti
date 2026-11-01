import { stockMedia } from './media';

// TODO_CLIENTE: copy editoriale proposto per anteprima, da approvare prima del lancio.
export const home = {
  hero: {
    eyebrow: 'Studio Dentistico Tositti · Villaverla',
    title: 'Il sorriso inizia',
    emphasis: 'dalla fiducia.',
    description: 'Benvenuti allo Studio Dentistico Tositti, Dott.ssa Raffaella. Il primo passo è conoscerci, qui a Villaverla.',
    appointment: 'Prenota una visita',
    secondary: 'Scopri i trattamenti',
    note: 'Un primo contatto, per telefono.',
    artLabel: 'Film / 01',
    artCaption: 'Video illustrativo · non raffigura una paziente dello studio',
  },
  studio: {
    eyebrow: '01 / Lo studio',
    title: 'Uno spazio per',
    emphasis: 'conoscerci.',
    text: 'Un nome, un luogo, un primo incontro. Il nostro studio è in Via Stadio, a Villaverla: da qui comincia la tua conoscenza dello Studio Dentistico Tositti.',
    aside: 'La presentazione e le fotografie dello studio arriveranno in questa sezione.',
    cta: 'Scopri lo studio',
  },
  treatments: {
    eyebrow: '02 / Trattamenti',
    title: 'Informarsi è',
    emphasis: 'un primo passo.',
    description: 'Stiamo preparando una presentazione delle prestazioni dello studio. Nel frattempo, puoi contattarci per informazioni.',
    cta: 'Esplora la sezione',
  },
  testimonials: {
    eyebrow: '03 / Video testimonianze',
    title: 'Voci e storie,',
    emphasis: 'raccontate in prima persona.',
    description: 'Questa sezione ospiterà le testimonianze video autorizzate dei pazienti dello studio. I contenuti saranno pubblicati solo dopo la verifica dei materiali e dei consensi.',
    status: 'Testimonianze in preparazione',
    cta: 'Vai allo spazio video',
  },
  videos: {
    eyebrow: '04 / Voci & approfondimenti',
    title: 'Le parole fanno',
    emphasis: 'spazio alla fiducia.',
    text: 'Uno spazio dedicato ai futuri video informativi e agli approfondimenti dello studio. I primi contenuti sono in preparazione.',
    cta: 'Scopri lo spazio video',
    label: 'Prossimamente',
    posterTitle: 'Ci sarà molto',
    posterEmphasis: 'da raccontare.',
    posterNote: 'Video informativi non ancora disponibili',
  },
};
export const contact = {
  eyebrow: 'Un primo passo, insieme',
  title: 'Cominciamo da',
  emphasis: 'una telefonata.',
  description: 'Per informazioni o per concordare una visita, chiama lo studio.',
  directions: 'Come raggiungerci',
  callLabel: 'Chiama lo studio',
};
export const pages = {
  studio: { eyebrow: 'Lo studio', title: 'Un luogo.', emphasis: 'Un primo incontro.', description: 'Studio Dentistico Tositti, Dott.ssa Raffaella. Ci trovi in Via Stadio, 2 a Villaverla, in provincia di Vicenza.', image: stockMedia.clinicNeutral, noteTitle: 'Conoscere lo studio', note: 'La presentazione dello studio e la galleria fotografica sono in preparazione. Per informazioni, puoi contattarci telefonicamente.' },
  trattamenti: { eyebrow: 'Trattamenti', title: 'Le informazioni,', emphasis: 'con chiarezza.', description: 'Questa sezione raccoglierà le prestazioni confermate dallo studio, con descrizioni e approfondimenti dedicati.', image: stockMedia.equipment, noteTitle: 'Contenuti in preparazione', note: 'Il catalogo dei trattamenti non è ancora disponibile. Chiama lo studio per informazioni sulle prestazioni.' },
  team: { eyebrow: 'Le persone', title: 'Conoscersi è', emphasis: 'il primo passo.', description: 'Studio Dentistico Tositti — Dott.ssa Raffaella, a Villaverla.', image: stockMedia.materials, noteTitle: 'Il team, prossimamente', note: 'I profili professionali e le fotografie saranno pubblicati dopo la conferma dei dati e delle autorizzazioni. Nel frattempo, lo studio è raggiungibile per telefono.' },
  video: { eyebrow: 'Voci & approfondimenti', title: 'Uno spazio', emphasis: 'per raccontare.', description: 'Qui troveranno spazio video informativi e testimonianze autorizzate. Non ci sono ancora video disponibili.', image: stockMedia.clinicBright, noteTitle: 'Stiamo preparando questo spazio', note: 'I contenuti saranno disponibili dopo la verifica dei materiali e dei consensi. Nessun video di terze parti viene caricato in questa anteprima.' },
  privacy: { eyebrow: 'Informazioni legali', title: 'Informativa', emphasis: 'privacy.', description: 'Documento in preparazione.', image: null, noteTitle: 'Informativa non ancora disponibile', note: 'Questa pagina è un segnaposto dell’anteprima di sviluppo e non costituisce un’informativa privacy. Il testo, i dati del titolare e le informazioni obbligatorie devono essere forniti e verificati prima della pubblicazione.' },
  cookie: { eyebrow: 'Informazioni legali', title: 'Informativa', emphasis: 'cookie.', description: 'Documento in preparazione.', image: null, noteTitle: 'Informativa non ancora disponibile', note: 'Questa pagina è un segnaposto dell’anteprima di sviluppo e non costituisce un’informativa cookie. Il testo definitivo dovrà descrivere la configurazione del sito e dell’hosting di produzione, previa verifica professionale.' },
} as const;
export const footer = {
  note: 'Anteprima del nuovo sito · contenuti in preparazione',
  legalNote: 'Informative e dati professionali in attesa di completamento.',
  tagline: 'Il sorriso inizia dalla fiducia.',
};
