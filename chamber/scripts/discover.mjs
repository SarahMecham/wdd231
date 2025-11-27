import { area } from "../data/interest-area.mjs";
import { createInterestCard } from "./interest-area.mjs";
import { WelcomeMessage } from "./welcome.mjs";

const welcomeContainer = document.querySelector("#welcome");
const welcomeMessage = WelcomeMessage();
welcomeContainer.appendChild(welcomeMessage);

const cardsContainer = document.querySelector("#interest-area");

area.forEach(item => {
  const card = createInterestCard(item);
  cardsContainer.appendChild(card);
});
