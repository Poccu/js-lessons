// Задачи
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


function camelize(str) {
    let arr = str.split('-');
    // alert (arr);
    // let arrUpperCase = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    let arrCamelCase = arr.map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));
    // alert (arrUpperCase);
    let strCamelCase = arrCamelCase.join('');
    alert (strCamelCase);
}

camelize("-list-style-image");

// Решение

function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

  ////////////////


//   Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b) {
  let filteredArr = arr.filter(item => (item >= a && item <= b));
  return filteredArr;
}

// Решение

function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)



// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1)
      i--;
    }
  }
}



// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );



// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


let sorted = function copySorted(arr) {
  return arr.slice().sort(); // .slice() делает копию массива для дальнейших проеобразований, не затрагивая исходный массив
}


// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
// Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.


// Обратите внимание, как хранятся методы. Они просто добавляются к внутреннему объекту.
// Все тесты и числовые преобразования выполняются в методе calculate. В будущем он может быть расширен для поддержки более сложных выражений.


function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

alert( names ); // Вася, Петя, Маша

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// Обратите внимание, что для стрелочных функций мы должны использовать дополнительные скобки.

// Мы не можем написать вот так:

// let usersMapped = users.map(user => {
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// });
// Как мы помним, есть две функции со стрелками: без тела value => expr и с телом value => {...}.

// Здесь JavaScript будет трактовать { как начало тела функции, а не начало объекта. Чтобы обойти это, нужно заключить их в «нормальные» скобки:

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));
// Теперь всё хорошо.

/////////

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


function sortByAge(users) {
  users.sort((a, b) => (a.age - b.age));
}

// Решение

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}


// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., 
// с равной вероятностью каждого случая.

// Простым решением может быть:

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);


// Это, конечно, будет работать, потому что Math.random() - 0.5 отдаёт случайное число, которое может быть положительным или отрицательным, следовательно,
// функция сортировки меняет порядок элементов случайным образом.

// Но поскольку метод sort не предназначен для использования в таких случаях, не все возможные варианты имеют одинаковую вероятность.

// Например, рассмотрим код ниже. Он запускает shuffle 1000000 раз и считает вероятность появления для всех возможных вариантов arr:

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов

for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

// Результат примера (зависят от движка JS):

// 123: 250706
// 132: 124425
// 213: 249618
// 231: 124880
// 312: 125148
// 321: 125223


// Теперь мы отчётливо видим допущенное отклонение: 123 и 213 появляются намного чаще, чем остальные варианты.

// Результаты этого кода могут варьироваться при запуске на разных движках JavaScript, но очевидно, что такой подход не надёжен.

// Так почему это не работает? Если говорить простыми словами, то sort это «чёрный ящик»: мы бросаем в него массив и функцию сравнения, ожидая получить отсортированный массив. 
// Но из-за абсолютной хаотичности сравнений чёрный ящик сходит с ума, и как именно он сходит с ума, зависит от конкретной его реализации, которая различна в разных движках JavaScript.

// Есть и другие хорошие способы решить эту задачу. Например, есть отличный алгоритм под названием Тасование Фишера — Йетса. Суть заключается в том, чтобы проходить по массиву 
// в обратном порядке и менять местами каждый элемент со случайным элементом, который находится перед ним.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Давайте проверим эту реализацию на том же примере:

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

// Пример вывода:

// 123: 166693
// 132: 166647
// 213: 166628
// 231: 167517
// 312: 166199
// 321: 166316

// Теперь всё в порядке: все варианты появляются с одинаковой вероятностью.
// Кроме того, если посмотреть с точки зрения производительности, то алгоритм «Тасование Фишера — Йетса» намного быстрее, так как в нём нет лишних затрат на сортировку.


// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


//////////////////////////////

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


function getAverageAge(users) {
  let arrAge = users.map(user => user.age);
  let sum = 0;
  
  for (let i = 0; i < arrAge.length; i++) {
    sum += arrAge[i]
  }

  return (sum / arrAge.length);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Решение

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28


// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O


function unique(arr) {
  let newArr = [];

  // let i = 0;

  // do {
  //   if (!newArr.includes(arr[i])) {
  //   newArr.push(arr[i])
  //   i++;
  //   } else newArr;
  // } while (i < arr.length);

  for (let str of arr) {
    if (!newArr.includes(str)) {
      newArr.push(str);
    }
  }

  return newArr;
}


let arr = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];


// Решение

// Давайте пройдёмся по элементам массива:

// Для каждого элемента мы проверим, есть ли он в массиве с результатом.
// Если есть, то игнорируем его, а если нет – добавляем к результатам.

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

// Код работает, но в нём есть потенциальная проблема с производительностью.

// Метод result.includes(str) внутри себя обходит массив result и сравнивает каждый элемент с str, чтобы найти совпадение.

// Таким образом, если result содержит 100 элементов и ни один не совпадает со str, тогда он обойдёт весь result и сделает ровно 100 сравнений. А если result большой, например, 10000, то будет произведено 10000 сравнений.

// Само по себе это не проблема, потому что движки JavaScript очень быстрые, поэтому обход 10000 элементов массива занимает считанные микросекунды.

// Но мы делаем такую проверку для каждого элемента arr в цикле for.

// Поэтому, если arr.length равен 10000, у нас будет что-то вроде 10000*10000 = 100 миллионов сравнений. Это многовато.

// Вот почему данное решение подходит только для небольших массивов.

// Далее в главе Map и Set мы увидим, как его оптимизировать.



// Перебираемые объекты


let range = {
  from: 1,
  to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}