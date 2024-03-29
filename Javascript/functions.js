//Functions
// let myFunction = function () {
//     console.log("I am a function");
// }
//------------------------------------------------------------------------------
// let student = { //this is an object
//     name: "Zain",
//     age: 20,
//     cgpa: 3.4,
// }
// console.log(student.name);
// for (let i in student) { // for in returns keys of objects
//     console.log(i, student[i]);
// }
//console.log("Escape Char\t is one character");
// let str = "softwareengineering"
// console.log(str.slice(8));
// let str1 = "Hello";
// let str2 = " World";
// console.log(str1.concat(str2.replace(" World"," Zain")));
// prompt("Enter your full name");
// let a = [1,2,3,4,5];
// a.splice(2,1,8);
// a.shift();
// console.log(a);
// const sum = (a,b) => {
//    return a+b;
// }
// let a = [1,2,3,4,5];
// a.forEach((val) => {
//     console.log(val);
// })
//-----------------------Functions---------------------------------------------------
// function add(num1,num2){
//     return num1 + num2;
// }
// let result = add(2,3); //when you dont give any arguments it is undefined
// console.log(result);
// function hello(username = "Zain"){
//     if(!username){
//         console.log("Enter a username");
//     } else {
//         console.log(`Hello ${username}`);
//     }
// }
// function solve(n1,n2,...n3){
//     return n3;
// }
// solve(1,2,3,4,5,6); //values after 2 are arranged in an array due to rest operator
// const user = {
//     username: "Zain",
//     age: 20,
// }
// function handleObject(anyobject) {
//     console.log(`Username is ${anyobject.username}, Age: ${anyobject.age}`);
// }
// handleObject(user);
// handleObject({
//     username: "Ali",
//     age: 20,
// });
//-----------------------Hoisting----------------------------------------------------
// const add = function (num) {
//     return num + 1;
// }
// add(5);
// sub(2);
// function sub(num) {
//     return 5-num;
// }
//-----------------------Arrow-Functions---------------------------------------------
// function hello() {
//     let user = "Zain";
//     const welcome = () => {
//         console.log(user);
//     }
//     console.log(welcome());
// }
// hello();
// const addOne = () => {
//     return; //must add return statement
// }
// const addTwo = () => (
//     1+2
//     //no return statement
//     );
// const returnUser = () => ({name:"Zain"});
//-----------------------IFFE--------------------------------------------------------
// (function chai() {
//     console.log("chai");
// })();
// ( (name) => {
//     console.log(name);
// })('Zain')