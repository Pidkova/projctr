//
//
//
//
/*----Домашнє завдання за 18.11.2022------*/
//
//
//
//

//1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
//Використайте оператор розширення:

function addThemAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

//2. Задача на використання замикання. Напишіть функцію яка працює таким чином:
/*---`multiply(a)(b)` // a * b ---*/

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

/*3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
    - властивість за якою треба посортувати
    - опцію напрямку сортування, зростання чи спадання*/

function byProperty(property, direction) {
  let sortingOrder = 1;
  if (direction === "<") {
    sortingOrder = -1;
  }
  return function (a, b) {
    if (a[property] < b[property]) {
      return -1 * sortingOrder;
    } else if (a[property] > b[property]) {
      return 1 * sortingOrder;
    } else {
      return 0 * sortingOrder;
    }
  };
}
const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

//console.log(movies.sort(byProperty("releaseYear", ">"))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
//console.log(movies.sort(byProperty("runningTimeInMinutes", "<"))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty("movieName", ">"))); // виведе масив фільмів посортованих по назві, в алфавітному порядку
// виведе масив фільмів посортованих по назві, в алфавітному порядку

//4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:**

// - Використовуючи setInterval

function detonatorTimer(delay) {
  let count = delay;

  let countDown = setInterval(function () {
    if (count === 0) {
      console.log("BOOM!");
      clearInterval(countDown);
    } else {
      console.log(count);
    }
    count--;
  }, 1000);
}
//detonatorTimer(3);

// - Використовуючи вкладений setTimeout

function detonatorTimer2(delay) {
  if (delay > 0) {
    console.log(delay);
    setTimeout(detonatorTimer2, 1000, --delay);
  } else {
    console.log("BOOM!");
  }
}
//detonatorTimer2(3);

//5.Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.
let me = {
  firstName: "Tetiana",
  lastName: "Pidkova",
  shortName: "Tania",
  gender: "female",
  location: "Zurich",
  freeTimeChoices: {
    often: "watching smth on Netflix",
    favorite: "hiking somewhere in the mountains",
  },
  drinkOfChoice: "Dry martini with a lemon twist",
  greetings() {
    console.log(
      `Hey there! I'm ${this.firstName} ${this.lastName}. But you can call me ${this.shortName}.`
    );
  },
  tellAboutFreeTime() {
    console.log(
      `Mostly when I have some free time I am ${this.freeTimeChoices.often}. But my favorite thing is ${this.freeTimeChoices.favorite}`
    );
  },
  tellYourDrinkOfChoice() {
    console.log(`My drink of choice is ${this.drinkOfChoice}`);
  },
  askForUsersData() {
    prompt("Tell me smth about yourself...");
  },
};
//me.greetings()
//me.tellAboutFreeTime()
//me.tellYourDrinkOfChoice()
//me.askForUsersData()

//6. **А тепер зробіть всі свої методи з задачі `5` прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:**

let securedGreetings = me.greetings.bind(me);
let securedTellAboutFreeTime = me.tellAboutFreeTime.bind(me);
let securedTellYourDrinkOfChoice = me.tellYourDrinkOfChoice.bind(me);
let securedAskForUsersData = me.askForUsersData.bind(me);

setTimeout(securedGreetings, 1000);
setTimeout(securedTellAboutFreeTime, 2000);
setTimeout(securedTellYourDrinkOfChoice, 3000);
setTimeout(securedAskForUsersData, 4000);

//7. **Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.**

function someFunction(weather) {
  console.log(`It seems like the weather today is ${weather}`);
} // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
  let milisec = seconds * 1000;
  return function () {
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => func.apply(this, arguments), milisec);
  };
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор

slowedSomeFunction("snowy"); /* викликаєте декоратор */
