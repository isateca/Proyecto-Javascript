let clave = parseInt(prompt("Ingrese la clave"))
let materia_prima = parseFloat(prompt("Ingrese la materia prima: "))

let mano_de_obra = 0;
let gasto_fabricacion = 0;
switch (clave) {
    case 1:
        mano_de_obra = (materia_prima)*.80;
        gasto_fabricacion = (materia_prima)*.28;
        break;
    case 2:
        mano_de_obra = (materia_prima)*.85;
        gasto_fabricacion = (materia_prima)*.30;
        break;
    case 3:
        mano_de_obra = (materia_prima)*.75;
        gasto_fabricacion = (materia_prima)*.35;
        break;
    case 4:
        mano_de_obra = (materia_prima)*.75;
        gasto_fabricacion = (materia_prima)*.28;
        break;
    case 5:
        mano_de_obra = (materia_prima)*.80;
        gasto_fabricacion = (materia_prima)*.30;
        break;
    case 6:
        mano_de_obra = (materia_prima)*.85;
        gasto_fabricacion = (materia_prima)*.35;
        break;
    default:
        break;
}
let costo_produccion = materia_prima + mano_de_obra + gasto_fabricacion;
let precio_venta = costo_produccion+costo_produccion*.45;

document.writeln(`<h1>Costo de produccion: ${costo_produccion}. Precio venta: ${precio_venta}</h1>`)