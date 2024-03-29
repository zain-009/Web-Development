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