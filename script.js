document.addEventListener("DOMContentLoaded", function () {
    const menuElement = document.querySelector(".menu");
    const icon = menuElement.querySelector("ion-icon");
    const nav = document.querySelector("nav#nav-menu");

    menuElement.addEventListener("click", function () {
        // Toggle ikon
        const isMenuOutline = icon.getAttribute("name") === "menu-outline";
        icon.setAttribute("name", isMenuOutline ? "close-outline" : "menu-outline");

        // Toggle kelas nav
        if (isMenuOutline) {
            nav.classList.add("open");
        } else {
            nav.classList.remove("open");
        }
    });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};