const container = document.querySelector("#container");


function makeGrid(r,c){
    for (i=0;i<r;i++){
        const newRow = document.createElement("div")
        for(j=0;j<c;j++){
            
            const gridElement = document.createElement("div");
            newRow.appendChild(gridElement);
        }    
        container.appendChild(newRow)    

    }

    const gridElement = document.querySelectorAll("#container div div")
    console.log(gridElement)

    gridElement.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.background = "red"
        })
    }) 
}

makeGrid(16,16);

// make hover function


