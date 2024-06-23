const ctx = document.getElementById("almeja")
fetch("/src/BD/tabla1.csv")
    .then(response => response.text())
    .then(datos => ProcesarDatos(datos))
    .catch(error => console.log("error al cargar el csv" + error));


function ProcesarDatos(texto) {
    const filas = texto.split('\n');
    const cabeceras = filas[0].split(',');
    const datos = filas.slice(1).map(fila => {
        const valores = fila.split(',');
        return cabeceras.reduce((objeto, cabecera, indice) => {
            objeto[cabecera] = valores[indice];
            return objeto;
        }, {});
    });
    graficar(ctx, datos[0])

}

function graficar(ctx, data) {

}