// console.log("refreshed");
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

// if (randomNumber1 === 1){
//     document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2){
//     document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 === 3){
//     document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 === 4){
//     document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 === 5){
//     document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// } else {
//     document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
//     document.querySelector("h1").innerHTML = ("Player 1 wins");
// }

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// if (randomNumber2 === 1){
//     document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
// } else if (randomNumber2 === 2){
//     document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
// } else if (randomNumber2 === 3){
//     document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
// } else if (randomNumber2 === 4){
//     document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
// } else if (randomNumber2 === 5){
//     document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
// } else {
//     document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
//     document.querySelector("h1").innerHTML = ("Player 2 wins");
// }

// if(randomNumber1 === randomNumber2){
//     document.querySelector("h1").innerHTML = ("Draw");
// }

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
// var image2 = document
//   .querySelectorAll("img")[1]
//   .setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins";
} else (randomNumber1 === randomNumber2);
{
  document.querySelector("h1").innerHTML = "Draw";
}
