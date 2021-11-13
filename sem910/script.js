//1
document.write('<br/>' + "Задание 1" + '<br/>')
for (let i = 0; i < 8; i++) {
    document.write("#".repeat(i) + '<br/>');
}
//2
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) & ((i % 5 == 0))) {
        console.log("FizzBuzz")
    } else {
        console.log(i);
    }
}
//3
document.write('<br/>' + "Задание 3" + '<br/>')
for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        document.write(("   " + "#").repeat(4) + '<br/>');
    } else {
        document.write(("#").repeat(4) + '<br/>');
    }
}

//4
document.write('<br/>' + "Задание 4" + '<br/>')

function minimum(x, y) {
    if (x < y) {
        document.write("Минимальный элемент: " + x + '<br/>');
    } else if (x > y) {
        document.write("Минимальный элемент: " + y + '<br/>');
    }
}
//let x = prompt("Введите число №1: ");
//let y = prompt("Введите число №2: ");
//minimum(x, y);

//5
document.write('<br/>' + "Задание 5" + '<br/>')
let strB = "WeBB";

function countBs(a) {
    let cB = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a.charAt(i) == "B") {
            cB += 1;
        }
    }
    document.write("Количество B: " + cB + '<br/>');
}

function countChar(a, b) {
    let count = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a.charAt(i) == b) {
            count += 1;
        }
    }
    document.write('Количество ' + b + ': ' + count + '<br/>');
}
document.write("Строка: " + strB + '<br/>');
countBs(strB);
countChar(strB, 'e');

//6
document.write('<br/>' + "Задание 6" + '<br/>')

function range(a, b) {
    let arr = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(array) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        s += array[i];
    }
    document.write("Сумма элементов " + array + ": " + s + '<br/>');
}

document.write("Диапазон от 1 до 15: " + range(1, 15) + '<br/>')
sum(range(1, 15))