// let num : number = 15;

// over annotation is not needed
// let num : string = 15;

let num = 15;
// num = '15';


// annotation needed
export function add(num1 : number, num2 : number) : number{
    return num1 + num2;
}

console.log(add(5, 10));

// annotate when type is not obvious
let value : string | number;

value = Math.random() > 0.5 ? 15 : 'Fifteeen';