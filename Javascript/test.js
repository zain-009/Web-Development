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
// let student = {                                           //this is an object
//     name: "Zain",
//     age: 20,
//     cgpa: 3.4,
// }
//console.log(student.name);
// for in returns keys of objects
// for (let i in student) {
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
function solve(n1,n2,...n3){
    return n3;
}
solve(1,2,3,4,5,6); //values after 2 are arranged in an array due to rest operator
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
//-----------------------Math--------------------------------------------------------
