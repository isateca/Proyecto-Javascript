let costo = parseFloat(prompt("Ingrese el costo del traje: "));
let costoFinal =0;
let descuento =0;
if(costo>2500){
    descuento = (costo/100)*15
    costoFinal = costo-descuento;
}else{
    descuento = (costo/100)*8
    costoFinal = costo-descuento;
}

alert(`El precio final es: ${costoFinal}. Se aplico un descuento de: ${descuento}`)