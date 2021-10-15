var i = document.getElementById ('começo')
var f = document.getElementById ('acaba')
var p = document.getElementById ('pulo')
var res = document.getElementById ('res')

function confirmar(){

var ni = Number(i.value) //Necessário estar dentro de alguma funcção
var nf = Number(f.value) //Necessário estar dentro de alguma funcção
var np = Number(p.value) //Necessário estar dentro de alguma funcção

    if (ni ==  0 || nf == 0) {
        window.alert ('[ERRO] Coloque um número válido e tente novamente')
    }else {
         
        if (np == 0){
            np = 1
            window.alert (' Passo inválido, considerando passo igual a 1')
            for ( var s = ni ; s < nf ; s += np){
            res.innerHTML += `${s}`
        }
        }else {
            
            for ( var s = ni ; s <= nf ; s += np){
                res.innerHTML += `${s}`
            }
        }
    }


}