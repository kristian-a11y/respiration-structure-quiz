const params = new URLSearchParams(window.location.search);
const pathwayName = params.get("name");

let pathwayData = null;

/* ---------- LOAD DATA ---------- */
if (pathwayName) {
  fetch(`data/${pathwayName}.json`)
    .then(res => res.json())
    .then(data => {
      pathwayData = data;

      if (document.getElementById("title")) {
        document.getElementById("title").textContent = data.name;
      }

      if (document.getElementById("question")) {
        startMoleculeQuiz(data.molecules);
      }

      if (document.getElementById("flowchart")) {
        startFlowchart(data.reactions);
      }
    })
    .catch(err => console.error(err));
}

/* ---------- MOLECULAR QUIZ ---------- */
let questionIndex = 0;

function startMoleculeQuiz(molecules) {
  showQuestion(molecules);
}

function showQuestion(molecules) {
  const molecule = molecules[questionIndex];
  document.getElementById("question").textContent =
    "Identify: " + molecule.name;

  const container = document.getElementById("choices");
  container.innerHTML = "";

  molecule.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () =>
      alert(option === molecule.name ? "Correct!" : "Wrong");
    container.appendChild(btn);
  });
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex >= pathwayData.molecules.length) {
    questionIndex = 0;
  }
  showQuestion(pathwayData.molecules);
}

/* ---------- FLOWCHART ---------- */
function startFlowchart(reactions) {
  const ul = document.getElementById("flowchart");
  ul.innerHTML = "";

  shuffle([...reactions]).forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    ul.appendChild(li);
  });
}

function checkFlowchart() {
  const items = [...document.querySelectorAll("#flowchart li")]
    .map(li => li.textContent);

  const correct = pathwayData.reactions.join(",");

  alert(
    items.join(",") === correct
      ? "Correct order!"
      : "Try again"
  );
}

/* ---------- UTILS ---------- */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
