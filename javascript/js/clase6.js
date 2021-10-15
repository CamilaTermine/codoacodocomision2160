let elemento = document.getElementById("principal");
// funciones
const suma=()=>{
    elemento.innerHTML = 58+23;
}
suma()
const sumar= (a=0,b=0) =>{
    elemento.innerHTML+=`<p> ${(a+b)}</p>`;
}
sumar (5,89);
sumar (9,89);
sumar (5,9);
sumar(56);
sumar()
window.edad =56;
function Persona(nombre, apellido, edad, dni){
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
}
let Luis = new Persona("Luis", "Navas", 48,95);
let Pedro = new Persona("Pedro", "Ortega", 25)
console.log(Luis);
console.log(Pedro);
elemento.innerHTML = `<p>Nombre: ${Luis.nombre} Apellido: ${Luis.apellido} Edad: ${Luis.edad}`
