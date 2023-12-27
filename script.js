const outerContainerDOM = document.createElement("div");
outerContainerDOM.classList.add("container");
outerContainerDOM.id = "outer-container";
outerContainerDOM.style.display = "flex";
outerContainerDOM.style.flexDirection = "column";

const bodyDOM = document.querySelector("body");
bodyDOM.append(outerContainerDOM);

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.flex = 1;
    row.style.display = "flex";
    outerContainerDOM.append(row);
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.style.flex = 1;
        square.classList.add("square");
        row.append(square);
    }
}

squares = outerContainerDOM.querySelectorAll(".square");
for (const square of squares) {
    square.addEventListener("mouseover", fillSquare);
}

function fillSquare(e) {
    const target = e.target;
    target.classList.add("filled");
}