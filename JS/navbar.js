const hamburger = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburger_list');
const hamburgerImg = document.querySelector('.hamburger_img');
const navbar = document.getElementById("nav-id");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerList.classList.toggle('active');
    hamburgerImg.classList.toggle('active');
    // CHANGE ICON
    if (hamburger.classList.contains("active")) {
        hamburgerImg.src = "images/svgs/cross.svg";
        navbar.classList.add("scrolled");

    }
    else {
        hamburgerImg.src = "images/svgs/hamburger.svg";
        navbar.classList.remove("scrolled");
    }
});


window.addEventListener("scroll", () => {

    if (window.scrollY > 10 || navbar.classList.contains("active")) {
        navbar.classList.add("scrolled");
    }
    else {
        navbar.classList.remove("scrolled");
    }

});