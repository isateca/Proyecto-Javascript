const numeros = [4, 5, 9, 6, 10, 23, 14, 15, 2, 1]


let min = Math.min(...numeros)
document.writeln(`<h1>Minimo: ${min} Posicion: ${numeros.indexOf(min)}</h1>`)
let max = Math.max(...numeros);
document.writeln(`<h1>Maximo: ${max}. Posicion: ${numeros.indexOf(max)}</h1>`)