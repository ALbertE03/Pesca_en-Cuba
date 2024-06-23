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
                    borderWidth: 1,
                    pointBorderColor: "rgba(255, 0, 0, 1)",
                }, {
                    label: ' toneladas de Camarón de Mar',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBackgroundColor: "rgba(255, 255, 255, 1)",
                    pointBorderColor: "rgba(255, 255, 255, 1)",
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    data: a,
                }, {
                    label: 'toneladas de Carpa',
                    backgroundColor: 'rgba(250, 255, 4, 0.57)',
                    data: b,
                    pointBackgroundColor: "rgba(250, 255, 4, 0.57)",
                    pointBorderColor: "rgba(250, 255, 4, 0.57)",
                    borderColor: 'rgba(250, 255, 4, 0.57)',
                    borderWidth: 1,
                }, {
                    data: c,
                    label: 'toneladas de Pargo',
                    backgroundColor: 'rgba(255, 4, 197, 0.96)',
                    pointBackgroundColor: "rgba(255, 4, 197, 0.96)",
                    pointBorderColor: "rgba(255, 4, 197, 0.96)",
                    borderColor: 'rgba(255, 4, 197, 0.96)',
                    borderWidth: 1,
                }, {
                    data: d,
                    label: 'toneladas de Raya',
                    backgroundColor: 'orange',
                    pointBackgroundColor: "orange",
                    pointBorderColor: "orange",
                    borderColor: 'orange',
                    borderWidth: 1,
                }, {
                    data: e,
                    label: 'toneladas de Cherna',
                    backgroundColor: 'brown',
                    pointBackgroundColor: "brown",
                    pointBorderColor: "brown",
                    borderColor: 'brown',
                    borderWidth: 1,
                }, {
                    data: f,
                    label: "toneladas de Clarias",
                    backgroundColor: 'rgba(0, 47, 231, 1)',
                    pointBackgroundColor: "rgba(0, 47, 231, 1)",
                    pointBorderColor: "rgba(0, 47, 231, 1)",
                    borderColor: 'rgba(0, 47, 231, 1)',
                    borderWidth: 1,
                }, {
                    data: g,
                    label: 'toneladas de Cobo ',
                    backgroundColor: 'purple',
                    pointBackgroundColor: "purple",
                    pointBorderColor: "purple",
                    borderColor: 'purple',
                    borderWidth: 1,
                }, {
                    data: h,
                    label: 'toneladas de Langosta',
                    pointBackgroundColor: "pink",
                    pointBorderColor: "pink",
                    borderColor: 'pink',
                    borderWidth: 1,
                }, {
                    data: i,
                    label: 'toneladas de Machuelo',
                    backgroundColor: 'silver',
                    pointBackgroundColor: "silver",
                    pointBorderColor: "silver",
                    borderColor: 'silver',
                    borderWidth: 1,
                }, {
                    data: j,
                    label: 'toneladas de Tencas',
                    backgroundColor: 'rgba(133, 255, 0, 1)',
                    pointBackgroundColor: "rgba(133, 255, 0, 1)",
                    pointBorderColor: "rgba(133, 255, 0, 1)",
                    borderColor: 'rgba(133, 255, 0, 1)',
                    borderWidth: 1,
                }, {
                    data: k,
                    label: 'toneladas de Túnidos'
                }, {
                    data: l,
                    label: 'toneladas de Morallas'
                }, {
                    data: m,
                    label: 'toneladas de Ostiones'
                }, {
                    data: n,
                    label: 'toneladas de Tilapias'
                }, {
                    data: o,
                    label: 'toneladas de Biajaiba'
                }, {
                    data: p,
                    label: 'toneladas de rabirubias'
                }, {
                    data: q,
                    label: 'toneladas de Camaronnicultura'
                }]
            },
            options: {
                scales: {
                    y: {
                        ticks: { color: "white" },
                        beginAtZero: true,
                        pointBackgroundColor: "white", pointBorderColor: "white", borderColor: 'white', borderWidth: 1,
                    }, x: {
                        ticks: {
                            color: "white",
                            pointBackgroundColor: "white", pointBorderColor: "white", borderColor: 'white', borderWidth: 1,
                        },
                    },
                },
            }
        });
    }
}


