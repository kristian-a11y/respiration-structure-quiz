const startBtn = document.getElementById("start-btn");
const menuScreen = document.getElementById("menu-screen");
const quizScreen = document.getElementById("quiz-screen");

startBtn.addEventListener("click", () => {
  menuScreen.hidden = true;
  quizScreen.hidden = false;
});
