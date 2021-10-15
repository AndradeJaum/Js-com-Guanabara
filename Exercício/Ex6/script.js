let add = document.getElementById ('add')
let ana = document.getElementById ('ana')

function clicar () {
    add.innerHTML = `Adicionado`
}
function entrar () {
    add.style.background = 'blue'    
}
function sair () {
    add.style.background = `rgb(53, 152, 209)`
    add.innerHTML = `Adicionar`   
}
function clicar2(){
    ana.innerHTML = `Analisado`
}
function entrar2 (){
    ana.style.background = 'green'
}
function sair2() {
    ana.style.background = `rgb(28, 221, 102)`
    ana.innerHTML = `Analisar`
}
let n1 = document.getElementById ('txtn')
let tela = document.getElementById ('selvisor')
let  res = document.getElementById ('res')
let valor = []

    function numero (n) {
        if (Number(n1) >= 1 && Number(n1) <= 100){
            return true
        }else {
            return false
        }
    }
    function lista (n , l) {
        if (l.indexOf (Number (n)) != -1 ){
            return true
        }else {
            return false
        }
    }
    
    function adicionar () {



    }

    function analisar () {


        
    }