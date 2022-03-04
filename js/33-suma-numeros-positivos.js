let num;
let suma =0;
do {
    num = parseInt(prompt("Ingrese un numero positivo: "))
    if(num>1 ){
        suma = suma + num
    }
} while (num>1);

alert(`La suma de los numeros ingrersados es: ${suma}`)