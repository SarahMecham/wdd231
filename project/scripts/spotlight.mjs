const url = "data/family.json";

async function loadSpotlight() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const family = data.family;

        if (!family || !family.length) {
            throw new Error("No family data found in JSON.");
        }

        const randomMember = family[Math.floor(Math.random() * family.length)];

        const imgEl = document.querySelector("#spotlight-img");
        const nameEl = document.querySelector("#spotlight-name");
        const datesEl = document.querySelector("#spotlight-dates");
        const storyEl = document.querySelector("#spotlight-story");

        if (imgEl && nameEl && datesEl && storyEl) {
            imgEl.src = randomMember.image;
            imgEl.alt = randomMember.name;
            nameEl.textContent = randomMember.name;
            datesEl.textContent = randomMember.dates;
            storyEl.textContent = randomMember.story;
        }

        if (window.L && randomMember.lat && randomMember.lng) {
            const lat = parseFloat(randomMember.lat);
            const lng = parseFloat(randomMember.lng);

            const map = L.map("birth-map").setView([lat, lng], 10);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors"
            }).addTo(map);

            L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`<strong>${randomMember.name}</strong><br>${randomMember.birthplace}`)
                .openPopup();
        }
    } catch (error) {
        console.error("Failed to load spotlight data:", error);
        const storyEl = document.querySelector("#spotlight-story");
        if (storyEl) storyEl.textContent = "Sorry, we couldn't load the spotlight member at this time.";
    }
}

loadSpotlight();