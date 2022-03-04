const container = document.getElementById("container");

const eje01 = () => {
    let num = prompt("Numero 1: ");
    let num2 = prompt("Numero 2: ");

    let suma = parseInt(num)+parseInt(num2);
    let resta = parseInt(num)-parseInt(num2);
    let multi = parseInt(num)*parseInt(num2);
    let divi = parseInt(num)/parseInt(num2);

    alert(`Suma: ${suma}, Resta: ${resta}, Producto: ${multi}, Division: ${divi}`);
}

const eje02 = () => {
    let radio = prompt("Ingrese el radio: ");

    let area = (Math.PI*Math.pow(radio, 2))
    let parimetro = (2*(Math.PI)*radio)

    alert(`Area: ${area}, Perimero: ${parimetro}`);
}

const eje03 = () => {
    let base = prompt("Ingrese la base: ")
let altura = prompt("Ingrese la altura: ")
let lado1 = prompt("Ingrese lado 1: ")
let lado2 = prompt("Ingrese lado 2: ")
let lado3 = prompt("Ingrese lado 3: ")

let area = (base*altura)/2;
let perimetro = parseInt(lado1)+parseInt(lado2)+parseInt(lado3);

alert(`Area: ${area}, Perimetro: ${perimetro}`)
}

const eje04 = () => {
    let anio = prompt("Ingrese su año de nacimiento: ")
const anioActual = 2022;
let edad = parseInt(anioActual)-parseInt(anio);
alert(`Su edad es: ${edad}`)
}

const eje05 = () => {
    let num1 = parseInt(prompt("Ingrese el num1: "))
let num2 = parseInt(prompt("Ingrese el num2: "))

if(num1==num2){
    alert("Son iguales")
}
else if(num1>num2){
    alert(`${num1} es mayor que ${num2}`)
}else{
    alert(`${num2} es mayor que ${num1}`)
}
}

const eje06 = () => {
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
}

const eje07 = () => {
    let num = parseInt(prompt("Ingrese un numero"));

if(num%2==0){
    alert("Es par");
}else{
    alert("Es Impar");
}
}

const eje08 = () => {
    let edad = parseInt(prompt("Ingrese la edad: "))

if(edad>18){
    alert("Es mayor de edad")
}else{
    alert("Es menor de edad")
}
}

const eje09 = () => {
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
}

const eje010 = () => {
    let num1 = parseInt(prompt("Ingrese el numero 1"))
let num2 = parseInt(prompt("Ingrese el numero 2"))

if(num1>num2){
    alert(`Suma: ${num1+num2}, Resta: ${num1-num2}`)
}else{
    alert(`Producto: ${num1*num2}, Division: ${num1/num2}`)
}
}

const eje11 = () => {
    container.innerHTML=""
    let materias = [[],[],[],[],[],[]];

for(let i = 0; i < materias.length; i++ ){
    for(let j = 0; j<3; j++){
        materias[i][j] = parseFloat(prompt(`Mat: ${parseInt(i)+1}. Ingrese cal ${parseInt(j)+1}`));
    }
    alert(`Materia ${i+1} capturada`)
}
let suma =0; const calif = [];
materias.forEach(element => {
    for(let i =0;i<element.length;i++){
        suma = suma +element[i];
    }
    let promedio = suma/3;
    calif.push(promedio);
    suma =0;
});

const esAprobatoria = (calif) => {
    if(calif>=8){
        return "Aprobado";
    }else{
        return "Reprobado";
    }
}
let i = 1;
calif.map(element => {
    container.innerHTML+= `<h1>Materia ${i}. Promedio: ${element}. Estado: ${esAprobatoria(element)}</h1>`;
    i++;
})


}

const eje12 = () => {
    let dato =0;
let suma =0;
let promedio =0;
let i =0;
while(i<10){
    dato = parseFloat(prompt(`Ingrese el numero ${i+1}:`))
    suma = suma + dato;
    i++;
}
promedio = suma /10;
alert(`Suma: ${suma}. Promedio: ${promedio}`)
}

const eje13 = () => {

let cantidad = parseInt(prompt("Ingrese la cantidad de piezas a procesar: "));
let aptas = [];
let medida = 0;
for(let i =0;i<cantidad;i++){
    medida = parseFloat(prompt(`Ingrese medida. Pieza ${i+1}`))
    if(medida>=1.20&&medida<=1.30){
        aptas.push(medida);
    }
}
alert(`Piezas aptas: ${aptas.length}`)
}

const eje14 = () => {
    let nota =0;
let mayoresAOcho =0;
let menorAOcho =0;
let suma =0;
let promedio =0;
for(let i =0;i<10;i++){
    nota = parseInt(prompt(`Ingrese la nota ${i+1}:`))
    suma = suma+nota;
    if(nota>=8) mayoresAOcho++;
    else menorAOcho++;
}
promedio = suma/10;

alert(`Mayores a 8: ${mayoresAOcho}. Menores a 8: ${menorAOcho}. Promedio: ${promedio}`)
}

const eje15 = () => {
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
container.innerHTML=`<div>
    <h1>Empleados que ganan entre 1000 y 3000: ${entreMilYTresmil}</h1>
    <h1>Empleados que ganan mas de 3000: ${masDeTresmil}</h1>
    <h1>Suma total que paga la empresa: ${suma}</h1>
</div>`;
}

const eje16 = () => {
    container.innerHTML=""
    const esPar = (num) =>{
        if(num%2==0) return "Es par";
        else return "Es impar"
    }
    let cuadrado =0;
    container.innerHTML+=`<h1 style="color: green;">Cuadrados del 1 20</h1>`
    for(let i =1;i<=20;i++){
        cuadrado = Math.pow(i, 2);
        container.innerHTML+=`<h2>${i}. Cuadrado: ${cuadrado}. ${esPar(cuadrado)}</h2>`
    }
}

const eje17 = () => {
    container.innerHTML=""
    for(let i =1;i<=10;i++){
        container.innerHTML +=`<h1>Tablas del ${i}</h1>`;
        for(let j =1;j<=10;j++){
            container.innerHTML+=`<h2>${i}x${j}=${(i*j)}</h2>`
        }
    }
}

const eje18 = () => {
    container.innerHTML=""
    let conjunto_1 = [];
    let conjunto_2 = [];
    let suma_1 =0;
    let suma_2 =0;
    let cant =3;
    for(let i =0;i<cant;i++){
        conjunto_1.push(parseInt(prompt(`Valor ${i+1}. Conjunto 1`)));
        suma_1 += conjunto_1[i];
    }
    for(let i =0;i<cant;i++){
        conjunto_2.push(parseInt(prompt(`Valor ${i+1}. Conjunto 2`)))
        suma_2 += conjunto_2[i];
    }
    container.innerHTML+="<h1>Conjunto 1</h1>"
    conjunto_1.map(num => {
        container.innerHTML+=`${num} - `
    })
    container.innerHTML+=`<h2>Suma conjunto 1: ${suma_1}</h2>
                          <h1>Conjunto 2</h1>`;
    conjunto_2.map(num => {
        container.innerHTML+=`${num} - `
    })
    container.innerHTML+=`<h2>Suma conjunto 2: ${suma_2}</h2>`

    if(suma_1>suma_2){
        container.innerHTML+=`<h2>La suma del conjunto 1 es mayor</h2>`
    }else{
        container.innerHTML+=`<h2>La suma del conjunto 2 es mayor</h2>`
    }
}

const eje26 = () => {
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

}

const eje27 = () => {
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
}

const eje28 = () => {
    let costoPlatillo = 95;
let nPersonas = parseInt(prompt("Ingrese el numero de personas que asistiran: "))

if(nPersonas>200&&nPersonas<=300){
    costoPlatillo = 85;
}else if(nPersonas>=300){
    costoPlatillo = 75;
}
let presupuesto = nPersonas*costoPlatillo;
alert(`Su presupuesto para ${nPersonas}, es de $${presupuesto}`)
}

const eje29 = () => {
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

container.innerHTML=`<h1>Costo de produccion: ${costo_produccion}. Precio venta: ${precio_venta}</h1>`
}

const eje30 = () => {
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
            container.innerHTML=`<h1>Su envio a la region ${zona} ${region} es de: $${costo_envio}</h1>`
            break;
        case 2:
            costo_envio = (peso*1000)*10;
            region = "America Cental";
            container.innerHTML=`<h1>Su envio a la region ${zona} ${region} es de: $${costo_envio}</h1>`
            break;
        case 3:
            costo_envio = (peso*1000)*12;
            region = "America Sur";
            container.innerHTML=`<h1>Su envio a la region ${zona} ${region} es de: $${costo_envio}</h1>`
            break;
        case 4:
            costo_envio = (peso*1000)*24;
            region = "Europa";
            container.innerHTML=`<h1>Su envio a la region ${zona} ${region} es de: $${costo_envio}</h1>`
            break;
        case 5:
            costo_envio = (peso*1000)*27;
            region = "Asia";
            container.innerHTML=`<h1>Su envio a la region ${zona} ${region} es de: $${costo_envio}</h1>`
            break;
        default:
            container.innerHTML=`<h1 style="color: red;">NO SE RECONOCE ESTA REGION</h1>`
            break;
    }
    
}
}

const eje31 = () => {
    container.innerHTML=""
    const generarFibonacci = (limit) => {
        const fib = [0, 1]
        for (let i = 2; i < limit; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }

    let limite;

    do{
        limite = prompt("Ingrese el limite de la serie: ");
        if(limite==""||isNaN(limite)==true){
            alert("Vuelva a Ingresar el limite")
        }
    }while(limite==""||isNaN(limite)==true)
    const serieFibo = generarFibonacci(limite);
    const ul = document.createElement("ul");
    container.innerHTML+="<h1>Serie Fibonacci</h1>"
    serieFibo.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element;
        ul.append(li);
    });

    container.append(ul);

    let numFact = parseInt(prompt("Ingres el numero del Factorial"));
    const factorial = (n) => {
        var total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    }
    container.innerHTML+=`<h1>Factorial de ${numFact}: ${factorial(numFact)}</h1>`
}

const eje32 = () => {
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
container.innerHTML=`<h1>Total: $${total}</h1>`


}

const eje33 = () => {
    let num;
let suma =0;
do {
    num = parseInt(prompt("Ingrese un numero positivo: "))
    if(num>1 ){
        suma = suma + num
    }
} while (num>1);

alert(`La suma de los numeros ingrersados es: ${suma}`)
}

const eje34 = () => {
    let calif =[];
let promedio =0;
let suma =0;
for(let i = 0; i < 7; i++) {
    calif.push(parseFloat(prompt(`Ingrese la calif. ${i+1}`)))
}

calif.forEach(num =>{
    suma = suma + num;
});

promedio = (suma / calif.length)

container.innerHTML=`<h1>El promedio es: ${promedio.toFixed(2)}</h1>`
}

const eje35 = () => {
    const numeros = [4, 5, 9, 6, 10, 23, 14, 15, 2, 1]
    let min = Math.min(...numeros)
    container.innerHTML=`<h1>Minimo: ${min} Posicion: ${numeros.indexOf(min)}</h1>`
    let max = Math.max(...numeros);
    container.innerHTML+=`<h1>Maximo: ${max}. Posicion: ${numeros.indexOf(max)}</h1>`
}

const eje36 = () => {
    container.innerHTML=""
    class Persona {
        nombre;
        edad;
        constructor(_nombre, _edad){
            this.nombre =_nombre
            this.edad = parseInt(_edad)
        }
    }
    
    let nombre =""
    let edad =0;
    let personas = []
    for(let i =0;i<10;i++){
        nombre = prompt("Ingrese el nombre: ")
        edad = parseInt(prompt(`Ingrese edad de: ${nombre}`))
        personas.push(new Persona(nombre, edad))
    }
    personas.sort(((a, b) => a.edad - b.edad))
    
    personas.map(vato => {
        container.innerHTML+=`<h1>${vato.nombre } ${vato.edad}</h1>`
    });
}

const eje37 = () => {
    container.innerHTML=""
    let numeros = [];
    let sumaImpar =0;
    let sumaPar =0;
    let ul = document.createElement("ul");
    /*Genere los numeros aleatorios porque me dio flojera estar metiendolos yo */
    for (let i = 0; i < 20; i++) {
        numeros[i] = parseInt(Math.random() * (20 - 1) + 1);
    }
    container.innerHTML="<h1>Numeros generados</h1>"
    numeros.forEach(num => {
        if(num%2==0) sumaPar += num;
        else sumaImpar += num;
        ul.innerHTML+=`<li>${num}</li>`
    })
    container.append(ul)
    console.log(numeros)

    container.innerHTML+=`<h1>Suma pares: ${sumaPar}</h1>`
    container.innerHTML+=`<h1>Suma impares: ${sumaImpar}</h1>`
}

const eje38 = () => {
    container.innerHTML=""
    const temDia = []
    for (let i = 0; i < 24; i++) {
        temDia[i] = parseInt(Math.random() * (40 - 1) + 1);
    }
    let suma =0;
    let promedio = 0;
    temDia.forEach(temp =>{
        suma+= temp;
    })
    promedio = parseInt(suma/temDia.length);
    console.log(promedio)
    console.log(temDia)
    container.innerHTML+=`<h1>Promedio: ${promedio}°C</h1>`
    let min = Math.min(...temDia);
    container.innerHTML+=`<h1>Celda mas fria: ${temDia.indexOf(min)}°C</h1>`
    let max = Math.max(...temDia);
    container.innerHTML+=`<h1>Celda mas caliente: ${temDia.indexOf(max)}. [la celda es el index del arreglo]</h1>
                        <h1>Temperatura mas fria: ${min}°C</h1>
                        <h1>Temperatura mas caliente: ${max}°C</h1>`;
}

const eje39 = () => {
    container.innerHTML=""
    const matriz = [[1,2,3,4],
                [5,6,7,8], 
                [9,10,11,12], 
                [13,14,15,16]];


    let filas =[]
    let col =[]
    let sumaF =0;
    let sumaC=0;
    let diagonal1 =0
    let diagonal2 =0
    for(let x = 0; x < 4; x++){
        
        for(let y = 0; y < 4; y++){
            sumaF += matriz[x][y]
            sumaC+=matriz[y][x];
            if(x==y){
                diagonal1 += matriz[x][y]
            }
            if((x+y) == matriz.length-1){
                diagonal2 += matriz[x][y]
            }
        }
        filas.push(sumaF)
        col.push(sumaC)
        sumaF=0;
        sumaC=0;
    }
    console.log(filas)
    container.innerHTML+="<h1>Suma de las filas</h1>"
    for (let i = 0; i < filas.length; i++) {
        container.innerHTML+=`<h2>Suma ${i+1}: ${filas[i]}</h2>`
    }
    console.log(col)
    container.innerHTML+="<h1>Suma de las columnas</h1>"
    for (let i = 0; i < col.length; i++) {
        container.innerHTML+=`<h2>Suma ${i+1}: ${col[i]}</h2>`
    }
    console.log(diagonal1)
    container.innerHTML+=`<h1>Suma de la diagonal 1: ${diagonal1}</h1>`
    console.log(diagonal2)
    container.innerHTML+=`<h1>Suma de la diagonal21: ${diagonal2}</h1>
                            <h2 style="color: green;">Curiosamente la suma de las diagonales da igual xd</h2>`

    //Curiosamente da igual en en la suma de las diagonales
}

const eje40 = () => {
    const enteros = [[1,2,3,4],
                [5,6,7,8], 
                [9,10,11,12], 
                [13,14,15,16]];
    let contPares =0;
    let contImpares =0;
    for(let x = 0; x < 4; x++){
        
        for(let y = 0; y < 4; y++){
            if(enteros[x][y]%2==0){
                contPares++;
            }else{
                contImpares++;
            }
        }
    }

    container.innerHTML=`<h1>Cantidad de pares: ${contPares}</h1>`
    container.innerHTML+=`<h1>Cantidad de impares: ${contImpares}</h1>`
}

const eje41 = () => {
    const numerosPares = [[12, 6], [2, 8]]
    console.log(numerosPares.length)

    let x = parseInt(prompt("Ingrese x: "))
    let y = parseInt(prompt("Ingrese y: "))

    if(x>=numerosPares.length||y>=numerosPares[0].length) {
        alert("Lo indices estan fuera del rango")
    }
    else if(isNaN(x)||isNaN(y)){
        alert("Los carecteres no son numeros")
    }
    else{
        container.innerHTML=`<h1>El valor es: ${numerosPares[x][y]}</h1>`
    }
}

const eje42=()=>{
    container.innerHTML=""
    const matriz_1 = [[3,3,3], 
                    [4,4,4], 
                    [5,5,5]]
    container.innerHTML+="<h1>Matriz 1</h1>"
    matriz_1.forEach(valor => {
        valor.forEach(i =>{
            container.innerHTML+=`| ${i} |`
        })
        container.innerHTML+="<br/>"
    })
    container.innerHTML+="<h1>Matriz 2</h1>"
    const matriz_2 = [[2,2,2], 
                    [7,7,7], 
                    [4,4,4]]
    matriz_2.forEach(valor => {
        valor.forEach(i =>{
            container.innerHTML+=`| ${i} |`
        })
        container.innerHTML+="<br/>"
    })

    let mat_suma = [[], [], []]
    let mat_resta = [[], [], []]
    let mat_multi = [[], [], []]
    let mat_divi = [[], [], []]

    for (let x = 0; x < 3; x++) {
        for(let y =0; y < 3; y++) {
                mat_suma[x][y] = (matriz_1[x][y]+matriz_2[x][y])
                mat_resta[x][y] = (matriz_1[x][y]-matriz_2[x][y])
                mat_multi[x][y] = (matriz_1[x][y]*matriz_2[x][y])
            mat_divi[x][y] = (matriz_1[x][y]/matriz_2[x][y])
            }
        }
        container.innerHTML+="<h1>Matriz suma</h1>"
        mat_suma.forEach(valor => {
            valor.forEach(suma => {
                container.innerHTML+=`| ${suma} |`
            })
            container.innerHTML+="<br/>"
        })
        container.innerHTML+="<h1>Matriz resta</h1>"
        mat_resta.forEach(valor => {
            valor.forEach(resta => {
                container.innerHTML+=`| ${resta} |`
            })
            container.innerHTML+="<br/>"
        })
        container.innerHTML+="<h1>Matriz producto</h1>"
        mat_multi.forEach(valor => {
            valor.forEach(multi => {
                container.innerHTML+=`| ${multi} |`
            })
            container.innerHTML+="<br/>"
        })
        container.innerHTML+="<h1>Matriz division</h1>"
        mat_divi.forEach(valor => {
            valor.forEach(divi => {
                container.innerHTML+=`| ${divi.toFixed(2)} |`
            })
            container.innerHTML+="<br/>"
        })
}