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

document.writeln(`<h1>Cantidad de pares: ${contPares}</h1>`)
document.writeln(`<h1>Cantidad de impares: ${contImpares}</h1>`)