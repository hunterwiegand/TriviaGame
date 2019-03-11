

//About ducks and geese
//Sports
//Movies
//States and Contries and stuff
//Geography! as you could say
//Animals...obi
//Lizards


var game = {

    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    answerAsStr: "",

    correct: 0,
    incorrect: "0",

    questionCounter: 0,

    intervalId: "",
    gameTimer: 10,

    resultTimer: "",

    //Function to start game off buton
    startGame: function () {
        $("#start-button").on("click", function () {
            game.runGameTimer();
            $("#title-message").html("TRIVIA TIME");
            $("#start-button").html("<div id='timer-card'><span></span></div>");
            $("#question-container").removeClass("hidden");

            game.updateDisplay();
        })
    },

    //function to run game timer
    runGameTimer: function () {
        clearInterval(game.intervalId);
        game.intervalId = setInterval(game.decrementGameTimer, 1000);
    },

    //Function to count down game timer
    decrementGameTimer: function () {

        game.gameTimer--;
        $("#timer-card").html("<h3>Remaining time: " + game.gameTimer + "</h3>");

        if (game.gameTimer === 0) {
            console.log("STAPH");
            game.displayOutOfTime();
            game.stopGameTimer();
        }
    },

    //Function to stop game timer
    stopGameTimer: function () {

        if (game.questionCounter < 10) {
            setTimeout(game.updateDisplay, 3000);
        } else {
            game.resultTimer = setTimeout(game.displayResults, 3000);
        }

        clearInterval(game.intervalId);
        game.generateQuestion();
    },

    //function to generate trivia questions
    generateQuestion: function () {

        switch (game.questionCounter) {
            case 0:
                game.question = "What is the correct spelling of a C major scale";
                game.option1 = "A B C D E F G H";
                game.option2 = "C D E F G H I J K";
                game.option3 = "A B C D E F G A";
                game.option4 = "C D E F G A B C";
                game.answer = "4";
                game.answerAsStr = "C D E F G A B C";
                break;
            case 1:
                game.question = "Following the circle of 5ths, what comes after D major scale";
                game.option1 = "E Major";
                game.option2 = "E Minor";
                game.option3 = "A major";
                game.option4 = "G major";
                game.answer = "3";
                game.answerAsStr = "A Major";
                break;
            case 2:
                game.question = "What musical mode takes a major scale and flatens the 7th";
                game.option1 = "Dorian";
                game.option2 = "Locrian";
                game.option3 = "Minor";
                game.option4 = "Mixolydian";
                game.answer = "4";
                game.answerAsStr = "Micolydian";
                break;
            case 3:
                game.question = "Which tune is known form being set in 5/4";
                game.option1 = "All of Me";
                game.option2 = "Take the A Train";
                game.option3 = "Blue Bossa";
                game.option4 = "Take 5";
                game.answer = "4";
                game.answerAsStr = "Take 5";
                break;
            case 4:
                game.question = "How many half steps are in a major scale";
                game.option1 = "1";
                game.option2 = "2";
                game.option3 = "3";
                game.option4 = "4";
                game.answer = "2";
                game.answerAsStr = "2";
                break;
            case 5:
                game.question = "What instrument does Charlie Parker play";
                game.option1 = "Trumpet";
                game.option2 = "Saxophone";
                game.option3 = "Clarinet";
                game.option4 = "Base";
                game.answer = "2";
                game.answerAsStr = "Saxophone";
                break;
            case 6:
                game.question = "How many beats does a whole note represent in a 4/4 time signature?";
                game.option1 = "4";
                game.option2 = "3";
                game.option3 = "2";
                game.option4 = "1";
                game.answer = "1";
                game.answerAsStr = "4";
                break;
            case 7:
                game.question = "A Saxophone is a ...";
                game.option1 = "double reeded instrument.";
                game.option2 = "brass intrument";
                game.option3 = "woodwind instrument";
                game.option4 = "not a real instrument";
                game.answer = "3";
                game.answerAsStr = "Woodwind instrument";
                break;
            case 8:
                game.question = "What is Hunter's favorite Tenor Saxophonoist";
                game.option1 = "Dexter Gordon";
                game.option2 = "Sonny Stit";
                game.option3 = "Sonny Rollins";
                game.option4 = "Coleman Hawkins";
                game.answer = "1";
                game.answerAsStr = "Dexter Gordon";
                break;
            case 9:
                game.question = "Do you like jazz?";
                game.option1 = "Yes";
                game.option2 = "Absolutely";
                game.option3 = "300%";
                game.option4 = "No";
                game.answer = "2";
                game.answerAsStr = "Absolutely";
                break;
            default:
                game.question = "";
                game.option1 = "";
                game.option2 = "";
                game.option3 = "";
                game.option4 = "";
                game.answer = "";
                game.answerAsStr = "";
                break;
        }
    },

    //function to get player input
    getPlayerGuess: function () {

        $(document).on("click", ".select-answer", function () {
            var playerGuess = this.value;

            game.applyGuess(playerGuess);


            game.generateQuestion();
        });
    },

    //function to evaluate player input
    applyGuess: function (guess) {

        if (guess === game.answer) {
            game.displayCorrectGuess();
            game.stopGameTimer();
            game.correct++;
        } else {
            game.displayIncorrectGuess();
            game.stopGameTimer();
            game.incorrect++;
        }

        if (game.questionCounter > 10) {
            game.displayResults();

            game.stopGameTimer();
        }
        // game.updateDisplay();
    },


    //Update Screen for questions
    updateDisplay: function () {

        game.runGameTimer();

        game.questionCounter++;


        $("#timer-card").removeClass("hidden");

        $("#option1").removeClass("hidden");
        $("#option2").removeClass("hidden");
        $("#option3").removeClass("hidden");
        $("#option4").removeClass("hidden");
        $("#answer-row-display").addClass("hidden");


        $("#question-counter").html("Question " + game.questionCounter);
        $("#question-text").html(game.question);
        $("#option1").html(game.option1);
        $("#option2").html(game.option2);
        $("#option3").html(game.option3);
        $("#option4").html(game.option4);
    },

    //Display Correct Result Screen
    displayCorrectGuess: function () {

        $("#question-text").html("You guessed correct!");

        console.log("You guessed rightttt");

        //Hide timer card
        $("#timer-card").addClass("hidden");

        // $("#question-counter").html("Question " + game.questionCounter - 1);
        $("#answer-row-display").removeClass("hidden");
        $("#answer-display").html(game.answerAsStr);
        $("#option1").addClass("hidden");
        $("#option2").addClass("hidden");
        $("#option3").addClass("hidden");
        $("#option4").addClass("hidden");

        game.gameTimer = 10;
    },

    //Display Incorrect Result Screen
    displayIncorrectGuess: function () {

        $("#question-text").html("Incorrect, the answer was");

        $("#timer-card").addClass("hidden");

        // $("#question-counter").html("Question " + game.questionCounter - 1);
        $("#answer-row-display").removeClass("hidden");
        $("#answer-display").html(game.answerAsStr);
        $("#option1").addClass("hidden");
        $("#option2").addClass("hidden");
        $("#option3").addClass("hidden");
        $("#option4").addClass("hidden");

        game.gameTimer = 10;
    },

    //Display Out of time Sceen
    displayOutOfTime: function () {

        $("#question-text").html("You ran out of time!, the answer was");

        //set timeout for 5 seconds to change displayCorrect guess to display

        //Hide timer card
        $("#timer-card").addClass("hidden");

        // game.runResultTimer();

        // $("#question-counter").html("Question " + game.questionCounter - 1);
        $("#answer-row-display").removeClass("hidden");
        $("#answer-display").html(game.answerAsStr);
        $("#option1").addClass("hidden");
        $("#option2").addClass("hidden");
        $("#option3").addClass("hidden");
        $("#option4").addClass("hidden");

        game.gameTimer = 10;
    },

    displayResults: function () {

        var grade = game.getLetterGrade(game.correct);
        console.log("We are in the display results function");
        $("#title-message").html("Results");

        $("#answer-display").addClass("hidden");

        $("#question-text").addClass("hidden");

        $("#question-counter").html("Here's the results");
        $("#option1").html("Questions answered correctly: " + game.correct);
        $("#option1").removeClass("hidden");
        $("#option1").prop("disabled", true);
        $("#option2").html("Questions answered incorrectly: " + game.incorrect);
        $("#option2").removeClass("hidden");
        $("#option2").prop("disabled", true);

        $("#option4").html("Grade: " + grade[0] + " ( " + grade[1] + ")");
        $("#option4").removeClass("hidden");


        game.stopGameTimer();


        clearTimeout(game.resultTimer);

        game.resetGame();
    },

    getLetterGrade: function (correct) {

        switch (correct) {
            case 0:
                var letterGrade = ["F-", "0%"];
                return letterGrade;
            case 1:
                var letterGrade = ["F-", "10%"];
                return letterGrade;
            case 2:
                var letterGrade = ["F-", "20%"];
                return letterGrade;
            case 3:
                var letterGrade = ["F-", "3%"];
                return letterGrade;
            case 4:
                var letterGrade = ["F", "40%"];
                return letterGrade;
            case 5:
                var letterGrade = ["F", "50%"];
                return letterGrade;
            case 6:
                var letterGrade = ["D", "60%"];
                return letterGrade;
            case 7:
                var letterGrade = ["C", "70%"];
                return letterGrade;
            case 8:
                var letterGrade = ["B", "80%"];
                return letterGrade;
            case 9:
                var letterGrade = ["A", "90%"];
                return letterGrade;
            case 10:
                var letterGrade = ["A+", "100%"];
                return letterGrade;
        }
    },

    resetGame: function () {

        $("#play-again").html("Click to try again");

        $("#play-again").removeClass("hidden");
        $("#play-again").on("click", function () {

            $("#option1").prop("disabled", false);
            $("#option2").prop("disabled", false);
            $("#play-again").addClass("hidden");
            game.questionCounter = "0";


            game.generateQuestion();


            game.runGameTimer();
            $("#title-message").html("TRIVIA TIME");
            $("#start-button").html("<div id='timer-card'><span></span></div>");
            $("#question-container").removeClass("hidden");

            game.updateDisplay();
            game.getPlayerGuess();
            console.log("Ran out of time to fix reset Function :(")
        });
        // Add a button to reset the game, aka 


        //reset stats


    }
};

game.generateQuestion();
game.startGame();

game.getPlayerGuess();