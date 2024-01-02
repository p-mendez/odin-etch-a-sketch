// CONSTANTS
const containerDOM = document.createElement("div");
const gridContainerDOM = document.createElement("div");
const buttonContainerDOM = document.createElement("div");
const modeContainerDOM = document.createElement("div");
const bodyDOM = document.querySelector("body");

// VARIABLES
let randomColorMode = false;
let progressiveDarkeningMode = false;

start();

// FUNCTIONS

/* Initializes app by creating elements and calling other functions */
function start() {
    createContainers();
    createGrid(16);
    createButtons();
}

/* Adds mouseover event listeners to each square in the grid to call the fillSquare function */
function addHoverEventListener() {
    squares = containerDOM.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mouseover", fillSquare);
    }
}

/* Creates and appends buttons to toggle random colors and progressive darkening modes */
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

/* Creates and styles container, grid, and button divs and appends them to the body */
function createContainers() {
    containerDOM.classList.add("container", "flex-column");
    containerDOM.id = "container";
    containerDOM.style.flex = "0 1 640px";

    gridContainerDOM.classList.add("container", "flex-column");
    gridContainerDOM.id = "grid-container";
    
    buttonContainerDOM.classList.add("container");
    buttonContainerDOM.id = "button-container";

    modeContainerDOM.classList.add("container", "flex-column");
    modeContainerDOM.id = "mode-container";
    const displayRandomColorMode = document.createElement("p");
    const displayProgressiveDarkeningMode = document.createElement("p");
    displayRandomColorMode.textContent = `Random Colors: ${randomColorMode}`;
    displayProgressiveDarkeningMode.textContent = `Progressive Darkening: ${progressiveDarkeningMode}`;
    modeContainerDOM.append(displayRandomColorMode);
    modeContainerDOM.append(displayProgressiveDarkeningMode);

    const title = document.createElement("h1");
    title.textContent = "Etch-A-Sketch";
    
    containerDOM.append(title);
    containerDOM.append(buttonContainerDOM);
    containerDOM.append(gridContainerDOM);
    containerDOM.append(modeContainerDOM);
    bodyDOM.append(containerDOM);
}

/* Generates a grid of divs based on the provided size
 * @param {number} size - Size of one side of the square grid */
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

/* Fills or darkens the square on mouseover based on mode toggles
 * @param {object} e - Mouseevent object */
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


// HELPER FUNCTIONS

/* Removes all child elements from the grid container div */
function clearGrid() {
    while (gridContainerDOM.firstChild) {
      gridContainerDOM.removeChild(gridContainerDOM.firstChild); 
    }
}

/* Generates a random RGB color string
 * @returns {string} Random CSS RGB color */
function getRandomCSS_RGB() {
    let MAX = 255;
    let r = (Math.floor(Math.random() * MAX)) + 1;
    let g = (Math.floor(Math.random() * MAX)) + 1;
    let b = (Math.floor(Math.random() * MAX)) + 1;

    return `rgb(${r},${g},${b})`;
}

/* Prompts the user for a grid size, clears existing grid, and regenerates grid */
function promptGridSize() {
    clearGrid();
    let size;

    do {
        size = prompt("What size grid would you like? Choose 1 - 100.", "16");
    } while (size < 1 || size > 100);

    createGrid(size);
}