var myNumber: number = 5;
console.log("The number is:", myNumber);

function greet(name: string = "User"): string {
    return (`Hello, ${name}!`);
}

console.log(greet("Umer"));


let numberArray: number[] = [1, 2, 3, 4, 5];
console.log("Number Array:", numberArray);

type Person = {
    name: string;
    age: number;
}
let person: Person = { name: "Alice", age: 30 };
console.log("Person:", person);

enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", Color[favoriteColor]);
let tupleExample: [string, number] = ["Age", 25];
console.log("Tuple Example:", tupleExample);

function add(a: number, b: number): number {
    return a + b;
}
console.log("Addition Result:", add(10, 15));


