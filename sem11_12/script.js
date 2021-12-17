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
       return 'name'+'='+ city1.name + '<br/>' + 'population'+'='+city1.population+'<br/>'
    },

    //5. ---------------
    getCity(){
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
        return 'name'+'='+ city2.name + '<br/>' + 'population'+'='+city2.population+'<br/>'
    },

    //5. ---------------
    getCity(){
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
d1[7]=100;
console.log('Задание 7');
console.log('Массив: '+d1);
console.log('Элемент №6: '+d1[6]);
console.log('Элемент №7: '+d1[7]);

// 8.
var d2 = [45, 78, 10, 3];
var sum2 = 0;
for (let i=0; i<d2.length;i++){
    sum2+=d2[i];
};
console.log('Задание 8');
console.log('Sum2: '+sum2);

document.write('<br/>' + 'Задание 8' + '<br/>');
document.write('Sum2: '+sum2 + '<br/>');

// 9.
var d3 = [45, 78, 10, 3];
d3[7] = 100;
var sum3 = 0;
for ( let key in d3) {
    sum3 += d3[key];
};
console.log('Задание 9');
console.log('Sum3: '+sum3);

document.write('<br/>' + 'Задание 9' + '<br/>');
document.write('Sum3: '+sum3 + '<br/>');

// 10.
var d4 = [45, 78, 10, 3];
function my(a,b){
    d4.sort(my);
    
} 
// 11.
// 12.