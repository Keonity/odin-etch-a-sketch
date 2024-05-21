let body = document.querySelector("body");
console.log(body);

let divContainer = document.querySelector(".container");

let createButton = document.querySelector("#create");

createButton.addEventListener("click", function() {
    let size = prompt("Enter a grid size(height & width");
    createBoard(size);
});

function createDiv() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("squares");
    newDiv.addEventListener('mouseover', function() {
        // console.log(newDiv.style.backgroundColor);
        // console.log(newDiv.style.backgroundColor === "rgb(255, 255, 255)");
        newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    })
    return newDiv;
}

function createRow(amount) {
    let divRow = document.createElement("div");
    divRow.classList.add("row");
    for (let i = 0; i < amount; i++) {
        divRow.appendChild(createDiv());
    }
    // divContainer.appendChild(divRow);
    return divRow;
}

function createBoard(amount = 16) {
    while (amount > 100) {
        amount = prompt("Size cannot be greater than 100");
    }
    console.log("Create Board");
    divContainer.replaceChildren();
    for (let i = 0; i < amount; i++) {
        divContainer.appendChild(createRow(amount));
    }
}