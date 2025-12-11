/* //Spread Operators :

//Array
const cars = ['Rools Royce','BMW','Innova19','KIA'];
let myCars = [...cars,"Audi","Benz","VOLVO-Panther"];

console.log(cars);
// mycar[2] = 'BMW-XGhost';
console.log(myCars); 

 //Objects :

let employee = {
    empID : "IO12301",
    name : "Alice",
    role : "React Developer"
}
console.log(employee);

let empDetails  = {
    ...employee,
    age : 29,
    salary : 100000
}
console.log(empDetails);  */
 


/* //Rest parameter :

function resetParams(a,b,...arr){ // Rest parameter is always placed at last of input
    console.log(`a : ${a}, b ${b}`);
    console.log(arr);    
}

resetParams(1,2,3,4,5,6,7,8,9,10); */


