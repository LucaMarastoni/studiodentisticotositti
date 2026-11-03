export interface Treatment {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image?: string;
  category: 'Prevenzione e cura' | 'Chirurgia e riabilitazione' | 'Funzione ed estetica' | 'Tecnologie e supporto';
  status: 'approved' | 'draft';
}

export const treatments: Treatment[] = [
  { slug: 'conservativa', title: 'Odontoiatria conservativa', summary: 'Cura dei denti danneggiati dalla carie, preservando la struttura dentale naturale.', description: 'Comprende otturazioni in materiale composito e intarsi, con attenzione al recupero della funzione e dell’aspetto del dente.', image: stockMedia.clinicBright.src, category: 'Prevenzione e cura', status: 'approved' },
  { slug: 'endodonzia', title: 'Endodonzia', summary: 'Trattamento della polpa dentaria e dei canali radicolari.', description: 'Quando necessario, la cura canalare permette di disinfettare e sigillare i canali della radice per conservare il dente.', image: stockMedia.materials.src, category: 'Prevenzione e cura', status: 'approved' },
  { slug: 'igiene-prevenzione', title: 'Igiene e prevenzione', summary: 'Igiene professionale, controlli periodici e indicazioni per la cura quotidiana.', description: 'Le sedute possono comprendere rimozione di placca e tartaro, trattamento delle aree sottogengivali e lucidatura delle superfici dentali.', image: stockMedia.equipment.src, category: 'Prevenzione e cura', status: 'approved' },
  { slug: 'chirurgia-orale', title: 'Chirurgia orale', summary: 'Interventi su denti, gengive e strutture ossee del cavo orale.', description: 'Comprende estrazioni semplici e complesse, denti del giudizio, apicectomie e, quando indicato, procedure di rigenerazione ossea.', category: 'Chirurgia e riabilitazione', status: 'approved' },
  { slug: 'implantologia', title: 'Implantologia', summary: 'Soluzioni su impianti per sostituire uno o più denti mancanti.', description: 'Gli impianti possono sostenere corone, ponti o protesi. L’eventuale carico immediato viene valutato in base alle condizioni cliniche.', category: 'Chirurgia e riabilitazione', status: 'approved' },
  { slug: 'protesi', title: 'Protesi fisse e mobili', summary: 'Ricostruzione o sostituzione di denti danneggiati o mancanti.', description: 'Lo studio realizza corone e ponti, protesi totali e scheletrate, oltre a soluzioni stabilizzate da impianti.', category: 'Chirurgia e riabilitazione', status: 'approved' },
  { slug: 'parodontologia', title: 'Parodontologia', summary: 'Diagnosi e cura dei tessuti che sostengono i denti.', description: 'La valutazione di gengive e osso guida percorsi non chirurgici o chirurgici, inclusi interventi rigenerativi e innesti gengivali quando indicati.', category: 'Prevenzione e cura', status: 'approved' },
  { slug: 'gnatologia', title: 'Gnatologia', summary: 'Valutazione di articolazioni temporo-mandibolari, muscoli e occlusione.', description: 'Per disturbi come bruxismo e serramento possono essere indicati dispositivi personalizzati, come il bite, accompagnati da controlli.', category: 'Funzione ed estetica', status: 'approved' },
  { slug: 'pedodonzia', title: 'Odontoiatria pediatrica', summary: 'Prevenzione e cura della salute orale dei bambini.', description: 'Comprende cura dei denti decidui, fluoro e sigillanti, controllo della crescita e individuazione precoce delle malocclusioni, con un’accoglienza attenta ai più piccoli.', category: 'Prevenzione e cura', status: 'approved' },
  { slug: 'ortodonzia', title: 'Ortodonzia', summary: 'Percorsi per bambini, adolescenti e adulti.', description: 'Dall’ortodonzia intercettiva agli apparecchi tradizionali o estetici e agli allineatori trasparenti, il piano viene definito dopo una valutazione individuale.', category: 'Funzione ed estetica', status: 'approved' },
  { slug: 'estetica-dentale', title: 'Estetica dentale', summary: 'Trattamenti dedicati all’armonia del sorriso.', description: 'Comprende faccette, sbiancamento professionale, ortodonzia trasparente e correzione delle recessioni gengivali, secondo indicazione clinica.', category: 'Funzione ed estetica', status: 'approved' },
  { slug: 'laser', title: 'Terapie laser assistite', summary: 'Il laser può affiancare procedure in diversi ambiti odontoiatrici.', description: 'Viene impiegato, quando appropriato, in parodontologia, chirurgia, implantologia ed endodonzia. Indicazioni e benefici dipendono dal singolo caso.', category: 'Tecnologie e supporto', status: 'approved' },
  { slug: 'apnee-notturne', title: 'Disturbi respiratori del sonno', summary: 'Dispositivi odontoiatrici per casi selezionati di russamento e apnee notturne.', description: 'Dopo una valutazione appropriata possono essere proposti dispositivi di avanzamento mandibolare (MAD) personalizzati.', category: 'Funzione ed estetica', status: 'approved' },
  { slug: 'previsualizzazione', title: 'Previsualizzazione del sorriso', summary: 'Una simulazione reversibile per valutare una possibile riabilitazione estetica.', description: 'Impronte, fotografie e modelli permettono di realizzare una prova temporanea in resina, utile per osservare e discutere il progetto prima del trattamento definitivo.', category: 'Tecnologie e supporto', status: 'approved' },
  { slug: 'ansia-anestesia', title: 'Anestesia e gestione dell’ansia', summary: 'Attenzione al comfort della persona durante il percorso di cura.', description: 'Lo studio utilizza anestesia locale e dedica particolare attenzione ai pazienti ansiosi. L’eventuale supporto con tecniche mediche di rilassamento viene valutato individualmente.', category: 'Tecnologie e supporto', status: 'approved' },
  { slug: 'radiologia', title: 'Radiologia digitale', summary: 'Esami radiografici a supporto della diagnosi e della pianificazione.', description: 'Lo studio dispone di radiografie odontoiatriche digitali, ortopantomografia e teleradiografia, prescritte solo quando clinicamente necessarie.', category: 'Tecnologie e supporto', status: 'approved' },
];
export const treatmentPlaceholders = [
  { number: '01', title: 'Le prestazioni', description: 'La presentazione dei trattamenti dello studio.', image: stockMedia.clinicBright },
  { number: '02', title: 'Gli approfondimenti', description: 'Informazioni dedicate, da leggere con calma.', image: stockMedia.materials },
  { number: '03', title: 'Le tue domande', description: 'Uno spazio per conoscere e orientarsi.', image: stockMedia.equipment },
];
import { stockMedia } from './media';

