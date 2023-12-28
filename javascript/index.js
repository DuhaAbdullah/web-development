var name = prompt("Enter you name ? ");
var nameCap = name.slice(0, 1).toUpperCase();
var rest = name.slice(1, name.length).toLowerCase();
alert("Hello " + nameCap + rest);

let age = prompt("enter your dog age ? ");
const dogAge = (age - 2) * 4 + 21;
alert("Dog's Age is  " + dogAge);

function lifeInWeeks(age) {
  var days = (90 - age) * 365;
  var weeks = (90 - age) * 52;
  var months = (90 - age) * 12;
  console.log(
    "you have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left"
  );
}

lifeInWeeks(56);

function getMilk(money) {
  const bottles = Math.floor(money / 1.5);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calculate(money, 1.5) + " milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;
}

getMilk(3);

function calculate(startingMoney, costPerBottles) {
  return (noOfBottles = Math.floor(startingMoney / costPerBottles));
}

var myName = prompt("Enter you name ? ");
var beeName = prompt("Enter you beeName ? ");

var lovePercentage = Math.random() * 100;

if (lovePercentage === 1000) {
  console.log(
    "love score is :" +
      " " +
      myName +
      " " +
      Math.floor(lovePercentage) +
      " % " +
      beeName +
      "you guys loves each other "
  );
} else {
  console.log(
    "love score is :" +
      " " +
      myName +
      " " +
      Math.floor(lovePercentage) +
      " % " +
      beeName
  );
}

function bmiCalculator(weight, height) {
  const cal = Math.round(weight / (height * height));
  return cal;
}

// 128 BMI calculator

const bmi = bmiCalculator(55, 1.8);
console.log(bmi);

if (bmi <= 18.5) {
  console.log("Your BMI is <bmi>, so you are underweight. " + bmi);
} else if (bmi > 18.5 && bmi <= 24.9) {
  console.log("Your BMI is <bmi>, so you have a normal weight. " + bmi);
} else {
  console.log("Your BMI is <bmi>, so you are overweight. " + bmi);
}

// 129 leap year challenge

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("Leap year.");
      } else {
        console.log("Not leap year.");
      }
    } else {
      console.log("Leap year.");
    }
  } else {
    console.log("Not leap year.");
  }
}

isLeap(2004);

// 131 javascript array guest list

var guestList = ["Angela", "Lara", "Doha", "Anas", "Hamza"];
var guestName = prompt("whats your name ?");

if (guestList.includes(guestName)) {
  alert("your're welcome");
} else {
  alert("ops sorry next time ");
}

//  for selected a ramdom name to pay for the food

function whosPaying(names) {
  let numbersOfPeople = names.length;
  let randomMemeberPosition = Math.floor(Math.random() * numbersOfPeople);
  let randomPerson = names[randomMemeberPosition];
  return randomPerson + " is going to buy lunch today!";
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);

// while loop of fizz buzz game

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzBuzz");
    } else if (count % 5 === 0) {
      output.push("fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count = count + 1;
  }

  console.log(output);
}

fizzBuzz();

// 99 bottles of bear

function runSong99BotttlesOfBear() {
  var noOfBottles = 99;
  console.log(noOfBottles);
  while (noOfBottles > -1) {
    console.log(
      noOfBottles +
        " bottles of beer on the wall, " +
        noOfBottles +
        " bottles of beer.Take one down and pass it around, " +
        noOfBottles +
        "  bottles of beer on the wall."
    );
    if (noOfBottles === 0) {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
      );
    }
    noOfBottles--;
  }
}

runSong99BotttlesOfBear();

// another solution
while (numberOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// fibonacci sequence

var output = [];
function fibonacciGenerator(n) {
  for (var i = 0; i < n; i++) {
    if (output.length === 0) {
      output.push(0);
    } else if (output.length === 1) {
      output.push(1);
    } else {
      let sum = output[output.length - 1] + output[output.length - 2];
      output.push(sum);
    }
    console.log(output);
  }
}

fibonacciGenerator(7);

// another solution
function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

fibonacciGenerator(7);

// higher order function are function take another function as input

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(3, 4, divide);

// find the largest in the array

let arr = [10, 324, 45, 90, 9808];

function largest(arr) {
  // Initialize maximum element
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Largest in given array is " + largest(arr));

// find the smallest in the array

let array = [4, 7, 45, 345, 5432, 90, 2];

function minimest(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

console.log("minimest is given array is " + minimest(array));

// objects in javascript

let houseKeeper = {
  name: "Jane",
  howManyWorkingDays: 5,
  placesOfPreviousWork: ["helton", "Crowne Plaza", "Beverly Hills"],
  cleaningRepertoir: ["bathroom", "loby", "bedrooms"],
  yearsOfExperience: 12,
};

function HouseKeeper(
  name,
  howManyWorkingDays,
  placesOfPreviousWork,
  cleaningRepertoir,
  yearsOfExperience
) {
  (this.name = name),
    (this.howManyWorkingDays = howManyWorkingDays),
    (this.placesOfPreviousWork = placesOfPreviousWork),
    (this.cleaningRepertoir = cleaningRepertoir),
    (this.yearsOfExperience = yearsOfExperience);
}

var houseKeeper2 = new HouseKeeper(
  "doha",
  3,
  ["sheraton"],
  ["bedrooms", "loby"],
  8
);

// bubble sorting
let arr1 = [5, 4322, 322, 453, 8, 22];

let bubbleSort = (arr1) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        let temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
    }
  }
  return arr1;
};

console.log(bubbleSort(arr1));

// find the largest 3 in the array

console.log(arr1.slice(-1) , arr1.slice(-2) , arr1.slice(-3));

let newArray = [];
newArray.push(arr[arr.length - 1]);
newArray.push(arr[arr.length - 2]);
newArray.push(arr[arr.length - 3]);
console.log(newArray);

//find the second smallest number

console.log(arr1.slice(-2 , -1));

// find the duplicate in an array 

let arr3 = [5, 4322, 322, 453, 8, 4322, 22];

function findDuplicate(arr) {
  let dup = arr3[0];

  for (let i = 0; i < arr3.length; i++) {
    for (let j = 1; j < arr3.length - 1; j++) {
      if (arr3[j] > arr3[j + 1]) {
        let temp = arr3[j];
        arr3[j] = arr3[j + 1];
        arr3[j + 1] = temp;
      }
    }

    if (arr3[i] === arr3[i + 1]) {
      dup = arr3[i];
    }
  }

  return dup;
}

console.log(findDuplicate(arr));


// find duplicate the right approach

let inputArr4 = [7, 4, 87, 222, 1, 4, 3];

function findDublicate() {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] === inputArr[j]) {
        console.log(inputArr[i]);
      }
    }
  }
}

findDublicate();

// recuresive factorial

function factorial(n) {
  let temp;
  //4! 4*3*2*1
  if (n === 0) {
    return 1;
  } else {
    temp = n * factorial(n - 1);
  }

  return temp;
}

factorial(5);

// javascripts concept

// spread operation

const person = {
  name: "Doha",
  age: 27,
};

const anotherPerson = {
  ...person,
  faviorateColor: "Pink",
};

anotherPerson.fatherName = "Abdullah";

let teamA = {
  names: ["Doha", "saqlain"],
  job: "trolling around",
};

teamA.place = "downtown";

// scraping data

function makeData() {
  let array = [];
  for (let i = 1; i < document.getElementsByTagName("tr").length; i++) {
    let tr = document.getElementsByTagName("tr")[i];
    if (tr && tr.children && tr.children.length === 3) {
      let airportTD = tr.children[0];
      let countryTD = tr.children[1];
      let codeTD = tr.children[2];

      let airportText = airportTD.innerText;
      let countryText = countryTD.innerText;
      let codeText = codeTD.innerText;
      array.push({ airport: airportText, contry: countryText, code: codeText });
    }
  }
  return array;
}

// count the char

let myString = "hello, world!";
let countChar = myString.length;

let charToCount = "w";
let count = 0;

console.log(countChar);

// count specific charachter

for (let i = 0; i < countChar; i++) {
  if (countChar[i] === charToCount) {
    count++;
  }
}

console.log(count);

//  find the largest string

function findLargestWord(str) {
  let words = str.split(" ");
  let largestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largestWord.length) {
      largestWord = words[i];
    } else if (words[i].length === largestWord.length) {
      console.log("both same length");
    }
  }

  return largestWord;
}

findLargestWord("doha , saqlain");
console.log(findLargestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLargestWord("This is a test string"));

// find the largest

function findLargestWord(str) {
  let words = str.split(/[^a-zA-Z0-9]/g); // Split the string by any non-alphanumeric characters
  let largestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largestWord.length) {
      largestWord = words[i];
    }
  }
  return largestWord;
}

let str = "The quick brown fox jumps over the lazy dog!"; // Example string
let largestWord = findLargestWord(str);
console.log(largestWord); // Output: "jumps"

// take the sybmbols out

function splitSymbols(str) {
  let words = str.replace(/[^0-9a-zA-Z\s]/g, " ").split(" ");
  return words;
}

console.log(splitSymbols("Hello&world!This!is!a!test. #symbols?")); // Output: ["Hello", "world", "This", "is", "a", "test", "string"]

// revserse a sentence

function reverseWords(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Loop through each word and reverse it
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

// Example usage
const sentence = "Hello world!";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "olleH !dlrow"

// check if they obj is array or not

const arr5 = [1, 2, 3];
const obj1 = { a: 1, b: 2 };

console.log(Array.isArray(arr5)); // Output: true
console.log(Array.isArray(obj1)); // Output: false

const arr6 = [1, 2, 3];
const obj2 = { a: 1, b: 2 };

console.log(arr6 instanceof Array); // Output: true
console.log(obj2 instanceof Array); // Output: false

// empty an error
function empty(arr) {
  arr.length = 0;
  return arr;
}

empty([1, 2, 3, 4]); // Output: []

// check the number is interger or not

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false

function duplicate(arr) {
  return arr.concat(arr);
}

const originalArray1 = [1, 2, 3, 4, 5];
const duplicatedArray1 = duplicate(originalArray);
console.log(duplicatedArray); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

const originalArray2 = [1, 2, 3, 4];
const duplicatedArray2 = [...originalArray];
console.log(duplicatedArray); // [1, 2, 3, 4]

const originalArray3 = [1, 2, 3, 4];
const duplicatedArray3 = Array.from(originalArray);
console.log(duplicatedArray); // [1, 2, 3, 4]

const originalArray = [1, 2, 3, 4];
const duplicatedArray = originalArray.slice();
console.log(duplicatedArray); // [1, 2, 3, 4]

function isPrime(num) {
  // 1 is not a prime number
  if (num <= 1) {
    return false;
  }

  // Check if the number is divisible by any number from 2 to sqrt(num)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // If the loop completes without finding a factor, the number is prime
  return true;
}

var balance = 345.0;
var checkBalance = true;
var isActive = true;

// your code goes here

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("your balance is $ " + balance.toFixed(2) + " .");
  } else if (!isActive) {
    console.log("sorry the account is no longer acive!");
  } else if (balance === 0) {
    console.log("sorry your account is empty");
  } else {
    console.log("account is negitive please contact the bank !");
  }
} else {
  console.log("Have A nice day !");
}

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

if (room == "ballroom" && suspect == "Mr. Kalehoff") {
  solved = true;
  weapon = "poison";
} else if (room == "gallery" && suspect == "Ms. Van Cleve") {
  solved = true;
  weapon = "trophy";
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
  solved = true;
  weapon = "pool stick";
} else {
  solved = true;
  weapon = "knife";
  suspect = "Mr. Parkes";
  room = "dining room";
}

/ ****************************************** /;
// The code below will run only when solved is true
if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
  ("nothing");
}

let job = "Manager";
let salary = 0;
switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(salary);

function reverse(reverseMe) {
  let reversed = reverseMe.split("").reverse().join("");
  console.log(reversed);
}

function reverse(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }

  return reversed;
}

console.log(reverse("Julia"));

const sttr = "This is a string with $ome symb()ls!";
const cleanStr = str.replace(/[^a-zA-Z0-9]/g, ""); // removes all non-alphanumeric characters
console.log(cleanStr); // "Thisisastringwithomesymbols"

const strings = ["This", "is", "an", "array", "of", "strings"];
const largestString = strings.reduce((max, str) => {
  return sttr.length > max.length ? sttr : max;
}, "");
console.log(largestString); // "strings"

// count each char in the string

function countEachCharInThString(s) {
  let countChar = {};
  for (let i = 1; i < s.length; i++) {
    const c = s[i];
    countChar[c] = (countChar || 0) + 1;
  }
}

console.log(countEachCharInThString("wgtshdywgshgwyhdgeyhs"));

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function (donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

words = ["cat", "in", "hat"];
words.forEach(function (word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});



/* Imagine you have a function called outerFunction that contains a variable, outerVar.
 Inside outerFunction, there's another function defined called innerFunction. Now, 
 innerFunction can access outerVar, even though outerFunction has already finished executing. 
 This ability of innerFunction to remember and access outerVar even after outerFunction has finished executing is what creates 
 a closure. */


function outerFunction() {
  let outerVar = 'I am from outerFunction';

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from the enclosing scope
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // This will log: "I am from outerFunction"


// Arrays:
// Spread in Arrays: It expands an array into individual elements.


const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // Results in [1, 2, 3, 4, 5]

// Objects:
// Spread in Objects: It creates a shallow copy of an object and allows merging or cloning object properties.

const obj11 = { a: 1, b: 2 };
const obj21 = { ...obj1, c: 3 }; // Results in { a: 1, b: 2, c: 3 }


// Function Arguments:
// Spread in Function Arguments: It enables passing arrays or iterable objects as individual arguments to a function.

function example(a, b, c) {
  console.log(a, b, c);
}

const arr11 = [1, 2, 3];
example(...arr); // Outputs: 1 2 3


// Strings:
// Spread in Strings: It converts a string into an array of individual characters.


const str11 = 'hello';
const strArray = [...str]; // Results in ['h', 'e', 'l', 'l', 'o']


// Iterables:
// Spread with Iterables: It works with other iterable objects like Sets or Maps.

const set = new Set([1, 2, 3]);
const arrayFromSet = [...set]; // Results in [1, 2, 3]
