export interface Treatment {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image?: string;
  category: 'Prevenzione e cura' | 'Chirurgia e riabilitazione' | 'Funzione ed estetica' | 'Tecnologie e supporto';
  status: 'approved' | 'draft';
}

export interface TreatmentDetailSection {
  title: string;
  text: string;
  items?: string[];
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

export const treatmentDetails: Record<string, TreatmentDetailSection[]> = {
  conservativa: [
    { title: 'Conservare il dente naturale', text: 'L’odontoiatria conservativa interviene sui denti danneggiati dalla carie cercando di preservare quanto più possibile la struttura sana. Dopo la rimozione del tessuto compromesso, il dente viene ricostruito per recuperarne forma e funzione.' },
    { title: 'Le soluzioni possibili', text: 'La scelta dipende dall’estensione del danno e dalle condizioni del dente.', items: ['Otturazioni in materiale composito', 'Intarsi realizzati per ricostruzioni più estese', 'Controlli periodici e indicazioni per l’igiene quotidiana'] },
  ],
  endodonzia: [
    { title: 'Quando interessa l’interno del dente', text: 'L’endodonzia riguarda la polpa dentaria e i canali contenuti nelle radici. Una carie profonda o un trauma possono rendere necessario un trattamento canalare per conservare il dente.' },
    { title: 'Il trattamento canalare', text: 'La procedura, comunemente chiamata devitalizzazione, prevede la detersione, la disinfezione e la sigillatura dei canali radicolari. La valutazione clinica e radiografica permette di definire il percorso più appropriato.' },
  ],
  'igiene-prevenzione': [
    { title: 'Prevenzione professionale e quotidiana', text: 'L’igiene professionale rimuove placca e tartaro anche nelle aree difficili da raggiungere a casa. Si integra con le corrette abitudini domiciliari e con visite di controllo programmate in base alle necessità individuali.' },
    { title: 'Durante la seduta', text: 'Le procedure vengono scelte in relazione alle condizioni di denti e gengive.', items: ['Ablazione del tartaro con strumenti a ultrasuoni', 'Strumenti manuali per le aree sottogengivali', 'Lucidatura delle superfici dentali', 'Rimozione della placca con polveri specifiche, quando indicato'] },
  ],
  'chirurgia-orale': [
    { title: 'Interventi nel cavo orale', text: 'La chirurgia orale comprende procedure su denti, gengive e strutture ossee. Ogni intervento viene pianificato dopo gli esami necessari e dopo aver illustrato indicazioni, alternative e decorso previsto.' },
    { title: 'Principali ambiti', text: 'Le procedure possono includere:', items: ['Estrazioni semplici o complesse', 'Estrazione di denti del giudizio inclusi o semi-inclusi', 'Apicectomie in casi selezionati', 'Innesti ossei e rialzi del seno mascellare quando necessari a una riabilitazione implantare'] },
  ],
  implantologia: [
    { title: 'Sostituire i denti mancanti', text: 'Gli impianti dentali sono dispositivi in titanio inseriti nell’osso per sostenere una protesi. Possono essere utilizzati per una corona singola, un ponte, una riabilitazione più estesa o per stabilizzare una protesi mobile.' },
    { title: 'Valutazione e tempi', text: 'Quantità e qualità dell’osso, salute generale e condizioni della bocca vengono valutate prima del trattamento. Il carico immediato, con una protesi provvisoria in tempi ravvicinati all’intervento, è possibile soltanto quando le condizioni cliniche lo consentono.' },
  ],
  protesi: [
    { title: 'Recuperare funzione e forma', text: 'La protesi dentaria permette di ricostruire denti compromessi o sostituire quelli mancanti. Il progetto considera masticazione, comfort, igiene e integrazione estetica con i denti presenti.' },
    { title: 'Protesi fisse e mobili', text: 'La soluzione viene scelta dopo una valutazione individuale.', items: ['Corone singole e ponti su denti naturali o impianti', 'Soluzioni metal-free o in metallo-ceramica quando indicate', 'Protesi totali e scheletrate', 'Protesi stabilizzate da impianti, incluse overdenture e riabilitazioni di tipo Toronto'] },
  ],
  parodontologia: [
    { title: 'La salute dei tessuti di sostegno', text: 'La parodontologia si occupa di gengive e osso alveolare, i tessuti che sostengono i denti. Sanguinamento, mobilità o recessioni richiedono una valutazione specifica e un monitoraggio nel tempo.' },
    { title: 'Diagnosi e trattamento', text: 'Sondaggio parodontale e indagini radiografiche aiutano a definire la situazione. Il percorso può comprendere igiene sottogengivale e, nei casi indicati, chirurgia resettiva o rigenerativa e innesti gengivali.' },
  ],
  gnatologia: [
    { title: 'Articolazioni, muscoli e occlusione', text: 'La visita gnatologica valuta i rapporti tra denti, articolazioni temporo-mandibolari e muscoli oro-facciali. Può essere indicata in presenza di bruxismo, serramento, rumori articolari o difficoltà nei movimenti mandibolari.' },
    { title: 'Un percorso personalizzato', text: 'Quando appropriato può essere realizzato un bite su misura, generalmente utilizzato durante la notte. Controlli successivi permettono di verificarne adattamento e risposta clinica; eventuali sintomi non odontoiatrici possono richiedere un confronto multidisciplinare.' },
  ],
  pedodonzia: [
    { title: 'La salute orale dei bambini', text: 'L’odontoiatria pediatrica accompagna la crescita dei denti decidui e permanenti. L’approccio è graduale e attento alla relazione, per aiutare il bambino a vivere la visita con serenità e collaborazione.' },
    { title: 'Prevenzione e intercettazione precoce', text: 'Il percorso può comprendere:', items: ['Cura delle carie dei denti da latte', 'Applicazioni di fluoro e sigillature', 'Controllo della crescita e individuazione delle malocclusioni', 'Ortodonzia intercettiva', 'Valutazione di condizioni dello smalto come la MIH'] },
  ],
  ortodonzia: [
    { title: 'Allineamento e funzione', text: 'L’ortodonzia studia la posizione dei denti, la crescita delle ossa mascellari e i rapporti tra le arcate. Il piano considera funzione masticatoria, salute dei tessuti e armonia del sorriso.' },
    { title: 'Percorsi nelle diverse età', text: 'Nei bambini l’ortodonzia intercettiva può agire sulla crescita e su abitudini disfunzionali. Per adolescenti e adulti possono essere valutati apparecchi tradizionali, attacchi estetici o allineatori trasparenti, in relazione agli obiettivi clinici.' },
  ],
  'estetica-dentale': [
    { title: 'Progettare l’armonia del sorriso', text: 'L’estetica dentale considera colore, forma, posizione dei denti e rapporto con i tessuti gengivali. La proposta parte sempre dalla salute della bocca e da obiettivi discussi con la persona.' },
    { title: 'Trattamenti disponibili', text: 'In base alla situazione possono essere valutati:', items: ['Sbiancamento dentale professionale', 'Faccette in ceramica', 'Allineatori trasparenti', 'Innesti gengivali per recessioni selezionate'] },
  ],
  laser: [
    { title: 'Una tecnologia di supporto', text: 'Il laser può affiancare alcune procedure tradizionali in parodontologia, chirurgia orale, implantologia ed endodonzia. Non sostituisce la diagnosi né rappresenta la scelta adatta per ogni trattamento.' },
    { title: 'Indicazioni individuali', text: 'Modalità di utilizzo e possibili vantaggi dipendono dal tipo di procedura e dalla situazione clinica. Durante la visita vengono spiegati il ruolo del laser, le alternative e il decorso previsto.' },
  ],
  'apnee-notturne': [
    { title: 'Russamento e disturbi respiratori', text: 'Russamento, sonno frammentato e sonnolenza diurna possono richiedere un inquadramento medico. In casi selezionati, il dentista può contribuire al percorso con un dispositivo orale personalizzato.' },
    { title: 'Dispositivi di avanzamento mandibolare', text: 'I MAD mantengono la mandibola in una posizione avanzata durante il sonno per favorire il passaggio dell’aria. La loro indicazione richiede una diagnosi appropriata, la valutazione di denti e articolazioni e controlli periodici.' },
  ],
  previsualizzazione: [
    { title: 'Valutare il progetto prima del trattamento', text: 'La previsualizzazione permette di osservare una simulazione della possibile forma del sorriso prima di iniziare una riabilitazione definitiva. È uno strumento di comunicazione e progettazione, non una promessa di risultato.' },
    { title: 'Come si svolge', text: 'Il percorso può prevedere:', items: ['Impronte o scansioni e fotografie', 'Analisi dei modelli e delle esigenze della persona', 'Prova temporanea in resina applicata senza modificare i denti nella fase di simulazione', 'Valutazione condivisa di forma, armonia e sensazioni'] },
  ],
  'ansia-anestesia': [
    { title: 'Comfort e comunicazione', text: 'Prima del trattamento vengono raccolte le informazioni mediche utili e concordate modalità e tempi della seduta. Un dialogo chiaro e un approccio graduale sono particolarmente importanti per chi vive le cure con ansia.' },
    { title: 'Controllo del dolore e rilassamento', text: 'Lo studio utilizza anestesia locale secondo la procedura e le condizioni individuali. In casi selezionati possono essere valutate tecniche mediche di rilassamento con il paziente vigile e collaborante; indicazioni e limiti vengono discussi prima della cura.' },
  ],
  radiologia: [
    { title: 'Immagini a supporto della diagnosi', text: 'Gli esami radiografici mostrano strutture non osservabili direttamente durante la visita e possono essere necessari per diagnosi, pianificazione e controllo nel tempo.' },
    { title: 'Esami disponibili', text: 'La prescrizione avviene solo quando clinicamente giustificata, scegliendo l’esame adeguato al quesito diagnostico.', items: ['Radiografie odontoiatriche digitali', 'Ortopantomografia delle arcate dentarie', 'Teleradiografia per valutazioni ortodontiche e cliniche'] },
  ],
};
export const treatmentPlaceholders = [
  { number: '01', title: 'Le prestazioni', description: 'La presentazione dei trattamenti dello studio.', image: stockMedia.clinicBright },
  { number: '02', title: 'Gli approfondimenti', description: 'Informazioni dedicate, da leggere con calma.', image: stockMedia.materials },
  { number: '03', title: 'Le tue domande', description: 'Uno spazio per conoscere e orientarsi.', image: stockMedia.equipment },
];
import { stockMedia } from './media';

