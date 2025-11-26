// //if,else,elseif

// //switch

// month = ['January','February','March','April','May','June','July','August','September','October','Novmber','December'];
// for(let i=0;i<month.length;i++){
//     checkSpecial(month[i]);
// }

// function checkSpecial(month){
//     switch(month){
//     case 'January':
//         console.log('Happy yew near');
//         break;
//     case 'February':
//         console.log('Month with 28 days');
//         break;
//     case 'August':
//         console.log('Happy Independence day');
//         break;
//     case 'Decemeber':
//         console.log('Happy christmas');
//         break;
//     default:
//         console.log('Happy Diwali');
//         break;
//     }
// }

// arr=[1,9,2,8,6];
// console.log(arr.length);
// console.log(arr.sort());

//Loops

//for loops

// for(let i=1;i<=5;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//while Loops

// const limit = 10;
// let seconds=1;
// while(seconds < limit){
//     console.log("Peoples are safe");
//     seconds++;
// }

//do while Loops
//Execute statements within loop atleast once

// const limit = 0;
// let seconds = 1;
// do{
//     console.log(`${seconds}.Peoples are safe`);
//     seconds+=1;
// }while(seconds < limit);

//Function

//1.Normal Named functions using 'function' keywords

//2.lambda functions
// let cube = x=>(x*x*x);//Lambda or Anonyms function
// console.log(cube(10));

//3.Higher order function => function that receives another function as input.

function f1(){
    console.log('Higher order function');
}
// //4.Callback function => function which is passed as input to another function.
// function f2(){
//     console.log('Call back function');
// }
// f1(f2()) // callback func is executed before higher order func.

// //Higher order 
// function add(callBack,a,b){
//     console.log(a+b);
//     callBack(10,90);
// }
// function sub(a,b){
//     console.log(b-a);
// }
// add(sub,1,10);    

//uncurryed function

function addTwo(a,b){
    return a+b;
}
console.log(addTwo(10,20));

//currying -> curryed function

function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
//chained function calling
add(10)(20)(30);