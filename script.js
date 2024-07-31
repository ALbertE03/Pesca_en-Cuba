const ctx = document.getElementById("almeja").getContext('2d');
fetch("/src/BD/tabla1.csv")
    .then(response => response.text())
    .then(datos => ProcesarDatos(datos))
    .catch(error => console.log("error " + error));

function ProcesarDatos(texto) {
    const filas = texto.split('\n');
    const cabeceras = filas[0].split(',');
    const datos = filas.slice(1).map(fila => {
        const valores = fila.split(',');
        return cabeceras.reduce((objeto, cabecera, indice) => {
            objeto[cabecera] = valores[indice];
            return objeto;
        }, {});
    })
    sacar(datos, ctx)
    function sacar(datos, ctxs) {
        let listaCherna = llenarListas(datos, 2);
        let listaTunidos = llenarListas(datos, 3);
        let listbijaba = llenarListas(datos, 4);
        let listaMachuelo = llenarListas(datos, 5);
        let listaClaria = llenarListas(datos, 6);
        let listrabirubia = llenarListas(datos, 7);
        let listCamaronMar = llenarListas(datos, 8);
        let listRaya = llenarListas(datos, 9);
        let listCarpa = llenarListas(datos, 10);
        let listaTenca = llenarListas(datos, 11);
        let listatilapia = llenarListas(datos, 12);
        let listaCobo = llenarListas(datos, 13);
        let listaostion = llenarListas(datos, 14);
        let listaLangosta = llenarListas(datos, 15);
        let camaronNiCultura = llenarListas(datos, 16);
        let listamoralla = llenarListas(datos, 17);
        let listaAlmeja = llenarListas(datos, 0);
        let listPargo = llenarListas(datos, 1);
        graficar(ctxs, listaAlmeja, listCamaronMar, listCarpa, listPargo, listRaya, listaCherna, listaClaria, listaCobo, listaLangosta, listaMachuelo, listaTenca, listaTunidos, listamoralla, listaostion, listatilapia, listbijaba, listrabirubia, camaronNiCultura);
    }
    function llenarListas(datos, id) {
        let listas = [];
        for (let i = 2008; i <= 2013; i++) {
            listas.push(datos[id][i]);
        }
        return listas;
    }
    function graficar(ctx, lista, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: [2008, 2009, 2010, 2011, 2012, 2013],
                datasets: [{
                    label: ' toneladas de Almeja',
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                    data: lista,
                    borderColor: 'rgba(255, 0, 0, 1)',
                    pointBackgroundColor: "rgba(255, 0, 0, 1)",
                    borderWidth: 4,
                    pointBorderColor: "rgba(255, 0, 0, 1)",
                }, {
                    label: ' toneladas de Camarón de Mar',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBackgroundColor: "rgba(255, 255, 255, 1)",
                    pointBorderColor: "rgba(255, 255, 255, 1)",
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 4,
                    data: a,
                }, {
                    label: 'toneladas de Carpa',
                    backgroundColor: 'rgba(250, 255, 4, 0.57)',
                    data: b,
                    pointBackgroundColor: "rgba(250, 255, 4, 0.57)",
                    pointBorderColor: "rgba(250, 255, 4, 0.57)",
                    borderColor: 'rgba(250, 255, 4, 0.57)',
                    borderWidth: 4,
                }, {
                    data: c,
                    label: 'toneladas de Pargo',
                    backgroundColor: 'rgba(255, 4, 197, 0.96)',
                    pointBackgroundColor: "rgba(255, 4, 197, 0.96)",
                    pointBorderColor: "rgba(255, 4, 197, 0.96)",
                    borderColor: 'rgba(255, 4, 197, 0.96)',
                    borderWidth: 4,
                }, {
                    data: d,
                    label: 'toneladas de Raya',
                    backgroundColor: 'rgba(255, 124, 4, 1)',
                    pointBackgroundColor: "rgba(255, 124, 4, 1)",
                    pointBorderColor: "rgba(255, 124, 4, 1)",
                    borderColor: 'rgba(255, 124, 4, 1)',
                    borderWidth: 4,
                }, {
                    data: e,
                    label: 'toneladas de Cherna',
                    backgroundColor: 'rgba(148, 99, 54, 0.85)',
                    pointBackgroundColor: "rgba(148, 99, 54, 0.85)",
                    pointBorderColor: "rgba(148, 99, 54, 0.85)",
                    borderColor: 'rgba(148, 99, 54, 0.85)',
                    borderWidth: 4,
                }, {
                    data: f,
                    label: "toneladas de Clarias",
                    backgroundColor: 'rgba(0, 47, 231, 1)',
                    pointBackgroundColor: "rgba(0, 47, 231, 1)",
                    pointBorderColor: "rgba(0, 47, 231, 1)",
                    borderColor: 'rgba(0, 47, 231, 1)',
                    borderWidth: 4,
                }, {
                    data: g,
                    label: 'toneladas de Cobo ',
                    backgroundColor: 'rgba(149, 0, 255, 0.85)',
                    pointBackgroundColor: "rgba(149, 0, 255, 0.85)",
                    pointBorderColor: "rgba(149, 0, 255, 0.85)",
                    borderColor: 'rgba(149, 0, 255, 0.85)',
                    borderWidth: 4,
                }, {
                    data: h,
                    backgroundColor: 'rgba(255, 85, 0, 0.56)',
                    label: 'toneladas de Langosta',
                    pointBackgroundColor: "rgba(255, 85, 0, 0.56)",
                    pointBorderColor: "rgba(255, 85, 0, 0.56)",
                    borderColor: 'rgba(255, 85, 0, 0.56)',
                    borderWidth: 4,
                }, {
                    data: i,
                    label: 'toneladas de Machuelo',
                    backgroundColor: 'silver',
                    pointBackgroundColor: "silver",
                    pointBorderColor: "silver",
                    borderColor: 'silver',
                    borderWidth: 4,
                }, {
                    data: j,
                    label: 'toneladas de Tencas',
                    backgroundColor: 'rgba(133, 255, 0, 1)',
                    pointBackgroundColor: "rgba(133, 255, 0, 1)",
                    pointBorderColor: "rgba(133, 255, 0, 1)",
                    borderColor: 'rgba(133, 255, 0, 1)',
                    borderWidth: 4,
                }, {
                    data: k,
                    label: 'toneladas de Túnidos',
                    backgroundColor: 'rgba(41, 45, 34, 0.49)',
                    pointBackgroundColor: "rgba(41, 45, 34, 0.49)",
                    pointBorderColor: "rgba(41, 45, 34, 0.49)",
                    borderColor: 'rgba(41, 45, 34, 0.49)',
                    borderWidth: 4,
                }, {
                    data: l,
                    label: 'toneladas de Morallas',
                    backgroundColor: 'rgba(255, 255, 0, 1)',
                    pointBackgroundColor: "rgba(255, 255, 0, 1)",
                    pointBorderColor: "rgba(255, 255, 0, 1)",
                    borderColor: 'rgba(255, 255, 0, 1)',
                    borderWidth: 4,
                }, {
                    data: m,
                    label: 'toneladas de Ostiones',
                    backgroundColor: 'rgba(0, 0, 0, 0.68)',
                    pointBackgroundColor: "rgba(0, 0, 0, 0.68)",
                    pointBorderColor: "rgba(0, 0, 0, 0.68)",
                    borderColor: 'rgba(0, 0, 0, 0.68)',
                    borderWidth: 4,
                }, {
                    data: n,
                    label: 'toneladas de Tilapias',
                    backgroundColor: 'rgba(0, 255, 255, 1)',
                    pointBackgroundColor: "rgba(0, 255, 255, 1)",
                    pointBorderColor: "rgba(0, 255, 255, 1)",
                    borderColor: 'rgba(0, 255, 255, 1)',
                    borderWidth: 4,
                }, {
                    data: o,
                    label: 'toneladas de Biajaiba',
                    backgroundColor: 'rgba(191, 39, 217, 1)',
                    pointBackgroundColor: "rgba(191, 39, 217, 1)",
                    pointBorderColor: "rgba(191, 39, 217, 1)",
                    borderColor: 'rgba(191, 39, 217, 1)',
                    borderWidth: 4,
                }, {
                    data: p,
                    label: 'toneladas de rabirubias',
                    backgroundColor: 'rgba(255, 82, 13, 1)',
                    pointBackgroundColor: "rgba(255, 82, 13, 1)",
                    pointBorderColor: "rgba(255, 82, 13, 1)",
                    borderColor: 'rgba(255, 82, 13, 1)',
                    borderWidth: 4,
                }, {
                    data: q,
                    label: 'toneladas de Camaronnicultura',
                    backgroundColor: 'rgba(108, 143, 6, 1)',
                    pointBackgroundColor: "rgba(108, 143, 6, 1)",
                    pointBorderColor: "rgba(108, 143, 6, 1)",
                    borderColor: 'rgba(108, 143, 6, 1)',
                    borderWidth: 4,
                }]
            },
            options: {

                scales: {
                    y: {
                        ticks: { color: "white" },
                        beginAtZero: true,
                        pointBackgroundColor: "white",
                        pointBorderColor: "white",
                        borderColor: 'white',
                        borderWidth: 4,
                    }, x: {
                        ticks: {
                            color: "white",
                            pointBackgroundColor: "white",
                            pointBorderColor: "white",
                            borderColor: 'white',
                            borderWidth: 4,
                        },
                    },
                }, legend: {
                    labels: {
                        fontColor: 'whtie',
                        backgroundColor: 'white'
                    }
                }
            }
        });
    }
}


