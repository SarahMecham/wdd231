document.addEventListener("DOMContentLoaded", () => {
    const timeStamps = document.querySelectorAll('input[name="timeStamp"]');

    const now = new Date().toISOString();

    timeStamps.forEach(field => {
        field.value = now;
    });
});