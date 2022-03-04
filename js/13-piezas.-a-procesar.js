/*Desarrolle el siguiente programa: Una planta que fabrica perfiles
de hierro posee un lote de n piezas. Confeccionar un diagrama de flujo
que pida ingresar por teclado la cantidad de piezas a procesar y luego
ingrese la longitud de cada perfil; sabiendo que la pieza cuya longitud
esté comprendida en el rango de 1.20 y 1.30 son aptas. Imprimir por
pantalla la cantidad de piezas aptas que hay en el lote. */

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