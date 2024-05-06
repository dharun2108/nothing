// var rows = 5
//  for (let i=rows;i>=1;i--){
//     for(let j=i;j>=1;j--){
//         document.write("*")
//     }
//     document.write("<br>")
//  }
////////////////////////////////////////////////////////////////////////

// var rows = 5
//  for (let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
//  }
///////////////////////////////////////////////////////////////

// REVERSED STRING
// function reverseString(str){
//     let reversed ="";
//     for(let i= str.length-1;i>=0;i--){
//     reversed +=str[i]
//     }
//     return reversed;
// }
// console.log(reverseString("imdharun"));

/////////////////////////////////////////////////////////
// //ANOTHE METHOD OF STRING REVERSE
// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("imdharun"))

//////////////////////////////////////////////////////////////////////
// // FIND THE WORD IN THE SENTENCE
// function findLongestWord(sentence){
//     const words = sentence.split(" ");
//     let longestword="";
//     for(let word of words){
//         if(word.length > longestword.length){
//             longestword = word;
//         }
//     }
 
// return longestword;
// }
// console.log(findLongestWord("i am vengence"));

////////////////////////////////////////////////////////////////////////////////

// a palindrome is a word that reads the same forward and backword
// function isPalindrome(str){
//     const reversedStr =str.split("").reverse().join("");
//     return str === reversedStr;
// }
// console.log(isPalindrome("racecar"));


/////////////////////////////////////////////////////////////////
//REMOVE DUPLICATE ELEMENTS FROM YHE ARRAY
// function removeduplicate(arr){
//     return [...new Set(arr)]
// }
// console.log(removeduplicate([1,2,3,4,4,5,5,8,8]));
// function removeduplicate(arr){
//     const uniqueElement= [];

// for(let i=0;i < arr.length;i++){
//     if(uniqueElement.indexOf(arr[i]) === -1)
//     {
//         uniqueElement.push(arr[i]);
//     }
// }
// return uniqueElement;
// }
// console.log(removeduplicate([1,2,3,4,4,5]));
//////////////////////////////////////////////////////////////////////////////
//CHECK NIF THE FUNCTION IS ANAGRAM OR NOT
// function areAnagrams(str1,str2){
//     const sortedStr1 = str1.split("").sort().join("");
//     const sortedStr2= str2.split("").sort().join("");
//     return sortedStr1 === sortedStr2
     
// };
// console.log(areAnagrams("listen","silent"));
/////////////////////////////////////////////////////////////////////////////
// function countvowels(str){
//     const vowels=["a","e","i","o","u"];
//     let count=0;

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;//console.log(char)-if u a vowel letters
//         }

//     }
//     return count;//remove this if u wantv a vowel letters
// } 
// console.log(countvowels("multiple"));


/////////////////////////////////////////////////////////////////////////////////////
 //FIND THE LARGEST NUMBER IN THE ARRAY
//  function findLargestNumber(arr){
//     let largest =arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>largest){// if u want find smallest number use lessthan <
//             largest = arr[i];
//         }
//     }
//     return largest;
//  }
//  console.log(findLargestNumber([2,3,3,,4,5,6,78,1,45,67]))

//////////////////////////////////////////////////////////////////////////////
//WRITE A FUNCTION TO CHECK IF A GIVEN NUMBER IS PRIME OR NOT
// function isPrime(number){
//     for(let i=2;i<=number/2;i++){
//     if(number%i===0){
//         return false;
//     }
//     }
//     return true;
// }
// console.log(isPrime(2));
/////////////////////////////////////////////////////////////////////////////////


//calculate the facorial of a number
// function factorial(num){
//     if (num===0){
//     return 1;
//     }
// let factorial =1;
// for(let i=1;i<=num;i++){
//     factorial *=i;
// }
//     return factorial;
// }
// console.log(factorial(6));
////////////////////////////////////////////////////////////////////////////////////////

// ///////////////// PROGRAM FOR REMOVING WHIITE SPACE IN A STRING ///////////
// function removewhitespace(str){
//     const result = str.replace(/\s/g,"");
//     console.log(result)
// }
// removewhitespace("d  h  a  r   u  n")

///////////////////////////////////////////////////////////////////
                     //TERNARY OPERATORS
// let result = 9>33 ?"yes":"no"
// console.log(result);
// let y=10
// let z=12
// let x=y>z?"yes":"no"
// console.log(x);


/////////////////////////////////////////////////////////////////
                   //SHORT CIRCUIT EVALUATOIN
// let result = false && SVGComponentTransferFunctionElement()
// console.log(result);

///////////////////////////////////////////////////////////////////////////////
                    //SWITCH STATEMENT
// let a =5;
// switch (a) {
//     case 1:
//         console.log("i want to go gym");
//         break;
//         case 2:
//             console.log("will u marry me");
//             break;
//         case 5:
//             console.log("ur are asadist");
//             break;
//     default:
//         console.log("shut up your bloody mouth");
//         break;
// }

//////////////////////////////////////////////////////////////////////////////
                   //SPREAD OPERATOR   

// const array = [1,2,3,6,8,9,7,6];
// console.log(...array);

//USES OF SPREAD OPERATOR
//     *COPING ARRAY
//     *MERGING ARRAY
//     *PASSING MULTIPLE ARGUMENTS TO A FUNCTION

//            (1)-COPING ARRAY 
// const originalArray =[1,2,3,4,5,6]
// const copiedArray =[...originalArray]
// console.log(copiedArray);

//            (2)MERGING ARRAY
// const array1=[1,2,3,4,5]
// const array2=[6,7,8,9]
// const mergedArray=[...array1,...array2]
// console.log(mergedArray);

//              (3)PASSING MULTIPLE ARGUMENTS TO A FUNCTION
// const numbers=[1,2,3,4,5,6,7];
// function sum(a,b,c,d,e,f,g){
//     console.log(a+b+c+d+e+f+g);
// }
// sum(...numbers);
////////////////////////////////////////////////////////////////////////////////////////
//                      REST OPERATOR
// function display(first,second,...restArguments){
//     console.log(first);
//     console.log(second);
//     console.log (restArguments)
// }
// display(1,2,3,4,5,6)

///////////////////////////////////////////////////////////////////////////////
// indexof method 
// const array = [1,2,3,4,5,6]
// let a = array.indexOf(3);
// console.log(a);
//////////////////////////////////////////////////////////////////////////////////////
 
///////////////////        FIND () METHOD       ///////////////////////////
////find method get the first element that satisfies a condition
// const array=[1,2,3,4,5]
// let c=array.find((num)=>num %2===0);
// console.log(c);

////////////////////      FILTER METHOD        //////////////////////////
///FILTER METHOD GET AN ARRAY OF ELEMENT THAT SATISFIES THE CONDITION
// const array=[5,6,4,3,7,9,6,,4,6]
// let c=array.filter((num)=> num%2===0)
// console.log(c)

////////////////////      SLICE METHOD       ////////////////////////////
//slice method get a subset of the array from start index to end index(but not include end index)
// const array=[1,2,3,4,5,6,5]
// let c=array.slice(0,5)
// console.log(c);

//////////////////        PUSH() METHOD        ///////////////////////////
//PUSH METHOD USED TO ADDIMG ELEMMENTS TO AN ARRAY.PUSH WILL MODIFY THE ORIGINAL ARRAY ITSELF
// let array1 =[1,2,3];            
// array1.push(5,6,7);
// console.log(array1);

////////////////////        CONCAT METHOD()     ///////////////////////////
//CONCAT METHOD IS USED ADDING ELEMENTS TO THE ARRAY.
//CONCAT METHOD WILL CREATE A NEW ARRAY DOESN'T MODIFY THE ORIGINAL ARRAY
// let array=[1,23,4,5,]
// let c=array.concat(2,3,4,5,66)
// console.log(c);


///////////////////         POP()         //////////////////////////
//POP WILL REMOVE LAST ELEMENT OF THE ARRAY.
//IF U PRINT THE ORIGINAL ARRAY THE MODIFIED ARRAY WILL BE PRINTRD
// let arr=[1,2,3,45]
// let poped=arr.pop()
// console.log(poped);
// console.log(arr);
//////////////////////     SHIFT()       ////////////////////////////////////////
// SHIFTY METHOD WILL BE USED  TO REMOVE THE FIRST ELEMENTS IN THE ARRAY
// let arr=[1,2,3,4,5];
// let shifted=arr.shift();
// console.log(arr);
// console.log(shifted);

/////////////////////// SPLICE METHOD()            //////////////////////////
//THE SPLICE METHOD IS USED TO ADD,REMOVE,,OR REPLACE ELEMENTS IN AN ARRAY
// let letters =["a","b","c"]
////adding elements
// letters.splice(3,0,"d","h")
//// removing elements
// letters.splice(0,1)
////replace elements
// letters.splice(0,1,"xz")
// console.log(letters);
//////////////////////////////////////////////////////////////////////////////////

/////////////ARRAY METHOD FOR MODIFICATION AND ITERATION
//                *MAP()
//                *REDUCE()

/////////MAP METHOD () ///////////////////////////////////////////
// map method is used when u want to modify each element in a array and create a new array with the modified elements
// let arr=[1,4,7,9];
// let mapArray=arr.map((ar)=>ar*2);
// console.log(mapArray);

/////////////////////////FOREACH METHOD () ////////////////////////////////
// the for each method id when u want to perform some operations opn each elements in a array withoput creating a new array
// let arr=[1,2,3,4];
// arr.forEach((e)=>{
    
// console.log(e*3);
// })
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////        ARRAY SORT AND REVERSE   ///////////////////////
//array can be sorted and reversed by using sort() and reverse() methods of array
// let array=["d","h","a","r","u","n"];
// let reversed=array.reverse()
// console.log(reversed);
// let sorted=array.sort();
// console.log(sorted);

// its works only in Characters ang Strings
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////     ARRAY DESTRUCTORING     ///////////////////////////
//array destructuring allows you to extract elements from an array and assign them to an individual variables in a single statement
// introduced in ECMAscript (es6)
// const players=["williamson","virat kohli","faf duplesis"];
// const [GT,royalchallengersbangalore,RCB]= players;
// console.log(RCB);
// console.log(GT);
// console.log(royalchallengersbangalore);
//////////////////////////////////////////////////////////////////////////////////////////////
//                              ARRAY LIKE ELEMENTS                      //
//                               *arguments
//                               *strings
//                               *HTML collections
//ARGUMENTS
// function sum(){
//     console.log(...arguments);
//     console.log(arguments.length);
//     console.log(arguments[0]);
// }
// sum(1,2,6,8,9)

// //STRINGS
// const str="dharun"
// console.log(str);
// console.log(str.length);
// console.log(str[2]);

//HTML collections
// var boxes=document.getElementById("box");
// console.log(boxes[0]);
// console.log(boxes.length);
////////////////////////// ///////////////////////////////////////////////////////////////////////////
// var arrayLike = { 9:"h"};
// var a = Array.prototype.slice.call(arrayLike)
// console.log(a);

/////////////////////////////////////////////////////////////////////////////
// for (let i=1;i<=5;i++){

// if (i===3){
//     break;// the break statements used to terminate the loop
// }
// console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////
// for(let i=1;i<=5;i++){
//     if(i===3){
//         continue;// sontinue statements used to skip the currennt iteratio of thge loop and move to the (for loop) the next iteration
//     }console.log(i);

// }

// EXAMPLE OF THE FOR-OF LOOP
// let arr=[1,2,3,4]
// for (let val of arr){
//     console.log(val);
// }
// let arr=[23,4,5,68,78,68]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
/////////////////////////////////////////////////////////////////

//FOR-IN LOOP
// FOR IN LOOP USED TO THROUGH THE PROPERTIES OF AN OBJECTS
// IT ALLOWS YOU TO ITERATE OVER THE KEYS OF AN OBJECT AND ACCESS THE VALUES ASSOCIATED BY THE USING KEYS AS THE INDE
// const person={
//     name:"dharun",
//     role:"software devloper"
// };
// for (let values in person){
//     console.log(person[values])
// }
////////////////////////////////////////////////////////////////////////////

//FOR-EACH METHOD
// const person={
//     name:"dharun",
//     role:"software devloper"
// };
// Object.keys(person).forEach((value)=>{
//     console.log(value);
// });
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////               HIGHER-OREDR FUNCTION         ////////////////////////////
// function hof(func){
//   func();
// }
// hof(sayhello)
//     function sayhello(){
//     console.log("hello");
//     };
///////////////              DEFAULT PARAMETER IN FUNCTION   /////////////////////////////////
// function greet (name="dharun"){
//     console.log("i'm "+ name);
// }
// greet();////if there is no special arguments in function then the default parameter set to a values
// greet("batman");

///////////////           FIRST-CLASS FUNCTIONS           //////////////////
//if the function is treated like other variable is called first classfunction
// function double(number){
//     return number*2;
// }
// function performOperation(double,value){
//     return double(value);
// }
// console.log(performOperation(double,9));

////////////////////////////////////////////////////////////////////////////////////

///////////////////      A PURE AND IMPURE FUNCCTIONS     ////////////////
//PURE FUNCTIONS
// function add(a,b){
//     console.log(a+b);
// //same output for the same input 
// }
// add(4,7)


//IMPURE FUNCTIONS
// let total=0;
// function addTotal(value){
//     total+=value;
//     console.log(total);
//     //diffrent output for the same input
// }
// addTotal(5)
// addTotal(5)
// addTotal(5)
///////////////////////////////////////////////////////////////////////////////////////////
//FUNCTION CURRYING
// curring in javascript transforms a function with multiple arguments into a nested series of functions,each taking a single arguments.

// function multiply(a,b){
//     return a*b;
// }
// function curriedMultiply(a){
//     return function(b){
//         return a*b;
//     };
// }
// const double = curriedMultiply(2);
// console.log(double(5));
// const triple = curriedMultiply(3)
// console.log(triple(8))
//////////////////////////////////////////////////////////////////////////////
//CALL,APPLY,BIND METHODS
// these methods provide a way to manipulate the this. value and pass arguments to function

// function sayhello(message){
//     console.log(`${message},${this.name}!`);

// }
// const person = {name:"dharun"};
// sayhello.call(person,"hello");
// sayhello.apply(person,["hii"])
// const greetperson=sayhello.bind(person)
// greetperson("greeetings")
///////////////////////////////////////////////////////////////////////////////////
// var element = document.getElementById("mydiv1");
// element.textContent="<strong>its working</strong>"

/////////////////////////////////////////////////////////////////////////////////////

// var element = document.getElementById("mydiv1");
// element.innerHTML="<h1>itsworking</h1>"


// var element=document.getElementById("mydiv1");
// element.setAttribute("data-info","new-value");
// element.removeAttribute("data-info")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //WAYS TO CLONE OR COPYING A OBJECTS
// const originalobjet = {
//     name:"dharun",
//     age:78
// };
// //SPREAD SYNTAX METHOD
// const cloneobjectSpread = {...originalobjet}
// console.log(cloneobjectSpread);
// //OBJECT.ASSIGN{}
// const cloneobjectAssign = Object.assign({},originalobjet)
// console.log(cloneobjectAssign);
// //JSON.PARSE() AND JSON.STRINGIFY()
// const cloneobjectJSON = JSON.parse(JSON.stringify(originalobjet))
// console.log(cloneobjectJSON);

// const arr=[2,3,4,5]
// const mapresult = arr.map((ar)=>{
//     return ar + 2;
// })
// const foreachresult = arr.forEach((ar,i)=>{
//     arr[i]= ar + 3;
// });
// console.log(mapresult,foreachresult,arr);
/////flattening a array
// let arr =[[1,2,3],[8,6],[9,5,[1,3,4]],[1,2]] 
// console.log([].concat(...arr));
// console.log(arr.flat(2));


//objects  ////////////////////////
// const user = {
//     name: "dharun",
//     age :21

// };
//  delete user.name;
//  console.log(user);


// const property = "myname";
// const name = "dharun";
// const user = {
//     [property]:name,

// }
// console.log(user);

//accesing key value pair
// const user = {
//     name:"dharuntamilselvan",
//     age:21,
//     istotalawesome:true
// };
// for (let key in user){
//     console.log(user[key]);
// }


