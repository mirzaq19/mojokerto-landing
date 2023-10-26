const AUTHOR_TOGGLE = document.querySelector("#author-toggle");
const ASIDE = document.querySelector("aside");
AUTHOR_TOGGLE.addEventListener("click", () => {
  ASIDE.classList.toggle("show");
});

const NAV_LINKS = document.querySelectorAll(".nav-link");
const BURGER = document.querySelector("#burger-button .burger");

window.addEventListener("scroll", () => {
  if (
    (window.scrollY > 750 && window.screen.width < 768) ||
    window.scrollY > 850
  ) {
    NAV_LINKS.forEach((link) => {
      link.classList.add("contrast");
    });
    BURGER.classList.add("contrast");
  } else {
    NAV_LINKS.forEach((link) => {
      link.classList.remove("contrast");
    });
    BURGER.classList.remove("contrast");
  }
});

const BURGER_BUTTON = document.querySelector("#burger-button");
const NAV = document.querySelector("header .header-container nav");
const HEADER = document.querySelector("header .header-container");

BURGER_BUTTON.addEventListener("click", () => {
  BURGER_BUTTON.classList.toggle("active");
  NAV.classList.toggle("active");
  HEADER.classList.toggle("active");
});
