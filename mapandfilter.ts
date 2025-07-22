interface Persons {
    name: string;
    age: number;
}

const people: Persons[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

const adultUpperCaseNames : string[] = people
.filter((person:Persons) => person.age >= 28)
.map((person: Persons) => person.name.toUpperCase());

console.log(adultUpperCaseNames); // Output: [ 'ALICE', 'CHARLIE' ]
