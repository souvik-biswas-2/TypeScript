type User = {
    id: string; // required property
    name: string; 
    email?: string; // optional property
    readonly createdAt: Date; // readonly property can't be reassinged
}

// id: string | number | boolean ->> union type
// email?: string ->> optional property

const user1: User = {id: "u1", name: "Bob", createdAt: new Date()};
const user2: User = {id: "u2", name: "Alice", email:"alice@dev.com",createdAt: new Date()};

console.log(user1);
console.log(user2);

// indexSignature
type Count = {
    [key: string] : number;
}

// record utility type
type countRecord = Record<"likes" | "comments" | "shares", number>;

const postCount: countRecord = {
    likes: 10,
    comments: 2,
    shares: 5
    // randomProp: 20 // Error: Object literal may only specify known properties, and 'randomProp' does not exist in type 'Record<"likes" | "comments" | "shares", number>'.
};