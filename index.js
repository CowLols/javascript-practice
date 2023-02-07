// nested loop - loop in another loop

let symbol = window.prompt("Enter a symbol to use.")
let rows = window.prompt("Enter number of rows")
let columns = window.prompt("Enter number of columns")

for(let i = 1; i <= rows; i+=1){


    for(let j = 1; j <= columns; j+=3){
        document.getElementById("rectangle").innerHTML += symbol;
    
        
    }       
    document.getElementById("rectangle").innerHTML += "<br>"
}
   


