let conf = document.getElementById ('confirmar')
let res = document.getElementById ('res')
let res2 = document.getElementById ('res2')
let n = document.getElementById ('txtn')
let jhonas = { nome: 'jhonas' , cpf: '087.069.999-78', idade: '25 anos'}
let xp = { nome1: 'xp', cpf: '000.777.545-36', idade: '2800 anos'}
let renata = { nome2: 'renata' , cpf: '456.235.781-65', idade: '28 anos'}


function entrar () {
    conf.style.background = 'green' 
}

function sair () {
    conf.style.background = 'rgb(19, 206, 90)'
}

function real (r) {
    if (String(r) == jhonas.nome || (String(r) == xp.nome1 || (String(r) == renata.nome2))) {
        return true
    }else {
        return false 
    }  
}
        var img = document.createElement ('img')   
    
function confirmar () {
    if (real(n.value)){
            
        if (n.value == jhonas.nome){
                    
            let n1 = 'Jhonas'
            res.innerHTML = `<p>Aluno: ${n1} Aidentu</p>
            <p>CPF: ${jhonas.cpf}</p>
            <p>IDADE: ${jhonas.idade}</p>
            <p>FRASE: Meu amigo</p>`
            img.setAttribute ('src' , 'jhonas.png')                   
        }
        else if (n.value == xp.nome1){
            let n2 = 'Xp'
            res.innerHTML = `<p>Aluno: ${n2} Po</p>
            <p>CPF: ${xp.cpf}</p>
            <p>IDADE: ${xp.idade}</p>
            <p>FRASE: Haaaannnnnnnnnnn</p>`
            img.setAttribute ('src' , 'xp.png')                  
        }
        else if (n.value == renata.nome2){
            let n3 = 'renata'
            res.innerHTML = `<p>Aluna: ${n3} Crackmatriz</p>
            <p>CPF: ${renata.cpf}</p>
            <p>IDADE: ${renata.idade}</p>
            <p>FRASE: Geeeenti</p>`
            img.setAttribute ('src' , 'renata.png')
        }
            res2.appendChild (img) 
            n.value = ``
            n.focus()

         /* let btn = document.createElement ("BUTTON")
            let bot = document.getElementById ('botao')
            btn.innerHTML = ` Confirmar`
            bot.appendChild(btn)
            btn.style.background = 'rgb(19, 206, 90)'
            btn.style.width = '130px'
            btn.style.height = '50px'
            btn.style.color = 'white'
            
            btn.onclick = function (){} */

            let bt = document.getElementById ('botao')
            bt.innerHTML = ` Selecionar`
            bt.style.background = `rgb(19, 206, 90)`
            
            bt.onmouseenter = function entrar2 () {
                bt.style.background = 'green' 
            }
            bt.onmouseout = function sair2 () {
                bt.style.background = 'rgb(19, 206, 90)'
            }
            bt.onclick = function botao(){  
             
                var nota = document.createElement ("INPUT") 
                nota.setAttribute ("type" , "number")
                notinha = document.getElementById ('cont')
                notinha.innerHTML = `<p>Digite a nota do aluno: </p>`
                notinha.appendChild(nota)
            }

                
            


             
    }else{
        window.alert (' Aluno não cadastrado!')
    }
     
}

    
    