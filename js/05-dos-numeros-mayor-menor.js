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