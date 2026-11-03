# Studio Dentistico Tositti

Prima versione statica in italiano: Astro, TypeScript strict, Tailwind CSS v4, GSAP e ScrollTrigger. Nessun backend o servizio runtime.

## Avvio

Richiede Node **22.23.4 o successivo** (versione in `.nvmrc`). Con nvm:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Aprire l'indirizzo locale stampato da Astro, normalmente http://localhost:4321/.

```sh
npm run check
npm run build
npm run verify
npm run preview
```

## Contenuti

Modificare `src/data/`; cercare `TODO_CLIENTE` per il registro dei materiali da confermare. Gli asset pubblici sono ordinati in `public/media/` per tipologia. Le fotografie sorgente ad alta risoluzione sono conservate localmente in `references-private/source-media/photos/`; le relative versioni WebP ottimizzate sono in `references-private/ready-media/photos/`. Entrambe le cartelle restano escluse da Git e dal build finché diritti, consensi e destinazione d'uso non sono confermati. Le illustrazioni SVG sono originali e dimostrative. Il video della hero è materiale illustrativo e non rappresenta una paziente dello studio. I font sono locali, con licenze OFL nei pacchetti Fontsource; attribuzioni in `public/FONT-LICENSES.txt`.

Mancano conferma delle prestazioni, profili professionali, orari, fotografie, video e consensi, WhatsApp, dati societari e informative approvate. Le pagine legali sono segnaposto espliciti, da completare con la cliente e il professionista incaricato prima della pubblicazione. Il pulsante «Prenota una visita» avvia una telefonata; non è un sistema di prenotazione online.

## Hosting statico e URL

`astro.config.mjs` ricava `site` e `base` da `SITE_URL`, `BASE_PATH` o `GITHUB_REPOSITORY`. In assenza di configurazione il sito è locale e non indicizzabile. Esempio di verifica per un repository GitHub (dominio di prova):

```sh
SITE_URL=https://preview.example BASE_PATH=/repo/ PUBLIC_DEPLOY_ENV=preview npm run build
SITE_URL=https://preview.example BASE_PATH=/repo/ PUBLIC_DEPLOY_ENV=preview npm run verify
```

Ripristinare poi la build locale con `npm run build`. Per un host definitivo configurare il dominio approvato, `BASE_PATH=/` e `PUBLIC_DEPLOY_ENV=production`. I file da servire sono in `dist/`.

Il workflow `.github/workflows/deploy.yml` pubblica automaticamente l’anteprima su GitHub Pages a ogni push su `main` e può essere avviato anche manualmente. In GitHub, **Settings → Pages → Build and deployment → Source** deve essere impostato su **GitHub Actions**. L’anteprima usa `noindex`; `noindex` non è controllo degli accessi. GitHub Pages è qui destinato all’anteprima, mentre la produzione rimane portabile su altro hosting statico.

Integrazione basata sulla [documentazione Astro per Tailwind](https://docs.astro.build/en/guides/styling/) e sulla [guida GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

## File privati

`.gitignore` esclude istruzioni agenti, configurazioni locali, riferimenti privati, artefatti QA e variabili d'ambiente. Non includerli nei commit. Il deploy automatico parte soltanto dopo un push su `main` o un avvio manuale del workflow.
