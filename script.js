const menuScreen = document.getElementById("menu-screen");
const optionsScreen = document.getElementById("options-screen");

const selectedPathwayText = document.getElementById("selected-pathway");
const backBtn = document.getElementById("back-btn");

let currentPathway = "";

// When clicking a pathway
document.querySelectorAll(".menu li").forEach(item => {
  item.addEventListener("click", () => {
    currentPathway = item.dataset.pathway;
    selectedPathwayText.textContent = currentPathway;

    menuScreen.hidden = true;
    optionsScreen.hidden = false;
  });
});

// Back button
backBtn.addEventListener("click", () => {
  optionsScreen.hidden = true;
  menuScreen.hidden = false;
});
