"use strict";

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const home = document.querySelector(".home");
const gameArea = document.querySelector(".gameArea");
const mode = document.querySelector(".mode");
const homePage = document.querySelector("#homePage");
const gameAreaEntry = document.querySelector(".gameAreaEntry");
let text = document.querySelector(".text");
let gameAreaPage = document.querySelector(".gameAreaPage");
const startGame = document.querySelector(".startGame");
const computerText = document.querySelector(".computerText");
let guess = document.querySelector("#guess");
const check = document.querySelector(".check");
let messege = document.querySelector(".messege");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
let newGame = document.querySelector(".newGame");
let exit = document.querySelector(".exit");
let confirmBox = document.querySelector(".confirmBox");
let confirmYes = document.querySelector(".confirmYes");
let confirmNo = document.querySelector(".confirmNo");
let hidden = document.querySelector(".hidden");
let overlay = document.querySelector(".overlay");
let confirmOverlay = document.querySelector(".confirmOverlay");
let showValue = document.querySelector(".showValue");

let currentMode = "dark";

mode.addEventListener("click", () => {
    if (currentMode === "dark") {
        currentMode = "light";
        mode.innerText = "Light Mode";
        mode.style.color = "black";
        mode.style.backgroundColor = "grey";
        navbar.style.color = "rgb(233, 0, 175)";
        navbar.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        text.style.color = "white";
    } else {
        currentMode = "dark";
        mode.innerText = "Dark Mode";
        mode.style.color = "white";
        mode.style.backgroundColor = "black";
        navbar.style.color = "rgb(175, 103, 16)";
        navbar.style.backgroundColor = "rgb(241, 236, 229)";
        body.style.backgroundColor = "white";
        text.style.color = "black";

    }
})



startGame.addEventListener("click", () => {
    homePage.style.display = "none";
    gameAreaPage.style.display = "block";
    home.style.display = "none";
    gameArea.style.display = "none";
    gameAreaPage.classList.remove("overlay");
    computerText.textContent = "🤔?";
})

let computerGuess = Math.trunc(Math.random() * 100) + 1;
computerText.textContent = computerGuess;

let currentScore = 100;
score.textContent = currentScore;

let newhighScore = 0;
highScore.textContent = newhighScore;

check.addEventListener("click", () => {
    let humanGuess = Number.parseInt(guess.value);

    if (!humanGuess) {
        messege.textContent = "please guess your number";
    } else if (computerGuess === humanGuess) {
        messege.textContent = "you guess the correct number";
        guess.disabled = true;
        messege.style.backgroundColor = "green";
        if (currentScore > newhighScore) {
            highScore.textContent = currentScore;
        }
    } else if (computerGuess > humanGuess) {
        if (currentScore > 1) {
            messege.textContent = "you guess too low number";
            currentScore--;
            score.textContent = currentScore;
        } else {
            messege.textContent = "you lost the game";
            messege.style.backgroundColor = "red";
            score.textContent = "0";
            guess.disabled = true;
        }

    } else if (computerGuess < humanGuess) {
        if (currentScore > 1) {
            messege.textContent = "you guess too high number";
            currentScore--;
            score.textContent = currentScore;
        } else {
            messege.textContent = "you lost the game";
            messege.style.backgroundColor = "red";
            score.textContent = "0";
            guess.disabled = true;
        }

    }
})

newGame.addEventListener("click", () => {
    computerGuess = Math.trunc(Math.random() * 100) + 1;
    currentScore = 100;
    score.textContent = currentScore;
    messege.textContent = "guess the random number";
    messege.style.backgroundColor = "rgb(70, 70, 70)";
    computerText.textContent = "🤔?";
    guess.value = "";
    guess.disabled = false;
})

exit.addEventListener("click", () => {
    confirmBox.classList.remove("hidden");
    gameAreaPage.classList.add("overlay");
    confirmBox.classList.add("confirmOverlay");
})
confirmYes.addEventListener("click", () => {
    confirmBox.classList.add("hidden");
    gameAreaPage.style.display = "none";
    homePage.style.display = "block";
    home.style.display = "block";
    gameArea.style.display = "block";
})
confirmNo.addEventListener("click", () => {
    confirmBox.classList.add("hidden");
    gameAreaPage.classList.remove("overlay");

})
