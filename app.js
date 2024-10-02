var outcomeDisplay = document.querySelector("#outcome");
var tossImage = document.querySelector("#tossImage");

document.querySelector("#headButton").onclick = tossChand;
document.querySelector("#tailButton").onclick = tossTara;

function tossChand() {
    var compChoice = Math.ceil(Math.random() * 2);
    if (compChoice === 1) {
        tossImage.src = "https://en.numista.com/catalogue/photos/pakistan/434-original.jpg"; 
        outcomeDisplay.innerHTML = "You won the Toss!";
    } else {
        tossImage.src = "https://en.numista.com/catalogue/photos/pakistan/433-original.jpg"; 
        outcomeDisplay.innerHTML = "You lost the Toss!";
    }
}

function tossTara() {
    var compChoice = Math.ceil(Math.random() * 2);
    if (compChoice === 1) {
        tossImage.src = "https://en.numista.com/catalogue/photos/pakistan/434-original.jpg"; 
        outcomeDisplay.innerHTML = "You won the Toss!";
    } else {
        tossImage.src = "https://en.numista.com/catalogue/photos/pakistan/433-original.jpg"; 
        outcomeDisplay.innerHTML = "You lost the Toss!";
    }
}
