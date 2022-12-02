//Задача про обчислення різниці часу

//Напишіть функцію яка буде буде приймати 3 параметри

//- початкову дату (string)
//- кінцеву дату (string)
//- розмірність ('days', 'hours', 'minutes', seconds)

//Функція повертатиме часовий період між цими датами згідно розмірності.
//Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
//Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

function durationBetweenDates(
  start = "10 Nov 2022",
  end = "05 Nov 2022",
  units = "days"
) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeGap = Math.abs(endDate - startDate);

  switch (units) {
    case "seconds":
      let result = timeGap / 1000;
      return `${result} seconds`;

    case "minutes":
      let resultInMin = timeGap / (1000 * 60);
      return `${resultInMin} minutes`;

    case "hours":
      let resultInHours = timeGap / (1000 * 60 * 60);
      return `${resultInHours} hours`;

    case "days":
      let resultInDays = timeGap / (1000 * 60 * 60 * 24);
      return `${resultInDays} days`;
  }
}
durationBetweenDates();
durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds");
durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days"); // поверне '362 days'

//-----Задача про перетворення об'єкту-----//

//Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
//Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};
function optimizer(data) {
  const optimizedKeys = Object.fromEntries(
    Object.entries(priceData).map(([key, roundedValue]) => [
      key.toLowerCase(),
      parseFloat(roundedValue).toFixed(2),
    ])
  );
  return console.log(optimizedKeys);
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

//---------Задача про рекурсію та ітерацію----------//

//Напишіть:

//1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {
  if (number === 1) {
    return number;
  } else if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number - 2);
  } else {
    return recursiveOddSumTo(number - 1);
  }
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

//2. Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function iterativeOddSumTo(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); //25

//
//
//
/*----Домашнє завдання за 18.11.2022------*/
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

/*----Домашнє завдання за 18.11.2022------*/
//
//1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
//Використайте оператор розширення:

function addThemAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;
}

//console.log(addThemAll(2, 4)); // 6
//console.log(addThemAll(1, 2, 3, 4)); // 10
//console.log(addThemAll(5, 5, 10)); // 20

//2. Задача на використання замикання. Напишіть функцію яка працює таким чином:
/*---`multiply(a)(b)` // a * b ---*/

//console.log(multiply(5)(5)); // 25
//console.log(multiply(2)(-2)); // -4
//console.log(multiply(4)(3)); // 12

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
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sortingOrder;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sortingOrder;
      // a and b are the same
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

//6. А тепер зробіть всі свої методи з задачі `5` прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedGreetings = me.greetings.bind(me);
let securedTellAboutFreeTime = me.tellAboutFreeTime.bind(me);
let securedTellYourDrinkOfChoice = me.tellYourDrinkOfChoice.bind(me);
let securedAskForUsersData = me.askForUsersData.bind(me);

//setTimeout(securedGreetings, 1000);
//setTimeout(securedTellAboutFreeTime, 2000);
//setTimeout(securedTellYourDrinkOfChoice, 3000);
//setTimeout(securedAskForUsersData, 4000);

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
