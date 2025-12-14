type Direction = 'left' | 'right' | 'up' | 'down';

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

const d1 = 'left';
move(d1); // Valid

let d2: string = 'right';
// -->> let d2 can be changed to any string at runtime but const is not
// move(d2); // Error: Argument of type 'string' is not assignable to parameter of type 'Direction'.

let d3: Direction = 'up';
move(d3); // Valid