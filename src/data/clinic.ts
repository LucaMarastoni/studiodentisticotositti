export const clinic = {
  name: 'Studio Dentistico Tositti',
  legalName: 'Studio Dentistico Dott.ssa Raffaella Tositti',
  practitioner: 'Dott.ssa Raffaella Tositti',
  founded: 1991,
  vatNumber: '01992420248',
  phoneDisplay: '0445 350135',
  phoneHref: 'tel:+390445350135',
  street: 'Via Stadio, 2',
  locality: '36030 Villaverla (VI)',
  address: 'Via Stadio, 2 · 36030 Villaverla (VI)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via%20Stadio%202%2036030%20Villaverla%20VI',
  // TODO_CLIENTE: numero WhatsApp verificato. Non usare il fisso senza conferma.
  whatsappNumber: null as string | null,
};

export const openingHours = [
  { day: 'Lunedì', hours: '9:00–12:30 / 15:00–19:30' },
  { day: 'Martedì', hours: '8:30–19:30' },
  { day: 'Mercoledì', hours: '9:00–12:30 / 15:00–19:30' },
  { day: 'Giovedì', hours: '9:00–12:30 / 15:00–19:30' },
  { day: 'Venerdì', hours: '9:00–15:00' },
  { day: 'Sabato e domenica', hours: 'Chiuso' },
] as const;
export const navigation = [
  { label: 'Lo studio', path: 'studio/' },
  { label: 'Trattamenti', path: 'trattamenti/' },
  { label: 'Team', path: 'team/' },
  { label: 'Video', path: 'video/' },
  { label: 'Contatti', path: 'contatti/' },
];
export const pendingContent = [
  'TODO_CLIENTE: fornire fotografie ufficiali con diritti e consensi.',
  'TODO_CLIENTE: fornire video, poster, sottotitoli e consensi per testimonianze.',
  'TODO_CLIENTE: approvare privacy, cookie, dati fiscali e informazioni obbligatorie con consulente competente.',
  'TODO_CLIENTE: confermare dominio di produzione e hosting prima della pubblicazione.',
];
