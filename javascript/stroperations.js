//string concatenation

function greet(firstName,lastName){
    Name = firstName+lastName;
    console.log(`Hey ${Name} , welcome to TajHotel 5star chennai.`);
}
first_name = 'Sella';
last_name = 'muth R';

for(let i=0;i<=10;i++){
    greet(first_name,last_name);
}

//concatenation of str with any datatype result in string 
//string + anything = string;

// console.log(typeof(first_name + '11'));
// console.log(typeof(first_name + 90));
// console.log(typeof(first_name + true));
// console.log(typeof(first_name + null));
// console.log(typeof(first_name + undefined));

//number

// console.log(typeof(10 + null));//10+null = 10+0=10
// console.log(typeof(10 + undefined)); //number but output will be come(error)
// console.log(typeof(10 + {})); //string

//boolean

//console.log(typeof(true + 10));
//console.log(typeof(true + undefined));//error
//console.log(true + false);

//Conversion

//Explicit

// //Number()

//console.log(10 + Number('10'));
//console.log(10 - Number('abc'));//NaN= Not a Number

// //Boolean()

// console.log(Boolean(10-11));//true
// console.log(Boolean('123'));//false
// console.log(Boolean(null));//false
// console.log(Boolean(undefined));//false

// //String()

//String(anything)=> String

// console.log(typeof(String(190)));
// console.log(typeof(String(null)));
// console.log(typeof(String(undefined)));

// vehicle = {
//     'brand' : 'Range Rover',
//     'fuelTupe' : 'Disel',
//     'price' : 4000000
// };

// console.log(vehicle);
// console.log(typeof(String(vehicle)));

