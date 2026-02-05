let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let mainTag = document.querySelector(".show");

let turn0 = false;
let draw = true;

//2D Array means array of array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetBtn = () => {
  turn0 = false;
  enableBtn();
  msgContainer.classList.add("hide");
};

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations the winner is ${winner}!`;
  msgContainer.classList.remove("hide");
  disableBtn();
};

// const drawGame = () => {
//   if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//     if (pos1Val !== pos2Val && pos2Val !== pos3Val) {
//       console.log("noone won the game");
//       draw = true;
//       msg.innerText = `Game is a draw!`;
//       msgContainer.classList.remove("hide");
//     }
//   }
// };

// const count = () => {
//   for (let c = 0; c <= boxes.length; c++) {}
// };

function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(`winner is ${pos1Val}`);
        showWinner(pos1Val);
      }
    }
  }
}

newGameBtn.addEventListener("click", () => {
  // mainTag.classList.remove(".show");
  // msgContainer.classList.add("hide");
  resetBtn();
});

resetGameBtn.addEventListener("click", resetBtn);
