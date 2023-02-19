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
console.log(10 * 10 * 10 * 10  * 10 * 10);
console.log(1000000.00);