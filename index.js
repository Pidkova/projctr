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
