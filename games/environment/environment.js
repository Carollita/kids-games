const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const qtdQuestions = document.querySelector(".qtdQuestions");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const show = document.querySelector(".show");

import questions from "./data.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";
  show.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  } 

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  show.innerHTML = `<strong>Veja com calma as perguntas e respostas!</strong>
  <br>Qual o nome que se dá ao processo de reaproveitamento de lixo? Reciclagem 
  <br>A lixeira para coleta seletiva de material do tipo papel/papelão é de que cor? Azul
  <br>A lixeira de coleta seletiva da cor vermelha é para qual tipo de material? Plástico
  <br> A lixeira para coleta seletiva de material do tipo vidro e metal são de que cor respectivamente? Verde para vidro e Amarelo para metal
  <br> A lixeira para coleta seletiva de material do tipo madeira é de que cor? Preto
  <br> A lixeira de coleta seletiva da cor laranja é para resíduos perigosos, como por exemplo? Pilhas e Baterias
  <br> A lixeira para coleta seletiva de resíduos de hospitais e serviço de saúde é da cor? Branca
  <br> A lixeira de coleta seletiva da cor marrom é para lixo orgânico, que é? Restos de alimento, folhas, sementes, restos de carne, ossos, entre outros
  <br> A lixeira para coleta seletiva de material do tipo lixo radioativo e lixo não reciclável, contaminado ou que a separação não é possível são de que cor respectivamente? Roxo para lixo radioativo e Cinza para lixo não reciclável, contaminado ou que a separação não é possível
  <br> O que se pode fazer para economizar água, por exemplo? Evitar banhos muito longos sem necessidade, verificar se não há vazamentos, desligar a torneira ao escovar os dentes
  <br> O que se pode fazer para economizar energia, por exemplo? Deixar as roupas acumularem para passar de uma vez, apagar a lâmpada se o comodo estiver claro ou se você não estiver usando o comodo.
  <br> Ser eficiente no consumo de energia é? Usar a energia com responsabilidade
  `;
  content.style.display = "none";
  contentFinish.style.display = "flex";
  show.style.display = "flex";
}

function loadQuestion() {
    qtdQuestions.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;
    

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

