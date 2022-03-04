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
    document.writeln(`<h1>${vato.nombre } ${vato.edad}</h1>`)
});