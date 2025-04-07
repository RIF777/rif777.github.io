


 
// Quiz-Nummer aus der URL holen
const urlParams = new URLSearchParams(window.location.search);
const quizNumber = urlParams.get('quiz');
const quizTitles = {
  1: "Farben", 
  2: "Grammatik",
  3: "Obst und Gemüse",
  4: "Tiere",        // Hinzugefügt
  5: "Essen und Trinken"  // Hinzugefügt
  // Du kannst noch weitere Titel hier hinzufügen
};


const quizData = {
  // Quiz 1: Farben
  1: [
      { question: "(Hut) ist zu groß.", answers: ["Er", "Sie", "Es"], correct: 0 },
      { question: "(Mädchen) spielt auf dem Hof", answers: ["Sie", "Er", "Es"], correct: 2 },
      { question: "Welche Farbe entsteht aus Blau + Gelb?", answers: ["Grün", "Lila", "Orange"], correct: 0 },
      { question: "Welche Farbe hat ein Apfel meistens?", answers: ["Rot", "Lila", "Grau"], correct: 0 },
      { question: "Welche Farbe hat Gras?", answers: ["Grün", "Braun", "Schwarz"], correct: 0 },
      { question: "Welche Farbe ist typischerweise mit Liebe verbunden?", answers: ["Rot", "Blau", "Gelb"], correct: 0 },
      { question: "Welche Farbe hat ein typischer Schulbus?", answers: ["Gelb", "Schwarz", "Weiß"], correct: 0 },
      { question: "Welche Farbe ist eine Mischung aus Rot und Blau?", answers: ["Lila", "Grün", "Orange"], correct: 0 },
      { question: "Welche Farbe hat ein Fußball meistens?", answers: ["Weiß", "Pink", "Türkis"], correct: 0 },
      { question: "Welche Farbe ist der Himmel bei schönem Wetter?", answers: ["Blau", "Grau", "Braun"], correct: 0 }
  ],

  // Quiz 2: Grammatik
  2: [
      { question: "Welcher Artikel passt zu 'Tisch'?", answers: ["Der", "Die", "Das"], correct: 0 },
      { question: "Was ist ein Verb?", answers: ["Laufen", "Hund", "Grün"], correct: 0 },
      { question: "Was ist der Plural von 'Buch'?", answers: ["Bücher", "Buchs", "Buches"], correct: 0 },
      { question: "Welche Zeitform ist 'ich bin gegangen'?", answers: ["Perfekt", "Präsens", "Futur"], correct: 0 },
      { question: "Was ist ein Adjektiv?", answers: ["Schnell", "Haus", "Trinken"], correct: 0 },
      { question: "Welche Präposition passt: 'Ich gehe ___ Schule.'", answers: ["zur", "nach", "über"], correct: 0 },
      { question: "Wie heißt der Dativ von 'der Mann'?", answers: ["dem Mann", "den Mann", "des Mannes"], correct: 0 },
      { question: "Was ist der Imperativ von 'gehen' (du)?", answers: ["Geh!", "Gehe!", "Gehst!"], correct: 0 },
      { question: "Welche Wortart ist 'und'?", answers: ["Konjunktion", "Adverb", "Nomen"], correct: 0 },
      { question: "Wie viele Fälle hat die deutsche Sprache?", answers: ["4", "3", "5"], correct: 0 }
  ],

  // Quiz 3: Obst und Gemüse
  3: [
      { question: "Was ist ein Apfel?", answers: ["Obst", "Gemüse", "Fleisch"], correct: 0 },
      { question: "Was ist eine Karotte?", answers: ["Gemüse", "Obst", "Süßigkeit"], correct: 0 },
      { question: "Welche Farbe hat eine Zitrone?", answers: ["Gelb", "Rot", "Grün"], correct: 0 },
      { question: "Welches Obst ist tropisch?", answers: ["Ananas", "Kartoffel", "Zwiebel"], correct: 0 },
      { question: "Welche Frucht ist rot und hat viele kleine Kerne?", answers: ["Erdbeere", "Banane", "Gurke"], correct: 0 },
      { question: "Was isst man roh im Salat?", answers: ["Tomate", "Brot", "Käse"], correct: 0 },
      { question: "Was ist keine Frucht?", answers: ["Zwiebel", "Pfirsich", "Birne"], correct: 0 },
      { question: "Was wächst unter der Erde?", answers: ["Kartoffel", "Apfel", "Paprika"], correct: 0 },
      { question: "Was ist grün und länglich?", answers: ["Gurke", "Erdbeere", "Pilz"], correct: 0 },
      { question: "Was gehört zu Obst?", answers: ["Kirsche", "Brokkoli", "Kohl"], correct: 0 }
  ]
};


document.getElementById("quiz-title").textContent = quizTitles[quizNumber] || "Unbenannt";


let currentQuiz = quizData[quizNumber];
let currentQuestionIndex = 0;
let score = 0;


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
