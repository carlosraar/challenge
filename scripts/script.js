
const divVacio = document.getElementById("resultado__campo__vacio");
const divResultado = document.getElementById("resultado__campo__texto");

const mensaje = document.querySelector(".mensaje__campo__texto");
const mensajeEncriptado = document.querySelector(".resultado__campo__texto__encriptado");

const llavesDeEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
const regex = new RegExp("[^abcdefghijklmnñopqrstuvwxyz!¡¿?,. ]");

function btnEncriptar() {
    const mensajeValor = mensaje.value;
    if (validarCaracteres(mensajeValor)) {
        const textoEncriptado = funcionEncriptar(mensajeValor);
        mostrarResultado(textoEncriptado);
    } else {
        mostrarError();
    }
}

function funcionEncriptar(texto) {
    llavesDeEncriptacion.forEach(([original, reemplazo]) => {
        texto = texto.replaceAll(original, reemplazo);
    });
    return texto;
}

function btnDesencriptar() {
    const mensajeValor = mensaje.value;
    if (validarCaracteres(mensajeValor)) {
        const textoDesencriptado = funcionDesencriptar(mensajeValor);
        mostrarResultado(textoDesencriptado);
    } else {
        mostrarError();
    }
}

function funcionDesencriptar(texto) {
    llavesDeEncriptacion.forEach(([original, reemplazo]) => {
        texto = texto.replaceAll(reemplazo, original);
    });
    return texto;
}

function validarCaracteres(texto) {
    return !regex.test(texto);
}

function mostrarResultado(texto) {
    mensajeEncriptado.textContent = texto;
    divVacio.style.display = "none";
    divResultado.style.display = "block";
}

function mostrarError() {
    alert("Solo se aceptan caracteres a-z , . ¡! y ¿?, revisa tu mensaje!");
    mensaje.value = "";
    mensajeEncriptado.textContent = "";
}

function copiarMensaje() {
    const texto = mensajeEncriptado.textContent;
    navigator.clipboard.writeText(texto)
        .then(() => alert("¡Mensaje copiado!"))
        .catch(err => console.error("Error al copiar: ", err));
}

