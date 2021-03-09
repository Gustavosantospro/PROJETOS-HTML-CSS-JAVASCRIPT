function clicar(){
    var num = document.getElementById("valor1")
    var sel = document.getElementById("seltab")

    var n = Number(num.value)
    if(num.value.length == 0){
        window.alert("Entre com um número")
    } else{
        sel.innerHTML = ""
    for(var i=1; i<=10;i++){
        
        var item = document.createElement("option")
        item.text= `${  n} X ${i} = ${n*i}`
        sel.appendChild(item)
        item.focus= "0"
        
    }

}
}