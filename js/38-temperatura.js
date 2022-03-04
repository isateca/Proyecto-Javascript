const temDia = []
for (let i = 0; i < 24; i++) {
    temDia[i] = parseInt(Math.random() * (40 - 1) + 1);
}
let suma =0;
let promedio = 0;
temDia.forEach(temp =>{
    suma+= temp;
})
promedio = parseInt(suma/temDia.length);
console.log(promedio)
console.log(temDia)
document.writeln(`<h1>Promedio: ${promedio}</h1>`);
let min = Math.min(...temDia);
document.writeln(`<h1>Celda mas fria: ${temDia.indexOf(min)}</h1>`)
let max = Math.max(...temDia);
document.writeln(`<h1>Celda mas caliente: ${temDia.indexOf(max)}</h1>`)
document.writeln(`<h1>Temperatura mas fria: ${min}°C</h1>`)
document.writeln(`<h1>Temperatura mas caliente: ${max}°C</h1>`)
