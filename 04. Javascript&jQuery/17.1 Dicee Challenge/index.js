var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1+1);

var image1 = document.querySelector(".img1");
if (randomNumber1 === 1){
  image1.src = "images/dice1.png";
}else if (randomNumber1 === 2){
  image1.src = "images/dice2.png";
}else if (randomNumber1 === 3){
  image1.src = "images/dice3.png";
}else if (randomNumber1 === 4){
  image1.src = "images/dice4.png";
}else if (randomNumber1 === 5){
  image1.src = "images/dice5.png";
}else {
  image1.src = "images/dice6.png";
}


var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2+1);

var image2 = document.querySelector(".img2");
if (randomNumber2 === 1){
  image2.src = "images/dice1.png";
}else if (randomNumber2 === 2){
  image2.src = "images/dice2.png";
}else if (randomNumber2 === 3){
  image2.src = "images/dice3.png";
}else if (randomNumber2 === 4){
  image2.src = "images/dice4.png";
}else if (randomNumber2 === 5){
  image2.src = "images/dice5.png";
}else {
  image2.src = "images/dice6.png";
}

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player1 wins🚩";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player2 wins🚩";
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw";
}