// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const amigoInput = document.getElementById("amigo");

amigoInput.addEventListener("keyup", (event)=>{
    if (event.key === "Enter") {
        agregarAmigo()
    }
})

function agregarAmigo() {
    const amigo = amigoInput.value.trim();

    if (amigo === "") {
        alert("El campo no puede estar vacío.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert(`El amigo "${amigo}" ya existe en la lista.`);
        return
    }

    amigos.push(amigo);
    console.log("Amigos actuales:", amigos);

    // Actualizar la lista HTML
    actualizarListaAmigos();

    // Limpiar el input

    amigoInput.value = ""
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Crear los nuevos elementos de la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar si la lista de amigos no está vacía
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para seleccionar.");
        resultado.textContent = "";
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el amigo seleccionado
    resultado.textContent = `Amigo seleccionado: ${amigoSeleccionado}`;

    // Eliminar el amigo del array
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista HTML
    actualizarListaAmigos();
}