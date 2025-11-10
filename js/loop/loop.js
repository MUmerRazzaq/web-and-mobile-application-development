
let a = 5;
while (a > 0) {
    // console.log(a);
    a--;
}

do {
    // console.log(a);
    a--;
} while (a > 0);

for (let i = 0; i < 5; i++) {
    // console.log(i);
}

for (let j = 10; j > 0; j -= 2) {
    // console.log(j);
}

let arr = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log(typeof num); // num is the index (string)
    console.log(num);
}

let obj = {a: 1, b: 2, c: 3};
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    obj.d = 4; // Modifying the object during iteration
}

for (let key in obj) {
    console.log(key);
}


for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}