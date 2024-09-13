/* 
VARIABLES
*/
const container = document.querySelector("#container");

const button = document.querySelector("#button");


/* 
EVENT LISTENERS
*/

//add this here so that when the page loads, we start off with the 16x16 grid 
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

// with button press a new grid is created with the users input
button.addEventListener("click", () => {
    newGrid();
});

/* 
FUNCTIONS
*/
function createGrid(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            const div = document.createElement("div");
            div.classList.add("grid");
            
            container.appendChild(div);
        }
    }

    const grid = document.querySelectorAll(".grid");
    const gridSize = Math.floor(960/num);

    grid.forEach(grid => {
        // sets the size of each square in the grid
        grid.style.width = gridSize + "px";
        grid.style.height = gridSize + "px";

        // listener that will change square color when passing mouse over square
        grid.addEventListener("mouseover", () => {
            console.log("event triggered");
            grid.classList.add("trail");
        });
    });
}

// grabs user input for new grid
function newGrid(){
    const userInput = document.querySelector("#userInput");

    let value = userInput.value;

    createGrid(value);
}