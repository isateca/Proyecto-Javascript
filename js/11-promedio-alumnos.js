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

