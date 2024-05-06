//for-of loop

// let arr = [1,2,3]
// for(let sum of arr){
//     console.log(sum)
// }

// for-in method 
// const person ={
//     name:"dharun",
//     age: 30,
//     role:"developer"
// };
// for(let value in person){
//   console.log(person[value])
// }

//for each loop in for-of loop
// const array =[1,2,3]
// //for each loop
// array.forEach(item =>{
//     console.log(item)
// })


// //for each loop in for-in loop
// const person ={
//     name : "dharun",
//     age: 21,
//     role:"front end developer"
// };
// Object.values(person).forEach(function(item){
//     console.log(item);

// == operators
// if (5=="5"){
//     console.log("executed")
// }


//=== operators
// if (5==="5"){
//     console.log("executed")
// }
// else{
//     console.log("not executed")
// }

// CHAPTER 2-FUNCTIONS IN JAVASCRIPT//////////
//FUNCTION EPRESSION
// a function which is assigned to a variable is called function expression
// const add = function(a,b){
//     return a+b;
// };
// console.log(add(2,3))


//ARROW FUNCTIONS
// const add =(x,y)=> x+y
// console.log(add(5,16))
//CALL BACK FUNCTIONS
// function add(x,y){
    
//     let a=10,b=5;
//     return a+b
// }
// var result=add()
// console.log(result)


// const numbers=[1,2,73]
// function logNumber(number){
//     console.log(numbers);
// }
// logNumber()

// CREATE A NEW PROMISE USING PROMISE CONSTRUCTOR]
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const randomNum = math.floor(math.random()*10);
//         if(randomNum<5){
//             resolve(`sucess!random number:${randomNum}`)
//         }
//         else{
//             reject(`error!ranmdom number:${randomNum}`)
//         }
        
//     }, 1000);
//     myPromise
//     .then((result)=>{
//         console.log(result)
//     });
//     .catch((error)=>{
//         console.error(error)
//     });

// MAP FUNCTION
// const nums=[1,2,3,4];
// const multyplythree = nums.map((num,i,arr)=>{
//     return num*3+i;
// });
// console.log(multyplythree);

//WHAT IS FILTER
// const nums =[1,2,3,4]
// const moreThanTwo =nums.filter((num)=>{
//     return num >2
// })
// console.log(moreThanTwo)

//WHAT IS REDUCE
// const nums = [1,2,3,4];
// const sum = nums.reduce((acc,curr,i,arr)=>{
// return acc + curr;
// },0);
// console.log(sum);

// MAP VS FOREACH
// const arr =[1,2,3,4];
// const mapResult =arr.map((ar)=>{
//     return ar+2;
// })
// console.log(mapResult);

// const forEachResult =arr.forEach((ar,i)=>{
//     arr[i]=ar+3;
// })
//     console.log(arr);

// let students = [
//     {name:"piyush",rollnumber:31,marks:89},
//     {name:"krish",rollnumber:21,marks:45},
//     {name:"astosh",rollnumber:31,marks:38},
//     {name:"sathish",rollnumber:45,marks:70},
// ];

// const names =students.map((stu)=>stu.name.toUpperCase());
// console.log(names);

// const details = students.filter((stu)=>stu.marks>40&&stu.rollnumber>30);
// console.log(details);
 
// const sum = students.reduce((acc,curr)=>acc + curr.marks,0);
// console.log(sum);

/////////////////////////////////////////////////////////////////////////////////

// const combine = students.filter((stu)=>stu.marks > 60).map((stu)=>stu.name)
// console.log(combine);
// const totalmarks = students.map((stu)=>{
//     if(stu.marks<60){
//         stu.marks +=20;
//     }
//     return stu;
    
// })
// .filter((stu)=>stu.marks > 60).reduce((acc,curr)=>acc + curr.marks,0)
// console.log(totalmarks);



// const fn = (a,x,y,...numbers)=>{         //rest operator must be located in the last of the parameters 
//     console.log(a,x,y,numbers);
// };
// fn(1,2,3,7,8,1,2,3,4,5,6,7,8);










