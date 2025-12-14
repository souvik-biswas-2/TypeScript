// read only array
const Roles = ['admin', 'user', 'operator'] as const; 

// derive a union from the array
type role = (typeof Roles )[number];

function setRole(role: role){
    console.log(role);
}

// Argument of type '"admine"' is not assignable to parameter of type '"admin" | "user" | "operator"'
setRole('admin')

// console.log();
