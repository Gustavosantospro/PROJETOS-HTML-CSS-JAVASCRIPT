function carregar(){
    var msg = window.document.getElementById('mensg')
    var img = window.document.getElementById('foto1')
    var agora = new Date()
    var hora = agora.getHours()
    if(hora < 12 ){
        msg.innerHTML = `São ${hora} horas. Bom dia.`
        Img.src = "manhacert.png"
    }
    else if(hora < 18){
        msg.innerHTML = `São ${hora} horas. Boa Tarde`
        img.src = "tardecert.png"
    }
    else if(hora < 24){
        msg.innerHTML = `São ${hora} horas. Boa Noite`
        img.src = "noitecert.png"
    }
    else{
        alert('ERRO, tente novamente')
    }
}