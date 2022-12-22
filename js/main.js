const mobileMenu = document.getElementById('mobile-menu');
const barsBtn = document.getElementById('hamburger-btn');
const body = document.querySelector('body');
const showcaseImg = document.querySelector('.showcase-img')

barsBtn.addEventListener('click', toggleNav);

// Toggle The Nav
function toggleNav() {
    switchIcon();

    showcaseImg.classList.toggle('bg-image');
    mobileMenu.classList.toggle('shown');
    body.classList.toggle('bg-fade');
    body.classList.toggle('no-scroll');
}

// Flip icons for hamburger menu
function switchIcon() {
    // Switch Mobile Menu Icon
    if(barsBtn.classList.contains('fa-bars')) {
        barsBtn.classList.remove('fa-bars');
        barsBtn.classList.add('fa-xmark');
    } else {
        barsBtn.classList.remove('fa-xmark');
        barsBtn.classList.add('fa-bars');
    }
}