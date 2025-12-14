// value must be everything from A and B

type inter1 = {id: string};
type inter2 = {createdAt: Date};

type Entity = inter1 & inter2;

const e : Entity = {id: 'e1', createdAt: new Date()}
console.log(e);
