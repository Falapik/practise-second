const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const reg = document.querySelector(".reg");
const regWindow = document.querySelector(".reg-window");

const message = document.querySelector(".message");
const messageWindow = document.querySelector(".message-window");
const messageIcon = document.querySelector(".header-main__profile__message");
const messageClose = document.querySelector(".message-window__main__close");

messageIcon.addEventListener("click", function () {
  message.style.display = "flex";
  messageWindow.style.display = "block";
});

messageClose.addEventListener("click", function () {
  message.style.display = "none";
  messageWindow.style.display = "none";
});
