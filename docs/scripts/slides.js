import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

const FOLDERS = {
  OO: '00-start',
  O1: '01-concepts',
  O2: '02-data',
  O3: '03-usecases',
  O4: '04-end',
};

const pauseSlide = 'pause.md';
const questionsSlide = 'questions.md';

const start = () => [`${FOLDERS.OO}/a-welcome.md`, `${FOLDERS.OO}/b-speaker-ala.md`, `${FOLDERS.OO}/c-who-are-you.md`];
const concepts = () => [
  `${FOLDERS.O1}/a-concepts.md`,
  `${FOLDERS.O1}/b-networks.md`,
  questionsSlide,
  `${FOLDERS.O1}/c-ledger.md`,
  questionsSlide,
];
const data = () => [
  `${FOLDERS.O2}/a-chain-.md`,
  questionsSlide,
  `${FOLDERS.O2}/a-chain-lab.md`,
  `${FOLDERS.O2}/b-consensus.md`,
  `${FOLDERS.O2}/c-fork.md`,
  questionsSlide,
  pauseSlide,
];
const usescases = () => [
  `${FOLDERS.O3}/a-title.md`,
  `${FOLDERS.O3}/b-cryptos.md`,
  questionsSlide,
  `${FOLDERS.O3}/c-smartcontracts-.md`,
  questionsSlide,
  `${FOLDERS.O3}/c-smartcontracts-usecases.md`,
  questionsSlide,
  `${FOLDERS.O3}/d-certification.md`,
];

const end = () => [
  `${FOLDERS.O4}/a-end.md`,
];

function formation() {
  return [
    ...start(), //
    ...concepts(), //
    ...data(), //
    ...usescases(), //
    ...end(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
