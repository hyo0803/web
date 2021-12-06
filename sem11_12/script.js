// вводим название объекта для работы с ним
let city = prompt("Input 'city 1' or 'city 2'");

// 1.
var city1 = {
    name: "ГородN",
    population: 10000000,

    // 3. ---------------
    getName() {
        // метод для первого объекта
        city1.getName = function() {
            document.write(city1.name + '<br/>')
        }
    },

    // 4. ----------------
    exportStr() {
        // метод для первого объекта
        for (let key in city1) {
            document.write(key + ' = ' + city1[key] + '<br/>')
        }
    },
};

// 2.
var city2 = {
    name: "ГородM",
    population: 1e6,

    // 3. ---------------
    getName() {
        // метод для второго объекта
        document.write(city2.name + '<br/>')
    },

    // 4. ----------------
    exportStr() {
        //метод для второго объекта
        for (let key in city2) {
            document.write(key + ' = ' + city2[key] + '<br/>')
        }
    },

};

// тк мы вводим данные, то используем условие и выводим значение метода
if (city == "city 1") {
    document.write('<br/>' + 'Задание 3' + '<br/>');
    city1.getName();

    document.write('<br/>' + 'Задание 4' + '<br/>');
    city1.exportStr();

} else if (city == "city 2") {
    document.write('<br/>' + 'Задание 3' + '<br/>');
    city2.getName();

    document.write('<br/>' + 'Задание 4' + '<br/>');
    city2.exportStr();
}


// 5. ----------------------------------------------
var getObj = function() {

    }
    // 6.
    // 7.
    // 8.
    // 9.
    // 10.
    // 11.
    // 12.