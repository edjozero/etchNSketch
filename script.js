/* 
VARIABLES
*/
const container = document.querySelector("#container");



/* 
EVENT LISTENERS
*/


/* 
FUNCTIONS
*/
function starterDivs(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            const div = document.createElement("div");
            div.classList.add("grid");
            
            container.appendChild(div);
        }
    }

    const grid = document.querySelectorAll(".grid");
    const gridSize = Math.ceil(960/num);

    grid.forEach(grid => {
        grid.style.width = gridSize + "px";
        grid.style.height = gridSize + "px";
    });
}
starterDivs(8);