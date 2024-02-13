document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('result-container').style.display = "none";
    let score = 0;

    document.getElementById("submit2").addEventListener("click", function () {
        const answer1 = document.getElementById("answer1").value;
        const answer2 = document.getElementById("answer2").value;
        checkAnswer("answer1", answer1, "Canberra");
        checkAnswer("answer2", answer2, "Yen");

        displayResults();

        if (score == 20) {
            startConfetti();
            document.getElementById('result_message').innerHTML = "Congratulations!";
        } else {
            document.getElementById('result_message').innerHTML = "Better luck next time!";
        }

        // Reset score
        score = 0;
    });

    // FUNCTIONS

    function displayResults() {
        document.getElementById('result-container').style.display = "inline";
        document.getElementById("score").innerText = "Score: " + score + " / 20";
    }

    function checkAnswer(answerFieldId, userAnswer, correctAnswer, ) {
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            document.getElementById(answerFieldId).style.borderColor = "#3498db";
            score += 10;
        } else {
            document.getElementById(answerFieldId).style.borderColor = "red";
        }
    }
    
    function startConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    
});

