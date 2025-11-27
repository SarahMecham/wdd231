export function WelcomeMessage() {
    const msToDays = 86400000;
    const visitSection = document.createElement("section");
    visitSection.classList.add("visit-message");
    
    const lastVisit = localStorage.getItem("lastVisit");
    const today = Date.now();

    let message = "";

    if(!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((today - lastVisit) / msToDays);

        if(daysBetween < 1) {
            message = "Back so soon!";
        } else if(daysBetween === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = "You last visited ${daysBetween} days ago."
        }
    }

    localStorage.setItem("lastVisit", today);

    visitSection.textContent = message;

    return visitSection;
}