// Store the selected elements that we will use.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle show class of and on.

navbutton.addEventListener('click', () => {
    const isOpen =navlinks.classList.toggle('show');
    navbutton.classList.toggle('show');

    navlinks.setAttribute('aria-hidden', !isOpen);

    navbutton.setAttribute('aria-expanded', isOpen);
    navbutton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});