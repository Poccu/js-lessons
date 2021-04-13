// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.


let number;
let readNumber = function () {
    do {
        number = +prompt('Введите число', ''); 
    } while (number === NaN);

    if (number === NaN) {
        number = +prompt('Введите новое число', '');
    } else return number;
}

alert ( readNumber() );

// Решение


function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNumber()}`);

//

// Случайное число от min до max
// важность: 2
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525


random = function (min, max) {
    return Math.random(Math.random()*min) (Math.random()*max);
}

// Решение

// Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.

// Это можно сделать в 2 шага:

// Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
// И, если мы прибавим min, то интервал станет от min до max.

function random(min, max) {
    return min + Math.random() * (max - min);
}



//   Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5


// randomInteger(min, max) {
    
// }


////////////////////////////

// Создаём Accumulator
// важность: 5
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений

/////////


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Введите число', 0);
    }
}


/////////////////////////////////////

// Создание калькулятора при помощи конструктора
// важность: 5
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


//

function Calculator () {
    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.mul = function () {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


/////////////////


// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// Запустить демо

// P.S. Есть «подводный камень» при работе с типами.


let number = {
    read: function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum: function () {
        return this.a + this.b;
    },
};

number.read();
alert ( number.sum() );

// Случайное число от min до max
// важность: 2
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525


random = function (min, max) {
    return Math.random(Math.random()*min) (Math.random()*max);
}

// Решение

// Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.

// Это можно сделать в 2 шага:

// Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
// И, если мы прибавим min, то интервал станет от min до max.

function random(min, max) {
    return min + Math.random() * (max - min);
  }



//   Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5


// randomInteger(min, max) {
    
// }