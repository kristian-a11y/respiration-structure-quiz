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
