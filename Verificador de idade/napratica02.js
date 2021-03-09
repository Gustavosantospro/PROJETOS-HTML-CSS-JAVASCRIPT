function verificar(){
// tratando a idade
var anof = window.document.getElementById('ano')
var anotrt = Number(anof.value)
var ano = new Date()
var anoat = ano.getFullYear()
var idade = (anoat - anotrt)

// tratando o genero
var sex = window.document.getElementsByName('sex')
genero = ''

// tratando o resultado
var res = window.document.getElementById('res')

// tratando a imagem
var img = window.document.createElement('img')
img.setAttribute('id', 'foto')


if(anof.value.length == 0 || idade < 0 ){
   window.alert('[ERRO] Confira os dados e refaça a operação') 
}

else if(sex[0].checked && idade >= 21 && idade < 51 ){
    genero = 'Masculino'
    img.setAttribute('src', 'Adultoh.png')
}
else if(sex[1].checked && idade >= 21 && idade < 51){
    genero = 'Feminino'
    img.setAttribute('src', 'AdultoM.png')
}

else if(sex[0].checked && idade < 10 ){
    genero = 'Masculino'
    img.setAttribute('src', 'criancamasc.png')
}

else if(sex[1].checked && idade < 10)
{
    genero = 'Feminino'
    img.setAttribute('src', 'criancafem.png')
}

else if(sex[0].checked && idade>= 51)
{
    genero = 'Masculino'
    img.setAttribute('src', 'idoso.png')
}

else if(sex[1].checked && idade >=51)
{
    genero = 'Feminino'
    img.setAttribute('src', 'idosa.png')
}


res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
res.appendChild(img)


}

