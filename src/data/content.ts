import { stockMedia } from './media';

export const home = {
  hero: {
    eyebrow: 'Studio Dentistico Tositti · Villaverla',
    title: 'Il sorriso inizia',
    emphasis: 'dalla fiducia.',
    description: 'Dal 1991, a Villaverla, un’équipe polispecialistica accompagna bambini e adulti con ascolto, prevenzione e percorsi di cura personalizzati.',
    appointment: 'Prenota una visita',
    secondary: 'Scopri i trattamenti',
    note: 'Lo studio riceve esclusivamente su appuntamento.',
    artLabel: 'Film / 01',
    artCaption: 'Video illustrativo · non raffigura una paziente dello studio',
  },
  studio: {
    eyebrow: '01 / Lo studio',
    title: 'Una storia di',
    emphasis: 'cura e ascolto.',
    text: 'Nato nel 1991 come studio monoprofessionale, oggi lo Studio Tositti riunisce competenze diverse per seguire la salute orale nelle varie fasi della vita.',
    aside: 'Tre unità operative, una sala di sterilizzazione dedicata e spazi pensati per un’accoglienza serena.',
    cta: 'Scopri lo studio',
  },
  treatments: {
    eyebrow: '02 / Trattamenti',
    title: 'Prevenzione, cura,',
    emphasis: 'continuità.',
    description: 'Dall’igiene alle terapie specialistiche: ogni proposta nasce da una valutazione clinica e dal confronto con la persona.',
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
  description: 'Per informazioni o per concordare una visita, chiama lo studio. Riceviamo esclusivamente su appuntamento.',
  directions: 'Come raggiungerci',
  callLabel: 'Chiama lo studio',
};
export const pages = {
  studio: { eyebrow: 'Lo studio', title: 'Dal 1991,', emphasis: 'a Villaverla.', description: 'Da studio monoprofessionale a realtà polispecialistica: un percorso cresciuto intorno all’ascolto, alla prevenzione e alla continuità delle cure.', image: stockMedia.clinicNeutral, noteTitle: 'Una cura costruita sulla persona', note: 'Ogni percorso viene pianificato considerando condizioni cliniche, esigenze e tempi della persona, con particolare attenzione ai bambini e a chi vive le cure con ansia.' },
  trattamenti: { eyebrow: 'Trattamenti', title: 'Le informazioni,', emphasis: 'con chiarezza.', description: 'Una panoramica delle prestazioni dello studio. Indicazioni, alternative e tempi vengono sempre definiti dopo la visita e la valutazione del singolo caso.', image: stockMedia.equipment, noteTitle: 'Un percorso individuale', note: 'Le informazioni di questa pagina hanno carattere generale e non sostituiscono la visita odontoiatrica.' },
  team: { eyebrow: 'Le persone', title: 'Competenze diverse,', emphasis: 'un’unica attenzione.', description: 'Odontoiatri, igienista dentale e assistenti collaborano per accompagnare ogni persona con continuità.', image: stockMedia.materials, noteTitle: 'Un’équipe polispecialistica', note: 'Lo studio riunisce professionisti con competenze complementari, affiancati da assistenti qualificate ASO.' },
  video: { eyebrow: 'Voci & approfondimenti', title: 'Uno spazio', emphasis: 'per raccontare.', description: 'Qui troveranno spazio video informativi e testimonianze autorizzate. Non ci sono ancora video disponibili.', image: stockMedia.clinicBright, noteTitle: 'Stiamo preparando questo spazio', note: 'I contenuti saranno disponibili dopo la verifica dei materiali e dei consensi. Nessun video di terze parti viene caricato in questa anteprima.' },
  privacy: { eyebrow: 'Informazioni legali', title: 'Informativa', emphasis: 'privacy.', description: 'Documento in preparazione.', image: null, noteTitle: 'Informativa non ancora disponibile', note: 'Questa pagina è un segnaposto dell’anteprima di sviluppo e non costituisce un’informativa privacy. Il testo, i dati del titolare e le informazioni obbligatorie devono essere forniti e verificati prima della pubblicazione.' },
  cookie: { eyebrow: 'Informazioni legali', title: 'Informativa', emphasis: 'cookie.', description: 'Documento in preparazione.', image: null, noteTitle: 'Informativa non ancora disponibile', note: 'Questa pagina è un segnaposto dell’anteprima di sviluppo e non costituisce un’informativa cookie. Il testo definitivo dovrà descrivere la configurazione del sito e dell’hosting di produzione, previa verifica professionale.' },
} as const;
export const footer = {
  note: 'Studio dentistico polispecialistico · solo su appuntamento',
  legalNote: 'P. IVA 01992420248 · Informative legali in attesa di approvazione professionale.',
  tagline: 'Il sorriso inizia dalla fiducia.',
};
