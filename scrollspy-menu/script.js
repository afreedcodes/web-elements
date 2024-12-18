let sec = document.querySelectorAll('.sec-container');
let navLinks = document.querySelectorAll('.nav-list');

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('ul li a[href*="' + id + '"]').parentNode.classList.add('active');
        }
    });
};