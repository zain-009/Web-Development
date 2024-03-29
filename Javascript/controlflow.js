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