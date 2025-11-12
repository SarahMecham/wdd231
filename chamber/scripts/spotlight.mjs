import { createBusinessCard } from "./display.mjs";

export function spotlightBusinesses(businesses) {
  const container = document.querySelector('#featured-cards');
  if (!container) return;

  const filtered = businesses.filter(b => b.level >= 2);

  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach(business => {
    const card = createBusinessCard(business);
    card.classList.add("spotlight-card");
    container.appendChild(card);
  });
}
