// tuples ->> fixed lenght and fixed types

// (string | number) []
// optional tuples

const userEntry : [string , number] = ["Souvik", 22];

type Type1 = [status: number, message?: string]; //optional tuple

// read only

const corner : readonly [number, number] = [0,0];
