// вводим название объекта для работы с ним
let city = prompt("Input 'city 1' or 'city 2'");

// 1.
var city1 = {
    name: "ГородN",
    population: 10000000,

    // 3. ---------------
    getName() {
        // метод для первого объекта
        return this.name;
    },

    // 4. ----------------
    exportStr() {
        // метод для первого объекта
        return 'name' + '=' + city1.name + '<br/>' + 'population' + '=' + city1.population + '<br/>'
    },

    //5. ---------------
    getCity() {
        return getObj.apply(this).exportStr();
    },
};

// 2.
var city2 = {
    name: "ГородM",
    population: 1e6,

    // 3. ---------------
    getName() {
        // метод для второго объекта
        return this.name;
    },

    // 4. ----------------
    exportStr() {
        //метод для второго объекта
        return 'name' + '=' + city2.name + '<br/>' + 'population' + '=' + city2.population + '<br/>'
    },

    //5. ---------------
    getCity() {
        return getObj.apply(this).exportStr();
    },

};

// 5. ----------------------------------------------
var getObj = function() {
    return this;
}

// тк мы вводим данные, то используем условие и выводим значение метода
if (city == "city 1") {
    document.write('<br/>' + 'Задание 3' + '<br/>');
    document.write(city1.getName() + '<br/>');

    document.write('<br/>' + 'Задание 4' + '<br/>');
    document.write(city1.exportStr());

    document.write('<br/>' + 'Задание 5' + '<br/>');
    document.write(city1.getCity() + '<br/>');

} else if (city == "city 2") {
    document.write('<br/>' + 'Задание 3' + '<br/>');
    document.write(city2.getName() + '<br/>');

    document.write('<br/>' + 'Задание 4' + '<br/>');
    document.write(city2.exportStr());

    document.write('<br/>' + 'Задание 5' + '<br/>');
    document.write(city1.getCity() + '<br/>');
}


// 7.
var d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log('Задание 7');
console.log('Массив: ' + d1);
console.log('Элемент №6: ' + d1[6]);
console.log('Элемент №7: ' + d1[7]);

// 8.
var d2 = [45, 78, 10, 3];
var sum2 = 0;
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i];
};
console.log('Задание 8');
console.log('Sum2: ' + sum2);

document.write('<br/>' + 'Задание 8' + '<br/>');
document.write('Sum2: ' + sum2 + '<br/>');

// 9.
var d3 = [45, 78, 10, 3];
d3[7] = 100;
var sum3 = 0;
for (let key in d3) {
    sum3 += d3[key];
};
console.log('Задание 9');
console.log('Sum3: ' + sum3);

document.write('<br/>' + 'Задание 9' + '<br/>');
document.write('Sum3: ' + sum3 + '<br/>');

// 10.
function my(a, b) {
    return b - a;
}
var d4 = [45, 78, 10, 3];

console.log('Задание 10');
document.write('<br/>' + 'Задание 10' + '<br/>');

console.log('d4: ', d4);
document.write('d4: ' + d4 + '<br/>');

console.log('Sorted d4: ', d4.sort(my))
document.write('Sorted d4: ' + d4.sort(my) + '<br/>');

// 12.
console.log('Задание 12:');

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.lengthh = function lengthh() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).lengthh());

//13
console.log('Задание 13:')

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

function repeat(string, times) {
    let result = "";
    for (let i = 0; i < times; ++i)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    let result = [];
    for (let i = 0; i < height; ++i) {
        let line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};
StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

//14
console.log('Задание 14:')

function logFive(sequence) {
    for (let i = 0; i < 5; i++) {
        if (!sequence.next()) {
            break;
        }
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
    this.index = -1;
    this.array = array;
}

ArraySeq.prototype.next = function() {
    if (this.index >= this.array.length - 1) {
        return false;
    }
    this.index += 1;
    return true;
};
ArraySeq.prototype.current = function() {
    return this.array[this.index];
};

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    this.index = -1;
}

RangeSeq.prototype.next = function() {
    if (this.from + this.index >= this.to) {
        return false;
    }
    this.index += 1;
    return true;
};
RangeSeq.prototype.current = function() {
    return this.from + this.index;
}
logFive(new ArraySeq([1, 2]));
logFive(new ArraySeq([1, 6, 2, 3, 4, 5, 7, 6]));
logFive(new RangeSeq(100, 1000));


//15
console.log('задание 15:')

function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function() {
        return `${this.from} -> ${this.to} is this card!`
    }
}

let c1 = new Card("Екатеринбург", "Москва");
console.log(c1.show())


//16
console.log('Задание 16:')
document.write('<br/>' + 'Задание 16' + '<br/>');

class Human {
    constructor(name, age, height) {
        this.name = name,
            this.age = age,
            this.height = height
    }
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstname() {
        return `${this.name}`;
    }
}
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];

for (let human of humans) {
    console.log(human.getInfo())
    document.write(human.getInfo() + '<br/>')
}


//18
console.log('Задание 18:')
let dt1 = new Date(2045, 0, 1);
console.log(dt1);


//19
console.log('Задание 19:')
let dt2 = +new Date() / 1000;
console.log(dt2);


//20
console.log('Задание 20:')

function getDays(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log('Месяц: ', 5, '; ', 'Год: ', 2021)
console.log(getDays(5, 2021));

document.write('<br/>' + 'Задание 20' + '<br/>');
document.write('Месяц: ' + 5 + '; ' + 'Год: ' + 2021 + '<br/>')
document.write(getDays(5, 2021) + '<br/>')