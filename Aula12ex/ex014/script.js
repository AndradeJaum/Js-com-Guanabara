function carregar(){
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 20
msg.innerHTML = `Agora são ${hora} horas `

if (hora >= 0 && hora <12){
//Bom Dia!!!
img.src = 'fotomanha.png'
document.body.style.background = '#d8b97c'
}
    else if (hora >=12 && hora <=18){
    //Boa Tarde!!!
    img.src = 'fototarde.png'
    document.body.style.background = '#e66b56'
}
        else {
        //Boa Noite!!!
        document.body.style.background = '#0b373d'
        img.src = 'fotonoite.png'
}



}