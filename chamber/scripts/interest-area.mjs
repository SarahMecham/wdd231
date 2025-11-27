export function createInterestCard(area) {
  const card = document.createElement("section");
  card.classList.add("card");

  const name = document.createElement("h2");

  const figure = document.createElement("figure");
  const img = document.createElement("img");

  const address = document.createElement("address");
  const description = document.createElement("p");
  const button = document.createElement("button");

  name.textContent = area.name;

  img.src = area.image;
  img.alt = area.name;
  img.loading = "lazy";
  img.width = 300;
  img.height = 200;

  figure.appendChild(img);

  address.textContent = area.address;
  description.textContent = area.description; 
  button.textContent = "Learn More";

  card.append(name, figure, address, description, button);

  return card;
}
