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

isLeap(1989);

// 131 javascript array guest list

var guestList = ["Angela", "Lara", "Doha", "Anas", "Hamza"];
var guestName = prompt("whats your name ?");

if (guestList.includes(guestName)) {
  alert("your're welcome");
} else {
  alert("ops sorry next time ");
}

// fizz buzz game

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else if (count % 5 === 0) {
    output.push("fizzBuzz");
  } else {
    output.push(count);
  }

  count = count + 1;
  console.log(output);
}

fizzBuzz();

//  for selected a ramdom name to pay the food

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
function fibonacciGenerator(n){
	for (var i = 0; i < n; i ++) {
		if (output.length === 0 ){
		output.push(0);
	} else if (output.length === 1){
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
	if(n === 1){
		output = [0];
	} else if (n === 2){
		output = [0,1];
	} else {
		output = [0,1];
		for ( let i = 2 ; i < n ; i++){
			output.push(output[output.length - 2] + output[output.length - 1]);
		}
	}
	return output;
}

fibonacciGenerator(7)

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

  // find the largest in the array 


let arr = [10, 324, 45, 90, 9808];

function largest(arr){
     // Initialize maximum element
        let max = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log("Largest in given array is " + largest(arr));

// find the smallest in the array

let array = [4,7,45,345,5432,90, 2];

function minimest(array){
    let min = array[0];
    
    for(let i =0 ; i < array.length ; i++ ){
        if(array[i] < min)
            min = array[i];
    }
    return min;
}

console.log("minimest is given array is " + minimest(array));

// objects in javascript

let houseKeeper = {
    name: "Jane",
    howManyWorkingDays: 5,
    placesOfPreviousWork: ["helton", "Crowne Plaza" , "Beverly Hills"],
    cleaningRepertoir: ["bathroom", "loby", "bedrooms"],
    yearsOfExperience: 12
}

function HouseKeeper( name, howManyWorkingDays, placesOfPreviousWork, cleaningRepertoir,  yearsOfExperience){
    
    this.name = name,
    this.howManyWorkingDays = howManyWorkingDays,
    this.placesOfPreviousWork = placesOfPreviousWork,
    this.cleaningRepertoir = cleaningRepertoir,
    this.yearsOfExperience = yearsOfExperience
}

var houseKeeper2 = new HouseKeeper ("doha", 3 , ["sheraton"], ["bedrooms", "loby"] , 8);

  
