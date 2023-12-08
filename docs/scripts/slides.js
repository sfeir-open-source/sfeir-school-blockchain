import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

const FOLDERS = {
  OO: '00-start',
  O1: '01-concepts',
  O2: '02-data',
};

// One method per module
const start = () => [`${FOLDERS.OO}/a-welcome.md`, `${FOLDERS.OO}/b-speaker-ala.md`, `${FOLDERS.OO}/c-who-are-you.md`];
const concepts = () => [`${FOLDERS.O1}/a-concepts.md`, `${FOLDERS.O1}/b-networks.md`, `${FOLDERS.O1}/c-ledger.md`];
const chain = () => [`${FOLDERS.O2}/a-chain.md`];

function formation() {
  return [
    ...start(), //
    ...concepts(), //
    ...chain(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
