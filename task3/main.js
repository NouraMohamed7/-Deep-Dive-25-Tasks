const stdName = "nora mohamed";
let stdAge = 21;
var status = true;
let grades = [90, 80, 60];

let totalOfGrades = grades[0] + grades[1] + grades[1];
console.log(totalOfGrades);

let avgOfGrades = totalOfGrades / grades.length;
console.log(avgOfGrades);

if (avgOfGrades >= 90 && avgOfGrades <= 100) {
    console.log("Excellent");
} else if (avgOfGrades >= 75 && avgOfGrades < 90) {
    console.log("very good");
} else if (avgOfGrades >= 60 && avgOfGrades < 75) {
    console.log("good");
} else if (avgOfGrades < 60 && avgOfGrades > 0) {
    console.log("failed");
} else {
    console.log("not found");
}

let subject = prompt("enter a subject number(1, 2, or 3)")
switch (subject) {
    case "1":
        console.log("Math: [grade]")
        break;
    case "2":
        console.log("Science: [grade]")
        break
    case "3":
        console.log("English: [grade]")
        break;
    default:
        console.log("not found")
 }


 for(let i=0 ; i<grades.length ; i++){
    console.log(grades[i]);
 }

function Total(){
   return grades[0] + grades[1] + grades[1];
} 
let total_grades=Total();
console.log(total_grades);

let avg = () => totalOfGrades / grades.length;
console.log(avg())

let num=10;
while(num>10){
    console.log( "done")
}

let num2 = 10;
do{
    console.log("done")
} while (num2 < 10);



let numbers=[1,2,3,4,5,6]
let sumOfNumbers=0;
for (let i = 0; i < numbers.length ; i++){
    sumOfNumbers += numbers[i];
  
}
console.log(` Sum using for loop:${sumOfNumbers}`);

let n;
while(n<numbers.length){
    sumOfNumbers+=numbers[n];
    n++;
}
console.log(` Sum using while loop:${sumOfNumbers}`);


