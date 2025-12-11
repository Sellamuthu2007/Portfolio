//Printing statement
/*  multi line commands use -> shift + alt + a
 */
/* console.log('Starting JavaScript with code.io');

const NAME = 'Sellamuthu';
const PWD = '123';
console.log(`Username : ${NAME} \nPassword : ${PWD}`); */

/* let bigIntLimit = 9007199254740992n;

//BigInt can be operated with only BigInt to get correct result

let lowBigInt = 9007199254740992n;
console.log(lowBigInt+ 3n);

let res = bigIntLimit + 5n;

console.log(typeof(res));

console.log(typeof(bigIntLimit)); */

(
    function add(a,b){
    console.log("Self Invoking function!");
    console.log(a+b);
    
}
)(7,9);

// add(10,20); -> will throw error

//Generator function 

/* function * generatorExp(){
    yield "This is first output of generator";
    yield "This is second output of generator";
    yield "This is third output of generator";
    return "Final Value"//Completed return
}

let generator = generatorExp();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next());
console.log(generator.next()); */

let values = [10,20,30,,40,,60]

console.log(values);





