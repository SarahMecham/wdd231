import { createStoryCard } from "./display.mjs";

const url = "data/family.json";

async function getStoryData() {
    const response = await fetch(url);
    const data = await response.json();
    const familyMembers = data.family;

    const cardsContainer = document.querySelector("#cards");

    familyMembers.forEach(member => {
        const card = createStoryCard(member);
        cardsContainer.appendChild(card);
    });

  // Spotlight on Index
  //spotlightBusinesses(businesses);
}

getStoryData();

const closeBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#story-modal");

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});