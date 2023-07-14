//animação da home

const burger = document.getElementById('burger')
const ingredientes = document.getElementById('ingredients')
const logo = document.getElementById('logo')
const menuCabecalho = document.getElementById('menu-cabecalho')
const menuCabecalho2 = document.getElementById('menu-cabecalho2')
const botaoOrder = document.getElementById('order')

window.onload = function(){
    animacaoBurger()
}

function animacaoBurger(){
    burger.style.opacity = 1
    burger.style.top = "37%"
    setTimeout(function(){
        animacaoIngredientes()
    }, 300)
    setTimeout(function(){
        animacaoHome()
    }, 600)
}

function animacaoIngredientes(){
    ingredientes.style.opacity = 0.7
    ingredientes.style.top = '35%'
}

function animacaoHome(){
    logo.style.opacity = 1
    menuCabecalho.style.opacity = 1
    menuCabecalho2.style.opacity = 1
    botaoOrder.style.opacity = 1
}

//animação de scroll do menu

var menuClick = document.querySelectorAll('#menu-cabecalho a')
menuClick.forEach(item =>{
    item.addEventListener('click', scrollToSelection)
})

function scrollToSelection(event){
    event.preventDefault()
    var tagLink = event.target
    var idLink = tagLink.getAttribute('href')
    var idSection = document.querySelector(idLink)
    var distanceFromTop = idSection.offsetTop
    window.scrollTo({top: distanceFromTop, behavior: 'smooth'})
}

//animaçõ do botão que volta para o topo

var botaoTopo = document.querySelector('#botao')
botaoTopo.addEventListener('click', scrollToTop)
function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
var menuPrincipal = document.querySelector('menu-cabecalho')
window.addEventListener('scroll', toggleVisibilidade)
function toggleVisibilidade(){
    var scrollTop = document.documentElement.scrollTop
    var alturaHeader = document.querySelector('header').offsetHeight
    if (scrollTop > alturaHeader){
        botaoTopo.style.opacity = 1
    }else {
        botaoTopo.style.opacity = 0
    }
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
            page.style.opacity = 1
            page.style.transform = 'translateY(30px)'
        }else{
            page.style.opacity = 0
            page.style.transform = 'translateY(50px)'
        }
    })
    }