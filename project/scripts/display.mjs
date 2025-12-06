export function createStoryCard(family) {
    const card = document.createElement("section");
    card.classList.add("card");

    const image = document.createElement("img");
    const name = document.createElement("h3");
    const dates = document.createElement("h4");
    const button = document.createElement("button");

    image.src = family.image;
    image.alt = family.name;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 200;
    image.height = 300;

    name.textContent = family.name;
    dates.textContent = family.dates;
    button.textContent = "View Story";

    button.addEventListener("click", () => {
        const modal = document.querySelector("#story-modal");
        const modalName = document.querySelector("#modal-name");
        const modalDates = document.querySelector("#modal-dates");
        const modalBplace = document.querySelector("#modal-bplace");
        const modalDplace = document.querySelector("#modal-dplace");
        const modalStory = document.querySelector("#modal-story");

        modalName.textContent = family.name;
        modalDates.textContent = family.dates;
        modalBplace.textContent = `Birthplace: ${family.birthplace}`;
        modalDplace.textContent = `Deathplace: ${family.deathplace}`;
        modalStory.textContent = family.story;

        modal.classList.remove("hidden");
    });

    card.append(image, name, dates, button);
    return card;
}