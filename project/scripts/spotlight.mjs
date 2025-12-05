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

    const lat = parseFloat(randomMember.lat);
    const lng = parseFloat(randomMember.lng);

    const map = L.map("birth-map").setView([lat, lng], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker([lat, lng]).addTo(map).bindPopup(`<strong>${randomMember.name}</strong><br>${randomMember.birthplace}`).openPopup();

}

loadSpotlight();