let base = prompt("Ingrese la base: ")
let altura = prompt("Ingrese la altura: ")
let lado1 = prompt("Ingrese lado 1: ")
let lado2 = prompt("Ingrese lado 2: ")
let lado3 = prompt("Ingrese lado 3: ")

let area = (base*altura)/2;
let perimetro = parseInt(lado1)+parseInt(lado2)+parseInt(lado3);

alert(`Area: ${area}, Perimetro: ${perimetro}`)