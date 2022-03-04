
const data = [
    {
        id: 1,
        titulo: "Ejercicio 1",
        src: "js/01-suma-resta-multi.js"
    },
    {
        id: 2,
        titulo: "Ejercicio 2",
        src: "js/02-area-y-parametro-circulo.js"
    },
    {
        id: 3,
        titulo: "Ejercicio 3",
        src: "js/03-area-y-perimetro-triangulo.js"
    },
    {
        id: 4,
        titulo: "Ejercicio 4",
        src: "js/04-edad-por-nacimiento.js"
    },
    {
        id: 5,
        titulo: "Ejercicio 5",
        src: "js/05-dos-numeros-mayor-menor.js"
    },
    {
        id: 6,
        titulo: "Ejercicio 6",
        src: "js/06-que-triangulo-es.js"
    },
    {
        id: 7,
        titulo: "Ejercicio 7",
        src: "js/07-par-impar.js"
    },
    {
        id: 8,
        titulo: "Ejercicio 8",
        src: "js/08-edad-mayor.js"
    },
    {
        id: 9,
        titulo: "Ejercicio 9",
        src: "js/09-salario.js"
    },
    {
        id: 10,
        titulo: "Ejercicio 10",
        src: "js/10-dos-numeros.js"
    },
    {
        id: 11,
        titulo: "Ejercicio 11",
        src: "js/11-promedio-alumnos.js"
    },
    {
        id: 12,
        titulo: "Ejercicio 12",
        src: "js/12-dies-valores.js"
    },
    {
        id: 13,
        titulo: "Ejercicio 13",
        src: "js/13-piezas.-a-procesar.js"
    },
    {
        id: 14,
        titulo: "Ejercicio 14",
        src: "js/14-dies-notas.js"
    },
    {
        id: 15,
        titulo: "Ejercicio 15",
        src: "js/15-n-empleados.js"
    },
    {
        id: 16,
        titulo: "Ejercicio 16",
        src: "js/16-cuadrados.js"
    },
    {
        id: 17,
        titulo: "Ejercicio 17",
        src: "js/17-tablas.js"
    },
    {
        id: 18,
        titulo: "Ejercicio 18",
        src: "js/18-conjunto-valores.js"
    },
    //hgfg
    {
        id: 26,
        titulo: "Ejercicio 26",
        src: "js/26-mes-del-anio.js"
    },
    {
        id: 27,
        titulo: "Ejercicio 27",
        src: "js/27-descuentos.js"
    },
    {
        id: 28,
        titulo: "Ejercicio 28",
        src: "js/28-presupuesto-langosta.js"
    },
    {
        id: 29,
        titulo: "Ejercicio 29",
        src: "js/29-cometas.js"
    },
    {
        id: 30,
        titulo: "Ejercicio 30",
        src: "js/30-paqueteria.js"
    },
    {
        id: 31,
        titulo: "Ejercicio 31",
        src: "js/31-fibo-fact.js"
    },
    {
        id: 32,
        titulo: "Ejercicio 32",
        src: "js/32-estadio.js"
    },
    {
        id: 33,
        titulo: "Ejercicio 33",
        src: "js/33-suma-numeros-positivos.js"
    },
    {
        id: 34,
        titulo: "Ejercicio 34",
        src: "js/34-arreglo-siete-calif.js"
    },
    {
        id: 35,
        titulo: "Ejercicio 35",
        src: "js/35-men-may-arreglo.js"
    },
    {
        id: 36,
        titulo: "Ejercicio 36",
        src: "js/36-edad-dies-personas.js"
    },
    {
        id: 37,
        titulo: "Ejercicio 37",
        src: "js/37-veinte-valores.js"
    },
    {
        id: 38,
        titulo: "Ejercicio 38",
        src: "js/38-temperatura.js"
    },
    {
        id: 39,
        titulo: "Ejercicio 39",
        src: "js/39-matriz-4x4.js"
    },
    {
        id: 40,
        titulo: "Ejercicio 40",
        src: "js/40-impares-pares.js"
    },
    {
        id: 41,
        titulo: "Ejercicio 41",
        src: "js/41-matriz-2x2.js"
    },
    {
        id: 42,
        titulo: "Ejercicio 42",
        src: "js/42-suma-resta-etc.js"
    }
]
const container = document.querySelector("#container");
/*data.map(src => {
    let div = document.createElement("div");
    div.innerHTML = `
        <div>
            <h1>${src.titulo}</h1>
            <p>${src.src}</p>
        </div>
    `;
    container.appendChild(div);
})*/

/*const enlaces = document.getElementById("enlaces");
const script = document.createElement('script')
enlaces.addEventListener('click', (e) => {
    if(e.target.tagName == 'A'){
        console.log(e.target)
        let id = parseInt(e.target.id)
        const a = data.find(element => element.id == id);
        container.innerHTML = `
            <h1>${a.titulo}</h1>
        `;
        console.log(a.src)
        script.type="text/javascript";
        script.src = a.src;
        container.appendChild(script);
        script.addEventListener('load', () => {
            
        })
    }
})*/