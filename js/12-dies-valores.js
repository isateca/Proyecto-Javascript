let dato =0;
let suma =0;
let promedio =0;
let i =0;
while(i<10){
    dato = parseFloat(prompt(`Ingrese el numero ${i+1}:`))
    suma = suma + dato;
    i++;
}
promedio = suma /10;
alert(`Suma: ${suma}. Promedio: ${promedio}`)