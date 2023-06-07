/* pega o scroll máximo */
let scrollTotal = document.documentElement.scrollHeight - window.innerHeight
/* pega a barra de progresso para manipulação */
let loader = document.getElementById('loader')
/* qnd scroll, aumenta a barra de progresso */
document.addEventListener('scroll', ()=>{
    width = window.scrollY*100/scrollTotal
    loader.style.width = width+'%'

    /* adicional: aumentar a opacidade conforme chega no final */
    opacity = (width/100)/1.5
    loader.style.opacity = opacity
})