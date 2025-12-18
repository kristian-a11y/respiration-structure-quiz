let questionIndex = 0;
let pathwayData = null;

// Get the pathway name from the URL
const params = new URLSearchParams(window.location.search);
const pathwayName = params.get("name");

// Load the JSON file for the pathway
fetch(`data/${pathwayName}.json`)
  .then(res => res.json())
  .then(data => {
    pathwayData = data;
    showQuestion();
  })
  .catch(err => console.error("Failed to load pathway:", err));

// Show a question
function showQuestion() {
  if (!pathwayData) return;

  const molecule = pathwayData.molecules[questionIndex];
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");

  questionEl.textContent = "Identify: " + molecule.name;

  choicesEl.innerHTML = "";
  molecule.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () =>
      alert(option === molecule.name ? "Correct!" : "Wrong");
    choicesEl.appendChild(btn);
  });
}

// Go to the next question
function nextQuestion() {
  questionIndex = (questionIndex + 1) % pathwayData.molecules.length;
  showQuestion();
}
