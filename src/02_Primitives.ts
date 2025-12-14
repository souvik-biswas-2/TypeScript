let username : string = "Souvik";
let age : number = 25;
let isDeveloper : boolean = true;

let big : bigint = 2n ** 99n - 1n;

// number + bigint is not allowed

// let sum = age + big; // Error

// type conversion
let sum = age + Number(big);

console.log(sum);

const TOKEN : unique symbol = Symbol("token");