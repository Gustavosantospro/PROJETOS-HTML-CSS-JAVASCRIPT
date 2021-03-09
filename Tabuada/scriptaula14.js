

function clicar(){

var vinicio =document.getElementById("valor1")
var vfim = document.getElementById("fim")
var vpasso = document.getElementById("passo")
var res = document.getElementById("res")


if(vinicio.value.length == 0 || vfim.value.length == 0 || vpasso.value.length == 0){
    window.alert("[ERRO] Faltam dados!")
} else{
    
    res.innerHTML = 'Contando:'
    var inicio = Number(vinicio.value)
    var fim = Number(vfim.value)
    var passo = Number(vpasso.value)

for(var i = inicio; i <= fim; i+=passo){
    res.innerHTML += ` ${i} `      
}
}
}