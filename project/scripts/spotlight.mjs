const url = "data/family.json";

async function loadSpotlight() {
    const response = await fetch(url);
    const data = await response.json();
    const family = data.family;

    const randomMember = family[Math.floor(Math.random() * family.length)];

    document.querySelector("#spotlight-img").src = randomMember.image;
    document.querySelector("#spotlight-img").alt = randomMember.name;
    document.querySelector("#spotlight-name").textContent = randomMember.name;
    document.querySelector("#spotlight-dates").textContent = randomMember.dates;
    document.querySelector("#spotlight-story").textContent = randomMember.story;
}

loadSpotlight();