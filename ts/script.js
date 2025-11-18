var myNumber = 5;
console.log("The number is:", myNumber);
function greet(name) {
    if (name === void 0) { name = "User"; }
    return ("Hello, ".concat(name, "!"));
}
console.log(greet("Umer"));
var numberArray = [1, 2, 3, 4, 5];
console.log("Number Array:", numberArray);
var person = { name: "Alice", age: 30 };
console.log("Person:", person);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("Favorite Color:", Color[favoriteColor]);
var tupleExample = ["Age", 25];
console.log("Tuple Example:", tupleExample);
function add(a, b) {
    return a + b;
}
console.log("Addition Result:", add(10, 15));
