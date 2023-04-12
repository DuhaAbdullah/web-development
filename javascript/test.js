// function duplicateStrings(str) {
//   let dup = "";
//   let counts = {};

//   for (let i = 0; i < str.length; i++) {
//     counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (counts[str[i]] === 1 || counts[str[i]] === 2) {
//       dup += str[i];
//     } else {
//       console.log("notfound");
//     }
//   }

//   return dup;
// }

// console.log(duplicateStrings("aaaaaaaa"));

// function penTowTimes(str) {
//   let dup = "";
//   let counts = {};

//   for (let i = 0; i < str.length; i++) {
//     counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (counts[str[i]] === 1 || counts[str[i]] === 2) {
//       dup += str[i];
//     } else {
//       console.log("notfound");
//     }
//   }

//   return dup;
// }

// let s = "aaaaaaaa";

// console.log(penTowTimes(s));

// let arr = [1, 2, 5, 6, 7];

// function findMissingNumbers(arr) {
//   let missingNumbers = [];
//   let length = arr.length + 1;
//   let sum = (length * (length + 1)) / 2;
//   let results = arr.reduce((sum, num) => sum + num, 0);

//   let min = 1;
//   let max = length;

//   for (let i = min; i <= max; i++) {
//     if (!arr.includes(i)) {
//       missingNumbers.push(i);
//     }
//   }

//   return missingNumbers;
// }

// console.log(findMissingNumbers(arr));

// // test( [1,6,3,5,2] , [4] )
// console.log(findMissingNumbers([1, 6, 3, 5, 2])); //should print [4] test( [1,7,3,5,2] , [4, 6] )
// console.log(findMissingNumbers([1, 7, 3, 5, 2])); //should print [4, 6] test(  [2,5] , [3,4] )
// console.log(findMissingNumbers([2, 5])); //should print [3,4] test(  [5,2] , [3,4] )
// console.log(findMissingNumbers([99999997, 99999999])); //should print [3,4] test( [99999997, 99999999] , [99999998] )

function penTwoTimes(s) {
  const charCount = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    charCount[c] = (charCount[c] || 0) + 1;

    console.log(charCount);
  }



  let result = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (charCount[c] <= 2) {
      result += c;
    }
  }

  console.log(result);

//   if (result.length < 3) {
//     return "notfound";
//   }

//   let isPalindrome = true;
//   for (let i = 0; i < Math.floor(result.length / 2); i++) {
//     if (result[i] !== result[result.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//   }

  return isPalindrome ? result : "notfound";
}

console.log(penTwoTimes("abaacbfcb")); // output: "cfc"
console.log(penTwoTimes("aaaaaaaa")); // output: "notfound"
console.log(penTwoTimes("psxxyyyyyxszzzpzyyyy")); // output: "pssp"
