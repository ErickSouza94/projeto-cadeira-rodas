/* SCROLL IMAGENS */

document.querySelector("#itens")
.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(500, 0)
    } else {
        event.target.scrollBy(-500, 0)
    }
})

/* FIM SCROLL IMAGENS */

/* BOTÃO LEIA MAIS */

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

/* FIM BOTÃO LEIA MAIS */

/* MENU BURGUER */

function tamanho(){
    if (window.innerWidth >= 992){
        navmenu.style.display = 'block'
    }   else{
        navmenu.style.display = 'none'
        }
    }
function clickMenu(){
    if (navmenu.style.display == 'block'){
        navmenu.style.display = 'none'
    } else {
        navmenu.style.display = 'block'
    }
}

/* FIM MENU BURGUER */

