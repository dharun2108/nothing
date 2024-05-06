/*function x()
{
    for( let i=1;i<=5;i++)
    setTimeout(function ()

{console.log(i)},i*1000)
}
x()*/



//constructor statement

function counter(){
var count =1
return function increamentcounter(){
    count++
    console.log(count)
}
}
var counter1 = counter()
counter1()
counter1()





