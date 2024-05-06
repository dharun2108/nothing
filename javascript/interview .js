// IIIFE-IMMEDIATELY INVOKED FUNCTION EXPRESSION
// (function (x){
//     return (function (y){
//         console.log(x);
//     })(2);
// })(5);



//FUNCTION SCOPE - O/P BASED QUESTIONS
// for(let i=1;i<=5;i++){
// setTimeout(function(){
//     console.log(i)
// },i*1000);
// }



// SPREAD AND REST OPERATORS IN JAVASCRIPT
// function multiply(...num){//rest-rest opretors should be in the last of parameter
//     console.log(num);

// }
// var arr = [5,6];
// multiply(...arr);//spread

//EXAMPLE OF THE REST OPERATORS 
// const fn = (a,x,y,...numbers)=>{         //rest operator must be located in the last of the parameters 
//     console.log(x,y,numbers);
// };
// fn(1,2,3,7,8,1,2,3,4,5,6,7,8);


//DIFFERENCE BETWEEN REGULAR vs ARROW FUNCTION
// function square(num){
//     return num*num
//}

//arrow function syntax
// const arrowsquare = (num)=>{
//     return num*num
//}

//implicit return key word
// const arrsquare=(num)=>num*num//arrow function doesn't need a return key word

//arguments key words(in regular functions we pass a argument key word and get results)
// function fn(a,b,c) {
//     console.log(arguments)
// }
// fn(2,3,45)

//in a arrrow functions we can't pass a arguments in it ,it states that arguments not defined
// const fnArr=()=>{
//     console.log(arguments)

// }
// fnArr(1,2,3)

//ARROW FUNCTIONS ON THIS KEY WORDS
// let user={
//     username:"dharun",
//     rc1:()=>{
//         console.log("i'm inevitable"+ this.username);
//     },
//     rc2(){
//         console.log("i'm vengeance"+ this.username);
//     },

// };
// user.rc1();
// user.rc2();



//CLOSURES-A CLOSURE IS A COMBINATIONS OF A FUNCTION BUNDLED TOGETHER (ENCLOSED)WITH THE REFERENCES TO IT'S SORROUNDING STATE (LEXICAL ENVIRONMENT).IN JAVASCRIPT FUNCTIONS ARE CREATED WHEN A FUNCTION IS CREATED,AT FUNCTION CREATION TIME 
// function makefunc(){
//     var name="dharun";
//     function displayname(){
//         console.log(name);
//     }
//     return displayname;
//  } 
//  var myfunc = makefunc();
// myfunc();

// var e=10
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d+e

//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4))


// let count=0;
// (function printcount(){
//     if (count===0){
//         let count=1;//shadowing occures
//         console.log(count);
//     }
//     console.log(count);
// })();



