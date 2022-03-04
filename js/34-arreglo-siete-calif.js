let calif =[];
let promedio =0;
let suma =0;
for(let i = 0; i < 7; i++) {
    calif.push(parseFloat(prompt(`Ingrese la calif. ${i+1}`)))
}

calif.forEach(num =>{
    suma = suma + num;
});

promedio = (suma / calif.length)

document.writeln(`<h1>El promedio es: ${promedio.toFixed(2)}</h1>`)