document.addEventListener("DOMContentLoaded", () => {
    const myInfo = new URLSearchParams(window.location.search);

    const timeStamp = myInfo.get("timeStamp");
    let formattedTime = "Not Available";

    if (timeStamp) {
        formattedTime = new Date(timeStamp).toLocaleString();
    }

    document.querySelector("#results").innerHTML = `
      <div class="result-row"><span class="label">Name:</span><span class="value">${myInfo.get('firstName') || ""} ${myInfo.get('lastName') || ""}</span></div>
      <div class="result-row"><span class="label">Email:</span><span class="value">${myInfo.get('email') || ""}</span></div>
      <div class="result-row"><span class="label">Phone:</span><span class="value">${myInfo.get('phone') || ""}</span></div>
      <div class="result-row"><span class="label">Family line:</span><span class="value">${myInfo.get('family') || ""}</span></div>
      <div class="result-row"><span class="label">Question/Insight:</span><span class="value">${myInfo.get('question') || ""}</span></div>
      <div class="result-row"><span class="label">Story:</span><span class="value">${myInfo.get('story') || ""}</span></div>
    `;

    document.getElementById("displayTime").textContent = formattedTime;
});