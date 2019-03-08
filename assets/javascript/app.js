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

    questionCounter: 1,

    startGame: function () {
        $("#start-button").on("click", function () {
            $("#title-message").html("TRIVIA TIME");
            $("#start-button").html("<div id='timer-card'><span>Timer card goes here</span></div>");
            $("#question-container").removeClass("hidden");
        })
    },

    generateQuestion: function () {

        switch (game.questionCounter) {
            case 1:
                game.question = "What is my name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "3";
                game.answerAsStr = "Hunter";
                break;
            case 2:
                game.question = "What is my dog name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "Hunter";
                break;
            case 3:
                game.question = "What is my hat name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "Hunter";
                break;
            case 4:
                game.question = "What is my bob name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "Hunter";
                break;
            case 5:
                game.question = "What is my feend name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "Hunter";
                break;
            case 6:
                game.question = "What is my silly name";
                game.option1 = "Tom";
                game.option2 = "Tim";
                game.option3 = "Hunter";
                game.option4 = "Ty";
                game.answer = "Hunter";
                break;
            default:
                game.question = "";
                game.option1 = "";
                game.option2 = "";
                game.option3 = "";
                game.option4 = "";
                game.answer = "";
                break;
        }

        game.updateDisplay();
    },

    getPlayerGuess: function () {
        $(".select-answer").on("click", function () {
            var playerGuess = this.value;

            game.applyGuess(playerGuess);
            game.questionCounter++;
            game.generateQuestion();
            game.updateDisplay();
        });
    },

    applyGuess: function (guess) {

        console.log("Guess ", guess);
        console.log("Answer ", game.answer);

        if (guess === game.answer) {
            console.log("You guessed right");
            game.displayCorrectGuess();
            game.correct++;
        } else {
            console.log("Wrong!!!!!!!");
            game.displayIncorrectGuess();
            game.incorrect++;
        }
    },

    updateDisplay: function () {


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

    displayCorrectGuess: function () {

        $("#question-counter").html("You guessed correct!");

        $("#answer-row-display").removeClass("hidden");

        $("#answer-display").html(game.answerAsStr);
        $("#option1").addClass("hidden");
        $("#option2").addClass("hidden");
        $("#option3").addClass("hidden");
        $("#option4").addClass("hidden");
    },

    displayIncorrectGuess: function () {

        $("#question-text").html("Incorrect, the answer was");


        $("#answer-row-display").removeClass("hidden");
        $("#answer-display").html(game.answerAsStr);
        $("#option1").addClass("hidden");
        $("#option2").addClass("hidden");
        $("#option3").addClass("hidden");
        $("#option4").addClass("hidden");
    }
};

game.generateQuestion();
game.startGame();

game.getPlayerGuess();

