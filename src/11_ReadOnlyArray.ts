const arr : readonly number[] = [1,2,3];



// generic way

const arr2 : ReadonlyArray<number> = [1,2,3];

// arr2.pop();

arr.map // allowed
arr.filter // allowed