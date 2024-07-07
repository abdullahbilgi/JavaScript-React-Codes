/* ⭐Time Stamps⭐
#1   JavaScript tutorial for beginners 🌐
#2   Variables 📦
#3   Arithmetic operators ➕
#4   Accept user input 💬
#5   Type conversion 💱
#6   Constants 🚫
#7   ⭐ Counter program 🔢
#8   Math object 🧮
#9   Random number generator ⁉
#10  If statements 🤔
#11  Checked property ✅
#12  Ternary operator ❓
#13  Switches 💡
#14  String methods 🧵
#15  String slicing ✂️
#16  Method chaining ⛓
#17  Logical operators ❗
#18  Strict equality 🟰
#19  While loops 🔁
#20  For loops 🔂
#21  ⭐ Number guessing game ↕
#22  Functions 📞
#23  Variable scope 🏠
#24  ⭐ Temperature conversion program 🌡️
#25  Arrays 🗃
#26  Spread operator 📖
#27  Rest parameters 🗄
#28  ⭐ Dice Roller program 🎲
#29  ⭐ Random password generator 🔑
#30  Callbacks 🤙
#31  forEach() ➿
#32  map() 🗺
#33  filter() 🚰
#34  reduce() ♻
#35  Fupressions 🐣
#36  Arrow functions 🎯
#37  JavaScript Ojects🧍
#38  What is THIS 👈
#39  Constructors 🛠
#40  Classes 🏭
#41  STATIC keyword ⚡
#42  Inheritance 🐇
#43  SUPER keyword 🦸‍♂️
#44  Getters & Setters 📐
#45  Destructuring 💥
#46  Nested objects 📫
#47  Arrays of objects 🍎
#48  Sorting 🗃
#49  Shuffle an array 🔀
#50  Dates 📅
#51  Closures 🔒
#52  setTimeout() ⏰
#53  ⭐ Digital Clock program 🕐
#54  ⭐ Stopwatch program ⏱
#55  ES6 Modules 🚢
#56  Asynchronous code 💤
#57  Error handling ⚠
#58  ⭐ Calculator program 🖩
#59  What is the DOM? 🌳
#60  Element selectors 📑
#61  DOM navigation 🧭
#62 Add & change HTML 🛠️
#63  Mouse events 🖱
#64  Key events ⌨
#65  Hide/show HTML 🖼
#66  NodeLists 📃
#67  classList 🧾
#68  ⭐ Rock Paper Scissors 👊
#69  ⭐ Image Slider 🖼️
#70  Callback Hell? 🔥
#71  Promises 🤞
#72  Async/Await ⏳
#73  JSON files 📄
#74  Fetch data from an API ↩️
#75  ⭐ Weather App project ☀️ */

// ************* 1. Tutorial for beginers *************

//console.log(`Hello`);

//window.alert(`This is an alert`);

// This is a commment

/*
  This is a comment
*/

//document.getElementById("myH1").textContent = `Hello`;

//document.getElementById("myP").textContent = `I like pizza!`;

// ************* 2. Varibles *************

/*
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is : ${gpa}`);
*/

/*
let firstName = "Bro";
let favoriteFood = "pizza";
let email = "Bro@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(` Your email is ${email}`);

*/

/*
let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Bro is online ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

*/

/*

let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
*/

// ************* 4. Accept Input  *************

/*
let username;
username = window.prompt("What's your username ?");
console.log(username);
*/

/* let username;

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  //console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
}; */

// ************* 5. Type conversion  *************

/* let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age); */

/* let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
 */

// ************* 5. Constants   *************

/* const PI = 3.14159;
let radius;
let circumference;

//PI = 420.5;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log(circumference); */

// ************* 6. Counter Program   *************

/* const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
}; */

// ************* 11. Checked property    *************

/* const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscried!`;
  } else {
    subResult.textContent = `You are not subscried!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are apying Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are apying MasterCard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are apying PayPal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
}; */

// ************* 12. Ternary Operator    *************

/* let age = 12;
let message = age >= 18 ? "Youu are an adult" : "You're a minor";
console.log(message); */

// ************* 14.  String Methods     *************

/* let userName = "BroCode";

console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith("Br")); */

// ************* 15.  String Slicing     *************

/* const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let firstName1 = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(4, 8);
let Name = fullName.slice(1);

console.log(firstName);
console.log(firstName1);
console.log(lastName);
console.log(Name); */

// ************* 16.  Method Chaining     *************

//let username = window.prompt("Enter your username: ");

// No Method Chaining

/* username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username); */

// Use Method Chaining

/* username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username); */

// ************* 18.  Script qeuality      *************

// = assignment operator
// == comparison operator ( compare if values are equal)
// === strict equality operator (compare if value & datatype are equal)
// != inequality operator
// !== strict inequality operator

/* const PI = 3.14;

if (PI === 3.14) {
  // "3.14" X
  console.log("That is Pi");
} else {
  console.log("That is Not Pi");
} */

// ************* 21.   Number Guessing Game    *************

/* const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;

    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN");
    } else {
      window.alert(
        `CORRECT! The answer was ${answer}. It took you ${attempts}`
      );
      running = false;
    }
  }
} */

// ************* 22.     Functions    *************

/* function happyBirthday(username, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username} you!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old`);
}

happyBirthday("BroCode", 25);

function add(x, y) {
  return x + y;
}

console.log(add(5, 7)); */

// ************* 23. Varible Scope    *************

/* let x = 3;

function1();
function2();

function function1() {
  let x = 1;
  console.log(x);
}

function function2() {
  let x = 2;
  console.log(x);
} */

// ************* 24. Temperature Conversion Program    *************

/* const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + " F";
  } else if (toCelcius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + " C";
  } else {
    result.textContent = "Select a unit";
  }
} */

// ************* 25. Arrays    *************

// let fruits = ["apple", "orange", "banana"];

// fruits.push("cocount");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("orange");
// let index1 = fruits.indexOf("abc");

// console.log(numOfFruits);
// console.log(index);
// console.log(index1);

/* for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("-----------------------");

fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("-----------------------");
 */

/* fruits.sort().reverse();

for (const fruit of fruits) {
  console.log(fruit);
} */

// ************* 26. Spread Operator    *************

/* spread operator = ... allows an iterable such as an 
                      array or string to be expanded 
                      into seperate elements
                      (unpacks the elements) */

/* let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(numbers);
let maximum1 = Math.max(...numbers);
let minimum = Math.min(numbers);
let minimum1 = Math.min(...numbers);

console.log(maximum);
console.log(maximum1);
console.log(minimum);
console.log(minimum1); */

/* let userName = "Bro Code";
let letters = [...userName].join("-");
console.log(letters); */

/* let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables];

console.log(fruits);
console.log(...fruits);
console.log(foods); */

// ************* 27. Rest Parameters    *************

/* function openFridge(...foods) {
  console.log(foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods); */

/* function sum(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(total);

function avarage(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total1 = avarage(75, 100, 85, 90, 50);

console.log(total1); */

/* function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarts", "III");

console.log(fullName); */

// ************* 29. Random Password Generator     *************

/* function generatePassword(
  passwordLength,
  includeLowercase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "1@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (passwordLength <= 0) {
    return " (password length must be at least 1)";
  }
  if (allowedChars.length === 0) {
    return "(At least 1 set of character needs to be selected)";
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const Password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${Password}`);
 */

// ************* 30. Callbacks     *************

//callback = a function that is passed as an argumen
//to another function.

/* hello(wait);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function wait() {
  console.log("Wait!");
} */

/* sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
} */

// ************* 31. Foreach     *************

// array.foreach(callback)
//       element,index,array are provided

/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
}

function display(element) {
  console.log(element);
} */

// ************* 32. map()     *************

/* .map() = accept a callback and applies that function
            to each element of an array, then return a new array */

/* const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
} */

/* const students = ["Spongebob", "Patrick", "Squidword", "Sandy"];

const upperStudents = students.map(upperCase);

console.log(upperStudents);

function upperCase(element) {
  return element.toUpperCase();
} */

/* const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
} */

// ************* 33. .filter()    *************

//  creates a new array by filtering out elements

/* let numbers = [1, 2, 3, 4, 5, 6, 7];
let evensNum = numbers.filter(isEven);
let oddsNum = numbers.filter(isOdd);

console.log(evensNum);
console.log(oddsNum);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
} */

/* const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}
function getLongWords(element) {
  return element.length > 6;
} */

// ************* 34. .reduce()    *************

// reduce the elements of an array to a single value

/* const price = [5, 30, 10, 25, 15, 20];

const total = price.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element;
} */

/* const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
} */

// ************* 34. Function expressions    *************

// a way to define function as values or varibles

/* const hello = function () {
  console.log("Hello");
};

hello();

setTimeout(hello, 3000); */

/* const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

console.log(squares);
console.log(cubes);
 */

// ************* 36. Arrow Functions    *************

// a concise way to write function expressions goof for simple
// functions that you use only once (parametres) => some code

/* const hello = function () {
  console.log("Hello");
};*/

/* const hello = () => console.log("Hello");
const hello1 = (name) => console.log(`Hello ${name}`);
const hello2 = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};

hello();
hello1("Bro");
hello2("Bro", 25); */

//setTimeout(() => console.log("Hello"), 3000);

/* const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evensNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
const longFunc = numbers.map((element) => {
  element += 5;
  element -= 4;
  return element;
});

console.log(squares);
console.log(cubes);
console.log(evensNums);
console.log(total);
console.log(longFunc); */

// ************* 37. Js Object    *************

/* const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! I am SpongeBob");
  },
  eat: () => {
    console.log("I am eating a Krab Patty");
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 42,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi! I am Patrick...");
  },
  eat: () => {
    console.log("I am eating chicken, pizaa");
  },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.sayHello();
person.eat();

person2.sayHello();
person2.eat(); */

// ************* 38. This    *************

/* const person = {
  firstName: "Spongebob",
  favFood: "hamburgers",
  sayHello: function () {
    console.log(`Hi I am ${this.firstName}`);
  },
  eat: function () {
    console.log(`${this.firstName} is eating ${this.favFood}`);
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  favFood: "pizza",
  sayHello: function () {
    console.log(`Hi I am ${person2.firstName}`);
  },
  eat: function () {
    console.log(`${person2.firstName} is eating ${this.favFood}`);
  },
};

person.sayHello();
person.eat();

person2.sayHello();
person2.eat(); */

// ************* 39. Constructor    *************

/* function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = function () {
      console.log(`You drive the ${this.model}`);
    });
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive(); */

// ************* 40. Classes    *************

/* class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);
const product3 = new Product("Underwear", 100.0);

const salesTax = 0.05;

product1.displayProduct();
console.log(product1.calculateTotal(salesTax));

product2.displayProduct();
product3.displayProduct(); */

// ************* 41. Static Keyword    *************

/* class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10)); */

/* class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${this.userCount} users online`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const userl = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(userl.username);
console.log(user2.username);
console.log(user3.username);

userl.sayHello();
user2.sayHello();
user3.sayHello();

console.log(User.userCount);
User.getUserCount(); */

// ************* 42.  Inheritance    *************

/* class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping `);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
}
class Fish extends Animal {
  name = "fish";
}
class Hawk extends Animal {
  name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);
fish.eat();
fish.sleep(); */

// ************* 43.  super    *************

/* class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

fish.swim(); */

// ************* 44.  Getter & Setter    *************

/* class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Width must be a positive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 8;
rectangle.height = 10;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); */

/* class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a positive number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

//const person = new Person(420, 59, "pizza");
const person = new Person("John", "Doe", 45);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);

person.firstName = "Jane";
person.lastName = "Apple";
person.age = 29;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName); */

// ************* 45.  Destructuring    *************

/*  [] = to perform array Destructuring
    {} = to perform object Destructuring

 */

// swap the value of two varibles

/* let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b); */

// SWAP 2 ELEMENTS IN AN ARRAY

/* const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
 */

// ASSIGN ARRAY ELEMENTS TO VARIBLES

/* const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); */

// EXTRACT VALUES FROM OBJECTS

/* const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
};
const person2 = {
  firstName: "patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); */

// DESTRUCTURE IN FUNCTION PARAMETERS

/* function displayPerson({ firstName, lastName, age, job }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age:${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
};
const person2 = {
  firstName: "patrick",
  lastName: "Star",
  age: 34,
};

displayPerson(person1); */

// ************* 46.  Nested Objects    *************

/* const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.country);

console.log("-------------------");

for (const property in person.address) {
  console.log(person.address[property]);
}

console.log("-------------------");

Object.keys(person.address).forEach((element) => {
  console.log(person.address[element]);
}); */

/* class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Spongebob",
  30,
  "124 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

const person2 = new Person(
  "Patrick",
  37,
  "128 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

const person3 = new Person(
  "Squidward",
  45,
  "126 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

console.log(person3.address.city); */

// ************* 47. Arrays of Object    *************

/* const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

console.log(fruits[2].name);
console.log(fruits[2].color);
console.log(fruits[2].calories);

fruits.push({ name: "grapes", color: "puple", calories: 62 });
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log("--------------------");

fruits.forEach((element) => console.log(element));
console.log("--------------------");

fruits.forEach((element) => console.log(element.name));

console.log("--------------------");

const fruitsName = fruits.map((element) => element.name);
console.log(fruitsName);

console.log("--------------------");

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruits);

console.log("--------------------");

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit); */

// ************* 48. Sorting     *************

/* let fruits = ["apple", "orange", "banana", "cocount", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b);

console.log(numbers); */

/* const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];

// people.sort((a, b) => b.age - a.age);
// console.log(people);

// people.sort((a, b) => a.gpa - b.gpa);
// console.log(people);

// people.sort((a, b) => a.name - b.name);
// console.log(people);

// people.sort((a, b) => a.name.localeCompare(b));
// console.log(people);
 */

// ************* 49. Shuffle an Array     *************

/* const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards);

console.log(cards);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}
 */

// ************* 50. Dates     *************

// Date(year,month,day,hour,minute,second,ms)

// const date = new Date();
// console.log(date);

// const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);
// console.log(date2);

// const date3 = new Date("2024-01-02T12:00:00Z");
// console.log(date3);

/* const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek); */

// ************* 51. Closures     *************

/*    A function defined inside of another function,
      the inner function has access to the variables
      and scope of the outer function.
      Allow for private variables and state maintenance
      Used frequently in JS frameworks: React, Vue, Angular */

/* function other() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

other(); */

/* function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`); */

/* function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getscore() {
    return score;
  }

  return { increaseScore, decreaseScore, getscore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getscore()}pts`); */

// ************* 52. setTimeOut()     *************

/* let timeOutId;

function startTimer() {
  timeOutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTER");
}

function clearTimer() {
  clearTimeout(timeOutId);
  console.log("CLEARED");
} */

// ************* 55. ES6 Modules   *************

/* import { PI, getArea, getCircumference, getVolume } from "./mathUtil.js";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm `);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`); */

// ************* 57. Error Handling   *************

//Network Errors
//Promise Rejection
//Security Errors

/* try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  // close files
  // close connection
  // relase resource

  console.log("This always execute");
}

console.log("You have reached the end!"); */

/* try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("You can't divide by zero!");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be number");
  }

  const result = dividend / divisor;

  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end !"); */

// ************* 59. DOM (Documnet Object Model)   *************

/* DOM = DOCUMENT OBJECT MODEL
object{} that represents the page you see in the web browser
and provides you with an API to interact with it.
Web browser constructs the DOM when it loads an HTML document,
and structures all the elements in a tree-like representation.
JavaScript can access the DOM to dynamically
change the content, structure, and style of a web page. */

/* document.title = "Bro Code";
document.body.style.backgroundColor = "hsl(0,0%,15%)";

console.dir(document);
 */
/* 
const username = "Bro Code";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username; */

// ************* 60. element selectors   *************

// element selectors = Methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    from the DOM (Document Object Model)

// 1. document-getElementById()     // ELEMENT OR NULL
// 2. document-getElementsClassName) // HTML COLLECTION
// 3. document-getElementsByTagName() // HTML COLLECTION
// 4. document. querySelector ()  // ELEMENT OR NULL
// 5. document.querySelectorAll()    // NODELIST

/* const myHeadig = document.getElementById("my-heading");
myHeadig.style.backgroundColor = "yellow";
myHeadig.style.textAlign = "center";

console.log(myHeadig); */

/* const fruits = document.getElementsByClassName("fruits");

console.log(fruits);
 */

/* const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for (const h4Element of h4Elements) {
  h4Element.style.backgroundColor = "yellow";
}

for (const liElement of liElements) {
  liElement.style.backgroundColor = "green";
}

//console.log(h4Elements);

//h4Elements[0].style.backgroundColor = "yellow"; */

/* const foods = document.querySelectorAll("li");

foods[0].style.backgroundColor = "yellow";

console.log(foods); */

// ************* 61.  DOM Navigation   *************

// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild

/* const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; */

// .lastElementChild

/* const element = document.getElementById("vegetables");
const firstChild = element.lastElementChild;
firstChild.style.backgroundColor = "yellow"; */

// .nextElementSibling

/* const element = document.getElementById("orange");
const firstChild = element.nextElementSibling;
firstChild.style.backgroundColor = "yellow"; */

/* const element = document.getElementById("vegetables");
const firstChild = element.nextElementSibling;
firstChild.style.backgroundColor = "yellow"; */

// .previousElementSibling

/* const element = document.getElementById("orange");
const firstChild = element.previousElementSibling;
firstChild.style.backgroundColor = "yellow"; */

// .parentElement

/* const element = document.getElementById("onions");
const firstChild = element.parentElement;
firstChild.style.backgroundColor = "yellow"; */

/* const element = document.getElementById("vegetables");
const firstChild = element.parentElement;
firstChild.style.backgroundColor = "yellow"; */

// .children

/* const element = document.getElementById("vegetables");
const firstChild = element.children;
console.log(firstChild); */

// ************* 62. Add & Change HTML   *************

/* // EXAMPLE 1 <h1>
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

// REMOVE HTML ELEMENT
document.getElementById("box1").removeChild(newH1); */

/* // EXAMPLE 2 <li>
// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "cocount";
newListItem.id = "cocount";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newListItem);
//document.getElementById("fruits").prepend(newListItem);
//document.getElementById("fruits").append(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// REMOVE HTML ELEMENT
//document.getElementById("fruits").removeChild(newListItem); */

// ************* 63. Event Listener Mouse  *************

// events =click,mouserover,mouseout  .addEventListener(event,callback)

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

/*
function changeColor(event) {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 😒";
}

myBox.addEventListener("click", changeColor); */

/* myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 😒";
}); */

/* myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Dont do this! 😢";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click ME 😊";
});
 */

/* myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 😒";
}); */

// ************* 64.  Key Listener Keys   *************

/* const myBox = document.getElementById("myBox");

document.addEventListener("keydown", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "😒";
});

document.addEventListener("keyup", (event) => {
  myBox.style.backgroundColor = "lightblue";
  myBox.textContent = "😊";
}); */

// ************* 66.  NodeLİst    *************

// NodeList = Static collection of HTML elements by (id, class, element)
//  Can be created by using querySelectorAll()
//  Similar to an array, but no (map, filter, reduce)
//  NodeList won't update to automatically reflect changes

//let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS Properties

/* buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "😊";
}); */

// Click Events Listener

/* buttons.forEach((button) => {
  button.addEventListener("click", (element) => {
    event.target.style.backgroundColor = "tomato";
  });
}); */

// ************* 67.  ClassLİst    *************

// classList = Element property in JavaScript used to interact
// with an element's list of classes (CSS classes)
// Allows you to make reusable classes for many elements
// across your webpage.

// add()
//remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
//contains ()

//const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

/* myButton.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", (event) => {
  event.target.classList.remove("hover");
}); */

/* myButton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
}); */

/* myButton.classList.add("enabled");

myButton.addEventListener("click", (event) => {
  event.target.classList.replace("enabled", "disabled");
}); */

// ************* 68.  rock-paper-scissors Game    *************

/* const choise = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoise) {
  const computerChoise = choise[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoise === computerChoise) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoise) {
      case "rock":
        result = computerChoise === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "paper":
        result = computerChoise === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "scissors":
        result = computerChoise === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `Your choise ${playerChoise}`;
  computerDisplay.textContent = `Computer Choise ${computerChoise}`;
  resultDisplay.textContent = `${result}`;
}
 */

// ************* 70. Callback Hell    *************

// Callback Hell = Situation in JavaScript where callbacks
//                are nested within other callbacks to the
//                degree where the code is difficult to read.
//                Old pattern to handle asynchronous functions.
//                Use Promises + async/await to avoid Callback Hell

/* function walkDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog ");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You clean the kitchen ");
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You take out the trash ");
    callback();
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("Finish all the chores");
    });
  });
}); */

// ************* 71.  Promise    *************

// Promise = An Object that manages asynchronous operations.
//          Wrap a Promise Object around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => (asynchronous code))

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

/* function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog ");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen ");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash ");
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    return console.log("Finis all chores");
  });
 */

// ************* 72.  Aycn/Await    *************

// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//              Allows you write asynchronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue

/* function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog ");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen ");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash ");
    }, 500);
  });
}

async function doChores() {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);
}

doChores(); */

// ************* 73.  JSON Files    *************

// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files {key:value} OR [valuel, value2, value3]

// JSON. stringify() = converts a JS object to a JSON string•
// JSON-parse() = converts a JSON string to a JS object

/* const names = ["Spongebob", "Patrick", "Squidword", "Sandy"];

const jsonString = JSON.stringify(names);

console.log(names);
console.log(jsonString);

const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
};

const jsonString1 = JSON.stringify(person);

console.log(person);
console.log(jsonString1);

const people = [
  {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Patrick",
    age: 34,
    isEmployed: false,
  },
  {
    name: "Squidward",
    age: 50,
    isEmployed: true,
  },
  {
    name: "Sandy",
    age: 27,
    isEmployed: false,
  },
];

const jsonString2 = JSON.stringify(people);

console.log(people);
console.log(jsonString2); */

/* const jsonNames = `["Spongebob", "Patrick", "Squidword", "Sandy"]`;

const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["karate", "jellyfishing", "cooking"]}`;

const jsonPeople = `[{"name": "Spongebob",   "age": 30,"isEmployed": true},
                   {"name": "Patrick","age": 34,"isEmployed": false},
                   {"name": "Squidward","age": 50,"isEmployed": true},
                   {"name": "Sandy","age": 27,"isEmployed": false}]`;

const parsedData = JSON.parse(jsonNames);
console.log(jsonNames);
console.log(parsedData);

const parsedData1 = JSON.parse(jsonPerson);
console.log(jsonPerson);
console.log(parsedData1);

const parsedData2 = JSON.parse(jsonPeople);
console.log(jsonPeople);
console.log(parsedData2); */

// fetch("people.json")
//   .then((response) => response.json())
//.then((value) => console.log(value));
/* .then((values) =>
    values.forEach((element) => {
      console.log(element.name);
    })
  ); */
/* .then((values) =>
    values.forEach((element) => {
      console.log(element.age);
    })
  ); */

// ************* 74.  JSON Fetch    *************

//    fetch = Function used for making HTTP requests to fetch resources.
//    (JSON style data, images, files)
//     Simplifies asynchronous data fetching in JavaScript and
//    used for interacting with APIs to retrieve and send
//    data asynchronously over the web.
//    fetch(url, (options))

/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error)); */

/* fetchData();

async function fetchData() {
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    } else {
      const data = await response.json();

      console.log(data);

      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}
 */
