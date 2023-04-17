const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var currentSlide = 0;
var slideInterval = setInterval(next, 3000);
var slides = document.querySelectorAll(".img-space");

function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    $(".img-space.active").classList.remove("active");
    slides[currentSlide].classList.add("active");
}

function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    $(".img-space.active").classList.remove("active");
    slides[currentSlide].classList.add("active");
}

let listCartData = [];

const optionsMenus = $$(".menu-drink__btn");
const menuDrinks = $$(".list-drink");
const buttonBackCart = $(".btn--back");
const showCart = $(".cart");
const shopCart = $(".header__nav-right");
const listStatus = $(".list__status");

optionsMenus.forEach((option, index) => {
    let menuDrink = menuDrinks[index];
    option.addEventListener("click", () => {
        $(".menu-drink__btn.active").classList.remove("active");
        option.classList.add("active");

        $(".list-drink.active").classList.remove("active");
        menuDrink.classList.add("active");
    });
});

shopCart.addEventListener("click", () => {
    showCart.classList.add("active");
});

buttonBackCart.addEventListener("click", () => {
    showCart.classList.remove("active");
});
