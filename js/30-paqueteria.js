

let peso = parseFloat(prompt("Ingrese el peso en KG: "))
let costo_envio =0;
let region = "";
if(peso>5){
    alert("No se permiten paquetes de mas de 5 KG")
}else{
    let zona = parseInt(prompt("Ingrese la ragion: 1. America Norte 2. America Cental 3. America Sur 4. Europa 5. Asia"));
    switch (zona) {
        case 1:
            costo_envio = (peso*1000)*11;
            region = "America Norte";
            document.writeln(`<h1>Su envio a la region ${zona} ${region} es de: ${costo_envio}</h1>`)
            break;
        case 2:
            costo_envio = (peso*1000)*10;
            region = "America Cental";
            document.writeln(`<h1>Su envio a la region ${zona} ${region} es de: ${costo_envio}</h1>`)
            break;
        case 3:
            costo_envio = (peso*1000)*12;
            region = "America Sur";
            document.writeln(`<h1>Su envio a la region ${zona} ${region} es de: ${costo_envio}</h1>`)
            break;
        case 4:
            costo_envio = (peso*1000)*24;
            region = "Europa";
            document.writeln(`<h1>Su envio a la region ${zona} ${region} es de: ${costo_envio}</h1>`)
            break;
        case 5:
            costo_envio = (peso*1000)*27;
            region = "Asia";
            document.writeln(`<h1>Su envio a la region ${zona} ${region} es de: ${costo_envio}</h1>`)
            break;
        default:
            document.writeln(`<h1 style="color: red;">NO SE RECONOCE ESTA REGION</h1>`)
            break;
    }
    
}