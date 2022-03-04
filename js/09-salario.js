let pagoPorHora = parseFloat(prompt("Ingrese el pago por hora: "));

let diario = pagoPorHora*8;
let salario = diario*6;
let result = "";
if(salario>2000){
    result = "Debes pagar impuestos";
}else{
    result = "No debes pagar impuestos";
}
alert(`Tu salario es: ${salario}. ${result}`);