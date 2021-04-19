import {
  quoteList,
  nbrSeason,
  epBySeasonOneToFour,
  epBySeasonFive,
  epBySeasonSix,
  epBySeasonSeven,
} from "./quotesList.js";

const quote = document.querySelector("#quote");

function randomNbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addZero(nbr) {
  if (nbr.toString().length == 1) {
    return "0" + nbr;
  }
  return nbr;
}

// let seasonNoChosen = randomNbr(1, nbrSeason);

function chooseSeason(nbr) {
  if (nbr == 5) {
    return epBySeasonFive;
  }
  if (nbr == 6) {
    return epBySeasonSix;
  }
  if (nbr == 7) {
    return epBySeasonSeven;
  } else {
    return epBySeasonOneToFour;
  }
}

// console.log("saison : " + seasonNoChosen);
// saison choisi

// let nbrEpChosenSeason = chooseSeason(seasonNoChosen);
// console.log("Nbr Ep : " + nbrEpChosenSeason);
// nbre d'episode par saison

function chooseEp(nbrSeason) {
  return randomNbr(1, nbrSeason);
}

// let chosenEpFromSeason = chooseEp(nbrEpChosenSeason);
// console.log("No Ep de la saison choisi : " + chosenEpFromSeason);
// No de l'episode de la saison choisi

// let chosenEpFromSeasonWithZero = addZero(chosenEpFromSeason);
// console.log(
//   "No Ep de la saison choisi (avec zero) : " + chosenEpFromSeasonWithZero
// );
// No de l'episode de la saison choisi avec Zero

function chooseEpAndSeason(season, episode) {
  return "S" + season + "E" + episode;
}

// let SxxEpxx = chooseEpAndSeason(seasonNoChosen, chosenEpFromSeasonWithZero);

// console.log(SxxEpxx);
// console.log(SxxEpxx.toString());

// SxxEpxx.toString();

function initQuoteList() {
  let seasonNoChosen = randomNbr(1, nbrSeason);
  let nbrEpChosenSeason = chooseSeason(seasonNoChosen);
  let chosenEpFromSeason = chooseEp(nbrEpChosenSeason);
  let chosenEpFromSeasonWithZero = addZero(chosenEpFromSeason);
  let SxxEpxx = chooseEpAndSeason(seasonNoChosen, chosenEpFromSeasonWithZero);
  SxxEpxx.toString();
  let result = quoteList[SxxEpxx];
  quote.innerHTML = result;
}

export { initQuoteList };
