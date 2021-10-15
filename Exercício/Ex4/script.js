var resp = document.getElementById ('res')
var resp2 = document.getElementById ('res2')

function com(){
    resp.innerHTML = ` O que deseja comer? </br>
    </br>
    1 - Torradas com Geléia </br>
    2 - Pão na Chapa </br>
    3 - Pão de Queijo </br>
    4 - Tapioca </br>
    5 - Bolo de Cenoura </br>`
}
function beb(){
        resp.innerHTML = ` O que deseja beber? </br>
        </br>
        6 - Suco de Laranja </br>
        7 - Yogurte </br>
        8 - Café com Leite </br>
        9 - Choco Leite </br>
        10 - Brahma </br>`
}

    var img = document.createElement ('img')
    img.setAttribute ('id', 'img')

        function verificar (){

        var n = document.getElementById ('numero')
        var n1 = Number (n.value)
        

            if (n1 >=1 && n1 <=5 ){
                
                 if (n1 == 1){
                    resp2.innerHTML = `Cada torrada com geléia tem em média 40 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 ==2){
                    resp2.innerHTML = `Cada pão na chápa tem em média 209 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 ==3){
                    resp2.innerHTML = `Cada pão de queijo tem em média 102 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 ==4){
                    resp2.innerHTML = `Cada tapioca tem em média 130 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 ==5){
                    resp2.innerHTML = `Cada fatia de bolo de cenoura tem em média 333 calorias`
                    img.setAttribute ('src', '.png')
                }

            }else if (n1 <=6 && n1 <=10){
                if (n1 == 1){
                    resp2.innerHTML = `Cada copo de suco de laranja tem em média 45 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 == 2){
                    resp2.innerHTML = `Cada pote de yogurte tem em média 59 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 == 3){
                    resp2.innerHTML = `Cada xícara de café com leite tem em média 55 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 == 4){
                    resp2.innerHTML = `Cada pote de choco leite tem em média 83 calorias`
                    img.setAttribute ('src', '.png')
                }else if (n1 == 5){
                    resp2.innerHTML = `Cada lata de Brahma tem em média 84 calorias`
                    img.setAttribute ('src', '.png')
                }

            }else {
                resp2.innerHTML = `${n1} Não corresponde a nunhum alimento  `
            }
    

}