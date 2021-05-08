// Работа с прототипами
// важность: 5
// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)


// true, null, undefined




// Алгоритм поиска
// важность: 5
// Задача состоит из двух частей.

// У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. 
// Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// С точки зрения производительности, для современных движков неважно, откуда берётся свойство – из объекта или из прототипа. 
// Они запоминают, где было найдено свойство, и повторно используют его в следующем запросе.

// Например, при обращении к pockets.glasses они запомнят, что нашли glasses в head, и в следующий раз будут искать там же. 
// Они достаточно умны, чтобы при изменениях обновлять внутренний кеш, поэтому такая оптимизация безопасна.



// Куда будет произведена запись?
// важность: 5
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Ответ: rabbit.

// Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit.
// Поиск свойства и исполнение кода – два разных процесса. Сначала осуществляется поиск метода rabbit.eat в прототипе, а затем этот метод выполняется с this=rabbit.





// Почему наедаются оба хомяка?
// важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple




// Давайте внимательно посмотрим, что происходит при вызове speedy.eat("apple").

// Сначала в прототипе (=hamster) находится метод speedy.eat, а затем он выполняется с this=speedy (объект перед точкой).
// Затем в this.stomach.push() нужно найти свойство stomach и вызвать для него push. Движок ищет stomach в this (=speedy), но ничего не находит.
// Он идёт по цепочке прототипов и находит stomach в hamster.
// И вызывает для него push, добавляя еду в живот прототипа.

// Получается, что у хомяков один живот на двоих!

// И при lazy.stomach.push(...) и при speedy.stomach.push(), свойство stomach берётся из прототипа (так как его нет в самом объекте), затем в него добавляются данные.

// Обратите внимание, что этого не происходит при простом присваивании this.stomach=:

let hamster = {
  stomach: [],

  eat(food) {
    // присвоение значения this.stomach вместо вызова this.stomach.push
    this.stomach = [food];
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Живот ленивого хомяка пуст
alert( lazy.stomach ); // <ничего>

// Теперь всё работает правильно, потому что this.stomach= не ищет свойство stomach. Значение записывается непосредственно в объект this.
// Также мы можем полностью избежать проблемы, если у каждого хомяка будет собственный живот:

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Живот ленивого хомяка пуст
alert( lazy.stomach ); // <ничего>

// Все свойства, описывающие состояние объекта (как свойство stomach в примере выше), рекомендуется записывать в сам этот объект. Это позволяет избежать подобных проблем.