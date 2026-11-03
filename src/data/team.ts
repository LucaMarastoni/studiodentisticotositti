interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  focus: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const team: TeamMember[] = [
  {
    name: 'Dott.ssa Raffaella Tositti',
    role: 'Fondatrice e titolare',
    credentials: 'Laureata in Odontoiatria e Protesi Dentaria presso l’Università degli Studi di Padova. Iscritta all’Albo degli Odontoiatri della Provincia di Vicenza, n. 98.',
    focus: 'Si occupa prevalentemente di protesi fissa su denti naturali e impianti, estetica dentale, ortodonzia, parodontologia e odontoiatria pediatrica.',
    image: {
      src: 'media/team/raffaella-tositti.png',
      width: 410,
      height: 470,
      alt: 'Dott.ssa Raffaella Tositti',
    },
  },
  {
    name: 'Dott.ssa Laura Sanchez',
    role: 'Odontoiatra consulente',
    credentials: 'Laureata in Odontoiatria e Protesi Dentaria. Iscritta all’Albo degli Odontoiatri della Provincia di Vicenza, n. 555.',
    focus: 'Si occupa di odontoiatria conservativa ed endodonzia.',
  },
  {
    name: 'Dott. Ranieri Gnesotto',
    role: 'Igienista dentale consulente',
    credentials: 'Laureato in Igiene Dentale e Profilassi. Iscritto all’Albo degli Igienisti Dentali della Provincia di Trento, n. 26.',
    focus: 'Si occupa di igiene dentale e prevenzione orale.',
  },
  {
    name: 'Dott. Ferdinando Pellegrini',
    role: 'Odontoiatra consulente',
    credentials: 'Laureato in Odontoiatria e Protesi Dentaria. Iscritto all’Albo degli Odontoiatri della Provincia di Vicenza, n. 127.',
    focus: 'Si occupa di chirurgia orale e implantologia.',
  },
] as const;

export const assistants = [
  { name: 'Daniela Ferraro', role: 'Assistente di Studio Odontoiatrico (ASO)' },
  { name: 'Clara Zuccollo', role: 'Assistente di Studio Odontoiatrico (ASO)' },
] as const;
