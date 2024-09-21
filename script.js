document.getElementById("Visitar").onclick = function () {
    window.location.href = 'https://albert03.streamlit.app';
};

document.getElementById("leer").onclick = function () {
    document.getElementById('mensaje').innerHTML = "<p> Es un proyecto de código abierto; lo puede encontrar en el <a target='_blank' href='https://github.com/ALbertE03/data_product'> Repositorio</a>. <br>Todos los datos usados fueron extraídos de la <a target='_blank' href='https://www.onei.gob.cu'> ONEI</a>.<br> Fue desplegado en los servicios de host de <a target='_blank' href='https://streamlit.io'>streamlit</a>, por lo que si lo usa desde Cuba tendrá que usar VPN.</p>";
    document.getElementById('leer').style.display = 'none';
    document.getElementById('menos').style.display = 'inline';
};

document.getElementById('menos').onclick = function () {
    document.getElementById('mensaje').innerText = '';
    document.getElementById('leer').style.display = 'inline';
    document.getElementById('menos').style.display = 'none';
};