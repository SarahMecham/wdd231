import { renderCards, renderTable, setActiveButton } from "./table.mjs";
import { spotlightBusinesses } from "./spotlight.mjs";

const url = 'data/members.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    const businesses = data.business;

    const cardsContainer = document.querySelector('#cards');
    const cardBtn = document.querySelector("#card-view");
    const listBtn = document.querySelector("#list-view");
  // Directory page
  if (cardsContainer) {
    renderCards(businesses, true); 
    renderTable(businesses, true); 
  }

  if (cardBtn && listBtn) {
    setActiveButton(cardBtn);
  }

  // Spotlight on Index
  spotlightBusinesses(businesses);
}

getBusinessData();

