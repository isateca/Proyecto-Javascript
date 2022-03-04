let costoPlatillo = 95;
let nPersonas = parseInt(prompt("Ingrese el numero de personas que asistiran: "))

if(nPersonas>200&&nPersonas<=300){
    costoPlatillo = 85;
}else if(nPersonas>=300){
    costoPlatillo = 75;
}
let presupuesto = nPersonas*costoPlatillo;
alert(`Su presupuesto para ${nPersonas}, es de $${presupuesto}`)