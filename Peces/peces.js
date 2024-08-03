let imagenes = [
    {
        "url": "/Pesca_en-Cuba/Peces/src/Almejas.jpg.webp",
        "nombre": "Proyecto 01",
        "descripcion": "aasadasdasd"

    },
    {
        "url": "/Pesca_en-Cuba/Peces/src/Pargo.webp",
        "nombre": "Proyecto 02",
        "descripcion": "gdfgdfg"

    }, {
        "url": "/Pesca_en-Cuba/Peces/src/Cherna.webp",
        "nombre": "Proyecto 02",
        "descripcion": "perrra"

    }, {
        'url': "/Pesca_en-Cuba/Peces/src/tunidos.webp",
        'nombre': "Túnido",
        'descripcion': "Túnidos"
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/machuelos.webp',
        'nombre': 'Machuelos',
        'descripcion': 'pppppp'
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/claria.webp',
        'nombre': 'Claria',
        'descripcion': 'pppppp'
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/camaron.webp',
        'nombre': 'Camaron',
        'descripcion': 'pppppp'
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/langosta.jpeg-2.webp',
        'nombre': 'Langosta',
        'descripcion': 'pppppp'
    }

]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function () {
    actual -= 1

    if (actual == -1) {
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="eager"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})
adelante.addEventListener('click', function () {
    actual += 1

    if (actual == imagenes.length) {
        actual = 0
    }
    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loadig ="eager"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})


function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else {
            puntos.innerHTML += '<p>.<p>'
        }
    }
}