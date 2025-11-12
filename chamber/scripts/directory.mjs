import { renderCards, renderTable } from "./table.mjs";
import { spotlightBusinesses } from "./spotlight.mjs";

const url = 'data/members.json';

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  const businesses = data.business;

  const cardsContainer = document.querySelector('#cards');

  // Directory page
  if (cardsContainer) {
    renderCards(businesses, true); 
    renderTable(businesses, true); 
  }

  // Spotlight on Index
  spotlightBusinesses(businesses);
}

getBusinessData();

// Helper to set active button style
function setActiveButton(btn) {
  document.querySelectorAll(".view-toggle button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// Toggle views
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelector("#cards");
  const list = document.querySelector("#list");

  document.querySelector("#card-view").addEventListener("click", (e) => {
      setActiveButton(e.target);
      cards.classList.remove("hidden");
      list.classList.add("hidden");
  });

  document.querySelector("#list-view").addEventListener("click", (e) => {
      setActiveButton(e.target);
      cards.classList.add("hidden");
      list.classList.remove("hidden");
  });
});