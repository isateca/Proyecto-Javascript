let nEmpleados = parseInt(prompt("Ingrese el numero de empleados"));
let sueldo =0;
let entreMilYTresmil =0;
let masDeTresmil =0;
let suma =0;
for(let i = 0; i<nEmpleados;i++){
    sueldo = parseFloat(prompt(`Ingrese el sueldo ${i+1}:`));
    if(sueldo >= 1000&&sueldo<=3000) entreMilYTresmil++;
    else if (sueldo>=3000) masDeTresmil++;

    suma = suma + sueldo;
}
document.writeln(`<div>
    <h1>Empleados que ganan entre 1000 y 3000: ${entreMilYTresmil}</h1>
    <h1>Empleados que ganan mas de 3000: ${masDeTresmil}</h1>
    <h1>Suma total que paga la empresa: ${suma}</h1>
</div>`)