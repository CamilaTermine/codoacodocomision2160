/*funciones*/
function calcular(){

    let num = Number(prompt("ingrese el primer numero"));
    let num2 = Number(prompt("ingrese el segundo numero"));
    let op = prompt("Elija el tipo de operacion que desea realizar: \n + para sumar \n - Para restar \n * Para multiplicar \n / Para dividir")
    let resultado = 0;
    let elemento = document.getElementById("principal");
    if(op === "+"){
        resultado = num + num2;
        elemento.innerHTML += "<p> El resultado de la suma de " +num+ " y " +num2+ " es: " +resultado+"</p>";
    }else if(op === "-"){
        resultado = num - num2;
        elemento.innerHTML += "<p> El resultado de la resta de " +num+ " y " +num2+ " es: " +resultado+"</p>";
    }else if(op === "*"){
        resultado = num * num2;
        elemento.innerHTML += "<p> El resultado de la multiplicacion de " +num+ " y " +num2+ " es: " +resultado+"</p>";
    }else if(op === "/"){
        resultado = num / num2;
        elemento.innerHTML += "<p> El resultado de la division de " +num+ " y " +num2+ " es: " +resultado+"</p>";
    }else{
        elemento.innerHTML += "<p> Ingrese una opcion correcta</p>";
    }
}