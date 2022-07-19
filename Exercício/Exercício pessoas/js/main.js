function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let resultado = document.getElementById('resultado')
    let img = document.getElementById('foto')

    if(formAno.value.length == 0 || formAno > ano) {
        window.alert('[ERRO] Parece que você nao preecheu os dados')
    } else {
        let formSex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
        let genero = ''
        if (formSex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <= 10) {
                 // CRIANÇA
                 img.setAttribute('src', 'menino4.jpg')
            } else if (idade >= 11 && idade <= 25) {
                // JOVEM
                img.setAttribute('src', 'homem20.jpg')
            } else if (idade >= 26 && idade <= 50) {
                // ADULTO
                img.setAttribute('src', 'homem40.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'homem80.jpg')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <= 10) {
                // CRIANÇA
                img.setAttribute('src', 'menina4.jpg')
           } else if (idade >= 11 && idade < 25) {
               // JOVEM
               img.setAttribute('src', 'mulher20.jpg')
            } else if (idade >= 26 && idade <= 50) {
                // ADULTO
               img.setAttribute('src', 'mulher40.jpg')
           } else {
               // IDOSO
               img.setAttribute('src', 'mulher80.jpg')
           }
        } else if (formSex[2].checked) {
            genero = 'Não Binário'
            if (idade >=0 && idade <= 120) {
                img.setAttribute('src', 'naoBinario.jpg')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}
