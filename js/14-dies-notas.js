let nota =0;
let mayoresAOcho =0;
let menorAOcho =0;
let suma =0;
let promedio =0;
for(let i =0;i<10;i++){
    nota = parseInt(prompt(`Ingrese la nota ${i+1}:`))
    suma = suma+nota;
    if(nota>=8) mayoresAOcho++;
    else menorAOcho++;
}
promedio = suma/10;

alert(`Mayores a 8: ${mayoresAOcho}. Menores a 8: ${menorAOcho}. Promedio: ${promedio}`)