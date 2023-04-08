"use strict";

// constants || objectsS
const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

// variables
let rockBtn = document.querySelector(".btn-rock");
let paperBtn = document.querySelector(".btn-paper");
let scissorBtn = document.querySelector(".btn-scissor");
let resultShow = document.querySelector(".result");
let yourMoveResultShow = document.querySelector(".result-yourmove");
let gameResult = document.querySelector(".message");
let compPick = "";
let playerMove = "";
let win = document.querySelector(".wins");
let loss = document.querySelector(".losses");
let tie = document.querySelector(".ties");
let reset = document.querySelector(".reset");
// comp moves images variables
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
// yourmove images var
let y1 = document.querySelector(".y1");
let y2 = document.querySelector(".y2");
let y3 = document.querySelector(".y3");
//   EventListeners
rockBtn.addEventListener("click", computerPicking);
paperBtn.addEventListener("click", computerPicking);
scissorBtn.addEventListener("click", computerPicking);
reset.addEventListener("click", resetting);

// //images uploading
// let img = document.createElement("img");
// img.src = "rock.png";
// let img2 = document.createElement("img");
// img2.src = "paper.png";
// let img3 = document.createElement("img");
// img3.src = "scissor.png";
// // styling
// img.style.width = "70px";
// img2.style.width = "70px";

// img3.style.width = "70px";

//  function
function computerPicking() {
  let rNum = Math.ceil(Math.random() * 15);
  if (rNum >= 0 && rNum <= 5) {
    compPick = "Rock";
    // resultShow.innerHTML = "Rock";
    c1.style.display = "block";
    c2.style.display = "none";
    c3.style.display = "none";
    // resultShow.appendChild(img);
  } else if (rNum >= 6 && rNum <= 10) {
    compPick = "Paper";
    // resultShow.innerHTML = "Paper";
    c1.style.display = "none";
    c2.style.display = "block";
    c3.style.display = "none";
    // resultShow.appendChild(img2);
  } else if (rNum >= 11 && rNum <= 15) {
    compPick = "Scissor";
    // resultShow.innerHTML = "Scissor";
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "block";
    // resultShow.appendChild(img3);
  }
}

//   anonymous functions
rockBtn.addEventListener("click", function () {
  playerMove = "Rock";
  //   yourMoveResultShow.innerHTML = "Rock";
  y1.style.display = "block";
  y2.style.display = "none";
  y3.style.display = "none";
  //   yourMoveResultShow.appendChild(img);
  if (compPick === "Rock") {
    gameResult.innerHTML = "Tie!!";
    score.ties += 1;
    tie.innerHTML = score.ties;
  }
  if (compPick === "Paper") {
    gameResult.innerHTML = "You Lose!!";
    score.losses += 1;
    loss.innerHTML = score.losses;
  }
  if (compPick === "Scissor") {
    gameResult.innerHTML = "You Win!!";
    score.wins += 1;
    win.innerHTML = score.wins;
  }
});
paperBtn.addEventListener("click", function () {
  playerMove = "Paper";
  //   yourMoveResultShow.innerHTML = "Paper";
  y2.style.display = "block";
  y3.style.display = "none";
  y1.style.display = "none";
  //   yourMoveResultShow.appendChild(img2);

  if (compPick === "Rock") {
    gameResult.innerHTML = "You Win!!";
    score.wins += 1;
    win.innerHTML = score.wins;
  }
  if (compPick === "Paper") {
    gameResult.innerHTML = "Tie!!";
    score.ties += 1;
    tie.innerHTML = score.ties;
  }
  if (compPick === "Scissor") {
    gameResult.innerHTML = "You Lose!!";
    score.losses += 1;
    loss.innerHTML = score.losses;
  }
});
scissorBtn.addEventListener("click", function () {
  playerMove = "Scissor";
  //   yourMoveResultShow.innerHTML = "Scissor";
  y1.style.display = "none";
  y2.style.display = "none";
  y3.style.display = "block";
  //   yourMoveResultShow.appendChild(img3);

  if (compPick === "Rock") {
    gameResult.innerHTML = "You Lose!!";
    score.losses += 1;
    loss.innerHTML = score.losses;
  }
  if (compPick === "Paper") {
    gameResult.innerHTML = "You Win!!";
    score.wins += 1;
    win.innerHTML = score.wins;
  }
  if (compPick === "Scissor") {
    gameResult.innerHTML = "Tie!!";
    score.ties += 1;
    tie.innerHTML = score.ties;
  }
});
function resetting() {
  score.ties = 0;
  tie.innerHTML = score.ties;
  score.losses = 0;
  loss.innerHTML = score.losses;
  score.wins = 0;
  win.innerHTML = score.wins;
  gameResult.innerHTML = "";
  location.reload();
  //   yourMoveResultShow.innerHTML = "";
  //   resultShow.innerHTML = "";
}
