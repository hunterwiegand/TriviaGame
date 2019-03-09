var game = {

    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    answerAsStr: "",

    correct: "0",
    incorrect: "0",

    questionCounter: 0,

    intervalId: "",
    gameTimer: 7,
    resultTimer: 5,

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
            game.stopGameTimer();
            console.log("STAPH");
            game.displayOutOfTime();
        }
    },

    //Function to stop game timer
    stopGameTimer: function () {
        clearInterval(game.intervalId);
        game.generateQuestion();
        // game.updateDisplay();
        setTimeout(game.updateDisplay, 3000);
        if (game.questionCounter > 10) {
            game.displayResults();
        }
    },

    //function to generate trivia questions
    generateQuestion: function () {

        switch (game.questionCounter) {
            case 0:
                game.question = "What is my name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            case 1:
                game.question = "What is my dog name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            case 2:
                game.question = "What is my hat name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            case 3:
                game.question = "What is my bob name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            case 4:
                game.question = "What is my feend name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            case 6:
                game.question = "What is my silly name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            default:
                game.question = "";
                game.option1 = "";
                game.option2 = "";
                game.option3 = "";
                game.option4 = "";
                game.answer = "";
                game.answerAsStr= "";
                break;
        }
    },

    //function to get player input
    getPlayerGuess: function () {

        $(document).on("click", ".select-answer", function () {
            var playerGuess = this.value;

            game.applyGuess(playerGuess);
            // game.questionCounter++;


            game.generateQuestion();
        });
    },

    //function to evaluate player input
    applyGuess: function (guess) {

        console.log("Guess ", guess);
        console.log("Answer ", game.answer);

        if (guess === game.answer) {
            game.stopGameTimer();

            console.log("You guessed right");
            game.displayCorrectGuess();
            game.correct++;
        } else {
            game.stopGameTimer();
            console.log("Wrong!!!!!!!");
            game.displayIncorrectGuess();
            game.incorrect++;
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

        //set timeout for 5 seconds to change displayCorrect guess to display

        // game.runResultTimer();

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

        game.gameTimer = 7;
    },

    //Display Incorrect Result Screen
    displayIncorrectGuess: function () {

        $("#question-text").html("Incorrect, the answer was");

        //set timeout for 5 seconds to change displayCorrect guess to display
        
        // game.runResultTimer();
        //Hide timer card
        $("#timer-card").addClass("hidden");

        // $("#question-counter").html("Question " + game.questionCounter - 1);
        $("#answer-row-display").removeClass("hidden");
        $("#answer-display").html(game.answerAsStr);
        $("#option1").addClass("hidden");
        $("#option2").addClass("hidden");
        $("#option3").addClass("hidden");
        $("#option4").addClass("hidden");

        game.gameTimer = 7;
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

        game.gameTimer = 7;
    },

    displayResults: function () {
        
    }
};

game.generateQuestion();
game.startGame();

game.getPlayerGuess();