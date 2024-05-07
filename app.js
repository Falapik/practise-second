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

const profileLog = document.querySelector(".header-main__profile__log");
const regClose = document.querySelector(".reg-close");
const reg = document.querySelector(".reg");
const regWindow = document.querySelector(".reg-window");

profileLog.addEventListener("click", function () {
  reg.style.display = "flex";
  regWindow.style.display = "flex";
});

regClose.addEventListener("click", function () {
  reg.style.display = "none";
  regWindow.style.display = "none";
});

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

document.querySelector(".reg-button").addEventListener("click", function () {
  var emailInput = document.querySelector(".reg-input__email");
  var email = emailInput.value;
  const text = document.querySelector(".reg-textinform");

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    window.open("index-main.html");
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
});
