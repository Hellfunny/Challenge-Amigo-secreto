//cOMENZANDO POR INTRODUCIR VARIABLES

let amigos = [];

function agregarAmigo() {
    amigos.push(document.getElementById('amigo').value);
    actualizarListaAmigos();
    document.getElementById('amigo').value = "";
    return;
}

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (i=0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaHTML.appendChild(li);  
    }
    return;
}

function sortearAmigo() {
    let textoHTML = document.getElementById('resultado');
    let Resultado = 'No hay amigos';
    
    if(amigos.length != 0){
        Resultado = amigos[Math.floor(Math.random()*amigos.length)];
        textoHTML.innerHTML = Resultado;
    } else {
        alert('Ingrese un nombre valido');
    }
    return;
}