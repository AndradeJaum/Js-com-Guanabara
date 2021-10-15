function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
        if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert (' Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName ('radsex') 
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute ('src','criancah.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src', 'jovemh.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute ('src','homem.png')
            }else{
                //idoso
                img.setAttribute ('src','velho.png')
            }
        }else {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute ('src','criancam.png')
            }else if (idade <21){
                //jovem
                img.setAttribute ('src','jovemm.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute ('src','mulher.png')
            }else{
                //idoso
                img.setAttribute ('src','velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}