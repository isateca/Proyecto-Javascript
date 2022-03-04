let numMes = parseInt(prompt("Ingrese un numero del 1 al 12"));
console.log(numMes)
if(numMes>=1&&numMes<=12){
    switch (numMes) {
        case 1:
            alert("El mes es Enero")
            break;
        case 2:
            alert("El mes es Febrero")
            break;
        case 3:
            alert("El mes es Marzo")
            break;
        case 4:
            alert("El mes es Abril")
            break;
        case 5:
            alert("El mes es Mayo")
            break;
        case 6:
            alert("El mes es Junio")
            break;
        case 7:
            alert("El mes es Julio")
            break;
        case 8:
            alert("El mes es Agosto")
            break;
        case 9:
            alert("El mes es Septiembre")
            break;
        case 10:
            alert("El mes es Octubre")
            break;
        case 11:
            alert("El mes es Noviembre")
            break;
        case 12:
            alert("El mes es Diciembre")
            break;
    
        default:
            alert("Mes inexsistente")
            break;
    }
}
