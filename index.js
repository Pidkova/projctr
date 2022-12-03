//
//
//
/*----Домашнє завдання за 28.11.2022------*/
//
//
//
//
//1. **Задача на селектори:**
//Для сторінки з вебінару ([https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html](https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html)) напишіть селектори для наступних елементів:
//   - для елементу з текстом 'Навігація по DOM дереву'
//    - для першого елементу <section>
//    - для елементу списку з текстом 'Пункт 5'
//    - для елементу з класом 'hatredLevelBlock'

//    Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
//    Приклад:

//    ```
let spanWithClass = document.querySelector(".hatredLevelCounter");
//    ```

//2. **Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом**

//    Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
//    В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

//    Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
//    Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
//
//    Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
//    Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

//    Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.

//    Логіку роботи реалізуйте в окремому js-файлі.
