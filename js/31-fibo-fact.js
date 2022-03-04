
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
document.writeln("<h1>Serie Fibonacci</h1>")
serieFibo.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.append(li);
});

document.body.append(ul);

let numFact = parseInt(prompt("Ingres el numero del Factorial"));
const factorial = (n) => {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
document.writeln(`<h1>Factorial de ${numFact}: ${factorial(numFact)}</h1>`)