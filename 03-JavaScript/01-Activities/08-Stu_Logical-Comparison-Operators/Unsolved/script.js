var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e); //true
var expression2 = (e < d); // 50 < 0 //false

// Use comparison operators so all expressions below log to the console as true
console.log(a === b);
// 50 === 100 /2
console.log(b !== e);
// 100 > 50
console.log(c < b);
// c % b -> 100 % 50 -> 0 >=0
console.log(d > 0);

// Use logical operators so all expressions below log to the console as true
// true && !false -> true
console.log(expression1 && !expression2); //!true || true -> true
console.log( !expression1 || expression2); // true || false
  
