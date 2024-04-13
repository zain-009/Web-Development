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

// const myNums = [1,2,3];
// const total = myNums.reduce( (acc,curr) => { 
//     console.log(`acc: ${acc} | curr: ${curr}`);
//     return acc + curr
// },0); // 0 is the initial accumulator value
// console.log(total);