interface person {
    name: string;
    age: number;
}

const user: person = {
    name:"Shubhanshu",
    age:42
}

console.log(user.name);

interface Greet {
    (name:String) : String;
}


const greetUser:Greet = (name) => `Hello, ${name}`;

console.log(greetUser("Alok"));
