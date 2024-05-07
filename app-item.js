// Получаем элементы с помощью классов
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
