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

        async function loadLeaflet() {
            if (window.L) return;

            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
            document.head.appendChild(link);

            const script = document.createElement("script");
            script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
            script.defer = true;
            document.body.appendChild(script);

            return new Promise(resolve => {
                script.onload = resolve;
            });
        }
        if (randomMember.lat && randomMember.lng) {
            const lat = parseFloat(randomMember.lat);
            const lng = parseFloat(randomMember.lng);

            const mapContainer = document.getElementById("birth-map");

            const observer = new IntersectionObserver(async (entries) => {
                if (!entries[0].isIntersecting) return;

                observer.disconnect();
                await loadLeaflet();

                const map = L.map(mapContainer).setView([lat, lng], 10);

                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: "&copy; OpenStreetMap contributors"
                }).addTo(map);

                L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup(`<strong>${randomMember.name}</strong><br>${randomMember.birthplace}`)
                    .openPopup();

            });

            observer.observe(mapContainer);
        }
    } catch (error) {
        console.error("Failed to load spotlight data:", error);
        const storyEl = document.querySelector("#spotlight-story");
        if (storyEl) storyEl.textContent = "Sorry, we couldn't load the spotlight member at this time.";
    }   
}

loadSpotlight();