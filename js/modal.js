let btn = document.getElementById('exit')
let modal = document.getElementById('modal')
let cover = document.getElementById('cover')
let opacity = 1

function fadeout(){
    // Define um temporizador para reduzir a opacidade gradualmente
   let timer = setInterval(function() {
        if (opacity > 0) {
        opacity -= 0.1;  // diminui a opacidade em 0.1 a cada intervalo
        modal.style.opacity = opacity;
        cover.style.opacity = opacity;
        } else {
        clearInterval(timer)
        modal.style.display = 'none'
        cover.style.display = 'none'
        }
    },70);  // intervalo de 100 milissegundos (0.1 segundo)
}

btn.addEventListener('click', ()=>{
    fadeout()
})

cover.addEventListener('click', ()=>{
    fadeout()
})