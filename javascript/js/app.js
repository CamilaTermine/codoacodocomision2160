/*Variables*/
var nombre_variable;
let otra_variable = "Hola";
const PI = 3.1416;
let num2 = 18;
let hayClases = true;
let terminoLaClase = false;
/*Tipos,undefined, numero, String Boolean,Objeto, arreglo, chart, función*/
console.log(PI * num2);
console.log(num2 + 36 + " " + otra_variable)
/*Condicionales*/
hayClases = false;
if (hayClases == true && terminoLaClase != true) {
    console.log('Nos conectamos a la veideollamada!')
} else {
    console.log('Salimos a celebrar el día del Estudiante!')
}
if (hayClases == false || terminoLaClase == true) {
    console.log('Salimos a celebrar el día del Estudiante!');
}

let elemento = document.getElementById("principal");
// console.log(elemento);
elemento.innerHTML = "Mi valor para innerHtml"
elemento.innerHTML+= "<p>" + otra_variable + "</p>";
document.write("<h3>Hola buen dia</h3>")
document.write("<h3>Como estan?</h3>")
if(nombre_variable == undefined){
    elemento.innerHTML = "estamos comn una variable sin valor definido"
    elemento.innerHTML += "<p>Luis Navas</p><p>Damian</p><p>Barbara</p><p>Elias</p>"
    elemento.style.backgroundColor ="Blue"
    elemento.style.color = "White"
}