// alert('Soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola!');
/*Variables*/
var nombre_variable;
let otra_variable = "Hola";
const PI = 3.1416;
let num2 = 18;
let hayClases = true;
let terminoLaClase = false;
/*Tipos, undefined, char, numeros, string, boolean, objeto, arreglo, funcion, null*/
console.log(PI*num2);
console.log(num2 + 36 + otra_variable);
/*Condicionales*/
hayClases = false;
if(hayClases == true && terminoLaClase != true){
    console.log('nos conectamos a la videollamada!')
}else{
    console.log('Salimos a celebrar el dia del Estudiante')
}
if(hayClases == false || terminoLaClase == true){
    console.log('Salimos a celebrar el dia del Estudiante!')
}

let elemento = document.getElementById("principal")
// console.log(elemento)
elemento.innerHTML="Mi valor para innerHTML"
elemento.innerHTML+= "<p>" + otra_variable + "</p>";
document.write("<h3 class= 'text-center bg-primary'>Hola buen dia</h3>")
document.write("<h3>Como estan?</h3>")

if(nombre_variable == undefined){
    elemento.innerHTML += "Estamos con una variable sin valor definido!"
    elemento.innerHTML += "<p>Luis Navas</p><p>Barbara</p><p>Damian</p><p>Maxi</p><p>Camukis</p>"
    // elemento.style.backgroundColor = "Blue"
    // elemento.style.color = "White"
}

let mensaje = prompt("Introduce tu mensaje: ");
elemento.innerHTML += "<h3>"+ mensaje + "</h3>";
elemento.innerHTML += "<div class='alert alert-success' role='alert'>+mensaje</div>"

//let menu = prompt("selecciona el pedido: \n 1. Milanesa con Fritas \n 2. Milanesa Napolitana\n 3. Fritas Solas");
menu = "2"
if(menu === '1'){
    elemento.innerHTML="<div class='alert alert-success' role='alert'>Disfruta de tu Milanesa con Fritas!</div>"
}else if(menu === '2'){
    elemento.innerHTML="<div class='alert alert-success' role='alert'>Disfruta de tu Napo con fritas!</div>"
}else if(menu === '3'){
    elemento.innerHTML="<div class='alert alert-success' role='alert'>Disfruta de tus fritas!</div>"
}else{
    alert('Debes elegir una opcion valida')
    let menu = prompt("selecciona el pedido: \n 1. Milanesa con Fritas \n 2. Milanesa Napolitana\n 3. Fritas Solas");
}

// switch (menu) {
//     case '1':
//         elemento.innerHTML="<div class='alert alert-success' role='alert'>Disfruta de tu Milanesa con Fritas!</div>"
//         break;

//     default:
//         elemento.innerHTML="<div class='alert alert-success' role='alert'>'Elige una opcion valida'</div>"
//         break;
// }

// let num = Number(prompt("ingresa el primer numero: "));
// let num3 = Number(prompt("ingresa el segundo numero"));

// let resultado = "el resultado de la suma de "+num+"y " +num3+" es: "+ (num +num3);
// palabra reservada nombreArreglo = [index0, index1, ..nindex]
let alumnos = ["Natalia", "Maxi", "Camila", "Ramiro"];

for(let a=0; a < alumnos.length; a++){
    elemento.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${alumnos[a]}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
`;
}

alumnos.push("Barbara");
alumnos[5] = "Luis";

alumnos.forEach((a, index)=>{
    elemento.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${index + 1}${a}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`;
});