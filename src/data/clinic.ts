export const clinic = {
  name: 'Studio Dentistico Tositti',
  practitioner: 'Dott.ssa Raffaella',
  phoneDisplay: '0445 350135',
  phoneHref: 'tel:+390445350135',
  street: 'Via Stadio, 2',
  locality: '36030 Villaverla (VI)',
  address: 'Via Stadio, 2 · 36030 Villaverla (VI)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via%20Stadio%202%2036030%20Villaverla%20VI',
  // TODO_CLIENTE: numero WhatsApp verificato, orari, ragione sociale e dati obbligatori.
  whatsappNumber: null as string | null,
};
export const navigation = [
  { label: 'Lo studio', path: 'studio/' },
  { label: 'Trattamenti', path: 'trattamenti/' },
  { label: 'Team', path: 'team/' },
  { label: 'Video', path: 'video/' },
  { label: 'Contatti', path: 'contatti/' },
];
export const pendingContent = [
  'TODO_CLIENTE: approvare i testi editoriali e la presentazione dello studio.',
  'TODO_CLIENTE: fornire fotografie ufficiali con diritti e consensi.',
  'TODO_CLIENTE: confermare elenco prestazioni, descrizioni e informazioni cliniche.',
  'TODO_CLIENTE: fornire profili, qualifiche e iscrizioni professionali del team.',
  'TODO_CLIENTE: fornire video, poster, sottotitoli e consensi per testimonianze.',
  'TODO_CLIENTE: approvare privacy, cookie, dati fiscali e informazioni obbligatorie con consulente competente.',
  'TODO_CLIENTE: confermare dominio di produzione e hosting prima della pubblicazione.',
];
