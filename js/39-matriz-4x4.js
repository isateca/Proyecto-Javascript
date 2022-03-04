const matriz = [[1,2,3,4],
                [5,6,7,8], 
                [9,10,11,12], 
                [13,14,15,16]];


let filas =[]
let col =[]
let sumaF =0;
let sumaC=0;
let diagonal1 =0
let diagonal2 =0
for(let x = 0; x < 4; x++){
    
    for(let y = 0; y < 4; y++){
        sumaF += matriz[x][y]
        sumaC+=matriz[y][x];
        if(x==y){
            diagonal1 += matriz[x][y]
        }
        if((x+y) == matriz.length-1){
            diagonal2 += matriz[x][y]
        }
    }
    filas.push(sumaF)
    col.push(sumaC)
    sumaF=0;
    sumaC=0;
}
console.log(filas)
document.writeln("<h1>Suma de las filas</h1>")
for (let i = 0; i < filas.length; i++) {
    document.writeln(`<h2>Suma ${i+1}: ${filas[i]}</h2>`)
}
console.log(col)
document.writeln("<h1>Suma de las columnas</h1>")
for (let i = 0; i < col.length; i++) {
    document.writeln(`<h2>Suma ${i+1}: ${col[i]}</h2>`)
}
console.log(diagonal1)
document.writeln(`<h1>Suma de la diagonal 1: ${diagonal1}</h1>`)
console.log(diagonal2)
document.writeln(`<h1>Suma de la diagonal21: ${diagonal2}</h1>`)

//Curiosamente da igual en en la suma de las diagonales