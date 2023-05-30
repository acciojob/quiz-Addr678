//your JS code here. If required.
var questions = [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
            }
        ];

        var currentQuestion = 0;
        var score = 0;

        function loadQuestion() {
            var question = questions[currentQuestion];
            document.getElementById("question").textContent = question.question;
            document.getElementById("a_text").textContent = question.a;
            document.getElementById("b_text").textContent = question.b;
            document.getElementById("c_text").textContent = question.c;
            document.getElementById("d_text").textContent = question.d;
        }

        function submitAnswer() {
            var selectedOption = document.querySelector("input[name='option']:checked");
            if (selectedOption) {
                var selectedAnswer = selectedOption.value;
                if (selectedAnswer === questions[currentQuestion].correct) {
                    score++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }
        }

        function showResult() {
            var result = document.getElementById("result");
            result.textContent = "Your Score: " + score + " out of " + questions.length;
            result.style.display = "block";
            document.getElementById("quiz").style.display = "none";
        }
   