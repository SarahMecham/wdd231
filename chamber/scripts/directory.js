const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    
    displayBusiness(data.business);
}

const displayBusiness = (business) => {
    business.forEach((business) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        card.classList.add("card");
        
        image.setAttribute('src', business.image);
        image.setAttribute('alt', `${business.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '50');

        name.textContent = `${business.name}`;

        address.innerHTML = `${business.address}`;

        phone.innerHTML = `${business.phone}`;

        website.href = business.website;
        website.textContent = business.website;
        website.target = "_blank";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getBusinessData();