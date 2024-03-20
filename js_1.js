const container = document.querySelector("#container");
const pickBrushColor = document.querySelector("#pick-brush-color");


function makeGrid(r,c){
    for (i=0;i<r;i++){
        const newRow = document.createElement("div")
        for(j=0;j<c;j++){
            const gridElement = document.createElement("div");
            newRow.appendChild(gridElement);
           // console.log(pickGridColor.value)
        }    
        container.appendChild(newRow)    

    }

    const gridElement = document.querySelectorAll("#container div div")
    //console.log(gridElement)
    //gridElement.background = pickGridColor.value;
    gridElement.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.background = pickBrushColor.value
        })
    }) 
}

function submitSquares(){

    let btn = document.querySelector("#submit-button");
    btn.addEventListener("click",() =>{
        
        let inputElement = document.querySelector("#number1");
        let inputVal = inputElement.value;
        console.log(inputVal);
        if (document.querySelector("#container")){
            console.log("hi");
            var myElem = document.getElementById("container");
            myElem.innerHTML = ''
        }   
        if (inputVal > 64){
            inputVal=64;
        }
        makeGrid(inputVal,inputVal);
    })

}

submitSquares();
// make hover function


