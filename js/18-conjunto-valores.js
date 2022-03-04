let conjunto_1 = [];
let conjunto_2 = [];
let suma_1 =0;
let suma_2 =0;
let cant =15;
for(let i =0;i<cant;i++){
    conjunto_1.push(parseInt(prompt(`Valor ${i+1}. Conjunto 1`)));
    suma_1 += conjunto_1[i];
}
for(let i =0;i<cant;i++){
    conjunto_2.push(parseInt(prompt(`Valor ${i+1}. Conjunto 2`)))
    suma_2 += conjunto_2[i];
}
document.writeln("<h1>Conjunto 1</h1>")
conjunto_1.map(num => {
    document.write(`${num} - `)
})
document.writeln(`<h2>Suma conjunto 1: ${suma_1}</h2>`)
document.writeln("<h1>Conjunto 2</h1>")
conjunto_2.map(num => {
    document.write(`${num} - `)
})
document.writeln(`<h2>Suma conjunto 2: ${suma_2}</h2>`)

if(suma_1>suma_2){
    document.writeln(`<h2>La suma del conjunto 1 es mayor</h2>`)
}else{
    document.writeln(`<h2>La suma del conjunto 2 es mayor</h2>`)
}