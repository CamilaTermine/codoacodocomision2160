let elemento = document.getElementById("principal");
// console.log(elemento);
//estructura del objeto
let usuario = {
    name: "Camila Termine",
    edad: "26",
    email:"cami.termine@gmail.com",
    pass: "1234",
    validar: (e,p) => {
        if(e === usuario.email && p=== usuario.pass){
            return true
        }else{
            return false
        }
    }
}

window.addEventListener('load', function(){
    elemento.innerHTML= `
    <form class='col-4'>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button id="btn" type="button" class="btn btn-primary">Ingresar</button>
</form>
`;
    document.getElementById("btn") .addEventListener('click',()=>{
        let email = document.getElementById("email").value
        let pass = document.getElementById("password").value
        let entra = usuario.validar(email, pass)
       if(entra){
           elemento.innerHTML =`
                <h1>Sistema administrativo</h1>
                <p>Bienvenido ${usuario.name}</p>
           
           `
       }else{
           elemento.innerHTML += `
           <div id="mensaje" class="alert alert-danger" role="alert">
            Usuario o contraseña incorrecta!
            </div>
`
        }
    })
})

let tiempo = setInterval(() =>{
    document.getElementById("mensaje").style.visibility="hidden"
    clearInterval(tiempo);
},3000);

