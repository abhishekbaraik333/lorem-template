const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

// swiper js
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // Enables looping
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (3 seconds)
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active"); // Toggle clicked item
    });
  });
});
