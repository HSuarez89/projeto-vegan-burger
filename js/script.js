//animação da home

const burger = document.getElementById('burger')
const ingredientes = document.getElementById('ingredients')
const logo = document.getElementById('logo')
const menuCabecalho = document.getElementById('menu-cabecalho')
const botaoOrder = document.getElementById('order')

window.onload = function(){
    animacaoBurger()
}

function animacaoBurger(){
    burger.style.opacity = 1
    burger.style.top = "50%"
    setTimeout(function(){
        animacaoIngredientes()
    }, 300)
    setTimeout(function(){
        animacaoHome()
    }, 600)
}

function animacaoIngredientes(){
    ingredientes.style.opacity = 0.7
    ingredientes.style.top = '30%'
}

function animacaoHome(){
    logo.style.opacity = 1
    menuCabecalho.style.opacity = 1
    botaoOrder.style.opacity = 1
}

//animação de scroll do menu

var menuLinks = document.querySelectorAll('#menu-cabecalho a')
menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

function getDistanceFromTheTop(e){
    const id = e.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: 'smooth',
    })
}

function scrollToSection(e){
    e.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(e.target)
    nativeScroll(distanceFromTheTop)
}

function scrollToTop() {
    const topo = document.querySelector('header')
    window.scrollTo({ top: 0, behavior: 'auto'})
  }
//animação do menu

var menu = document.querySelectorAll('.menu-item')
var conteudo = 'menuburgers'

menu.forEach(item => {
    item.addEventListener('click', trocaMenu)
})

function trocaMenu(e){
    e.preventDefault()
    conteudo = e.target.innerHTML
    associaTroca(conteudo)
}

function associaTroca(conteudo){
    var id = 'menu' + conteudo.trim().toLowerCase().replace(/\s+/g, "-");
    var pagina = document.querySelectorAll('.menu-page')
    pagina.forEach(page =>{
        if(page.id == id){
            page.style.left = '0px'
        }else{
            page.style.left = '100%'
        }
    })
    }