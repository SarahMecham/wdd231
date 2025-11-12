import { createBusinessCard } from "./display.mjs";

export function renderCards(businesses, clear = false) {
    const cards = document.querySelector("#cards");
    if (clear) cards.innerHTML = ""; 
    businesses.forEach(b => { 
        const card = createBusinessCard(b);
        cards.appendChild(card); 
    });
}

export function renderTable(businesses, clear = false) {
    const tbody = document.querySelector("#list tbody");
    if (clear) tbody.innerHTML = ""; 
    businesses.forEach(b => {
        let row = document.createElement("tr");

        row.innerHTML = `
        <td>${b.name}</td>
        <td>${b.address}</td>
        <td>${b.phone}</td>
        <td><a href="${b.website}" target="_blank">Visit</a></td>
        `;

        tbody.appendChild(row);
    });
}

// Helper to set active button style
export function setActiveButton(btn) {
  document.querySelectorAll(".view-toggle button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// Toggle views
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelector("#cards");
  const list = document.querySelector("#list");
  const cardViewBtn = document.querySelector("#card-view");
  const listViewBtn = document.querySelector("#list-view");

  // only add listeners if these buttons exist (directory page only)
  if (cardViewBtn && listViewBtn && cards && list) {
    cardViewBtn.addEventListener("click", (e) => {
      setActiveButton(e.target);
      cards.classList.remove("hidden");
      list.classList.add("hidden");
    });

    listViewBtn.addEventListener("click", (e) => {
      setActiveButton(e.target);
      cards.classList.add("hidden");
      list.classList.remove("hidden");
    });
  }
});


