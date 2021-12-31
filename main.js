const navLinks = document.querySelector(".nav-links");


function showMenu() {
    navLinks.style.left = "0";
}

function hideMenu() {
    navLinks.style.left = "-200px";
}

const menuLinks = document.querySelectorAll("#menu a");

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", hideMenu)
}

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("sticky", window.scrollY > 0)
});

/* scrolling to top */

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500)
})

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})