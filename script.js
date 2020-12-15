const container = document.querySelector("#container");
let amount;
const btn = document.querySelector("#button")

btn.addEventListener("click", () => { 
amount = prompt();

container.style.cssText = "grid-template-columns: repeat(" + amount + ", 1fr); grid-template-rows:  + repeat(" + amount + ", 1fr)";


    while (container.firstChild) {
    container.removeChild(container.lastChild);
  }


for(i = 0; i < (amount * amount); i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 251) + ", " + Math.floor(Math.random() * 251) + ", " + Math.floor(Math.random() * 251) + ")"
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => 
    square.style.cssText = 'background: white; width: 100%; height: 100%'
);
squares.forEach(square =>
    square.addEventListener("mouseover", () => {
        square.style.cssText = "background: " + randomColor() + "; width: 100%; height: 100%";
    })
);

});