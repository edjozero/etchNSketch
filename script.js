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
        const div = document.createElement("div");
        container.appendChild(div);
    }
}
starterDivs(256);