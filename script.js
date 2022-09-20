document.querySelector("#itens")
.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(500, 0)
    } else {
        event.target.scrollBy(-500, 0)
    }
})

function leiaMais(){
    var pontos = document.getElementById("pontos")
    var maisTexto = document.getElementById("mais")
    var btnLeiaMais = document.getElementById("btnLeiaMais")

    if(pontos.style.display == "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia  Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}

