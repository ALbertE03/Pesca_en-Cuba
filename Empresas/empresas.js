let imagenes = [
    {
        "url": "/Pesca_en-Cuba/Empresas/src/cari.webp",
        "nombre": "Pesca Caribe",
        "descripcion": "Empresa Pesca Caribe es una entidad que se destaca en el sector pesquero de Cuba, con presencia significativa en la industria.Se dirige principalmente a los sectores turístico y empresarial, ofreciendo productos y servicios que cumplen con las expectativas de un mercado exigente. Con un enfoque en la sostenibilidad y la responsabilidad ambiental, Pesca Caribe trabaja para proporcionar una variedad de productos pesqueros de alta calidad.La empresa se ha ganado una reputación por su compromiso con la excelencia y su capacidad para adaptarse a las cambiantes demandas del mercado."

    },
    {
        "url": "/Pesca_en-Cuba/Empresas/src/images.webp",
        "nombre": "PescaGram",
        "descripcion": "La Empresa Pesquera de Granma (PESCAGRAN) es una institución fundada en Manzanillo, Granma Fue reconocida como la segunda mejor empresa de Cuba en 2019, superando sus planes con 1, 859 toneladas de especies de agua dulce destinadas al mercado nacional y la exportación. El colectivo de la granja La Cascada, ubicada en el municipio de Bayamo, logró producir 67 toneladas, principalmente de tilapia, estableciendo un récord para ese enclave."

    }, {
        "url": "/Pesca_en-Cuba/Empresas/src/epicai.webp",
        "nombre": "EPICAI",
        "descripcion": "EPICAI es una empresa cubana que se dedica a la captura y procesamiento de productos pesqueros. Fundada en 2001, EPICAI ha sido reconocida por su eficiencia y calidad en la producción pesquera.Entre sus principales producciones, EPICAI se enfoca en la exportación de cobos, cangrejos y esponjas, aunque esta última ha sufrido debido a afectaciones meteorológicas. Además, ofrece a la población local una variedad de productos como ostiones y pescados, asegurando la calidad y frescura en cada oferta."

    }, {
        'url': "/Pesca_en-Cuba/Empresas/src/epicien.webp",
        'nombre': "EPICIEN",
        'descripcion': "La Empresa Pesquera Industrial de Cienfuegos (EPICIEN) es una entidad cubana que se ha destacado por su contribución a la economía local y nacional.Con más de 600 trabajadores, EPICIEN se enorgullece de participar en eventos importantes como la Primera Feria Internacional Cienfuegos 2023. La empresa ha logrado sobresalir por sus capturas, producciones y ventas, enfocándose en la comercialización de productos que refuerzan la alimentación del pueblo, sustituyen importaciones y, al mismo tiempo, generan ingresos a través de la exportación.Entre sus productos líderes se encuentran el camarón entero, la tenca HG y están desarrollando la exportación de la aleta de tiburón y la vejiga natatoria."
    }, {
        'url': '/Pesca_en-Cuba/Empresas/src/mia.webp',
        'nombre': 'Ministerio de la Industria Alimenticia',
        'descripcion': 'La industria alimentaria en Cuba, que incluye al Grupo Empresarial de la Industria Pesquera, abarca actividades de transformación de materias primas y obtención de productos derivados de la leche, carne, frutas, vegetales, café, cereales, confitería, bebidas, aceite, cacao y, por supuesto, la captura y procesamiento industrial de los productos pesqueros.El grupo forma parte de un sector más amplio que busca la modernización tecnológica y el incremento de las capacidades instaladas para satisfacer la demanda del mercado nacional, diversificar las exportaciones y mejorar la eficiencia y competitividad de la industria.'
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

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina"></img>`
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
    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" ></img>`
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