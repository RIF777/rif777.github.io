const quizData = {
  1: [
      { question: "Wie sagt man 'apple' auf Deutsch?", answers: ["Banane", "Apfel", "Orange"], correct: 1 },
      { question: "Was ist die Hauptstadt von Deutschland?", answers: ["München", "Berlin", "Hamburg"], correct: 1 },
      { question: "Welcher Artikel gehört zu 'Haus'?", answers: ["Der", "Die", "Das"], correct: 2 }
  ],
  2: [
      { question: "Was bedeutet 'Hallo'?", answers: ["Goodbye", "Hello", "Thank you"], correct: 1 },
      { question: "Welches Wort ist ein Verb?", answers: ["Laufen", "Tisch", "Rot"], correct: 0 },
      { question: "Was ist das Gegenteil von 'heiß'?", answers: ["Kalt", "Warm", "Schnell"], correct: 0 }
  ]
};

// Quiz-Nummer aus der URL holen
const urlParams = new URLSearchParams(window.location.search);
const quizNumber = urlParams.get('quiz');

let currentQuiz = quizData[quizNumber];
let currentQuestionIndex = 0;
let score = 0;

document.getElementById("quiz-title").textContent = `Quiz ${quizNumber}`;

function showQuestion() {
  if (currentQuestionIndex >= currentQuiz.length) {
      document.getElementById("quiz-container").innerHTML = `<h1>Quiz beendet!</h1><p>Dein Score: ${score}</p>`;
      return;
  }

  let questionObj = currentQuiz[currentQuestionIndex];
  let questionEl = document.getElementById("question");
  let answersEl = document.getElementById("answers");
  let nextBtn = document.getElementById("next-btn");

  questionEl.textContent = questionObj.question;
  answersEl.innerHTML = "";

  questionObj.answers.forEach((answer, index) => {
      let btn = document.createElement("button");
      btn.textContent = answer;
      btn.classList.add("answer-btn");
      btn.onclick = () => checkAnswer(btn, index);
      answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(button, index) {
  let correctIndex = currentQuiz[currentQuestionIndex].correct;
  let buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
      button.classList.add("correct");
      score++;
      document.getElementById("score").textContent = score;
  } else {
      button.classList.add("incorrect");
      buttons[correctIndex].classList.add("correct");
  }

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

// Quiz starten
if (quizNumber in quizData) {
  showQuestion();
} else {
  document.getElementById("quiz-container").innerHTML = "<h1>Quiz nicht gefunden</h1>";
}
