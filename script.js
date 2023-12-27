// CONSTANTS
const containerDOM = document.createElement("div");
const bodyDOM = document.querySelector("body");


createContainer();
createGrid(16);
createButton();




// FUNCTIONS
function addHoverEventListener() {
    squares = containerDOM.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mouseover", fillSquare);
    }
}

function clearGrid() {
    while (containerDOM.firstChild) {
      containerDOM.removeChild(containerDOM.firstChild); 
    }
  }

function createButton() {
    const btn = document.createElement("button");
    btn.textContent = "Create New Grid";
    btn.onclick = promptGridSize;
    bodyDOM.prepend(btn);
}

function createContainer() {
    containerDOM.classList.add("container");
    containerDOM.id = "container";
    containerDOM.style.display = "flex";
    containerDOM.style.flexDirection = "column";
    bodyDOM.append(containerDOM);
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.flex = 1;
        row.style.display = "flex";
        containerDOM.append(row);
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
    target.classList.add("filled");
}

function promptGridSize() {
    clearGrid();
    let size;

    do {
        size = prompt("What size grid would you like? Choose 1 - 100.", "16");
    } while (size < 1 || size > 100);

    createGrid(size);
}