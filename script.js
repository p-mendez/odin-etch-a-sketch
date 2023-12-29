// CONSTANTS
const containerDOM = document.createElement("div");
const gridContainerDOM = document.createElement("div");
const buttonContainerDOM = document.createElement("div");
const bodyDOM = document.querySelector("body");

// VARIABLES
let randomColorMode = false;
let progressiveDarkeningMode = false;

start();

// FUNCTIONS
function addHoverEventListener() {
    squares = containerDOM.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mouseover", fillSquare);
    }
}

function clearGrid() {
    while (gridContainerDOM.firstChild) {
      gridContainerDOM.removeChild(gridContainerDOM.firstChild); 
    }
}

function createButtons() {
    const newGridBtn = document.createElement("button");
    newGridBtn.textContent = "Create New Grid";
    newGridBtn.onclick = promptGridSize;

    const randomColorBtn = document.createElement("button");
    randomColorBtn.textContent = "Random Colors On/Off";
    randomColorBtn.onclick = () => randomColorMode = !randomColorMode;

    const progressiveDarkeningBtn = document.createElement("button");
    progressiveDarkeningBtn.textContent = "Progressive Darkening Mode On/Off";
    progressiveDarkeningBtn.onclick = () => progressiveDarkeningMode = !progressiveDarkeningMode;

    buttonContainerDOM.append(newGridBtn);
    buttonContainerDOM.append(randomColorBtn);
    buttonContainerDOM.append(progressiveDarkeningBtn);
}

function createContainer() {
    containerDOM.classList.add("container");
    containerDOM.id = "container";
    containerDOM.style.display = "flex";
    containerDOM.style.flexDirection = "column";

    gridContainerDOM.classList.add("container");
    gridContainerDOM.id = "grid-container";
    gridContainerDOM.style.display = "flex";
    gridContainerDOM.style.flexDirection = "column";
    
    buttonContainerDOM.classList.add("container");
    buttonContainerDOM.id = "button-container";
    buttonContainerDOM.style.display = "flex";
    
    containerDOM.append(buttonContainerDOM);
    containerDOM.append(gridContainerDOM)
    bodyDOM.append(containerDOM);
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.flex = 1;
        row.style.display = "flex";
        gridContainerDOM.append(row);
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.style.flex = 1;
            square.classList.add("square");
            row.append(square);
        }
    }
    addHoverEventListener();
}

function fillSquare(e) {
    const target = e.target;

    if (target.classList.contains("filled")) {
        if (randomColorMode) {
            target.style.backgroundColor = getRandomCSS_RGB();
        } else {
            target.style.backgroundColor = "#000000";
        }

        if (progressiveDarkeningMode) {
            target.style.opacity -= -0.1;    // subtracting a negative because + operator concatenates
        } else {
            target.style.opacity = 1;
        }
    } else {
        if (randomColorMode) {
            target.style.backgroundColor = getRandomCSS_RGB();
        } else {
            target.style.backgroundColor = "#000000";
        }

        if (progressiveDarkeningMode) {
            target.style.opacity = .1;    
        } else {
            target.style.opacity = 1;
        }
        target.classList.add("filled");
    }
}

function getRandomCSS_RGB() {
    let MAX = 255;
    let r = (Math.floor(Math.random() * MAX)) + 1;
    let g = (Math.floor(Math.random() * MAX)) + 1;
    let b = (Math.floor(Math.random() * MAX)) + 1;

    return `rgb(${r},${g},${b})`;
}

function promptGridSize() {
    clearGrid();
    let size;

    do {
        size = prompt("What size grid would you like? Choose 1 - 100.", "16");
    } while (size < 1 || size > 100);

    createGrid(size);
}

function start() {
    createContainer();
    createGrid(16);
    createButtons();
}