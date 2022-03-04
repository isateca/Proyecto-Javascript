const numerosPares = [[12, 6], [2, 8]]
console.log(numerosPares.length)

let x = parseInt(prompt("Ingrese x: "))
let y = parseInt(prompt("Ingrese y: "))

if(x>=numerosPares.length||y>=numerosPares[0].length) {
    alert("Lo indices estan fuera del rango")
}
else if(isNaN(x)||isNaN(y)){
    alert("Los carecteres no son numeros")
}
else{
    document.writeln(`<h1>El valor es: ${numerosPares[x][y]}</h1>`)
}