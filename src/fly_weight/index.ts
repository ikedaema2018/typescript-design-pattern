import { HumanLetter } from "./human_letter";

const あ = new HumanLetter("あ");
takeAPhoto(あ);
const い = new HumanLetter("い");
takeAPhoto(い);
const は = new HumanLetter("は");
takeAPhoto(は);
takeAPhoto(あ);
takeAPhoto(い);
const よ = new HumanLetter("よ");
takeAPhoto(よ);
const り = new HumanLetter("り");
takeAPhoto(り);
const も = new HumanLetter("も");
takeAPhoto(も);
takeAPhoto(あ);
const お = new HumanLetter("お");
takeAPhoto(お);
takeAPhoto(い);

function takeAPhoto(letter: HumanLetter) {
    console.log(letter.getLetter());
}