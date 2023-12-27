// CONSTANTS
const containerDOM = document.createElement("div");
const bodyDOM = document.querySelector("body");


createContainer();
createGrid(16);
addHoverEventListener();

// FUNCTIONS
function addHoverEventListener() {
    squares = containerDOM.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mouseover", fillSquare);
    }
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
}

function fillSquare(e) {
    const target = e.target;
    target.classList.add("filled");
}