/* 
VARIABLES
*/
const container = document.querySelector("#container");



/* 
EVENT LISTENERS
*/

//add this here so that when the page loads, we start off with the 16x16 grid 
document.addEventListener("DOMContentLoaded", (event) => {
    createGrid(16);
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
        grid.style.width = gridSize + "px";
        grid.style.height = gridSize + "px";
    });
}