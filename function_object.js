// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter() {
    let count = 0;
    
    function counter() {
      return count++;
    }  

    counter.set = function(value) {
        return count = value;
    }

    counter.decrease = function() {
        return count--;
    }

    // counter.set = value => count = value;
    // counter.decrease = () => count--;

    return counter;
}
  
let counter = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
counter.set(10); // установить новое значение счётчика
  
alert( counter() ); // 10
  
counter.decrease(); // уменьшить значение счётчика на 1
  
alert( counter() ); // 10 (вместо 11)


// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.


// Решение

// В общем, чтобы это хоть как-нибудь заработало, результат, возвращаемый sum, должен быть функцией.
// Между вызовами эта функция должна удерживать в памяти текущее значение счётчика.
// Согласно заданию, функция должна преобразовываться в число, когда она используется с оператором ==. Функции – объекты, так что преобразование происходит, как описано в главе Преобразование объектов в примитивы, поэтому можно создать наш собственный метод, возвращающий число.
// Код:

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

// Пожалуйста, обратите внимание на то, что функция sum выполняется лишь однажды и просто возвращает функцию f.
// Далее, при каждом последующем вызове, f суммирует свой аргумент со значением currentSum и возвращает себя же.
// В последней строке f нет никакой рекурсии.
// Вот как выглядит рекурсия:

function f(b) {
  currentSum += b;
  return f(); // <-- рекурсивный вызов
}

// В нашем случае мы просто возвращаем функцию, не вызывая её:

function f(b) {
  currentSum += b;
  return f; // <-- не вызывает себя. Просто возвращает
}

// Функция f будет использоваться в последующем вызове и снова возвращать себя столько раз, сколько будет необходимо. 
// Затем, при использовании в качестве числа или строки, метод toString возвращает currentSum – число. Также здесь мы можем использовать Symbol.toPrimitive или valueOf для преобразования.