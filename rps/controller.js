var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    game.newGame();

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    let validInput = false;
    while(!validInput) {
        let numberOfRounds = prompt("How many rounds are you going to play");
        // Use game.IsNumerOfRoundsValid() to validate the user input.
        if(game.isNumberOfRoundsValid(numberOfRounds)){
            game.setNumberOfRounds(numberOfRounds);
            validInput = true;
        }
    }
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the user again


    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    playRound(game.numberOfRounds);

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log("The final score is: \n")
    console.log("Number of computer wins " + game.countOfComputerWins);
    console.log(" \nNumber of player wins " + game.countOfPlayerWins);
    console.log(" \nNumber of ties " + game.countOfTies);

}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    for(let i = 0; i < roundNumber; i++) {
        console.log("The current score is \nComputer: " + game.countOfComputerWins + " \nPlayer: " + game.countOfPlayerWins + " \nTies: " + game.countOfTies);
    
        //Prompt for Player Selection
        var playerSelection = getPlayerSelection();
        console.log(playerSelection);

        var round = new Round(playerSelection);

        //Play the Round
        var outcome = round.determineWinner();

        //*********************************ADD CODE HERE *************************************/
        // Display the Round Results from the properties stored in the Round object
        console.log(outcome);
    }

}

/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    let validInput = false;
    while(!validInput){
        let playerSelection = prompt("Make your selection (must be 'rock', 'paper', or 'scissors'");
        switch(playerSelection) {
            case 'rock':
                validInput = true;
                return 'rock';
            case 'paper':
                validInput = true;
                return 'paper';
            case 'scissors':
                validInput = true;
                return 'scissors';
            default:
                console.log("Invalid selection (must be 'rock', 'paper', or 'scissors'");
        }
    }

}

