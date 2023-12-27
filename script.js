const outerContainerDOM = document.createElement("div");
outerContainerDOM.classList.add("container");
outerContainerDOM.id = "outer-container";
outerContainerDOM.style.display = "flex";

const bodyDOM = document.querySelector("body");
bodyDOM.append(outerContainerDOM);

for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex = 1;
    outerContainerDOM.append(square);
}
