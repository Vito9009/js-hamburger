const openHamburgerMenu = document.querySelector(".fa-bars");
openHamburgerMenu.addEventListener("click", function(){
    const element = document.querySelector(".hamburger-menu");
    element.classList.add("active");
});