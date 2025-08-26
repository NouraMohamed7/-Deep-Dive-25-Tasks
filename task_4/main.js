let fullName = " Noura Mohamed ";
console.log(fullName.length);
console.log(fullName.trim());
console.log(fullName.length);
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.includes("Noura"));
console.log(fullName.slice(0, 6));


let fruits = ["apple", "banana", "mango"];

fruits.push("orange");

fruits.unshift("kiwi");

fruits.shift();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(fruits.at(2));
console.log(fruits.map((value) => (value.toLocaleUpperCase())));
fruits.filter((val) => (val.startsWith("b")));

fruits.forEach((val, i) => (

    console.log(`fruit ${i} is ${val}`)

));


console.log(Math.ceil(Math.random() * 10));
console.log(Math.round(5.1));
console.log(Math.trunc(5.6));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.6));
console.log(Math.sqrt(64));
console.log(Math.max(3, 8, 20, 1));
console.log(Math.min(3, 8, 20, 1));

let Age = 20;
Age >= 18 ? console.log("Adult") : console.log("Minor");

let person = {
    name: "Noura",
    age: 21,
    address: "Zag",

    displayInfo: function () {
        console.log(person.name);
        console.log(person.age);
        console.log(person.address);
    },

    contact: {
        phone: "222222",
        email: "no@gmail.com",

        displayContactInfo: function () {
            console.log(person.contact.phone);
            console.log(person.contact.email);
        }
    }
};

person.displayInfo();
person.contact.displayContactInfo();

person.address = "Cairo";
person.displayInfo();

let { name, age, contact: { phone } } = person;
console.log(name);
console.log(age);
console.log(phone);

let [firstFruit, secondFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergeBothArrays = [...arr1, ...arr2];

console.log(mergeBothArrays);

let thename = "Noura";
let theage = 21;
console.log(`Hello ${thename}, you are ${theage} years old.`);
