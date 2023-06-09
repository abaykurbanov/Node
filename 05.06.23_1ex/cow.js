// const cow=require('cowsay');
// // import{say} from "cowsay";
// let output = cow.say({text:"trust me, node is good"});
// console.log(output);

// let test=require("./app/test.js");

// test.showHello();
// test.showBye()


const my_math = require('./my_math')
let res=my_math.add(7,8,9)


my_math.cat()
console.log(res)

//VN: cat пока что ничего не говорит. Нужно, чтобы он принимал параметры.
// Также вы сделали только первое задание - с модулем Common JS.
// Жду от вас второе - созданный модуль ES6 с демонстрацией его работы