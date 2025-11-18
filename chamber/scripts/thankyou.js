const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
  <div class="result-row"><span class="label">Name:</span><span class="value">${myInfo.get('firstName')} ${myInfo.get('lastName')}</span></div>
  <div class="result-row"><span class="label">Title:</span><span class="value">${myInfo.get('title')}</span></div>
  <div class="result-row"><span class="label">Email:</span><span class="value">${myInfo.get('email')}</span></div>
  <div class="result-row"><span class="label">Phone:</span><span class="value">${myInfo.get('phone')}</span></div>
  <div class="result-row"><span class="label">Business/Organization:</span><span class="value">${myInfo.get('orgName')}</span></div>
  <div class="result-row"><span class="label">Membership Requested:</span><span class="value">${myInfo.get('membership')}</span></div>
  <div class="result-row"><span class="label">Business/Organization Details:</span><span class="value">${myInfo.get('description')}</span></div>
  <div class="result-row"><span class="label">Form Submitted On:</span><span class="value">${new Date(myInfo.get('timeStamp')).toLocaleString()}</span></div>
`;