function checkAnswer(answer) {
  const feedback = document.getElementById("feedback");
  if (answer === "Citrate") {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. Try again.";
    feedback.style.color = "red";
  }
}
const startBtn = document.getElementById("start-btn");
const menuScreen = document.getElementById("menu-screen");
const quizScreen = document.getElementById("quiz-screen");

startBtn.addEventListener("click", () => {
  menuScreen.hidden = true;
  quizScreen.hidden = false;
});
