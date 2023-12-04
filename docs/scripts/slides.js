import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

const FOLDERS = {
  "OO" : "00-start",
  "O1" : "01-blockchain"
}

// One method per module
const schoolSlides = () => [`${FOLDERS.OO}/a-welcome.md`, `${FOLDERS.OO}/b-speaker-ala.md`]
const blockchainSlides = () => [`${FOLDERS.O1}/a-intro.md`]

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...blockchainSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
