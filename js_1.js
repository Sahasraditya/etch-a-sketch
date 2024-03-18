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
}

makeGrid(16,16);