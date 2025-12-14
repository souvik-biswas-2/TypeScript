const userData = { 'id' : 1, 'name': "John" };

type User5 = {
    id: number;
    name: string;
}

function isUser(v: unknown) : v is User5 {
    return (
        typeof v==='object' && v!==null
        && 'id' in v && typeof (v as any).id==='number'
        && 'name' in v && typeof (v as any).name==='string'
    )
}

const userDT = userData as unknown ;

if(isUser(userDT)){
    console.log(userDT.name);
    
}