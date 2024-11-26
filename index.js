// Create variable for the game state 

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to rstore references to the necessary DOM nodes

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message");
let player1ScoreBoard = document.getElementById("player1ScoreBoard");
let player2ScoreBoard = document.getElementById("player2ScoreBoard");
const rollbtn = document.getElementById("rollBtn");
const resetbtn = document.getElementById("resetBtn");

// Now it's tie to use event listener to the rollDice button and logout a random number.
// Between 1-6
// we use Math.floor and Math.random function.

rollbtn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // 1 - 5 => plus 1 for 1 - 6.

    // 1 step. Now we show the dice number instead of looging it into alert :-
    // 3 step. Now to see which player turn it is we will use active class.
    // 4 step. Now we update the message Dom so that it will show whose turn it is.
    // 5 step. Now to update the score of each player.
    // 6 step. Now display the scores in their scoreboards.

    if(player1Turn){

        // alert("Player 1 rolled " + randomNumber);
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn";

        player1Score += randomNumber;
        player1ScoreBoard.textContent = player1Score;
        // console.log("player 1 score - " + player1Score);


    } else {

        // alert("Player 2 rolled " + randomNumber);
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn";

        player2Score += randomNumber;
        // console.log("player 2 score - " + player2Score);
        player2ScoreBoard.textContent = player2Score;
    }

    // Now it's time to know which player turn is it :-

    // if(player1Turn){
    //     player1Turn = false;
    // } else {
    //     player1Turn = true;
    // }


    // 7 step. Now let's check is a player has won. If so change the message "Player x has won!"
    // 8 step. Now let's hide the roll dice button and show reset button.
    // 9 step. Now refactor the duplicate code of buttons

    function showDisplay() {
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";
    }

    if(player1Score >= 20){
        message.textContent = " Player 1 has won! ";
        // rollbtn.style.display = "none";
        // resetbtn.style.display = "block";
        showDisplay();
    }
    else if(player2Score >= 20){
        message.textContent = " Player 2 has won! ";
        // rollbtn.style.display = "none";
        // resetbtn.style.display = "block";
        showDisplay();
    }


    // 2 step. To reuse code to change player turn and do not code this much as above using if else :-

    player1Turn = !player1Turn   

})


// Now when the game ends it should start again :-

resetbtn.addEventListener("click", function() {
    // alert("reset btn click");
    reset();
})

function reset() {
    message.textContent = "Player 1 Turn";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;

    player1ScoreBoard.textContent = '0';
    player2ScoreBoard.textContent = '0';

    player1Dice.textContent = '-';
    player2Dice.textContent = '-';

    rollbtn.style.display = 'block'; // Show roll button to start the game again
    resetbtn.style.display = 'none'; // Hide reset button until the game is won

    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}