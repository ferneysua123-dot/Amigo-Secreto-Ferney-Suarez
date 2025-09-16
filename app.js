// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo")
    let amigo = inputAmigo.value.trim(); //trim() quita espacios en blanco

    if(amigo === ""){
        alert("Por Favor, ingrese el nombre de un amigo.");
        return;
    }
//Validar que no hayan duplicados
let Agregado = amigos.some (a=>a.toLowerCase() === amigo.toLowerCase())
//.trim(): elimina espacios al inicio/final del texto.
//.some() con toLowerCase() compara sin importar si alguien escribe Juan y luego juan.
//array.some(function(elemento) {
  // condición que devuelve true o false})

if (Agregado) {
    alert ("La persona ya se encuentra en la lista");
    return;
}

    amigos.push(amigo);
    mostrarAmigos(amigos);
    console.log(amigos);
    inputAmigo.value = "";

}

function mostrarAmigos(amigos) {
  // 1. Obtener el elemento de la lista usando el ID 'listaAmigos'
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente para evitar duplicados
  lista.innerHTML = "";

  // 3. Recorrer el arreglo de amigos
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];

    // 4. Crear un nuevo elemento <li> y asignarle el nombre del amigo
    const li = document.createElement("li");
    li.textContent = amigo;

    // 5. Agregar el <li> a la lista
    lista.appendChild(li);
  }
}

