import { createStoryCard } from "./display.mjs";

const url = "data/family.json";
const cardsContainer = document.querySelector("#cards");
const filterLinks = document.querySelectorAll(".sub-nav-menu a");

let familyData = [];

async function getStoryData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        familyData = data.family;

        displayCards(familyData);
    } catch (error) {
        console.error("Failed to load family data:", error);
    }
}

function displayCards(list) {
    cardsContainer.innerHTML = "";

    list.forEach(member => {
        const card = createStoryCard(member);
        cardsContainer.appendChild(card);
    });
}

function filterFamilies(line) {
    let filtered = [];

    if (line === "All") {
        filtered = familyData;
    } else {
        filtered = familyData.filter(person => person.line === line);
    }

    displayCards(filtered);
}

filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const selectedLine = link.textContent.trim();
        filterFamilies(selectedLine);
    });
});

const allLink = Array.from(filterLinks).find(l => l.textContent.trim() === "All");
if (allLink) {
    allLink.classList.add("active");
}

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

getStoryData();

const filterBtn = document.querySelector("#filter-ham-btn");
const subNav = document.querySelector(".sub-nav-menu");

filterBtn.addEventListener("click", () => {
    const isOpen = subNav.classList.toggle("show");

    filterBtn.classList.toggle("show");
    filterBtn.setAttribute("aria-expanded", isOpen);
    subNav.setAttribute("aria-hidden", !isOpen);
});