const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
  <div class="result-row"><span class="label">Name:</span><span class="value">${myInfo.get('firstName')} ${myInfo.get('lastName')}</span></div>
  <div class="result-row"><span class="label">Email:</span><span class="value">${myInfo.get('email')}</span></div>
  <div class="result-row"><span class="label">Phone:</span><span class="value">${myInfo.get('phone')}</span></div>
  <div class="result-row"><span class="label">Family line:</span><span class="value">${myInfo.get('family')}</span></div>
  <div class="result-row"><span class="label">Question/Insight:</span><span class="value">${myInfo.get('question')}</span></div>
  <div class="result-row"><span class="label">Form Submitted On:</span><span class="value">${new Date(myInfo.get('timeStamp')).toLocaleString()}</span></div>
`;