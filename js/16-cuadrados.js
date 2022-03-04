const esPar = (num) =>{
    if(num%2==0) return "Es par";
    else return "Es impar"
}
let cuadrado =0;
document.writeln(`<h1 style="color: green;">Cuadrados del 1 20</h1>`)
for(let i =1;i<=20;i++){
    cuadrado = Math.pow(i, 2);
    document.writeln(`<h2>${i}. Cuadrado: ${cuadrado}. ${esPar(cuadrado)}</h2>`);
}