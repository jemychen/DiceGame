// Dice Numbers
let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
let randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

// Images
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let firstImage = document.querySelectorAll("img")[0];
firstImage.setAttribute("src", randomImageSource);

// Bottom Code Is the Same As The Top Two
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


// Determine Who Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML  = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML  = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}