let title : string = "intro";

// for "strict": true, the following lines will cause errors

// title = undefined; // Error
// title = null; // Error

let subtitle : string | undefined = undefined;

subtitle = "TypeScript Basics";

// void function

function log(msg :string) : void {
    console.log(msg);
    
}

// never type

function error(msg: string) : never {
    throw new Error(msg);
}

// -> Don't use "any" type
let data : any;

// -> Use "unknown" type instead of "any"
let input : unknown;
input = 5;
input = "Hello";
input = true;
input = { x: 10 };
// input.toUpperCase(); // Error: Object is of type 'unknown'.