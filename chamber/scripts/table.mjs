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

