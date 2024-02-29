
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    hamburger.classList.toggle('toggle');
});

    document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload"
});
});


