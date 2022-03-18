class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        //*********************************ADD CODE HERE *************************************/
        this.countOfPlayerWins++;
    }

    incrementComputerWins(){
        //*********************************ADD CODE HERE *************************************/
        this.countOfComputerWins++;
    }

    incrementCountOfTies(){
        //*********************************ADD CODE HERE *************************************/
        this.countOfTies++;
    }


    setNumberOfRounds(numberOfRounds){
        //*********************************ADD CODE HERE *************************************/
        this.numberOfRounds = numberOfRounds;
    }

    newGame(){
        //*********************************ADD CODE HERE *************************************/
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
     isNumberOfRoundsValid(num) {
        //*********************************ADD CODE HERE *************************************/
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)
        if(num > 0 && num < 6) {
            return true;
        }
        else 
            return false;
    }
}



// DO NOT TOUCH THIS CODE
let unit_test  = Game;