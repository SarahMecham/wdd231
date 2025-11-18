document.addEventListener("DOMContentLoaded", () => {
    // Set timestamp
    const tStamp = document.getElementById("timeStamp");
    tStamp.value = new Date().toISOString();

    // Card container and modal
    const cardsContainer = document.querySelector('#membership-cards');
    const detailsDialog = document.querySelector('#membership-details');

    const members = [
        {
            level: 'NP Membership',
            cost: 0,
            benefits: ['advertising','event discounts']
        },
        {
            level: 'Bronze Membership',
            cost: 100,
            benefits: ['special events','advertising'] 
        },
        {
            level: 'Silver Membership',
            cost: 200,
            benefits: ['special events','training','spot-light advertising']
        },
        {
            level: 'Gold Membership',
            cost: 300,
            benefits: ['special events','training','spot-light advertising','event discounts']
        }
    ];

    // Display membership cards
    const displayMembership = (members) => {
        cardsContainer.innerHTML = "";

        members.forEach((member, index) => {
            let card = document.createElement('section');
            card.classList.add('membership-card');

            let title = document.createElement('h3');
            title.textContent = member.level;
            card.appendChild(title);

            let btn = document.createElement('button');
            btn.textContent = 'Learn More';
            btn.addEventListener('click', () => {
                detailsDialog.innerHTML = `
                    <button id="closeModal">❌</button>
                    <h2>${member.level}</h2>
                    <p>Cost: $${member.cost}</p>
                    <p>Benefits:</p>
                    <ul> 
                        ${member.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                `;
                detailsDialog.showModal();

                const closeBtn = detailsDialog.querySelector('#closeModal');
                closeBtn.addEventListener('click', () => detailsDialog.close());
            });

            card.appendChild(btn);
            cardsContainer.appendChild(card);

            setTimeout(() => {
                card.classList.add('show');
            }, index * 200);
        });
    };

    displayMembership(members);
});