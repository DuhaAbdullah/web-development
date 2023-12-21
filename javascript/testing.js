function bubbleSorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
}

const duplicateNumber = bubbleSorting([4, 23, 1, 5, 2, 9, 45, 2221, 45]);
console.log(duplicateNumber);

function factorial(n) {
  let temp = 0;
  if (n === 0) return 1;
  else return (temp = n * factorial(n - 1));
}

console.log(factorial(5));

let output = [];

function fibonacci(n) {
  for (let i = 0; i < n; i++) {
    if (output.length === 0) {
      output.push(0);
    } else if (output.length === 1) {
      output.push(1);
    } else {
      let sum = output.push(
        output[output.length - 1] + output[output.length - 2]
      );
      output.push(sum);
    }
  }

  return output;
}

console.log(fibonacci(8));

let array = [4, 7, 45, 345, 5432, 90, 2];

function minimest(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

console.log("minimest is given array is " + minimest(array));

function maximest(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

console.log("maximest is given array is " + maximest(array));

let word = "hello world ";

console.log(word.split(""));

let x = 10;
let y = 10;

while (x < 25 && y >= 0) {
  console.log(y);

  y = x < 25 ? ++x : --y;
}
