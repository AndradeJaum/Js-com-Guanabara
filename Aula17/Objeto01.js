let amigo = { nome: 'Jaum' ,
sexo: 'm' , 
peso: 65.0 , 
engordar (p = 0){
    console.log ('Engordou')
    this.peso += p

}}

    amigo.engordar(2)
    console.log (`${amigo.nome} pesa ${amigo.peso} kgs`)
