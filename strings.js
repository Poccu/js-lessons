// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

str = prompt('Введите имя', 'никто');

function ucFirst(str) {
    return ( str[0].toUpperCase() + str.slice(1) );
};

alert ( ucFirst(str) );


// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

let str = prompt('Введите слово', 'Test')

function checkSpam(str) {
    strLowerCase = str.toLowerCase();
    
    alert (strLowerCase.includes('viagra') || strLowerCase.includes('xxx'))
};

checkSpam(str);

//

function checkSpam(str) {
    strLowerCase = str.toLowerCase();
    
    alert (strLowerCase.includes('viagra') || strLowerCase.includes('xxx'))
};

checkSpam('xXx');



// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return (str.slice(0, maxlength - 1) + '…');
    } else return str;
}



truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);


// Решение

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }



//   Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

let value = '';

function extractCurrencyValue(str) {
        for (i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            value = value;
        } else value = value + String(str[i]);
    } return value;
} 

alert( extractCurrencyValue('$120') );

// Решение

function extractCurrencyValue(str) {
    return +str.slice(1);
  }

