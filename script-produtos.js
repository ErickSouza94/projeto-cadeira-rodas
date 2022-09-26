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

/* MODAL */

let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal_img')
let btClose = document.querySelector('#bt_close')
let srcVal = "";
const idmodal = document.getElementById('idmodal')
// let modalBg = document.getElementById('modalBg')

for(let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        const parentimg = imagens[i].parentElement;
        parentimg.appendChild(idmodal)
        idmodal.style.visibility = 'visible'
        // modalBg.style.visibility = 'visible'
    });

}

btClose.addEventListener('click', function(){
    idmodal.style.visibility = 'hidden'
    // modalBg.style.visibility = 'hidden';
}
);

modalBg.addEventListener('click', function(){
    idmodal.style.visibility = 'hidden'
    // modalBg.style.visibility = 'hidden';
}
);

/* FIM MODAL */