const questions = [
  { question: "Wie sagt man 'apple' auf Deutsch?", answers: ["Banane", "Apfel", "Orange"], correct: 1 },
  { question: "Was ist die Hauptstadt von Deutschland?", answers: ["München", "Berlin", "Hamburg"], correct: 1 },
  { question: "Welcher Artikel gehört zu 'Haus'?", answers: ["Der", "Die", "Das"], correct: 2 },
  { question: "Wie sagt man 'car' auf Deutsch?", answers: ["Auto", "Fahrrad", "Bus"], correct: 0 },
  { question: "Welches Wort bedeutet 'Buch' auf Englisch?", answers: ["Book", "Table", "Pen"], correct: 0 },
  { question: "Welche Farbe hat der Himmel?", answers: ["Blau", "Grün", "Rot"], correct: 0 },
  { question: "Was ist 5 + 3?", answers: ["7", "8", "9"], correct: 1 },
  { question: "Wie sagt man 'dog' auf Deutsch?", answers: ["Katze", "Hund", "Vogel"], correct: 1 },
  { question: "Welches Tier macht 'Miau'?", answers: ["Hund", "Katze", "Kuh"], correct: 1 },
  { question: "Welche Jahreszeit kommt nach dem Sommer?", answers: ["Herbst", "Winter", "Frühling"], correct: 0 },
  { question: "Wie viele Tage hat eine Woche?", answers: ["5", "6", "7"], correct: 2 },
  { question: "Was ist die Hauptstadt von Frankreich?", answers: ["Berlin", "Paris", "Madrid"], correct: 1 },
  { question: "Wie viele Beine hat eine Spinne?", answers: ["6", "8", "10"], correct: 1 },
  { question: "Welche Frucht ist gelb?", answers: ["Apfel", "Banane", "Kirsche"], correct: 1 },
  { question: "Welches Land ist bekannt für Pizza?", answers: ["Spanien", "Italien", "Griechenland"], correct: 1 },
  { question: "Welche Sprache spricht man in Spanien?", answers: ["Italienisch", "Spanisch", "Französisch"], correct: 1 },
  { question: "Wie sagt man 'thank you' auf Deutsch?", answers: ["Bitte", "Danke", "Hallo"], correct: 1 },
  { question: "Wie nennt man einen jungen Hund?", answers: ["Kätzchen", "Welpe", "Ferkel"], correct: 1 },
  { question: "Was ist die Hauptstadt von Italien?", answers: ["Rom", "Mailand", "Venedig"], correct: 0 },
  { question: "Welche Farbe hat das Gras?", answers: ["Grün", "Blau", "Gelb"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  let questionEl = document.getElementById("question");
  let answersEl = document.getElementById("answers");
  let nextBtn = document.getElementById("next-btn");
  
  questionEl.textContent = questions[currentQuestionIndex].question;
  answersEl.innerHTML = "";

  questions[currentQuestionIndex].answers.forEach((answer, index) => {
      let btn = document.createElement("button");
      btn.textContent = answer;
      btn.classList.add("answer-btn");
      btn.onclick = () => checkAnswer(btn, index);
      answersEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function checkAnswer(button, index) {
  let correctIndex = questions[currentQuestionIndex].correct;
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
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      document.getElementById("quiz-container").innerHTML = `<h1>Quiz beendet!</h1><p>Dein Score: ${score}</p>`;
  }
}

showQuestion();