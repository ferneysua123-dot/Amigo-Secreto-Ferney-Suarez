// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo")
    let amigo = inputAmigo.value;
    //console.log(amigo);
    if(amigo === ""){
        alert("Por Favor, ingrese el nombre de un amigo.");
        return;
    }
    amigos.push(amigo);
    console.log(amigos);
}