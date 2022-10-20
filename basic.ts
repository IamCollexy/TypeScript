
// functions & types

function add (a: number, b: number) {
    return a + b;
}

function printOutputs(value: any) {
    console.log(value);
};

// Generics 

function insertAtBeginning<T>( array: T[], value: T ) {
    const newArray = [value, ...array];
    return newArray;
} 

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);  // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], '3');

// updatedArray[0].split('');


// Primitives: number, string, boolean
// More Complex types: arrays, objects
// Function Types, parameters 

//Primitives

let age: number;
age = 12;

// Union Type
let userName: string | string[];
userName = 'Max';

let isInstructor: boolean ;
isInstructor = false;

// More Complex Types 

let hobbies: string[];
hobbies = ['Coding', 'Music'];

type Person = {
    name: string;
    age: number;
    
    };

let person: Person;

 person = {
    name: 'Max',
    age: 32
}


// let people: {
// name: string;
// age: number;
// }[]; 

// OR

let people: Person[];

// Type inference 

// let course = 'React - The Complete Guide ';
// course =  123456;

// Union Type
let course: string | number  = 'React - The Complete Guide ';

course = 123445;
