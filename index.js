//
/*----Домашнє завдання за 28.11.2022------*/
//
//1. **Задача на селектори:**
//Для сторінки з вебінару ([https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html](https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html)) напишіть селектори для наступних елементів:
//  DONE - для елементу з текстом 'Навігація по DOM дереву'
//  DONE - для першого елементу <section>
//  DONE - для елементу списку з текстом 'Пункт 5'
//   - для елементу з класом 'hatredLevelBlock'

//    Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
//    Приклад:
let spanWithClass = document.querySelector(".hatredLevelCounter");
let DOMTreeElement = document.getElementById("headerTwo");
let firstSection = document.getElementsByTagName("section")[0];
let elementClassHatredLevelBlock =
  document.getElementsByClassName("hatredLevelBlock");

const specificText = "Пункт 5";
for (const li of document.querySelectorAll("li")) {
  if (li.textContent.includes(specificText)) {
    li.style.color = "grey";
  }
}

// Перевіряю правильність селекції зміною кольору тексту:

let change1 = (DOMTreeElement.style.color = "blue");
let change2 = (firstSection.style.color = "green");
let change3 = (elementClassHatredLevelBlock[0].firstElementChild.style.color =
  "orange");
