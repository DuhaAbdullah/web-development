let numbers = [1 , 5 , 3 , 6 , 3 ,9];

function square(x){
    return x * x;
}


const newNumber = numbers.map(square);

console.log(newNumber);

let numbers1 = [1 , 5 , 3 , 6 , 3 ,9];


const newNumber1 = numbers1.map((x) => x * x);

console.log(newNumber);

let numbers2 = [1 , 5 , 3 , 6 , 3 ,9];


const newNumber2 = numbers2.map(function sqaure(x){
    return x * x;
});

console.log(newNumber2);

// reduce gives you one value at the end

const add = numbers.reduce(function(accumelator , currentValue , index , arr){
    console.log(`accumelator $(accumelator)`);
    console.log(`currentValue $(currentValue)`);
    console.log(`index $(index)`);
    console.log(`array $(arr)`);
    console.log("=======");
    return (accumelator + currentValue);
}, 0);

console.log(add);
