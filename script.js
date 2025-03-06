const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu-close");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active"); // Show or hide the menu
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("active"); // Show or hide the menu
});

AOS.init();
