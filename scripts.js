var br = "<br>";
var hr = "<hr>";

var age=25;
console.log("Hi my name is Martin and Im " + age + " years old");

var players= ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.log("The most valuable player of the match is " +players[2]+"");

var cars= ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferarri']
console.log(cars.sort());

var fruits=['apple','banana','kiwi',]
fruits.push('orange')
console.log(fruits)
console.log(fruits.slice(0,3))

var animals=['monkey', 'horse','dog']
console.log(animals)
console.log(animals.reverse())
animals.unshift('cat')
console.log(animals)

var text="mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
var temp = new Array();
temp = text.split('/'); 
console.log(temp.join())
temp[0] = 'mango' +hr +br;
temp[1]	= 'cherries' +hr +br;
temp[2] = 'kiwi' +hr +br;
temp[3] = 'grapes' +hr +br;
temp[4] = 'pear' +hr +br;
temp[5] = 'peach' +hr +br;
temp[6] = 'orange' +hr +br;
temp[7] = 'lemon' +hr +br;
console.log(temp)
document.write(temp.join(""))

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var sum = a + b + c + d + e
console.log(sum)

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var multi = f * g * h * i
console.log(multi)

var result = multi / sum
console.log(result)
document.write(result)

numbers = [ 
[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 25, 7],
[21, 4, 6, 17],
[3, 5, 26, 3] ]
console.log(numbers[1][1], numbers[4][2], numbers[5][3], numbers[2][3], numbers[2][1])