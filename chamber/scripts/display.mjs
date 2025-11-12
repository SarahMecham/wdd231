export function createBusinessCard(business) {
  const card = document.createElement("section");
  card.classList.add("card");

  const image = document.createElement("img");
  const name = document.createElement("h3");
  const address = document.createElement("p");
  const phone = document.createElement("p");
  const website = document.createElement("a");

  image.src = business.image;
  image.alt = business.name;
  image.loading = "lazy";
  image.width = 190;
  image.height = 100;

  name.textContent = business.name;
  address.textContent = business.address;
  phone.textContent = business.phone;

  website.href = business.website;
  website.textContent = business.website;
  website.target = "_blank";

  card.append(image, name, address, phone, website);

  return card;
}
