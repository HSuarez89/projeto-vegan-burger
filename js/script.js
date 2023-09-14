//animação da home

const burger = document.getElementById('burgerimg')
const ingredientes = document.getElementById('ingredientsimg')
const logo = document.getElementById('logo')
const menuCabecalho = document.getElementById('menu-cabecalho')
const menuCabecalho2 = document.getElementById('menu-cabecalho2')
const botaoOrder1 = document.getElementById('order1')


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
    ingredientes.style.top = '37%'
}

function animacaoHome(){
    logo.style.opacity = 1
    menuCabecalho.style.opacity = 1
    botaoOrder1.style.opacity = 1
}

//animação de scroll do menu

var menuClick = document.querySelectorAll('#menu-cabecalho a')
menuClick.forEach(item =>{
    item.addEventListener('click', scrollToSelection)
})

function scrollToSelection(event){
    event.preventDefault()
    var tagLink = event.target
    var idLink = tagLink.getAttribute('id')
    var idSection = document.querySelector('#section-' + idLink)
    var distanceFromTop = idSection.offsetTop
    window.scrollTo({top: distanceFromTop, behavior: 'smooth'})
}

//animação do botão que volta para o topo

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

//animação dos botões order now
var botao = document.querySelectorAll('.order')
var brickell = document.querySelectorAll('.brickell')
var southBeach = document.querySelectorAll('.southbeach')

botao.forEach(item => {
    item.addEventListener('click', trocaOrder)
})
function trocaOrder(e){
    e.preventDefault()
    botao.forEach(item => {
        item.style.opacity = 0
        item.style.zIndex = -1
        stores()
    })
}
function stores(){
    brickell.forEach(item => {
        item.style.opacity = 1
        item.style.zIndex = 3
    })
    southBeach.forEach(item => {
        item.style.opacity = 1
        item.style.zIndex = 3
    })
}

//animação dos icones dos apps
var uberEats = document.querySelectorAll('.imgubereats')
var doorDash = document.querySelectorAll('.imgdoordash')

brickell.forEach(item => {
    item.addEventListener('click', brikellApps)
})
southBeach.forEach(item => {
    item.addEventListener('click', southBeachApps)
})
function southBeachApps(e){
    e.preventDefault()
    storesOut()
    showSouthBeach()
}
function brikellApps(e){
    e.preventDefault()
    storesOut()
    showBrickell()
}
function storesOut(){
    brickell.forEach(item => {
        item.style.opacity = 0
        item.style.zIndex = -1
    })
    southBeach.forEach(item => {
        item.style.opacity = 0
        item.style.zIndex = -1
    })
}
function showBrickell(){
    uberEats.forEach(item => {
        item.style.opacity = 1
        item.style.zIndex = 3
        item.addEventListener('click', redirecionaBrickellUberEats)
    })
}
function showSouthBeach(){
    uberEats.forEach(item=> {
        item.style.opacity = 1
        item.style.zIndex = 3
        item.style.left = '30%'
        item.addEventListener('click', redirecionaUberEatsSouthBeach)
    })
    doorDash.forEach(item => {
        item.style.opacity = 1
        item.style.zIndex = 3
        item.style.right = '30%'
        item.addEventListener('click', redirecionaDoordashSouthBeach)
    })
}
function redirecionaBrickellUberEats(){
    window.location.href = 'https://www.ubereats.com/store/vegan-burger-miami/HdO2Sc6MRse9jYuwSuIh1Q?diningMode=PICKUP'
}
function redirecionaUberEatsSouthBeach(){
    window.location.href = 'https://www.ubereats.com/store/vegan-burger-miami/mvuPiB3uQ_WotPh_iYoXTw?diningMode=PICKUP'
}
function redirecionaDoordashSouthBeach(){
    window.location.href = 'https://www.doordash.com/store/vegan-burger-miami-miami-beach-1435117/'
}
//animação do menu

var menu = document.querySelectorAll('.menu-item')
var conteudo = 'menuburgers'

menu.forEach(item => {
    item.addEventListener('click', trocaMenu)
})

function trocaMenu(e){
    e.preventDefault()
    conteudo = e.target.id
    associaTroca(conteudo)
}

function associaTroca(conteudo){
    var id = 'menu' + conteudo;
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