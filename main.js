const openHamburgerMenu = document.querySelector(".fas.fa-bars");

openHamburgerMenu.addEventListener("click", function(){
    const element = document.querySelector(".hamburger-menu");
    element.classList.add("active");
});

const closeHamburgerMenu = document.querySelector(".fas.fa-times");

closeHamburgerMenu.addEventListener("click", function(){
    const element = document.querySelector(".hamburger-menu");
    element.classList.remove("active");
});