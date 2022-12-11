//2. **Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом**

//    Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
//    В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

//    Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
//    Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
//
//    Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
//    Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

//    Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.

let button = document.getElementById("button");
let body = document.getElementById("body");
let lastClickDate = document.getElementById("date");

(function () {
  if (
    localStorage.getItem("dates") !== null &&
    localStorage.getItem("buttonClass") !== null &&
    localStorage.getItem("buttonText") !== null &&
    localStorage.getItem("background") !== null
  ) {
    button.innerHTML = localStorage.getItem("buttonText");
    button.classList = localStorage.getItem("buttonClass");
    body.classList = localStorage.getItem("background");
    lastClickDate.innerHTML = localStorage.getItem("dates");
  }
})();
button.addEventListener("click", changeThePage);

function changeThePage(event) {
  let newDate = new Date();
  let d = formatDate(newDate.getDay());
  let m = formatDate(newDate.getMonth());
  let y = newDate.getFullYear();
  let h = formatDate(newDate.getHours());
  let min = formatDate(newDate.getMinutes());
  let s = formatDate(newDate.getSeconds());
  let activeClass = button.className;
  let time = d + "-" + m + "-" + y + " " + h + ":" + min + ":" + s;

  if (activeClass === "turnOff") {
    button.innerHTML = "Turn On";
    button.classList.remove("turnOff");
    body.classList.remove("bright");
    button.classList.add("turnOn");
    body.classList.add("dark");
    lastClickDate.innerHTML = `Last Turn On: ${time} `;
  } else {
    button.innerHTML = "Turn Off";
    button.classList.remove("turnOn");
    body.classList.remove("dark");
    button.classList.add("turnOff");
    body.classList.add("bright");
    lastClickDate.innerHTML = `Last Turn Off: ${time} `;
  }

  storeClassesInLocalStorage();
}

function storeClassesInLocalStorage() {
  let activeClass = button.className;
  let backgroundClass = body.className;
  let turnText = button.innerHTML;
  let date = lastClickDate.innerHTML;

  localStorage.setItem("buttonClass", activeClass);
  localStorage.setItem("dates", date);
  localStorage.setItem("background", backgroundClass);
  localStorage.setItem("buttonText", turnText);
}

function formatDate(number) {
  return number.toString().padStart(2, "0");
}
