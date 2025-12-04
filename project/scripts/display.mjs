export function createStoryCard(business) {
    const card = document.createElement("section");
    card.classList.add("card");

    const image = document.createElement("img");
    const name = document.createElement("h3");
    const dates = document.createElement("h4");
    const story = document.createElement("p");

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
  
    level.textContent = 
        business.level === 3
        ? "Gold Member"
        : business.level === 2
        ? "Silver Member"
        : ""; 

    card.append(image);
    card.append(name);

    if (level.textContent) {
        card.append(level);
    }

    card.append(address, phone, website);

    return card;
}
