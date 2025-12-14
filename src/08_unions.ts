// value ->> this or that

function printID(id: string | number){
    if(typeof id === 'string'){
        id.toUpperCase();
    }else{
        id.toFixed(2);
    }
}

type Admin = {role: "Admin"; permissions : string[]};
type Customer = {role: "Customer"; points : number};

function DescribeUser(u : Admin | Customer){

    if(u.role === 'Admin'){
        console.log(u.permissions);
        
    }else{
        console.log(u.points);
        
    }
}

const Customer1 : Customer = {
    role : "Customer",
    points : 15,
}

DescribeUser(Customer1);

// second method

function DescribeUserWithInOperator(u: Admin | Customer){
    if('permissions' in u){
        console.log(u.permissions, 'Admin User');
        
    }else{
        console.log(u.points);
        
    }
}

const Admin1 : Admin = {
    role: "Admin",
    permissions: ["read", "write", "delete"],
}

DescribeUserWithInOperator(Admin1);

// array of union and union of array

const arrayOfUnion : (string | number)[] = ["a", 1, "b", 2]

const unionOfArray : string[] | number[] = Math.random() > 0.1 ? ["x", "y"] : [1,2];

// unionOfArray.push('z')