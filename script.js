const params = new URLSearchParams(window.location.search);
const pathwayName = params.get("name");

if (document.getElementById("title")) {
  document.getElementById("title").textContent = pathwayName;
}

/* ---------- MOLECULAR QUIZ ---------- */
let questionIndex = 0;

function nextQuestion() {
  const data = PATHWAYS[pathwayName];
  const molecule = data.molecules[questionIndex];

  document.getElementById("question").textContent =
    "Identify: " + molecule;

  const choices = shuffle([...data.molecules]).slice(0, 4);
  if (!choices.includes(molecule)) choices[0] = molecule;

  const container = document.getElementById("choices");
  container.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () =>
      alert(choice === molecule ? "Correct!" : "Wrong");
    container.appendChild(btn);
  });

  questionIndex = (questionIndex + 1) % data.molecules.length;
}

/* ---------- FLOWCHART ---------- */
function checkFlowchart() {
  const items = [...document.querySelectorAll("#flowchart li")]
    .map(li => li.textContent);

  const correct = PATHWAYS[pathwayName].flowchart.join(",");

  alert(
    items.join(",") === correct
      ? "Correct order!"
      : "Try again"
  );
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/* ---------- INIT FLOWCHART ---------- */
if (document.getElementById("flowchart")) {
  const shuffled = shuffle([...PATHWAYS[pathwayName].flowchart]);
  const ul = document.getElementById("flowchart");

  shuffled.forEach(m => {
    const li = document.createElement("li");
    li.textContent = m;
    li.draggable = true;
    ul.appendChild(li);
  });
}
function choosePathway(pathway) {
  localStorage.setItem("pathway", pathway);
}

function chooseMode(mode) {
  localStorage.setItem("mode", mode);
}
function startMoleculeQuiz(molecules) {
  let index = 0;

  const question = document.getElementById("question");

  function showQuestion() {
    question.textContent =
      "Which molecule is this? " + molecules[index].name;
  }

  showQuestion();
}
function startFlowchart(reactions) {
  const list = document.getElementById("steps");

  reactions.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    list.appendChild(li);
  });
}
