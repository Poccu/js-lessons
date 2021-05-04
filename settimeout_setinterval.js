// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
    let timerId = setInterval(() => alert(from++), 1000)

    let stopAt = 1000 * to
    
    setTimeout(() => clearInterval(timerId), stopAt);
}

printNumbers(1, 4);

// Решение

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

// использование:
printNumbers(5, 10);

//

function printNumbers(from, to) {
    let timerId = setTimeout(function tick() {
        timerId = setTimeout(tick, 1000);

        if (to == from) {
            clearInterval(timerId);
        }

        alert(from++);
    }, 1000);
}

printNumbers(6, 10);

// Решение

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}
  
// использование:
printNumbers(5, 10);

// Заметим, что в обоих решениях есть начальная задержка перед первым выводом. Она составляет одну секунду (1000мс). Если мы хотим, чтобы функция запускалась сразу же, то надо добавить такой запуск вручную на отдельной строке, вот так:

function printNumbers(from, to) {
    let current = from;

    function go() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }

  go(); // <==========
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);


// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.

// Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

// После цикла
// i = 100000000