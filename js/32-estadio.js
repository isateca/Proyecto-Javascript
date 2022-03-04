let sector;
let entradas=0;
do{
    sector = parseInt(prompt("Escoga un sector: 1. Sol Candente 2. Sol Luminoso 3. Sombrita 4. TRibunita 5. Silla Plastica -- Ingrese un numero de los que se menciona"))
    if(sector>5||sector<1){
        alert("No se reconoce el sector"); 
        break;
    } 
    
    entradas = parseInt(prompt("Ingrese el numero de entradas: "))
    
    if(entradas<1) alert("El numero de entradas no es valido")

}while((sector>5||sector<1)||entradas<1);
let total =0;
switch (sector) {
    case 1:
        total = entradas*3;
        break;
    case 2:
        total = entradas*5;
        break;
    case 3:
        total = entradas*8;
        break;
    case 4:
        total = entradas*15;
        break;
    case 5:
        total = entradas*20;
        break;
    default:
        break;
}
document.writeln(`<h1>Total: $${total}</h1>`)

