// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его
// текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// ==================================================================================

const userInputRef = document.querySelector("#name-input");
const userOutputRef = document.querySelector("#name-output");

userInputRef.addEventListener("input", (event) => {
  userOutputRef.textContent = event.target.value
    ? event.target.value
    : "Незнакомец";
});
