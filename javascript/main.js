// window.onload = function () {
//   document.querySelector("h1").style.color = "red";
// };

// window.alert("hey hey !");

console.log(["doha", "anas"]);

// console is API application programming interface

console.log(
  " hello %cJS doha %c ",
  "color: red ; font-size: 30px ",
  "color: blue ; font-size: 50px "
);

console.log("Doha Abdullah");
console.log(typeof "doha");
console.log(typeof 4000);
console.log(typeof [1, 2, 3, 4]);
console.log(typeof ["doha", "anas", "af"]);
console.log(typeof { key: 1, name: "Doha", age: 27 });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

var user = "doha",
  age = 27;

console.log(user);
console.log(age);
console.log(hello);

hello.innerHTML = "hey";

var userName = "doha";

console.log(userName);

let test = "test";

console.log('d\\oha "Zuhaa"');

console.log(
  "doha\
web\
school"
);

console.log("doha \n web \n school");

let a2 = "I love";
let b3 = " myself";

console.log(10 - "doha");
console.log(10 + "doha");
console.log(2 ** 4);
console.log(a2 + b3);
console.log(a2 - b3);
console.log(20 * 7);
console.log(4 ** 3);
console.log(12 - 7);
console.log(typeof NaN);
console.log(3 / 4);
console.log(2 * 2 * 2 * 2);
console.log(11 % 4);
console.log(+100);
console.log(+"100");
console.log(+"doha");
console.log(+"-doha");
console.log(+"1.13");
console.log(+0xff);
console.log(-100);
console.log(-"-100");
console.log(-null);
console.log(-undefined);
console.log(-false);
console.log(-true);
console.log(Number("200"));
console.log(String(300));

let a1 = "20";
let b1 = 10;
let c1 = true;

console.log(a1 + b1 + c1);
console.log(+a1 + b1 + c1);

console.log("" - 2);
console.log(+"");

let d = 10;
d = d + 1;
d += 1;

console.log(d);

let num = 1;
++num; // 2

let numm = 1;
numm++; //1
numm; // 2

let nuum = 1;
--nuum; // 0

let nn = 1;
nn--; //1
nn; //0

let e = 10;
let f = "20";
let g = 80;

console.log(++e + +f++ + +g++ - +e++);
console.log(++e + -f + +g++ - -e++ + +e);
console.log(--g + +f + --e * +f++ - +f * e + --e - +true);

/* Challenge 1 */
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
/*
    [++a]
        Value = 11
        Explain = pre-increment operator

    [+] = "addition operater"

    [+b++]
        Value = 20;
        Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used
    
    [+] = "addition operater"

    [+c++]
        Value = 80;
        Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

    [-] = subtraction operater

    [+a++]
        Value = 11;
        Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used


    so, the total value = 11 + 20 + 80 - 11 = 100

*/

// a = 12    b = 21    c = 81
console.log(++a + -b + +c++ + a++ + +a);
/*
    [++a]
        Value = 13
        Explain = pre-increment increase the value of a by 1 to be 13
        
    [+] = addtion operator

    [-b]
        Value = -21
        Explain = Unary negation operator convent the data type from string to number with differnt sign

    [+] = addition operator
    
    [+c++]
        Value = 81;
        Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 82 but not used
    
    [-] = subtraction operater

    [-a++]
        Value = -13
        Explain = post-increment increase the value by 1 to be 14 but not used
    
    [+] = additon operator

    [+a]
        Value = 14
        Explain = Unary plus operator has not effect becuase the date type already number


    so, the total value = 13 -21 + 81 - -13 + 14 = 100
    
*/

// a = 14    b = 21     c = 82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
    [--c]
        Value = 81
        Explain = pre-decrement decress the value by 1 to be 81
    
    [+] = addition operator

    [+b]
        Value = 21
        Explain = Unary plus operator has no effect because the date type is already number
    
    [+] = addition operator

    [--a]
        Value = 13
        Explain = pre decrement decress the value by 1 to be 13
    
    [*] = multiplication operator

    [+b++]
        Value = 21
        Explain = Unary plus operator has no effect because the date type is already number, then post increment increase the value by 1 to be 22
    
    [-] = subtraction operator

    [+b]
        Value = 22
        Expalin = Unary plus operator has no effect effect
    
    [*] = multiplaction operator

    [a]
        Value = 13
        Explain = from the previous a
    
    [+] = Addition operator

    [--a]
        Value = 12
        Explain = Pre-decrement decress the value by 1 to be 12
    
    [-] = subtraction operator

    [+true]
        Value = 1
        Expalin = unary plus opertor change the date type from boolean to be number

        so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/

/*Challenge 2 */
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * +e); //2000
// console.log(++e * ++g + -d + ++f); //173

let h = "-100";
let j = "20";
let k = 30;
let l = true;

console.log(+100); //100
console.log(+"100");
console.log(+"-100");
console.log(+"doha"); // nan
console.log(+"10.0"); // 10.0
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));

console.log(+""); //0
console.log(" - 2"); //2
console.log(false - true); // -1
console.log(+false - +true);

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log("100".toString());
console.log((100).toString());

console.log((10.8888888).toFixed());
console.log((10.8888888).toFixed(2));
console.log(parseInt("100"));

console.log(+"100 doha");
console.log(Number("100 doha"));
console.log(parseInt("100 doha"));
console.log(parseInt("doha 100 doha"));
console.log(parseFloat("100.99"));
console.log(parseInt("100.23"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.234));

console.log(Number.isNaN("Doha"));
console.log(Number.isNaN("doha" / 20));

console.log(Math.round(99.6));

console.log(Math.ceil(11.8));
console.log(Math.floor(11.8));

console.log(Math.min(100, -100, 90, -90));
console.log(Math.max(100, -100, 90, -90));

console.log(Math.pow(2, 4));
console.log(Math.random());

console.log(Math.trunc(99.5));

let aaa = 1_00;
let bbb = 2_00.5;
let ccc = 1e2;
let ddd = 2.4;

// find the smallest
console.log(Math.min(aaa, bbb, ccc, ddd));

console.log(Math.pow(aaa, Math.floor(ddd)));

console.log(ddd.toFixed());
console.log(parseInt(ddd));
console.log(Math.floor(ddd));
console.log(Math.ceil(ddd));

console.log((bbb / Math.ceil(ddd).toFixed()).toString());

console.log(Math.round(bbb.toString() / Math.ceil(ddd)));

let as = 100;
let bs = 2_00.5;
let cs = 1e2;
let ds = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(as, bs, cs, ds)));

// Use Variables a + d One Time To Get The Needed Output
console.log(as ** parseInt(ds)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(ds));
console.log(Math.trunc(ds));
console.log(Math.floor(ds));
console.log(Math.round(ds));

// Use Variables b + d To Get This Valus
console.log((parseInt(bs) / Math.ceil(ds)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(bs) / Math.ceil(ds))); // 67 => Number

let thename = "    doha  ";

console.log(thename[0]);
console.log(thename.charAt(1));
console.log(thename.length);
console.log(thename.trim());
console.log(thename.toUpperCase());

console.log(thename.trim().charAt(3).toUpperCase());

let sen = "Doha Abdullah I am 27 school";

console.log(sen.indexOf("I"));
console.log(sen.indexOf("I", 15));
console.log(sen.lastIndexOf("o"));
console.log(sen.slice(4, 8)); // slice will not include the end
console.log(sen.slice(-5)); // will start from -5 and delete all previous
console.log(sen.slice(-5, -3));

console.log(sen.repeat(6));
console.log(sen.split());
console.log(sen.split(""));
console.log(sen.split(" "));
console.log(sen.split(" ", 2));

let zero = "Elzero web school";

console.log(zero.length);

console.log(zero.substring(2, 7)); // no include the end
console.log(zero.substring(-10, 5)); // 00 to 6
console.log(zero.substring(zero.length - 5)); // 00 to 6
console.log(zero.substring(zero.length - 5, zero.length - 3));

console.log(zero.substr(0, 6));
console.log(zero.substr(-3)); // from back

console.log(zero.includes("zero"));
console.log(zero.includes("zero", 8));

console.log(zero.startsWith("E"));
console.log(zero.startsWith("a"));
console.log(zero.startsWith("zero", 2));

console.log(zero.endsWith("o", 6)); // length 6
console.log(zero.endsWith("o"));
console.log(zero.endsWith("l"));

console.log(zero.charAt(2).toUpperCase() + zero.slice(3, 6));

console.log(
  zero
    .substring(zero.length - 4, zero.length - 3)
    .toUpperCase()
    .repeat(8)
);

console.log(zero.substring(0, 6).split(" "));

console.log(
  zero.charAt(0).toLowerCase() +
    zero.slice(1, length - 1).toUpperCase() +
    zero.slice(-1).toLowerCase()
);

console.log(10 == "10");
console.log(10 != "10");
console.log(10 === "10");
console.log(10 !== "10");

console.log(10 > 20);
console.log(10 > 20);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 20);
console.log(10 <= 10);

console.log("doha" === "mohsin");
console.log("doha" == "mohsin");
console.log(typeof "doha" === typeof "mohsin");
console.log("doha" === "doha");

console.log(true);
console.log(!true);

console.log(!(10 == "10"));
console.log(10 == "10" && 10 > 8 && 10 >= 10);
console.log(10 == "10" && 10 > 8 && 10 >= 10 && 30 < 10);
console.log((10 == "10" && 10 > 8 && 10 >= 10) || 30 < 10);
console.log(10 == "10" || 10 > 8 || 10 >= 10 || 30 < 10);

let price = 0;
let discount = false;
let discountAmount = 30;
let country = "KSA";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egybt" && student === true) {
  price -= discountAmount + 30;
} else if (country === "Egybt" && student === false) {
  price -= discountAmount + 10;
} else if (country === "syria") {
  price -= 50;
} else {
  price -= 10;
}

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egybt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else if (country === "syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

let theName = "doha";
let theAge = 27;
let theGender = "female";

if (theGender === "female") {
  console.log("miss");
} else {
  console.log("mr");
}

console.log(theGender ? "miss" : "mr");

console.log(!theGender ? "miss" : "mr");

let result = theGender === "Male" ? "mr" : "miss";

console.log(`hello ${result}`);
console.log(`hello ${theGender ? "miss" : "mr"}`);

console.log(
  theAge < 20
    ? "20"
    : theAge > 20 && theAge < 30
    ? "20 to 30"
    : theAge > 60
    ? "agee is > 60 "
    : "unknown"
);

let pricee = "";
console.log(`the price ${pricee || 200}`);
console.log(`the price ${pricee ?? 200}`);
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));

let myfriends = ["ahmed", "syed", "moh", "ahemd ", "ali", "marwan"];

console.log(`hello ${myfriends[0]}`);
console.log(`hello ${myfriends[1]}`);
console.log(`hello ${myfriends[2][1]}`);
console.log(`hello ${myfriends[3][0]}`);
console.log(`hello ${myfriends[3][0][2]}`);

console.log(myfriends);
myfriends[2] = "mohsin";
myfriends[3] = ["anas ", "doha"];

console.log(myfriends.length);
myfriends[myfriends.length] = "mawuena";
console.log(myfriends);

myfriends.unshift("jana");
console.log(myfriends);

myfriends.push("hamza");
console.log(myfriends);

myfriends.pop();
console.log(myfriends);

myfriends.shift();
console.log(myfriends);

console.log(myfriends.indexOf("ahmed"));
console.log(myfriends.indexOf("mawuena", 1));

console.log(myfriends.lastIndexOf("ahmed", -2));

console.log(myfriends.includes("mawuena", 1));
console.log(myfriends.includes("mawuena"));

if (myfriends.indexOf("ahmed") === -1) {
  console.log("not found");
}

if (myfriends.indexOf("osama") === -1) {
  console.log("not found");
}

let arrayMixed = [
  "syed",
  3,
  34,
  1234555,
  10,
  "10",
  "ahmed",
  "ali",
  378,
  -67,
  -09,
  200,
  100,
  500,
  2000,
];

console.log(arrayMixed.sort());
console.log(arrayMixed.reverse());

console.log(myfriends.slice());
console.log(myfriends.slice(1));
console.log(myfriends.slice(2));
console.log(myfriends.slice(2, 3));
console.log(myfriends.slice(-1));
console.log(myfriends.slice(-3));
console.log(myfriends.slice(1, -3));
console.log(myfriends);

console.log(myfriends.splice(0, 0, "sameer", "smara"));
console.log(myfriends);

console.log(myfriends.splice(0, 4, "sameer", "smara"));
console.log(myfriends);
let concat1 = ["hady", "shady"];

console.log(myfriends.concat(myfriends, concat1));
console.log(myfriends.concat(myfriends, concat1, "doha", "jana", [1, 3]));

console.log(myfriends.join()); // string
console.log(myfriends.join(""));
console.log(myfriends.join("| "));
console.log(myfriends.join("@ "));
console.log(myfriends.join().toUpperCase());

let zero1 = 0;
let counter = 1;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// console.log(my);

console.log(my.reverse().slice(counter + counter));
console.log(
  my.slice(my.length - (counter + counter + counter), my.length - counter)
);

// console.log(my[my.length] = "elzero");
 my.unshift("Elzero") 
console.log(my.shift());

// console.log(
//   my.slice(--counter, ++counter).join().slice(zero1, --counter) +
//     my.slice(++zero1, counter).join().slice(counter)
// );
