let n1 = document.getElementById ('txtn')
let visor = document.getElementById ('selvisor')
let res = document.getElementById ('res')
let valor = []


function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function lista(n , l) {
    if (l.indexOf (Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar (){

    if (numero(n1.value) && !lista(n1.value , valor)) {
        valor.push (Number (n1.value))
        let item = document.createElement ('option')
        item.text = ` ${n1.value} adicionado`
        visor.appendChild (item)
        res.innerHTML = ``

    }else {
        window.alert ('Valor inválido ou já está na lista!')
    }
    n1.value = ''
    n1.focus()
}

function analisar (){

    if (valor.length ==0) {
        document.alert (' Adicione valores antes de analisar!')
        }else{
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = valor[0]
        let media = valor[0]

        for(let pos in valor) {
            soma += valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
            if (valor[pos] < menor)
                menor = valor[pos]

        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += ` <p> Ao todo temos ${tot} números cadastrados </p>`
        res.innerHTML += ` <p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += ` <p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += ` <p> A soma de todos os valores é ${soma} </p>`
        res.innerHTML += ` <p> A média dos valores é ${media} </p>`
        
        
    }
}