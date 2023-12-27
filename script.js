const outerContainerDOM = document.createElement("div");
outerContainerDOM.classList.add("container");
outerContainerDOM.id = "outer-container";
outerContainerDOM.style.display = "flex";

const bodyDOM = document.querySelector("body");
bodyDOM.append(outerContainerDOM);

