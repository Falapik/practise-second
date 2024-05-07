const button = document.querySelector(".main-promo__input__confirm__button");
const input = document.querySelector(".promo-input");
const text = document.querySelector(".error-text");

// Добавляем обработчик события на нажатие кнопки
button.addEventListener("click", function () {
  // Получаем значение из поля ввода
  const inputValue = input.value;

  // Проверяем, содержится ли слово "PROMO11" в значении поля ввода
  if (inputValue.includes("PROMO11")) {
    input.style.borderColor = "#07d100";
    text.style.display = "none";
  } else {
    input.style.borderColor = "#ff574d";
    text.style.display = "block";
  }
});
