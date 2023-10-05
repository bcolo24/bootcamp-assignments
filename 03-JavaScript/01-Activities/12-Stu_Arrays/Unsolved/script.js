// WRITE YOUR CODE HERE
var students =['opal','hamilton','pokie','jeffrey','marvin'];

console.log(students.length);
console.log("welcome to the class " + students[0]);
console.log("welcome to the class " + students[1]);
console.log("welcome to the class " + students[2]);
console.log("welcome to the class " + students[3]);
console.log("welcome to the class " + students[4]);

students[0] ='barkley';

if (students[0] == 'barkley') {
    console.log(students[0] + " is in class");
}