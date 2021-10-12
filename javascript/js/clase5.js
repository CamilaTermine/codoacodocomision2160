/* arreglos */
let elemento = document.querySelector("#principal");

let mascotas = [];
// Object{propietario, nombre, especies, raza, edad, peso, imagen, tipoConsulta}
// mascotas[1] = "Loro"
// mascotas[0] = "Perro"
// mascotas.push("Gallo");


mascotas.forEach(animal => {
    elemento.innerHTML += `<h2>${animal}</h2>`;
});

const agregarMascota = () => {
    let datos = document.querySelectorAll("input");
    let consulta = ""
    if (datos[7].checked) {
        consulta = "Consulta";
    } else {
        consulta = "Urgencia"
    }
    let mascota = {
        propietario: datos[0].value,
        nombre: datos[1].value,
        especies: datos[2].value,
        raza: datos[3].value,
        edad: datos[4].value,
        peso: datos[5].value,
        imagen: datos[6].value,
        tipoConsulta: consulta
    }
    mascotas.push(mascota);
    console.log(mascotas)
    mostrarMascotas();
};

// function crearForm(){}; /*ES5*/
/*ES6*/
const crearForm = () => {
    elemento.innerHTML = `
    <form class = "col-6">
  <div class="mb-3">
    <label for="propietario" class="form-label">Propietario</label>
    <input type="text" class="form-control" id="propietario">
  <div class="mb-3">
  <label for="nombre" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="nombre">
  </div>
  <div class="mb-3">
  <label for="especies" class="form-label">Especie</label>
  <input type="text" class="form-control" id="especies">
  </div>
  <div class="mb-3">
  <label for="raza" class="form-label">Raza</label>
  <input type="text" class="form-control" id="raza">
  </div>
  <label for="edad" class="form-label">Edad</label>
  <input type="text" class="form-control" id="edad">
  </div>
  <label for="peso" class="form-label">Peso</label>
  <input type="text" class="form-control" id="peso">
  </div>
  <label for="imagen" class="form-label">Imagen</label>
  <input type="text" class="form-control" id="imagen">
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Consulta
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Urgencia
  </label>
</div>
  <button type="button" id="btn" class="btn btn-primary">Agregar Datos</button>
</form>
    `;
    document.getElementById("btn").addEventListener('click', agregarMascota);
};
crearForm();

const mostrarMascotas = () => {
    mascotas.forEach(m => {
        elemento.innerHTML += `
        <div class="col-12">
            <div class="card" style="width: 18rem;">
                <img src="${m.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${m.nombre}</h5>
                <p class="card-text">Especie: ${m.especies}</p>
            <p class="card-text">Raza: ${m.raza}</p>
            <p class="card-text">Edad: ${m.edad}</p>
            <p class="card-text">Peso: ${m.peso}</p>
            <p class="card-text">Tipo de consulta: ${m.tipoConsulta}</p>
            <p class="card-text">Propietario: ${m.propietario}</p>
            <a href="#" class="btn btn-primary" onclick="crearForm();" >Agregar otra mascota</a>
        </div>
      </div>
    </div>
        `;
    });
}
