let lado1 = parseInt(prompt("Ingrese lado 1: "))
let lado2 = parseInt(prompt("Ingrese lado 2: "))
let lado3 = parseInt(prompt("Ingrese lado 3: "))

let result ="";

if(lado1==lado2&&lado2==lado3){
    result = "Equilatero"
}
else if(lado1==lado2||lado2==lado3||lado1==lado3){
    result="Isoceles"
}
else{
    result = "Escaleno"
}

alert(`El triangulo es: ${result}`)