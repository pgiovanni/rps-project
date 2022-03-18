// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);

class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        if(Math.floor(Math.random() * (3) + 1) === 1)
            return Selections.ROCK;
        else if(Math.floor(Math.random() * (3) + 1) === 2)
            return Selections.PAPER;
        else if(Math.floor(Math.random() * (3) + 1) === 3)
            return Selections.SCISSORS;
     }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        if (this.playerSelection === "rock" && this.computerSelection === "paper") {
            return Outcomes.COMPUTER_WINS;
        }
        else if(this.playerSelection ===  "rock" &&  this.computerSelection === "rock") {
            return Outcomes.TIE;
        }
        else if(this.playerSelection === "rock" && this.computerSelection === "scissors") {
            return Outcomes.PLAYER_WINS;
        }
        else if(this.playerSelection === "paper" && this.computerSelection === "scissors") {
            return Outcomes.COMPUTER_WINS;
        }
        else if(this.playerSelection === "paper" && this.computerSelection === "paper") {
            return Outcomes.TIE;
        }
        else if(this.playerSelection === "paper" && this.computerSelection === "rock") {
            return Outcomes.PLAYER_WINS;
        }
        else if(this.playerSelection === "scissors" && this.computerSelection === "rock") {
            return Outcomes.COMPUTER_WINS;
        }
        else if(this.playerSelection === "scissors" && this.computerSelection === "scissors") {
            return Outcomes.TIE;
        }
        else if(this.playerSelection === "scissors" && this.computerSelection === "paper") {
            return Outcomes.PLAYER_WINS;
        }
    }
}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;