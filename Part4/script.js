const myInput = document.querySelector("input");

// сохраняем значение в localStorage
myInput.addEventListener("input", () => {
  localStorage.setItem("myInputValue", myInput.value);
});

// проверяем, есть ли сохраненное значение в localStorage, и устанавливаем его в input
const savedInputValue = localStorage.getItem("myInputValue");
if (savedInputValue) {
  myInput.value = savedInputValue;
}

