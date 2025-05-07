document.getElementById("nav-btn").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
});


document.addEventListener("click", function (event) {
    const menu = document.getElementById("nav-menu");
    const button = document.getElementById("nav-btn");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show");
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight, 
            behavior: 'smooth'
        });


        document.getElementById("nav-menu").classList.remove("show");
    });
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const menu = document.getElementById("nav-menu")
    if (window.scrollY > 50) {
        header.style.background = "rgba(30, 19, 76, 0.5)";
    } else {
        header.style.background = "rgba(29, 18, 75, 0.7)";
    }
    menu.classList.remove("show")
});