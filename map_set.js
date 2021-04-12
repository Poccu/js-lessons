// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.


function unique(arr) {
    let set = new Set();

    for (let name of arr) {
        set.add(name);
    }
}

let arr = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// Решение

function unique(arr) {
    return Array.from(new Set(arr));
}


//   Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.


// Решение

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // разбиваем слово на буквы, сортируем и объединяем снова в строку
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
alert( aclean(arr) );

// ИЛИ

function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
alert( aclean(arr) );


// Перебираемые ключи
// важность: 5
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();


// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


// Решение

// Это потому что map.keys() возвращает итерируемый объект, а не массив.

// Мы можем конвертировать его в массив с помощью Array.from:

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more


// WEAKMAP & WEAKSET

// Хранение отметок "не прочитано"
// важность: 5
// Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, 
// чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let messagesRead = new WeakSet(messages);

// WeakSet позволяет хранить набор сообщений и легко проверять наличие сообщения в нём.

// Он очищается автоматически. Минус в том, что мы не можем перебрать его содержимое, не можем получить «все прочитанные сообщения» напрямую. Но мы можем сделать это, перебирая все сообщения и фильтруя те, которые находятся в WeakSet.

// Альтернативным решением может быть добавление свойства вида message.isRead=true к сообщению после его прочтения. Так как сообщения принадлежат чужому коду, то это не очень хорошо, но если использовать свойство-символ, то вероятность конфликтов будет небольшой.

// Например:

// символьное свойство вместо имени, которое известно только нашему коду

let isRead = Symbol("isRead");
messages[0][isRead] = true;

// Теперь чужой код вряд ли увидит наше дополнительное свойство.

// Хотя символы и позволяют уменьшить вероятность проблем, использование здесь WeakSet лучше с архитектурной точки зрения.


///


// Хранение времени прочтения
// важность: 5
// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти 
// при удалении «сборщиком мусора» сообщения.

// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Объект Date мы рассмотрим позднее




// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
  let arr = Object.values(salaries);
  let sum = 0;

  for (let price of arr) {
    sum += price;
  }

  return sum;
}

// Или, как вариант, мы можем получить сумму, используя методы Object.values и reduce:

// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}


// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

function count(obj) {
  return Object.keys(obj).length;
}


//////////

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};


let {size: {width, height}, items: [item1, item2], title = "Menu"} = options;


let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;


////////////


// Деструктурирующее присваивание
// важность: 5
// У нас есть объект:

let user = {
  name: "John",
  years: 30
};

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример о years присвоит в переменную age.
// свойствпеременных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//

let {name, years: age, isAdmin = false} = user;

//

// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


// Решение

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}