const hamburgerButton = document.querySelector(".mobile-nav-toggle")
const primaryMenu = document.querySelector(".mainNav__list");


hamburgerButton.addEventListener('click', () => {
    if(primaryMenu.getAttribute('data-visible') === "false"){
        primaryMenu.setAttribute('data-visible', true);
        hamburgerButton.setAttribute('data-toggle', 'close')
    } else if(primaryMenu.getAttribute('data-visible') === 'true') {
        primaryMenu.setAttribute('data-visible', false);
        hamburgerButton.setAttribute("data-toggle", 'hamburger');
    }
})