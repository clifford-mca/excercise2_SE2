//if...else Statement
let temperature = 20;

if (temperature > 30) {
    console.log("It's a very hot day!");
} else {
    console.log("The weather is pleasant.");
}

//if...else if...else Statement
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//Switch-Case with Multiple Cases
let fruit = "orange";

switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a common fruit.");
        break;
    case "orange":
    case "grapefruit":
        console.log("This is a citrus fruit.");
        break;
    default:
        console.log("Unknown fruit.");
}

//While & Do-While Loop
// While Loop
let num = 1;
while (num <= 3) {
    console.log("Number:", num);
    num++;
}

// Do-While Loop
let count = 1;
do {
    console.log("Counting:", count);
    count++;
} while (count <= 3);
