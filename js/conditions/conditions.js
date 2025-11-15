let a = 5;
let b = 10;
let c = a + b;
if (c > 10) {
    console.log("c is greater than 10");
} else if (c === 10) {
    console.log("c is equal to 10");
} else {
    console.log("c is less than 10");
}

switch (c) {
    case 10:
            console.log("c is 10");
        break;
    case 15:
        console.log("c is 15");
        break;
    default:
        console.log("c is neither 10 nor 15");
}

let isActive = true;
let status = isActive ? "Active" : "Inactive";
console.log(`Status: ${status}`);

let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(`Day ${day} is ${dayName}`);

let grade = 85;
let result = (grade >= 90) ? "A" :
             (grade >= 80) ? "B" :
             (grade >= 70) ? "C" :
             (grade >= 60) ? "D" : "F";
console.log(`Grade: ${result}`);

let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("It's a banana");
        break;
    case "apple":
        console.log("It's an apple");
        break;
    case "orange":
        console.log("It's an orange");
        break;
    default:
        console.log("Unknown fruit");
}

let temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's warm outside");
} else {
    console.log("It's cold outside");
}

let age = 10;
let access = (age >= 18) ? "Granted" : "Denied";
console.log(`Access: ${access}`);
