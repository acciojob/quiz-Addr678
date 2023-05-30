//your JS code here. If required.
 const questions = [
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
                d: "Helicopters Terminals Motorboats Lamborghinis",
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

        let currentQuestion = 0;
        let score = 0;

        function loadQuestion() {
            const quiz = document.getElementById("quiz");
            const question = document.getElementById("question");
            const a = document.getElementById("a_text");
            const b = document.getElementById("b_text");
            const c = document.getElementById("c_text");
            const d = document.getElementById("d_text");

            const currentQ = questions[currentQuestion];
            question.textContent = currentQ.question;
            a.textContent = currentQ.a;
            b.textContent = currentQ.b;
            c.textContent = currentQ.c;
            d.textContent = currentQ.d;
        }

        function submitAnswer() {
            const options = document.getElementsByName("option");
            let selectedOption = null;

            for (let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selectedOption = options[i].id;
                    break;
                }
            }

            if (selectedOption === null) {
                alert("Please select an option!");
                return;
            }

            if (selectedOption === questions[currentQuestion].correct) {
                score++;
            }

            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            const quiz = document.getElementById("quiz");
            const result = document.getElementById("result");
            const reloadBtn = document.getElementById("reload");

            quiz.style.display = "none";
            result.textContent = `You scored ${score} out of ${questions.length}!`;
            reloadBtn.style.display = "block";
        }

        loadQuestion();
