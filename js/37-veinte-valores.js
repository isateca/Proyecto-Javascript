let numeros = [];
let sumaImpar =0;
let sumaPar =0;

/*Genere los numeros aleatorios porque me dio flojera estar metiendolos yo */
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(Math.random() * (5 - 1) + 1);
}
numeros.forEach(num => {
    if(num%2==0) sumaPar += num;
    else sumaImpar += num;
})
console.log(numeros)

document.writeln(`<h1>Suma pares: ${sumaPar}</h1>`)
document.writeln(`<h1>Suma impares: ${sumaImpar}</h1>`)