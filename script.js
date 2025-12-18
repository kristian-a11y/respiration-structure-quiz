const menuScreen = document.getElementById("menu-screen");
const optionsScreen = document.getElementById("options-screen");
const contentScreen = document.getElementById("content-screen");

const selectedPathwayText = document.getElementById("selected-pathway");
const contentTitle = document.getElementById("content-title");
const contentText = document.getElementById("content-text");

const pathwayBtn = document.getElementById("pathway-btn");
const molecularBtn = document.getElementById("molecular-btn");
const backToMenuBtn = document.getElementById("back-to-menu");
const backToOptionsBtn = document.getElementById("back-to-options");

let currentPathway = "";

// Handle pathway click
document.querySelectorAll(".menu li").forEach(item => {
  item.addEventListener("click", () => {
    currentPathway = item.dataset.pathway;
    selectedPathwayText.textContent = currentPathway;

    menuScreen.hidden = true;
    optionsScreen.hidden = false;
  });
});

// Pathway button
pathwayBtn.addEventListener("click", () => {
  optionsScreen.hidden = true;
  contentScreen.hidden = false;

  contentTitle.textContent = currentPathway + " Pathway";
  contentText.textContent = 
    "This section will show the metabolic pathway diagram and steps for " + currentPathway + ".";
});

// Molecular structures button
molecularBtn.addEventListener("click", () => {
  optionsScreen.hidden = true;
  contentScreen.hidden = false;

  contentTitle.textContent = currentPathway + " Molecular Structures";
  contentText.textContent = 
    "This section will show molecular structures involved in " + currentPathway + ".";
});

// Back buttons
backToMenuBtn.addEventListener("click", () => {
  optionsScreen.hidden = true;
  menuScreen.hidden = false;
});

backToOptionsBtn.addEventListener("click", () => {
  contentScreen.hidden = true;
  optionsScreen.hidden = false;
});
