//var name = "Zain"
//let lname = "Ali"
//var age = 20
//console.table([name,lname,age])
// let name1 = "Zain"
// let name2 = "Ali"
// let cat = `${name1} ${name2}`
// console.log(cat);
//------------------------------------------------------------------------------
//Conversion to Number
// let num = "33"
// let intNum = Number(num)
// console.log(typeof intNum);
// console.log(intNum);
//------------------------------------------------------------------------------
//Conversion to String
// let num = 1
// let stringNum = String(num)
// console.log(typeof stringNum);
// console.log(stringNum);
//------------------------------------------------------------------------------
//Conversion to Boolean
// conversion of 1 to bool is true. "" to bool is false. "gg" to bool is true
//------------------------------------------------------------------------------
// let isLoggedIn = 1
// let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof boolIsLoggedIn);
// console.log(boolIsLoggedIn);
// let emptyString = ""
// let boolEmptyString = Boolean(emptyString)
// console.log(typeof boolEmptyString);
// console.log(boolEmptyString);
//------------------------------------------------------------------------------
//Operations
// let val = 3
// let negVal = -val
// console.log(negVal);       //returns -3
// console.log(2**3);         //returns remainder
// console.log("1" + 2);      //returns 12
// console.log(1 + "2");      //returns 12
// console.log(1 + 2 + "3");  //returns 33
// console.log("1" + 2 + 3);  //returns 123
// console.log(true);         //returns 1
// console.log(+true);        //returns 1
// console.log("2" == 2);     //returns true
// console.log("2" === 2);    //returns false
//console.log(null);          //returns object
//console.log(undefined);          //returns undefined
//------------------------------------------------------------------------------
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
//-----------------------Stack--------------------------------------------------------
// let car1 = "GTR";
// let car2 = car1;
// car2 = "F1";
// console.log(car1);
// console.log(car2); //both display different names
//-----------------------Heap--------------------------------------------------------
// let user1 = {
//     name: "Zain",
//     email: "zain@gmail.com",
// }
// let user2 = user1;
// user2.name = "Ali";
// console.log(user1.name);
// console.log(user2.name);  //both usernames change when one is changed
//-----------------------Math--------------------------------------------------------
// console.log(Math.round(2.6));
// let count = 10.645;
// console.log(count.toPrecision(2));
// let no = 1000000;
// console.log(no.toLocaleString());
// console.log((Math.random()*10) + 1);
// let min = 10;
// let max = 20;
// console.log(Math.floor(Math.random() *(max - min + 1) + min));
//-----------------------Date--------------------------------------------------------
// let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getMonth());
//-----------------------Arrays------------------------------------------------------
// let a = [1,2,3,4,5];
// let b = [1,2,3,4,5];
// a.push(6);
// a.unshift(0);
// a.shift();
// console.log(a);
// console.log(a.includes(2));
// console.log(a.indexOf(2));
// console.log(a.splice(1,3));
// console.log(a);
// console.log(b.slice(1,3));
// console.log(b);
// let ab = a.concat(b);  //returns a new array unlike push
// let ab_spread = [...a, ...b];
// console.log(ab);
// console.log(ab_spread);
// let abc = [1,2,3,[4,5,6,[7,8,9,[10]]]];
// console.log(abc.flat(Infinity));  //combines every element of nested array into a single array
// console.log(Array.from("Zain")); //breaks every character into an array element
// let n1 = n2 = n3 = 5;
// console.log(Array.of(n1,n2,n3)); //makes an array of the elements given to it
//-----------------------Objects-----------------------------------------------------
// let user3 = {
//     name: "Zain",             //use user3.name to access
//     [symbol]: "0",            //use user3[symbol] to access
//     "email": "zain@email.com" //use user3[email] to access
// }
// user3.greet = function () {
//     console.log(`Hello ${this.name}`);
// }
// console.log(user3.greet());
// const fbuser = new Object();  //singleton object
// const instauser = {};         //not a singleton onbject
// const obj1 = {1:"One", 2:"Two"};
// const obj2 = {3:"Three", 4:"Four"};
// const obj3 = Object.assign({}, obj1, obj2);
// const obj4 = {...obj1, ...obj2};
// console.log(obj3);
//-----------------------Object-Destructuring----------------------------------------
// const user4 = {
//     username: "Zain",
//     email: "zain@gmail.com",
//     job: "React Developer",
// }
// const {username : nameofuser} = user4;
// console.log(nameofuser);
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
//-----------------------Control-Flow------------------------------------------------
// let userLoggedIn = true;
// if(userLoggedIn) console.log("User is Logged in");
// let temperature = 32;
// switch (temperature) {
//     case 32:
//         console.log("It is hot today!");
//         break;
//     default:
//         break;
// }
// const userEmail1 = [];
// const userEmail2 = "";
// if (userEmail1) {
//     console.log("User has Email");
// }
// if (userEmail2) {
//     console.log("User does not have Email");
// }
// -0, 0, null,"", undefined, NaN, BigInt 0n, are considered false
// "0", 'false', " ", [], {}, function(){} is truthy because it is in quotes
// const userEmail = [];
// if (userEmail.length === 0) {
//     console.log("Empty Array");
// }
// const empty = {}
// if (Object.keys(empty).length === 0) {
//     console.log("Object is Empty!");
// }
//-----------------------Nullish-Coalescing-Operator---------------------------------
// let val1;
// val1 = null ?? 10;
//-----------------------Loops-------------------------------------------------------
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// let val =0;
// while (val < 10) {
//     console.log(`val is ${val}`);
//     val += 2;
// }
// const arr = [1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);
// }
// const greetings = "Hello World";
// for (const greet of greetings) {
//     console.log("Each Char is " + greet);
// }
// const map = new Map(); //maps remeber order of key value pairs
// map.set('Pk','Islamabad') //maps are not iteratable
// map.set('US','Washigton')
// map.set('Gr','Berlin')
// map.set('Gr','Same key not entered in map')
// for (const [key,value] of map) {
//     console.log(key, '-',value);
// }
//for of does not work on objects
// const lang = {
//     cpp: "C++",
//     rb: "Ruby"
// }
// for (const key in lang) {
//     console.log(lang[key]);
// }
// const arrlang = ["C++","Ruby"];
// for (const key in arrlang) {
//     console.log(arrlang[key]);
// }
//array for of loop
//objects for in loop
// const coding = ["js","C++","Ruby"];
// function print(item) {
//     console.log(item);
// }
// coding.forEach( function (item) {console.log(item);} ) //callback function in array
// coding.forEach( (item) => {console.log(item);} )
// coding.forEach(print)
// const myCoding = [{lang: "Javascript",name: "js"},{lang: "Java",name: "jv"}]
// myCoding.forEach( (item) => {console.log(item.lang +" "+ item.name);} )
//-----------------------Filter------------------------------------------------------
// const nums = [1,2,3,4,5,6,7,8,9];
// const newNums = nums.filter( (num) => num > 5 ); //returns values. For each does'nt return values
// // if we open scope, then we need to say return num > 5
// console.log(newNums);
// const books = [
//     {
//         genre: "History",
//         publish: 2003,
//     },
//     {
//         genre: "Science",
//         publish: 2003,
//     },
//     {
//         genre: "Scifi",
//         publish: 2003,
//     }
// ]
// const myBooks = books.filter( (bk) => {
//     return bk.genre === 'History' || bk.genre === 'Science'
// } )
// console.log(myBooks);

//-----------------------Map-Operations----------------------------------------------
// const myNum = [1,2,3,4,5];
// // const newNums = myNum.map( (num) => num + 10 );
// // console.log(newNums);
// const chaining = myNum
// .map( (num) => num * 10 ) //result is given to the chain below
// .map( (num) => num + 1)
// .filter( (num) => num > 30 );
// console.log(chaining);

const myNums = [1,2,3];
const total = myNums.reduce( (acc,curr) => { 
    console.log(`acc: ${acc} | curr: ${curr}`);
    return acc + curr
},0); // 0 is the initial accumulator value
console.log(total);

//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
