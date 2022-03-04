const matriz_1 = [[3,3,3], 
                  [4,4,4], 
                  [5,5,5]]
const matriz_2 = [[2,2,2], 
                  [7,7,7], 
                  [4,4,4]]


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
document.writeln("<h1>Matriz suma</h1>")
mat_suma.forEach(valor => {
    valor.forEach(suma => {
        document.write(`| ${suma} |`)
    })
    document.writeln("<br/>")
})
document.writeln("<h1>Matriz resta</h1>")
mat_resta.forEach(valor => {
    valor.forEach(resta => {
        document.write(`| ${resta} |`)
    })
    document.writeln("<br/>")
})
document.writeln("<h1>Matriz Multiplicacion</h1>")
mat_multi.forEach(valor => {
    valor.forEach(multi => {
        document.write(`| ${multi} |`)
    })
    document.writeln("<br/>")
})
document.writeln("<h1>Matriz division</h1>")
mat_divi.forEach(valor => {
    valor.forEach(divi => {
        document.write(`| ${divi.toFixed(2)} |`)
    })
    document.writeln("<br/>")
})