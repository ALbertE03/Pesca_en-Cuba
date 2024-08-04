let imagenes = [
    {
        "url": "/Pesca_en-Cuba/Peces/src/pargo-1.jpg",
        "nombre": "Pargo",
        "descripcion": "Empresa Pesca Caribe es una entidad que se destaca en el sector pesquero de Cuba, con presencia significativa en la industria. Se dirige principalmente a los sectores turístico y empresarial, ofreciendo productos y servicios que cumplen con las expectativas de un mercado exigente. Con un enfoque en la sostenibilidad y la responsabilidad ambiental, Pesca Caribe trabaja para proporcionar una variedad de productos pesqueros de alta calidad.La empresa se ha ganado una reputación por su compromiso con la excelencia y su capacidad para adaptarse a las cambiantes demandas del mercado."

    }, {
        "url": "/Pesca_en-Cuba/Peces/src/grouper2.jpg",
        "nombre": "Cherna",
        "descripcion": "perrra"

    }, {
        'url': "/Pesca_en-Cuba/Peces/src/tunidos.webp",
        'nombre': "Túnido",
        'descripcion': "Túnidos"
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/machuelo.jpg',
        'nombre': 'Machuelos',
        'descripcion': 'pppppp'
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/88683_03.jpg',
        'nombre': 'Claria',
        'descripcion': 'pppppp'
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/Comp-camaron-con-cabeza-ing.jpg',
        'nombre': 'Camaron',
        'descripcion': 'pppppp'
    }, {
        'url': '/Pesca_en-Cuba/Peces/src/compra-langosta-roja-de-Galicia.jpg',
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