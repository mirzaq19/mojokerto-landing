const AUTHOR_TOGGLE = document.querySelector("#author-toggle");
const ASIDE = document.querySelector("aside");
AUTHOR_TOGGLE.addEventListener("click", () => {
  ASIDE.classList.toggle("show");
});

const NAV_LINKS = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (
    (window.scrollY > 750 && window.screen.width < 768) ||
    window.scrollY > 850
  ) {
    NAV_LINKS.forEach((link) => {
      link.classList.add("contrast");
    });
  } else {
    NAV_LINKS.forEach((link) => {
      link.classList.remove("contrast");
    });
  }
});
